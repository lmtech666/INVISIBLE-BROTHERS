const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👾 ɪʙʙ-xMD Repastitory Information*

*| ɴᴀᴍᴇ*: INVISIBLE BROTHER'S 
*| ᴏᴡɴᴇʀ*: ᴛᴄʀᴏɴᴇʙ ʜᴀᴄᴋx ( IBBOT-XMD )
*| ɴᴜᴍʙᴇʀ*: 263716394979
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.9


*📡 REPO LINK*
🔗◦https://github.com/TcronebHackx-Md.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://youtube.com/@cbf_263

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/q0w46d.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
