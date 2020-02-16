const delay = (seconds, callback) => {
    if(seconds > 10) {
        callback(new Error('aarghh'))
    } else {
        setTimeout(() => {
            callback(null, 'successfull')
        }, seconds*1000)
    }
}

delay(5, (err, msg) => {
    if(err) {
        console.log('error:', err)
    } else {
        console.log(msg)
    }
})

//  or we can use promisify
console.log('promisify started')
const { promisify } = require('util')

const promisifyDelay = promisify(delay)

promisifyDelay(1)
.then((msg) => console.log(msg))
.catch(err => console.log(err))

//another example of promisify util

const fs = require('fs')
const promisifiedWriteFile = promisify(fs.writeFile)
promisifiedWriteFile('sample.txt', 'sadsdasd')
.then(() => console.log('file written'))
.catch(err => console.log(err))
