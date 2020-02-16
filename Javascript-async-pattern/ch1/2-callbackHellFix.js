// fix: with promises
const delay = seconds => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('The delay haa been ended')
    }, seconds*1000)
})
console.log('the delay has started')
delay(2)
.then((message) => {
    console.log(message)
    console.log('the delay has started')
    return 45
})
.then( number => console.log(`number is ${number}`))