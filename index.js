// *******************    TG BOT   ***********************

const ReceivingDataMoney = require('./Receiving data - money')
const botTG = require('node-telegram-bot-api')
require('dotenv').config()



const bot = new botTG(process.env.BOT_TOKEN, {polling: true})

bot.setMyCommands([
    {command: '/options', description: 'Параметры для вывода данных'},
])

bot.on('message', msg => {
    const txt = msg.text
    const chatId = msg.chat.id
    if (txt === '/start') {
        bot.sendMessage(chatId, 'Бот запущен')
        ReceivingDataMoney(chatId, bot)
    }
    if (txt === '/options') {
        bot.sendMessage(chatId, 'Введите данные для настройки бота\n\nФормат:\nКапитал\nСпред\nКол-во пар\nвремя (мин)')
    }
})







  