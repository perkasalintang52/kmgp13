let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    //if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 9000000) return // setiap 1 jam sekali
    await this.sendButton(m.chat, `
*${ucapan()}*
───⬡ 〔 𝐁𝐎𝐓 𝐂𝐇𝐀𝐓 〕 ⬡────
╭───────────────╮
        My name KAMAGAPO BOT ×͜× 
        Salah satu Bot diwhatsapp
╰───────────────╯
${user.banned ? 'kamu dibanned' : 'Silahkan mematuhi Rules Bot\nDemi kenyamanan kita bersama'}
`.trim(), footer, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '#owner' : '#menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Dinihari Ngab👻"
    if (time >= 4) {
        res = "Pagi Ngab🌤"
    }
    if (time > 10) {
        res = "Siang Ngab🌞"
    }
    if (time >= 15) {
        res = "Sore Ngab🌝"
    }
    if (time >= 18) {
        res = "Malam Ngab🌚"
    }
    return res
}
