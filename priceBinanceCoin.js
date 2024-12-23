// *******************     BINANCE   **************************

const { USDMClient } = require('binance');
const fs = require('fs');

module.exports = function () {

  const fileName = 'prBinanceCoin.txt';

  const API_KEY = process.env.BINANCE_API_KEY;
  const API_SECRET = process.env.BINANCE_SICRET_KEY;

  const client = new USDMClient({
    api_key: API_KEY,
    api_secret: API_SECRET,
  });

  client
    .getSymbolOrderBookTicker().then((result) => {
      var binb = result.length
      var prCoinBinbn = []
      for (let i = 0; i < binb; i++) {
        // console.log(`${result[i].symbol}, 'green st:', ${result[i].bidPrice}, 'red st:', ${result[i].askPrice}`);
        var coinPr = `${result[i].symbol}, 'green st:', ${result[i].bidPrice}, 'red st:', ${result[i].askPrice}`
        prCoinBinbn.push(coinPr)
      }
      fs.writeFileSync(fileName, prCoinBinbn.join('\r\n'), 'utf-8', 'w');
    })
    .catch((err) => {
      console.error('getSymbolOrderBookTicker error: ', err);
    });
}


// const WebSocket = require('ws');
// const fs = require('fs');

// module.exports = function(coin){
//     const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coin}@depth`);
//     var PBPr = ''
//     var PBPo = ''
//     ws.on('message', (data) => {
//         if (data) {
//             const trade = JSON.parse(data); // parsing a single-trade record
//             try {
//             const priceBinanceProdaja = `БИНАНС  ${coin}  цена продажи (зеленый стакан) ${trade.b[0][0] }`
//             const priceinancePocupca = `цена покупки (красный стакан) ${trade.a[0][0]}`
//             // console.log(`${priceBinanceProdaja} // ${priceinancePocupca}`);
//             PBPr = `${trade.b[0][0]}`
//             PBPo = `${trade.a[0][0]}`
//             } catch (e) {
//                 // console.log("");
//             }
//         }
//     });
//     var arr = []
//     var ecp = ''
//     setInterval(() => {
//         ecp = (`${PBPr},${PBPo}`);
//         fs.appendFileSync('exit coin price.txt', `${ecp}\n`, 'utf-8', 'w');
//     }, 30000);
// }
