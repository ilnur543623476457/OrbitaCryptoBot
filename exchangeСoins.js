const fs = require('fs');

module.exports = function () {
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
        });
    });
}
