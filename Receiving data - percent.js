// *******************    Receiving data - percent  ***********************
const priceBinanceCoin = require('./priceBinanceCoin');
const priceBybitCoin = require('./priceBybitCoin');
// const processingCoinsBySpread = require('./processingCoinsBySpread')
const coinPercentageFiles = require('./coinPercentageFiles')
const deletingFilesWithInterest = require('./deletingFilesWithInterest')
const fs = require('fs');


module.exports = (chatId, bot) => {
    setInterval(() => {
        priceBinanceCoin() // Получение цен пар монет с бинанса
        setTimeout(() => {
            priceBybitCoin() // Получение цен пар монет с Байбита
        }, 300);
    }, 30000);
    // setInterval(() => {
    //     processingCoinsBySpread()
    // }, 40000);
    setInterval(() => {
        coinPercentageFiles() // получение и запись пар монет (прибыль) каждые 5 мин
    }, 306000)
    setInterval(() => {
        rectCoin(bot, chatId)
    }, 307000);
    setInterval(() => {
        deletingFilesWithInterest() // удаление файлов процента прибыли по формуле
    }, 308000)
}

const rectCoin = (bot, chatId) => {
    try {
        var oneF = './5 minutes result coin/5 minute results bybit -> binance.txt'
        var teoF = './5 minutes result coin/5 minute results binance -> bybit.txt'
        if (fs.existsSync(oneF) || fs.existsSync(teoF)) {
            var now = new Date();
            fs.readFile('./5 minutes result coin/5 minute results bybit -> binance.txt', 'utf8', (err, dataByb) => {
                fs.readFile('./5 minutes result coin/5 minute results binance -> bybit.txt', 'utf8', (err, dataBin) => {
                    bot.sendMessage(chatId, `Время: ${now.getHours()}:${now.getMinutes()}\n\nbybit -> binance\n${dataByb}\n\nbinance -> bybit\n${dataBin}`)
                })
            })
        } else {
            console.log('no');
        }

    } catch (error) {
        console.log(error);
    }
}



