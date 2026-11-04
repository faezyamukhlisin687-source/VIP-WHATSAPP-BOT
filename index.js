import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState
} from "@whiskeysockets/baileys";

import pino from "pino";
import { readdir, mkdir } from "node:fs/promises";
import { config } from "./config.js";

const plugins = new Map();

async function loadPlugins() {
  await mkdir("./plugins", { recursive: true });

  const files = (await readdir("./plugins"))
    .filter(file => file.endsWith(".js"));

  plugins.clear();

  for (const file of files) {
    const plugin = await import(
      `./plugins/${file}?v=${Date.now()}`
    );

    if (plugin.default?.name) {
      plugins.set(
        plugin.default.name,
        plugin.default
      );
    }
  }

  console.log("VIP BOT: Plugin berhasil dimuat!");
}

async function startBot() {
  const { state, saveCreds } =
    await useMultiFileAuthState("./session");

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: ["VIP BOT", "Chrome", "1.0.0"]
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", update => {
    const { connection, lastDisconnect } = update;

    if (connection === "open") {
      console.log("VIP BOT BERHASIL ONLINE!");
    }

    if (connection === "close") {
      const code =
        lastDisconnect?.error?.output?.statusCode;

      if (code !== DisconnectReason.loggedOut) {
        console.log("Menyambungkan ulang...");
        startBot();
      } else {
        console.log("Sesi logout. Scan QR ulang.");
      }
    }
  });

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    const msg = messages[0];

    if (!msg?.message || msg.key.fromMe) return;

    const jid = msg.key.remoteJid;

    if (!jid || jid === "status@broadcast") return;

    const content =
      msg.message.ephemeralMessage?.message ||
      msg.message;

    const body =
      content.conversation ||
      content.extendedTextMessage?.text ||
      content.imageMessage?.caption ||
      content.videoMessage?.caption ||
      "";

    if (!body.startsWith(config.prefix)) return;

    const [command, ...args] =
      body.slice(config.prefix.length)
        .trim().split(/\s+/);

    const plugin = plugins.get(command?.toLowerCase());

    if (!plugin) return;

    const sender = msg.key.participant || jid;

    const owner =
      config.ownerNumber.replace(/\D/g, "");

    const isOwner =
      sender.split("@")[0].split(":")[0] === owner;

    const reply = async text => {
      await sock.sendMessage(
        jid,
        { text },
        { quoted: msg }
      );
    };

    try {
      await plugin.execute({
        sock,
        msg,
        jid,
        sender,
        args,
        text: args.join(" "),
        isOwner,
        reply
      });
    } catch (error) {
      console.error(error);
      await reply("Terjadi kesalahan pada command bot.");
    }
  });
}

await loadPlugins();
await startBot();
