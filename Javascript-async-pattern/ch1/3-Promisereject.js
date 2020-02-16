const delay = seconds => new Promise((resolve, reject) => {
    if(seconds > 100) {
        reject(new Error('sdads'))
    }
    setTimeout(() => {
        resolve('The delay haa been ended')
    }, seconds*1000)
})

delay(101)
.catch((err) => console.log(err))   