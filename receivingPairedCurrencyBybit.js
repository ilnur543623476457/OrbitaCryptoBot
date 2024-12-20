// *******************    BYBIT   ***********************
const fs = require('fs');

module.exports = function () {
  const fileName = 'bybit.txt';
  const { RestClientV5 } = require('bybit-api');


  const API_KEY = process.env.BYBIT_API_KEY;
  const API_SECRET = process.env.BYBIT_SICRET_KEY;
  const useTestnet = false;

  const clientBY = new RestClientV5({
    key: API_KEY,
    secret: API_SECRET,
    testnet: useTestnet,
  },);

  clientBY.getTickers({ category: 'spot' })
    .then(result => {
      const arr = []
      var mon = result.result.list
      for (let i = 0; i < mon.length; i++) {
        var monBY = result.result.list[i].symbol;
        arr.push(monBY);
      }
      console.log('монеты байбит получены');
      fs.writeFileSync(fileName, arr.join('\r\n'), 'utf-8', 'w');
    })
    .catch(err => {
      console.error("getOrderBook error: ", err);
    });
}


     
