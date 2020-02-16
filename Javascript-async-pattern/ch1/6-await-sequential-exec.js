const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const unLink = promisify(fs.unlink)
const delay = seconds => new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds)
})
var beep = () => process.stdout.write("\x07");

const doStuffSequentially = async () => {
    console.log('started')
    await delay(2)
    console.log('waiting')
    await delay(2)
    await writeFile('file.txt', 'saddsadd')
    beep()
    console.log('file.text created')
    await delay(3)
    await unLink('file.txt')
    console.log('file.txt deleted')
}

doStuffSequentially();