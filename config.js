// const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'kord_ai-k4X70ojoU3ZUwAsZ',
    OWNER_NUMBER: process.env.OWNER_NUMBER || "233247923525",
    WORKTYPE: process.env.WORKTYPE || "private",
    PREFIX: process.env.PREFIX || "[.]",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || false,
    MONGODB_URI: process.env.MONGODB_URI || "false",
    STATUS_VIEW: process.env.STATUS_VIEW || false,
    SAVE_STATUS: process.env.SAVE_STATUS || false,
    ERROR_MSG: process.env.ERROR_MSG || true,
    TIMEZONE: process.env.TIMEZONE || "Africa/Ghana",
    CAPTION: process.env.CAPTION || "",
    STICKER_PACKNAME: process.env.STICKER_PACKNAME || "Kord",
    STICKER_AUTHOR: process.env.STICKER_AUTHOR || "MRWILL-available",
    BOT_PRESENCE: process.env.BOT_PRESENCE || "available", // for online, "composing" for typing 
    REACT: process.env.REACT || false,
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    OWNER_NAME: process.env.OWNER_NAME || "MRWILL-available",
    BOT_NAME: process.env.BOT_NAME || "Kord",
    RENDER_API_KEY: process.env.RENDER_API_KEY,
    ANTIDELETE: process.env.ANTIDELETE || "on",
    ANTIDELETE_INCHAT: process.env.ANTIDELETE_INCHAT || "off",
    AUDIO_DATA: process.env.AUDIO_DATA || "Kord;🤍",
    SUDO: process.env.SUDO || "233247923525,233247923525", // example: 23412345667,2341234567
    MODS: process.env.MODS || "",
    REJECT_CALL: process.env.REJECT_CALL || "off",
    WARNCOUNT: process.env.WARNCOUNT || "3",
    LANG_CODE: process.env.LANG_CODE || "en",
    VV_CMD: process.env.VV_CMD || "👀",
    RES_TYPE: process.env.RES_TYPE || "text",
    CMD_REACT: process.env.CMD_REACT || "off",
    LOG_MESSAGES: process.env.LOG_MESSAGES || "off" // on/off
}

