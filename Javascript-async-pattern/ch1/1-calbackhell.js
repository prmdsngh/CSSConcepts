const delay = (seconds, callback) => {
    setTimeout(callback, 1000 * seconds)
} 

console.log('program starts now')


//  this is callback hell that needs to be avoided
delay(2, () => {
    console.log('2 seconds')
    delay(2, () => {
        console.log('4 seconds')
        delay(2, () => {
            console.log('6 seconds')
        })
    })
})
