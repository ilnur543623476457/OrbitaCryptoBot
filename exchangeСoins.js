const fs = require('fs');
const recCoinPrice = require('./Receiving data - percent')

module.exports = function (chatId, bot) {
    setTimeout(() => {
        fs.readFile('binance.txt', 'utf8', (err, databin) => {
            fs.readFile('bybit.txt', 'utf8', (err, databyb) => {
                var binCoin = databin.split('\r\n')
                var bybCoin = databyb.split('\r\n')
                const result = [];
                for (let i = 0; i < binCoin.length; i++) {
                    for (let j = 0; j < bybCoin.length; j++) {
                        if (binCoin[i] === bybCoin[j]) {
                            result.push(binCoin[i])
                        }
                    }
                }
                console.log('монеты отсортированны');
                const sortUSDT = [];
                for (let i = 0; i < result.length; i++) {
                    const element = result[i];
                    if (element.indexOf('USDT') !== -1) {
                        sortUSDT.push(element)
                    }
                }
                fs.writeFileSync('exchange coins.txt', sortUSDT.join('\r\n'), 'utf-8', 'w');
                fs.readFile('exchange coins.txt', 'utf8', (err, expr) => {
                    var exprCoin = expr.split('\r\n')
                    var exitcc = exprCoin.filter((number) => number !== 'DASHUSDT');
                    var exitcc0 = exitcc.filter((number) => number !== 'NEIROUSDT');
                    var exitcc1 = exitcc0.filter((number) => number !== 'ZECUSDT');
                    // console.log(exitcc1);
                    fs.writeFileSync('exchange coins.txt', exitcc1.join('\r\n'), 'utf-8', 'w');

                })
            });
        });
        recCoinPrice(chatId, bot)
    }, 500);
}
