let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *DONASI KAK* 』━━━━
*➸ Dana : Chat Owner*
*➸ Gopay : Chat Owner*
*➸ Pulsa : Chat Owner*
*➸ Saweria : Chat Owner*
*➸ QRIS : Chat Owner*

(Melanggar Rules Di Ban 1 hari) 
Donasi supaya bot terus update & Aktif

`.trim(), '© 𝙶𝚊𝚠𝚛 𝙶𝚞𝚛𝚊', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', '') // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler
