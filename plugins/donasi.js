let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selalu👋*
╔═══════════════════
║ _*DONASI UNTUK*_  KAMAGAPO BOT
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : 081322577123
║│➸ *PULSA*: 081322577123
║│➸ *GOPAY*: 081322577123
║╰──────────────────
╰═══════════════════

`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
