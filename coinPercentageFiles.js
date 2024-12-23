const fs = require('fs');
const path = require('path')

module.exports = () => {
    const CPFone = './5 minutes result coin/бинанс -> байбит'
    const CPFtwo = './5 minutes result coin/байбит -> бинанс'

    if (fs.existsSync(CPFone)) {
        try {
            fs.unlink('./5 minutes result coin/5 minute results binance -> bybit.txt', (err) => { });
            var filesOne = fs.readdirSync(CPFone)
            var procOne = []
            for (let i = 0; i < filesOne.length; i++) {
                const fileNamesOne = filesOne[i];
                const dataOne = fs.readFileSync(`${CPFone}/${fileNamesOne}`).toString();
                var numberOfLinesOne = dataOne.split('\n').length - 1
                if (numberOfLinesOne >= 9) {
                    var suitableCoinsOne = fileNamesOne.split('.')[0]
                    procOne.push(suitableCoinsOne)
                }
            }
            // console.log(proc);
            for (let i = 0; i < procOne.length; i++) {
                const element = procOne[i];
                fs.readFile('prBinanceCoin.txt', 'utf8', (err, dataBin) => {
                    fs.readFile('prBybitCoin.txt', 'utf8', (err, dataByb) => {
                        arrBin = dataBin.split('\r\n')
                        arrByt = dataByb.split('\r\n')
                        // console.log(arrBin);
                        // console.log(arrByt);
                        var prbincn = ''
                        var prbybcn = ''
                        for (let i = 0; i < arrBin.length; i++) {
                            const elementArrBin = arrBin[i].split(',')[0];
                            if (elementArrBin == element) {
                                prbincn = arrBin[i].split(',')[4]
                            }
                        }
                        for (let i = 0; i < arrByt.length; i++) {
                            const elementArrByb = arrByt[i].split(',')[0];
                            if (elementArrByb == element) {
                                prbybcn = arrByt[i].split(',')[2]
                            }
                        }

                        // console.log(prbincn);
                        // console.log(prbybcn);

                        fs.readFile(`${CPFone}/${element}.txt`, 'utf8', (err, databinProc) => {
                            var infoBinByb = `${element} Spred ${databinProc.split('\r\n')[9]} red:${prbincn} green:${prbybcn}`
                            // console.log(`${element} Spred ${databinProc.split('\r\n')[9]} red:${prbincn} green:${prbybcn}`);
                            fs.appendFileSync(`./5 minutes result coin/5 minute results binance -> bybit.txt`, `${infoBinByb}\r\n`, 'utf-8', 'a');
                        })

                    })
                })
            }
        } catch (error) {
            console.log('error');
        }
    }

    if (fs.existsSync(CPFtwo)) {
        try {
            fs.unlink('./5 minutes result coin/5 minute results bybit -> binance.txt', (err) => { });
            var filesTwo = fs.readdirSync(CPFtwo)
            var procTwo = []
            for (let i = 0; i < filesTwo.length; i++) {
                const fileNamesTwo = filesTwo[i];
                const dataTwo = fs.readFileSync(`${CPFtwo}/${fileNamesTwo}`).toString();
                var numberOfLinesTwo = dataTwo.split('\n').length - 1
                // console.log(numberOfLinesTwo);
                if (numberOfLinesTwo >= 9) {
                    var suitableCoinsTwo = fileNamesTwo.split('.')[0]
                    procTwo.push(suitableCoinsTwo)
                    // console.log(suitableCoinsTwo);
                    // fs.appendFileSync(`./5 minutes result coin/5 minute results bybit -> binance.txt`, `${suitableCoinsTwo}\r\n`, 'utf-8', 'a');
                }
            }
            for (let i = 0; i < procTwo.length; i++) {
                const element = procTwo[i];
                fs.readFile('prBinanceCoin.txt', 'utf8', (err, dataBin) => {
                    fs.readFile('prBybitCoin.txt', 'utf8', (err, dataByb) => {
                        arrBin = dataBin.split('\r\n')
                        arrByt = dataByb.split('\r\n')
                        // console.log(arrBin);
                        // console.log(arrByt);
                        var prbincn = ''
                        var prbybcn = ''
                        for (let i = 0; i < arrBin.length; i++) {
                            const elementArrBin = arrBin[i].split(',')[0];
                            if (elementArrBin == element) {
                                prbincn = arrBin[i].split(',')[2]
                            }
                        }
                        for (let i = 0; i < arrByt.length; i++) {
                            const elementArrByb = arrByt[i].split(',')[0];
                            if (elementArrByb == element) {
                                prbybcn = arrByt[i].split(',')[4]
                            }
                        }

                        // console.log(prbincn);
                        // console.log(prbybcn);

                        fs.readFile(`${CPFtwo}/${element}.txt`, 'utf8', (err, databinProc) => {
                            var infoBybBin = `${element} Spred ${databinProc.split('\r\n')[8]} red:${prbincn} green:${prbybcn}`
                            // console.log(`${element} Spred ${databinProc.split('\r\n')[9]} red:${prbincn} green:${prbybcn}`);
                            fs.appendFileSync(`./5 minutes result coin/5 minute results bybit -> binance.txt`, `${infoBybBin}\r\n`, 'utf-8', 'a');
                        })

                    })
                })
            }
        } catch (error) {
            console.log('error');
        }
    }
}