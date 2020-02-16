// callback hell below
const fs = require('fs')
var beep = () => process.stdout.write('\x07');

const doSOmeStuffSequence = () => {
    console.log('started')
    setTimeout(() => {
        console.log('waiting')
        setTimeout(() =>{
            console.log('waiting some time')
            fs.writeFile('file.txt', 'sadsadda', err => {
                if(err) {
                    console.log(err)
                } else {
                    beep();
                    console.log('file.txt created')
                    setTimeout(() => {
                        beep()
                        fs.unlink('file.txt', err => {
                            if(err) {
                                console.log(err)
                            } else {
                                console.log('file.txt removed')
                                console.log('doSOmeStuffSequence completed')
                            }
                        })
                    }, 2000)
                }
            })
        }, 2000)
    }, 2000)
}

// doSOmeStuffSequence();

// the above code is hard to maintain and not readable
// using promises

const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const unLink = promisify(fs.unlink)
const delay = seconds => new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds)
})
const doStuffSequentially = () => Promise.resolve()
.then(() => console.log('started'))
.then(() => delay(2))
.then(() => console.log('waiting'))
.then(() => delay(2))
.then(() => writeFile('file.txt', 'saddsadd'))
.then(beep)
.then(() => console.log('file.text created'))
.then(() => delay(3))
.then(() => unLink('file.txt'))
.then(() => console.log('file.txt deleted'))
.catch(console.error)

doStuffSequentially();
