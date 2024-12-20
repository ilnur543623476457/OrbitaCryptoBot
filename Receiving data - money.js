// *******************    Receiving data - money  ***********************
const ReceivingCoinBinance = require('./receivingPairedCurrencyBinance');
const ReceivingCoinBybit = require('./receivingPairedCurrencyBybit');
const exchangeСoins = require('./exchangeСoins');
const recCoinPrice = require('./Receiving data - percent')
module.exports = (chatId, bot) => {
    // setInterval(() => {
    ReceivingCoinBinance(); // Получение пар монет с бинанса
    ReceivingCoinBybit(); // Получение пар монет с Байбита
    setTimeout(() => {
        exchangeСoins(); // получение одинаковых монет на байбит и бинанс
    }, 2000);
    setTimeout(() => {
        recCoinPrice(chatId, bot)
    }, 3000);
// }, 3000);
}