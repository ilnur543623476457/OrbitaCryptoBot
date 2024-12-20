const fs = require('fs');
const path = require('path')


module.exports = () => { 
    const CPFone = './5 minutes result coin/бинанс -> байбит'
    const CPFtwo = './5 minutes result coin/байбит -> бинанс'

    if (fs.existsSync(CPFone)) {
        try {
            fs.unlink('./5 minutes result coin/5 minute results binance -> bybit.txt', (err) => {});
            var filesOne = fs.readdirSync(CPFone)
            for (let i = 0; i < filesOne.length; i++) {
                const fileNamesOne = filesOne[i];
                const dataOne = fs.readFileSync(`${CPFone}/${fileNamesOne}`).toString();
                var numberOfLinesOne = dataOne.split('\n').length - 1
                // console.log(numberOfLinesOne);
                if (numberOfLinesOne == 10) {
                    var suitableCoinsOne = fileNamesOne.split('.')[0]
                    fs.appendFileSync(`./5 minutes result coin/5 minute results binance -> bybit.txt`, `${suitableCoinsOne}\r\n`, 'utf-8', 'a');
                }
            }
        } catch (error) {
            console.log('error');
        }
    }

    if (fs.existsSync(CPFtwo)) {
        try {
            fs.unlink('./5 minutes result coin/5 minute results bybit -> binance.txt', (err) => {});
            var filesTwo = fs.readdirSync(CPFtwo)
            for (let i = 0; i < filesTwo.length; i++) {
                const fileNamesTwo = filesTwo[i];
                const dataTwo = fs.readFileSync(`${CPFtwo}/${fileNamesTwo}`).toString();
                var numberOfLinesTwo = dataTwo.split('\n').length - 1
                // console.log(numberOfLinesTwo);
                if (numberOfLinesTwo == 10) {
                    var suitableCoinsTwo = fileNamesTwo.split('.')[0]
                    fs.appendFileSync(`./5 minutes result coin/5 minute results bybit -> binance.txt`, `${suitableCoinsTwo}\r\n`, 'utf-8', 'a');
                }
            }
        } catch (error) {
            console.log('error');
        }
    }
}