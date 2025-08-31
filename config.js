const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNiOUFieU1KOHZ1L1ozMHk3Q3RSblpiOFBRVDdhNU9vQXVDYWlubXFsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblNQeGdFNitmVWxGMXVGRnJYTk9OTHFFVndBUGNBUDh5QnI0SkZVR1Bqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS0VTdTZuRXp0YndORDVqTTJGZnJCa2tUMFk0dU41YTgrMHZSd1dsRjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMm8yT091eVNvN3NIRXh6cXVZMllDalh2N0VudHpSM1lqQS96Q01Ua25zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFMU5Tam15UHRQZTh5VkE4MEs0a0Q2L3ZSUHQydUFqbjJ2dlhLcGtrVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVjcTQwcEhiZy91WW84ays4SnM2aEcvcDd1N1JqTWJlRjJzZG54V0x6aGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU03dGhnNU11dm9iL1F1ODAwbk5UK3JRUU1ZZk84TGlvN2Z6T3BEQnRsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhHMVNnNSswaGpmc2o1TVdxdEtvK24yekhYZEpWSldwN1VSQkpOT25UYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpvbmpMc3hYUHhTQlVqdjB2bDg4bUJ4YlNLWllRbWRITTdIdEkwM2pkOXVNSEg3bjEzTTBLUTU5NlRpdzlNYmVEYUxUcFoveVdFUGRvdTFyNGNsekRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5Ijoib2FqNGpQNGk5eXdzZ2g5aDYzM2ZKVXM3YnhqRWF3Si9CM2ZRSEJadGpTTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOUVMR0pFREIiLCJtZSI6eyJpZCI6IjkyMzA3MzY2MDQ3OTo2N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExMDUzNTc5ODQ2ODYzMzo2N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2azN2RUhFTktPMGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9iVEpQY2ZEUUZnMHE4cmFvM0phRG9zNlBTZ213VW5FUGl2blhCOG5sa1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZscGtUSHNuc1pkdHdZd1k1Z2F2RWdwZzhSOWZxSzNUemNGMXA4RUFEcTNaY3dnY3hkbXc3TlFkM05IeENrbmUxcEhyeDNkYnBYa2JESmxmZ09odUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2OXFkN3hrWWVkT2UyMHN5bFdZWkdHM0dSdE1HWEdRbE9ZOFVUcDlYeVBiSElCTWRhNWMwRTZBOG1MUDR1bXJTeSt5VTFPSURKTEpRM2JMcEVzQklEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MzY2MDQ3OTo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUbTB5VDNIdzBCWU5LdksycU55V2c2TE9qMG9Kc0ZKeEQ0cjUxd2ZKNVpFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY2NDUyMDUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
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
