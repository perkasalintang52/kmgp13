let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ 𝟏 ᗷᑌᒪᗩᑎ
├⬡ 𝟑 ᗷᑌᒪᗩᑎ
├⬡ 𝟓 ᗷᑌᒪᗩᑎ
├⬡ ᑭEᖇᗰᗩᑎEᑎ
└═══════════════
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : 081322577123
║│➸ *PULSA*: 081322577123
║│➸ *GOPAY*: 081322577123
║╰─────────────────────
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '𝟏 ᗷᑌᒪᗩᑎ', description: "Rp5.000\nSewa bot selama 1 bulan.", rowId:".owner"},
        {title: '𝟑 ᗷᑌᒪᗩᑎ', description: "Rp10.000\nSewa bot selama 3 bulan.", rowId:".owner"},
        {title: '𝟓 ᗷᑌᒪᗩᑎ', description: "Rp15.000\nSewa bot selama 5 bulan.", rowId:".owner"},
        {title: 'PERMANEN', description: "Rp20.000\ntanpa batasan waktu.", rowId:".owner"},
        {title: 'OᗯᑎEᖇ', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'ᖇᑌᒪES', description: "PERATURAN BOT", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
