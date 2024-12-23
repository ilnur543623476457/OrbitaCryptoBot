// *******************    BYBIT   ***********************

require('dotenv').config()

const { RestClientV5 } = require('bybit-api');
const fs = require('fs');
const processingCoinsBySpread = require('./processingCoinsBySpread')


module.exports = function () {

  const fileName = 'prBybitCoin.txt';

  const API_KEY = process.env.BYBIT_API_KEY;
  const API_SECRET = process.env.BYBIT_SICRET_KEY;
  const useTestnet = false;

  const clientBY = new RestClientV5({
    key: API_KEY,
    secret: API_SECRET,
    testnet: useTestnet,
  },);

  clientBY.getTickers({ category: 'spot' })
    .then(data => {
      var bitb = data.result.list.length
      var prCoinBibtb = [];
      for (let i = 0; i < bitb; i++) {
        // console.log(`${data.result.list[i].symbol}, 'green st:', ${data.result.list[i].bid1Price}, 'red st:', ${data.result.list[i].ask1Price}`);
        var coinPr = `${data.result.list[i].symbol}, 'green st:', ${data.result.list[i].bid1Price}, 'red st:', ${data.result.list[i].ask1Price}`
        prCoinBibtb.push(coinPr)
      }
      // console.log(prCoinBibtb);
      fs.writeFileSync(fileName, prCoinBibtb.join('\r\n'), 'utf-8', 'w');
      processingCoinsBySpread()
    })
    .catch(err => {
      console.error("getOrderBook error: ", err);
    });

  // fs.unlink(`./${fileName}`, (err) => {});
  // fs.readFile('exchange coins.txt', 'utf8', async (err, databyb) => {
  //   var databybcoin = databyb.split('\r\n')
  //   for (let i = 0; i < databybcoin.length; i++) {
  //     const element = databybcoin[i];
  //     clientBY.getOrderbook({
  //       category: 'spot',
  //       symbol: element,
  //     }).then((response) => {
  //       var CoinName = response.result.s // coin name
  //       var AskRedSt = response.result.a[0][0] // Ask red st
  //       var BidGreenSt = response.result.b[0][0] // Bid green st
  //       var stCoinBybit = `${CoinName}, 'green st:', ${BidGreenSt}, 'red st:', ${AskRedSt}`
  //       // console.log(`${CoinName}, 'green st:', ${BidGreenSt}, 'red st:', ${AskRedSt}`);
  //       fs.appendFileSync(fileName, `${stCoinBybit}\r\n`, 'utf-8', 'a');
  //     }).catch((error) => {
  //       console.error(error);
  //     });
  //   }
  // })
}










// const {WebsocketClient} = require('bybit-api') ;
// require('dotenv').config()
// const fs = require('fs');
// // const coin = 'ICXUSDT'
// module.exports = function(coin) {
//     const  API_KEY  =  process.env.BYBIT_API_KEY ; 
//     const  PRIVATE_KEY  =  process.env.BYBIT_SICRET_KEY ;

//     const  wsConfig  =  { 
//         key: API_KEY,
//         secret: PRIVATE_KEY,
//         market: 'v5',
//     } ;

//     const ws = new WebsocketClient(wsConfig) ;
//     console.log(ws);
//     ws.subscribeV5(`orderbook.50.${coin}`, 'spot');
//     var PBPr = ''
//     var PBPo = ''
//     ws.on("update", (data) => {
//         try {
//             const priceBybitProdaja = `БАЙБИТ  ${coin}  цена продажи (зеленый стакан) ${data.data.b[0][0] }`
//             const priceBybitPocupca = `цена покупки (красный стакан) ${data.data.a[0][0]}`
//             // console.log(`${priceBybitProdaja} // ${priceBybitPocupca}`);
//             PBPr = `${data.data.b[0][0]}`
//             PBPo = `${data.data.a[0][0]}`
//         } catch (e) {
//             // console.log(e);
//         }
//     });
//     var arr = []
//     setInterval(() => {
//         var ecp = (`${PBPr},${PBPo}`)
//         fs.appendFileSync('exit coin price.txt', `${ecp}\n`, 'utf-8', 'w');
//     }, 30000);
    

// }

