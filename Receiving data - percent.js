// *******************    Receiving data - percent  ***********************
const priceBinanceCoin = require('./priceBinanceCoin');
const priceBybitCoin = require('./priceBybitCoin');
const processingCoinsBySpread = require('./processingCoinsBySpread')
const coinPercentageFiles = require('./coinPercentageFiles')
const deletingFilesWithInterest = require('./deletingFilesWithInterest')
const fs = require('fs');


module.exports = (chatId, bot) => {
    setInterval(() => {
        priceBinanceCoin() // Получение цен пар монет с бинанса
        priceBybitCoin() // Получение цен пар монет с Байбита
        setTimeout(() => {
            processingCoinsBySpread() // сортировка и получение процента прибыли по формуле
        }, 2000);
    }, 30000);
    setInterval(() => {
        coinPercentageFiles() // получение и запись пар монет (прибыль) каждые 5 мин
    }, 306000)
    setInterval(() => {
        rectCoin(bot, chatId)
        deletingFilesWithInterest() // удаление файлов процента прибыли по формуле
    }, 307000)
}

const rectCoin = (bot, chatId) => {
    try {
        var oneF = './5 minutes result coin/5 minute results bybit -> binance.txt'
        var teoF = './5 minutes result coin/5 minute results binance -> bybit.txt'
        if (fs.existsSync(oneF) || fs.existsSync(teoF)) {
            var now = new Date();
            fs.readFile('./5 minutes result coin/5 minute results bybit -> binance.txt', 'utf8', (err, dataByb) => {
                fs.readFile('./5 minutes result coin/5 minute results binance -> bybit.txt', 'utf8', (err, dataBin) => {
                    bot.sendMessage(chatId, `Дата: ${now.getDate()}.${now.getMonth()}.${now.getFullYear()} Время: ${now.getHours()}:${now.getMinutes()}\n\nbybit -> binance\n${dataByb}\n\nbinance -> bybit\n${dataBin}`)
                })
            })
        } else {
            console.log('no');
        }

    } catch (error) {
        console.log(error);
    }
}



