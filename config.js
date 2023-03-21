const fs = require('fs');
const chalk = require('chalk');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================( YOU CAN EDIT )====================================================================//

global.openaikey = process.env.OPEN_AI_KEY || "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", //Put Open AI Api key
	
global.owner = process.env.OWNER || "94740842996", //Bot Owner Number
	
global.ownername = process.env.OWNER_NAME || "DarkWinzo", //Bot Owner Name
	
global.open_ai = process.env.OPEN_AI || "false", //Open AI Bot : "true" = on/"false" = off
	
global.chatbot_pm = process.env.CHATBOT_PM || "true", //Inbox Msg Chat Bot : "true" = on/"false" = off
	
global.chatbot_group = process.env.OWNER || "false", //Group Msg Chat Bot : "true" = on/"false" = off
	
global.language = process.env.LANGUAGE || "SI", //EN < = English , SI < = Sinhala
	
global.bot_present = process.env.PRESENT || "true" //false is recommand..because it make crash

global.prefix = "." // Not need to change



//============================================================( AUTO UPDATE FUNTION )====================================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
