// var t = 'DOGEUSDT'
// console.log(t.toLowerCase());

// const arr1 = [
//     "HMSTRTRY",
//     "EIGENBTC",
//     "EIGENUSDT",
//     "EIGENFDUSD",
//     "EIGENTRY",
//     "NEIROBRL",
// ];
// const arr2 = [
//     "SCRBTC",//
//     "EIGENBTC",
//     "CETUSUSDT",//
//     "EIGENFDUSD",
//     "CETUSUSDT",//
//     "NEIROBRL",
// ];
// const result = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       result.push(arr1[i])
//     }
//   }
// }



// var a = [
//     'ETHBTC',
//     'LTCBTC',
//     'BNBBTC',
//     'NEOBTC',
//     'QTUMETH',
//     'EOSETH',
// ]

// var b = [
//     'NEOBTC',
//     'QTUMETH',
//     'EOSETH',
//     'MOVEUSDT',
//     'SAILUSDT',
//     'ETHDAI',
// ]

// const result = [];
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             result.push(a[i])
//         }
//     }
// }
// console.log(result);




// var a = [
//     'KDAUSDT',
//     'APEUSDT',
//     'NEAREUR',
//     'FTMEUR',
// ]

// var str = 'USDT'

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (element.indexOf(str) !== -1) {
//         console.log(element);
//     }
// }

// const fs = require('fs');

// const data = ['item 1', 'item 2', 'item 3'];

// fs.writeFile('data.txt', data.join('\n'), (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Data written to file');
//   }
// });
// const fs = require('fs');

// const nom_str = fs.readFileSync('exit coin price.txt').toString();
// var a = nom_str.split('\n').length / 2

// for (let i = 0; i < a; i++) {
//     fs.readFile('exit coin price.txt', 'utf8', (err, data) => {
//         var sortCoinOne = data.split('\n')[0].split(',')[1]
//         var sortCoinTwo = data.split('\n')[1].split(',')[0]
//         if (!sortCoinTwo) {
//             console.log('нет цифры');
//             var te_arr = []
//             const nom_str = fs.readFileSync('exit coin price.txt').toString();
//             for (let i = 2; i < nom_str.split('\n').length; i++) {
//                 str_pr_coin = data.split('\n')[i]
//                 te_arr.push(str_pr_coin)
//             }
//             const pust = '';
//             fs.writeFileSync('exit coin price.txt', `${pust}`, 'utf-8', 'w');
//             const test = []
//             for (let i = 0; i < te_arr.length; i++) {
//                 const element = te_arr[i]
//                 test.push(element)
//             }
//             fs.writeFileSync('exit coin price.txt', test.join('\n'), 'utf-8', 'w');
//         } else {
//             var arr = []
//             arr.push(`${sortCoinTwo}, ${sortCoinOne}`)
//             console.log(arr);
//         }
//     })
// }



// var spred = 102
// var capital = 100
// var pocupca = 0.0581
// var prodaja = 0.00161005
// var comis = 0.1

// var formula = capital / pocupca * prodaja - comis - comis - comis
// console.log(formula);



// const { WebsocketAPI } = require('@binance/connector')
// const { Console } = require('console')
// const logger = new Console({ stdout: process.stdout, stderr: process.stderr })
// const fs = require('fs');

//   // callbacks for different events
//   const callbacks = {
//     open: (client) => {
//       // logger.debug('Connected with Websocket server')
//       // send message to get orderbook info after connection open
//       client.orderbook('BTCUSDT', { limit: 1 })
//     },
//     close: () => logger.debug('Disconnected with Websocket server'),
//     message: data => {
//       var a = JSON.stringify(data)
      
//       console.log(a.result);
//     }
//     // fs.writeFileSync('data.json', JSON.stringify(data));
//   }

//   const websocketAPIClient = new WebsocketAPI(null, null, { logger, callbacks })




// console.log(data.result.bids[0][0]);
// console.log(data.result.asks[0][0]);


// const cars = [
//   { make: 'Toyota', model: 'Camry', year: 2018 },
//   { make: 'Honda', model: 'Accord', year: 2019 },
//   { make: 'Tesla', model: 'Model S', year: 2020 },
// ];

// const car = cars.find(function (item) {
//   return item.make === 'Honda';
// });

// console.log(car)


// const jsonData = require('./t.json');
// console.log(jsonData.result);



// const { OrderBooksStore, OrderBookLevel} = require('orderbooks');
// // all options are optional
// const options = {
//   // output traces on any events sent handled by book
//   // traceLog: true,

//   // check current timestamp > last timestamp, else deny processing event
//   // checkTimestamps: false,

//   // max size of orderbook (e.g 50 == 25 bids & 25 asks). Defaults to 250.
//   maxDepth: 50,
// };

// const OrderBooks = new OrderBooksStore(options);
// const btcOrderBook = OrderBooks.getBook('TUSDUSDT');

// // console.log current orderbook state
// btcOrderBook.print();

// // clear current orderbook to free memory
// btcOrderBook.reset();



























// бинанс
// const { USDMClient } = require('binance');

// const API_KEY = process.env.BINANCE_API_KEY;
// const API_SECRET = process.env.BINANCE_SICRET_KEY;

// const client = new USDMClient({
//   api_key: API_KEY,
//   api_secret: API_SECRET,
// });

// client
//   .getSymbolOrderBookTicker()
//   .then((result) => {
//     var binb = result.length
//     for (let i = 0; i < binb; i++) {
//       console.log(result[i].symbol, 'green st:', result[i].bidPrice, 'red st:', result[i].askPrice);
//     }
//   })
//   .catch((err) => {
//     console.error('getSymbolOrderBookTicker error: ', err);
//   });




// байбит

// require('dotenv').config()

// const { RestClientV5 } = require('bybit-api');

// const API_KEY = process.env.BYBIT_API_KEY;
// const API_SECRET = process.env.BYBIT_SICRET_KEY;
// const useTestnet = false;

// const clientBY = new RestClientV5({
//   key: API_KEY,
//   secret: API_SECRET,
//   testnet: useTestnet,
// },);

// clientBY.getTickers({ category: 'spot' })
//   .then(data => {
//     var bitb = data.result.list.length
//     for (let i = 0; i < bitb; i++) {
//       console.log(data.result.list[i].symbol, 'green st:', data.result.list[i].bid1Price, 'red st:', data.result.list[i].ask1Price);
//     }
//   })
//   .catch(err => {
//     console.error("getOrderBook error: ", err);
//   });























// const fs = require('fs');
// const path = require('path')

// const put = './бинанс -> байбит'

// if (fs.existsSync(put)) {
//   var files = fs.readdirSync(put)
//   // console.log(files);
//   for (let i = 0; i < files.length; i++) {
//     const fileNames = files[i];
//     console.log(fileNames);
//     // fs.readFile(`${put}/${fileNames}`, 'utf8', (err, data) => {
//     //   var arr = data.split('\r\n')
//     //   // console.log(arr);
//     //   var indecCoin = ''
//     //   for (let i = 0; i < arr.length; i++) {
//     //   }
//     //   // console.log(indecCoin);
//     // })
//   }
// }

// if (fs.existsSync(put)) {
//     var files = fs.readdirSync(put)
//     // console.log(files);
//     for (let i = 0; i < files.length; i++) {
//       const fileNames = files[i];
//       console.log(fileNames);
//       // fs.readFile(`${put}/${fileNames}`, 'utf8', (err, data) => {
//       //   var arr = data.split('\r\n')
//       //   // console.log(arr);
//       //   var indecCoin = ''
//       //   for (let i = 0; i < arr.length; i++) {
//       //   }
//       //   // console.log(indecCoin);
//       // })
//     }
//   }


// console.log(Math.trunc(93.80112359550564));

// const fs = require('fs');

// const put0 = './5 minutes result coin/байбит -> бинанс'
// const put1 = './5 minutes result coin/бинанс -> байбит'

// var files0 = fs.readdirSync(put0)
// for (let iu = 0; iu < files0.length; iu++) {
//     const element0 = files0[iu];
//     fs.unlink(`${put0}/${element0}`, (err) => { });
// }
// var files1 = fs.readdirSync(put1)
// for (let iu = 0; iu < files1.length; iu++) {
//     const element1 = files1[iu];
//     fs.unlink(`${put1}/${element1}`, (err) => { });
// }



// const fs = require('fs');
// module.exports = (bot, chatId) => {
//     setInterval(() => {
//         var now = new Date();
//         fs.readFile('./5 minutes result coin/5 minute results bybit -> binance.txt', 'utf8', (err, dataByb) => {
//             bot.sendMessage(chatId, `Дата: ${now.getDate()}.${now.getMonth()}.${now.getFullYear()} Время: ${now.getHours()}:${now.getMinutes()}\nbybit -> binance\n${dataByb.split('\r')}`)
//         })
//         fs.readFile('./5 minutes result coin/5 minute results binance -> bybit.txt', 'utf8', (err, dataBin) => {
//             bot.sendMessage(chatId, `Дата: ${now.getDate()}.${now.getMonth()}.${now.getFullYear()} Время: ${now.getHours()}:${now.getMinutes()}\nbinance -> bybit\n${dataBin.split('\r')}`)
//         })
//     }, 336500); 
// }

