const fs = require('fs');
console.log(fs);

fs.writeFile('data.txt', 'Hello, Ying!', (err) => {
    if (err) {
        console.log('write fail');
    }else{
        console.log('write success');
    }
});