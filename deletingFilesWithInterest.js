const fs = require('fs');

module.exports = () => {
    const put0 = './5 minutes result coin/байбит -> бинанс'
    const put1 = './5 minutes result coin/бинанс -> байбит'
    
    var files0 = fs.readdirSync(put0)
    for (let iu = 0; iu < files0.length; iu++) {
        const element0 = files0[iu];
        fs.unlink(`${put0}/${element0}`, (err) => { });
    }
    var files1 = fs.readdirSync(put1)
    for (let iu = 0; iu < files1.length; iu++) {
        const element1 = files1[iu];
        fs.unlink(`${put1}/${element1}`, (err) => { });
    }
}
