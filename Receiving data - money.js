// *******************    Receiving data - money  ***********************
const ReceivingCoinBinance = require('./receivingPairedCurrencyBinance');
const ReceivingCoinBybit = require('./receivingPairedCurrencyBybit');
const fs = require('fs');
// const recCoinPrice = require('./Receiving data - percent')
module.exports = (chatId, bot) => {
    fs.mkdir('5 minutes result coin/байбит -> бинанс', { recursive: true }, err => { });
    fs.mkdir('5 minutes result coin/бинанс -> байбит', { recursive: true }, err => { });
    ReceivingCoinBinance(); // Получение пар монет с бинанса
    ReceivingCoinBybit(); // Получение пар монет с Байбита
    setInterval(() => {
        ReceivingCoinBinance(); // Получение пар монет с бинанса
        ReceivingCoinBybit(); // Получение пар монет с Байбита
    }, 3600000 * 24);
}