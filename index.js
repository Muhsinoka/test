const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1098995753:AAHKK0E8N2vEHVnwdDka5ZuqxpvdPERHYog'

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', (msg) => {
    console.log(msg)
})