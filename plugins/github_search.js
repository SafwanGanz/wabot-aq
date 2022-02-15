let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw `Pleas Enter Github valid UserName!!\nExample: #github SafwanGanz`
let res = await fetch(`https://api.github.com/users/${text}`)
let anu = await res.json()
if (!res.ok) m.reply('GitHub User Name not found')
let msg = `
*User Name:* ${anu.login}
*Nick Name:* ${anu.name}
*Followers:* ${anu.followers}
*Following:* ${anu.following}
*Company:* ${anu.company}
*Website:* ${anu.blog}
*Location:* ${anu.location}
*Email:* ${anu.email}
*Hireble:* ${anu.hireble}
*Bio:* ${anu.bio}
*Twitter:* ${anu.twitter_username}
*Public Repos:* ${anu.public_repos}
*Public gists:* ${anu.public_gists}`.trim()
let buffer = await (await fetch(anu.avatar_url)).buffer()
conn.sendFile(m.chat, buffer, anu.name + '.jpg', msg, m)
}
handler.help = ['UserName']
handler.tags = ['tools']
handler.command = /^git|github$/i
module.exports = handler
