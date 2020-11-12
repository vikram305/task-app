const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve([1,2,3])
        reject('Things went wrong')
    },2000)   
})

doWorkPromise.then((result) => {
    console.log('Result: ',result)
}).catch((error) => {
    console.log(`Error: ${error}`)
})