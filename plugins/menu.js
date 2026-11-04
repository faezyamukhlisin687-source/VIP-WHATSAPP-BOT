import { config } from "../config.js";

export default {
  name: "menu",

  async execute({ reply }) {
    const menu = `
╭━━━〔 𝐕𝐈𝐏 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━╮
┃
┃  ◈ 𝐁𝐎𝐓 : ${config.botName}
┃  ◈ 𝐎𝐖𝐍𝐄𝐑 : 6285804660694
┃  ◈ 𝐏𝐑𝐄𝐅𝐈𝐗 : .
┃  ◈ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : 1.0.0
┃
┣━━〔 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 〕
┃ ◈ .menu
┃ ◈ .allmenu
┃ ◈ .ping
┃ ◈ .owner
┃ ◈ .runtime
┃
┣━━〔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 〕
┃ ◈ .tiktok
┃ ◈ .instagram
┃ ◈ .facebook
┃ ◈ .ytmp3
┃ ◈ .ytmp4
┃ ◈ .play
┃ ◈ .mediafire
┃
┣━━〔 𝐀𝐈 𝐌𝐄𝐍𝐔 〕
┃ ◈ .ai
┃ ◈ .gpt
┃ ◈ .gemini
┃ ◈ .blackbox
┃ ◈ .remini
┃ ◈ .translate
┃
┣━━〔 𝐒𝐄𝐀𝐑𝐂𝐇 〕
┃ ◈ .google
┃ ◈ .pinterest
┃ ◈ .wallpaper
┃ ◈ .wiki
┃ ◈ .lyrics
┃ ◈ .anime
┃
┣━━〔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 〕
┃ ◈ .sticker
┃ ◈ .s
┃ ◈ .toimg
┃ ◈ .take
┃ ◈ .smeme
┃ ◈ .emojimix
┃
┣━━〔 𝐆𝐑𝐎𝐔𝐏 〕
┃ ◈ .tagall
┃ ◈ .hidetag
┃ ◈ .groupinfo
┃ ◈ .linkgroup
┃ ◈ .kick
┃ ◈ .add
┃ ◈ .promote
┃ ◈ .demote
┃ ◈ .mute
┃ ◈ .unmute
┃
┣━━〔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 〕
┃ ◈ .addprem
┃ ◈ .delprem
┃ ◈ .listprem
┃ ◈ .cekprem
┃ ◈ .claim
┃ ◈ .limit
┃
┣━━〔 𝐎𝐖𝐍𝐄𝐑 〕
┃ ◈ .setname
┃ ◈ .setbio
┃ ◈ .broadcast
┃ ◈ .join
┃ ◈ .leave
┃ ◈ .block
┃ ◈ .unblock
┃ ◈ .restart
┃
┣━━〔 𝐓𝐎𝐎𝐋𝐒 〕
┃ ◈ .calc
┃ ◈ .shortlink
┃ ◈ .qrcode
┃ ◈ .tourl
┃ ◈ .ssweb
┃ ◈ .weather
┃
┣━━〔 𝐅𝐔𝐍 〕
┃ ◈ .truth
┃ ◈ .dare
┃ ◈ .joke
┃ ◈ .quote
┃ ◈ .fact
┃ ◈ .couple
┃
╰━━━━━━━━━━━━━━━━━━╯
  𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐙𝐀𝐀 𝐕𝐈𝐏
`;

    await reply(menu);
  }
};
