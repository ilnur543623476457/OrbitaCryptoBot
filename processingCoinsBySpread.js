const fs = require('fs');

module.exports = () => {
    fs.readFile('exchange coins.txt', 'utf8', (err, data) => {
        var arr = data.split('\r\n')
        var arrBin = ''
        var arrByt = ''
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            fs.readFile('prBinanceCoin.txt', 'utf8', (err, dataBin) => {
                fs.readFile('prBybitCoin.txt', 'utf8', (err, dataByb) => {
                    arrBin = dataBin.split('\r\n')
                    arrByt = dataByb.split('\r\n')
                    var prbincn = ''
                    var prbybcn = ''
                    for (let i = 0; i < arrBin.length; i++) {
                        const elementArrBin = arrBin[i].split(',')[0];
                        if (elementArrBin == element) {
                            prbincn = arrBin[i]
                        }
                    }
                    for (let i = 0; i < arrByt.length; i++) {
                        const elementArrByb = arrByt[i].split(',')[0];
                        if (elementArrByb == element) {
                            prbybcn = arrByt[i]
                        }
                    }
                    // console.log(prbincn);
                    // console.log(prbybcn);
                    var coinName1 = prbincn.split(',')[0]
                    var coinName2 = prbybcn.split(',')[0]
                    if (coinName1 === coinName2) {
                        // console.log(coinName1);
                        
                        const spred = 100
                        const comis = 0.1
                        const capital = 100

                        // формула процент (бинанс / байбит)

                        var pocupcaOne = prbincn.split(',')[4]
                        var prodajaOne = prbybcn.split(',')[2]
                        // console.log(pocupcaOne);
                        // console.log(prodajaOne);
                        

                        var formula_bin_byb = (capital / pocupcaOne) * prodajaOne - comis - comis - comis
                        var formula_bin_byb_exit = Math.trunc(formula_bin_byb);
                        if (formula_bin_byb_exit > spred) {
                            // console.log(`бинанс -> байбит ${coinName1} ${formula_bin_byb}`);
                            // console.log(`бинанс -> байбит ${coinName1} ${formula_bin_byb_exit}`);
                            // console.log('процент бинанс -> байбит готов');
                            fs.appendFileSync(`./5 minutes result coin/бинанс -> байбит/${coinName1}.txt`, `${formula_bin_byb}\r\n`, 'utf-8', 'a');
                        }
                        if (formula_bin_byb_exit < spred) {
                            // console.log(`бинанс -> байбит ${coinName1} ${formula_bin_byb}`);
                            // console.log(`бинанс -> байбит ${coinName1} ${formula_bin_byb_exit}`);
                            // console.log('процент бинанс -> байбит готов');
                            // fs.appendFileSync(`./5 minutes result coin/бинанс -> байбит/${coinName1}.txt`, `${formula_bin_byb}\r\n`, 'utf-8', 'a');
                        }

                        // формула процент (байбит / бинанс)
                        var pocupcaTwo = prbincn.split(',')[2]
                        var prodajaTwo = prbybcn.split(',')[4]

                        var formula_byb_bin = (capital / pocupcaTwo) * prodajaTwo - comis - comis - comis
                        var formula_byb_bin_exit = Math.trunc(formula_byb_bin);
                        if (formula_byb_bin_exit > spred) {
                            // console.log(`байбит -> бинанс ${coinName2} ${formula_byb_bin}`);
                            // console.log(`байбит -> бинанс ${coinName2} ${formula_byb_bin_exit}`);
                            // console.log('процент байбит -> бинанс готов');
                            fs.appendFileSync(`./5 minutes result coin/байбит -> бинанс/${coinName2}.txt`, `${formula_byb_bin}\r\n`, 'utf-8', 'a');
                        }
                        if (formula_byb_bin_exit < spred) {
                            // console.log(`байбит -> бинанс ${coinName2} ${formula_byb_bin}`);
                            // console.log(`байбит -> бинанс ${coinName2} ${formula_byb_bin_exit}`);
                            // console.log('процент байбит -> бинанс готов');
                            // fs.appendFileSync(`./5 minutes result coin/байбит -> бинанс/${coinName2}.txt`, `${formula_byb_bin}\r\n`, 'utf-8', 'a');
                        }
                    }
                })
            })
        }
    })
}




// module.exports = () => {
    // fs.readFile('exit coin price.txt', 'utf8', (err, data) => {
    //     var arr = data.split('\n').slice(0, -1)
    //     fs.writeFileSync('exit coin price.txt', arr.join('\r\n'), 'utf-8', 'w');
    //     setTimeout(() => {
    //         et_sr()
    //     }, 2000);
    // })
    // const et_sr = () => {
    //     const nom_str = fs.readFileSync('exit coin price.txt').toString();
    //     fs.readFile('exit coin price.txt', 'utf8', (err, data) => {
    //         try {
    //             // var sortCoinName = data.split('\n')[0].split(',')[0]
    //             var sortCoinOne = data.split('\n')[0].split(',')[1]
    //             var sortCoinTwo = data.split('\n')[1].split(',')[0]

    //             // console.log(sortCoinName);
    //             // console.log(sortCoinOne);
    //             // console.log(sortCoinTwo);
                
    //             var spred = 102
    //             var capital = 100
    //             var pocupca = sortCoinTwo
    //             var prodaja = sortCoinOne
    //             var comis = 0.1

    //             var formula = capital / pocupca * prodaja - comis - comis - comis

    //             if (formula >= spred) {
    //                 console.log(sortCoinOne);
    //                 console.log(sortCoinTwo);
    //                 console.log(`${formula}`);//   цены монеты: ${sortCoinTwo, sortCoinOne}
    //                 var te_arr = []
    //                 for (let i = 2; i < nom_str.split('\n').length; i++) {
    //                     str_pr_coin = data.split('\n')[i]
    //                     te_arr.push(str_pr_coin)
    //                 }
    //                 const pust = '';
    //                 fs.writeFileSync('exit coin price.txt', `${pust}`, 'utf-8', 'w');
    //                 const test = []
    //                 for (let i = 0; i < te_arr.length; i++) {
    //                     const element = te_arr[i]
    //                     test.push(element)
    //                 }
    //                 fs.writeFileSync('exit coin price.txt', test.join('\n'), 'utf-8', 'w');
    //                 et_sr()
    //             } else {
    //                 // console.log(formula, 'Не подходит по спреду');
    //                 var te_arr = []
    //                 for (let i = 2; i < nom_str.split('\n').length; i++) {
    //                     str_pr_coin = data.split('\n')[i]
    //                     te_arr.push(str_pr_coin)
    //                 }
    //                 const pust = '';
    //                 fs.writeFileSync('exit coin price.txt', `${pust}`, 'utf-8', 'w');
    //                 const test = []
    //                 for (let i = 0; i < te_arr.length; i++) {
    //                     const element = te_arr[i]
    //                     test.push(element)
    //                 }
    //                 fs.writeFileSync('exit coin price.txt', test.join('\n'), 'utf-8', 'w');
    //                 et_sr()
    //             }
    //         } catch (error) {
    //             console.log('файл пуст');
    //         }
    //     })
    // }
// }