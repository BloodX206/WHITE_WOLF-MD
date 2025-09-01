const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpOVTlRVXFYQThTTUUzVGFYK2N0TUNMRXYvcHJsbFJBVHVDUzVjU2hGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3EzdURrNHk0azc5VkdsczUwRmxkN0FISEFoRitUQ1RuQXhQZmsyem5XUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySGVxdkVjTnRUUW5OYlpub0QwTGFwcEZ4R3dIVncwdnBFU2V6dlpkeTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZdmM2c2p6RHg5aHd6cG81Znd5N254dlQ3c1RQc2tiNWJ4ZDhUVnFVWFM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHMkhpaUE0aFBkWDZtTklPYjFmaHlpSlhwbkh0MWl4aGJIcmQzUlQ4bWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgzQ1BNSWVoNm1uSWEyTGE5ckxjYXoyL3FnTXdFeHo5cE0rQkFybWZ5MTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBEMjB5S3pXLzNIcXRVUDA1QndUSWdLbHB4RWRFNVAxWnRab2l3dUltZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjdQbUpiMWJlK0dCNERYZnBjQlZqMTF6ZllGOEVYZXlGTXVsOEhCd0FtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdtZ0tjTERHZ2RQcis3SUtDMDBjTFJDalYvVW9TblBIeGRieEdkUUk2WC9weFJ2Mnl0SVpEMmZWWWVPcElhZU84dDQ4aVJrbEJBcURJT2tmV2xhbENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IjdrVmJ2a0VtV0UvbEJ4dVZwY1pSSkJGdEtXSlJTM25tZEVXemplczY4aW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpCVkdZQkdKIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6NzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6NzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR2szdkVIRU5laDFjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPYlRKUGNmRFFGZzBxOHJhbzNKYURvczZQU2dtd1VuRVBpdm5YQjhubGtRPSIsImFjY291bnRTaWduYXR1cmUiOiJJUXQwWktWOTFrc3prOWJROEtuQXp6Y1YyQ2FJTUFSeEZVK3k0WDFYN01NVDlObnhGWjY4ZkVZaGdKU29tdEY5d3A4a09pb0gzMHhtV1FlaVNSNlFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTHUvWGlscTNZR01CbzhxQ3pqSzB0eWFrZm5QbU5TS3RiUzY1NWJ2ZnAvOEhIVWtOeGRUWnkyR2FKdmV4L0dBU3JPYWw0TGwxK1BIbmVDWWZ3bW1UQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG0weVQzSHcwQllOS3ZLMnFOeVdnNkxPajBvSnNGSnhENHI1MXdmSjVaRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NzEzMTc3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY WHITE_WOLF-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5t7iav.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "WHITE_WOLF-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "WHITE_WOLF-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "03142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*WHITE_WOLF-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ WHITE_WOLF-MD❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5t7iav.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923073660479",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
