let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selaluπ*
ββββββββββββββββββββ
β _*DONASI UNTUK*_  KAMAGAPO BOT
β βββββββββββββββββββ
ββ­βββ γ *ππ’π‘ππ¦π* γ βββββββ
βββΈ *DANA* : 081322577123
βββΈ *PULSA*: 081322577123
βββΈ *GOPAY*: 081322577123
ββ°ββββββββββββββββββ
β°βββββββββββββββββββ

`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
