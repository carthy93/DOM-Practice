let getUserData = new Promise ((resolve,reject) => {
const isDataFetched = false
if (isDataFetched) {
    resolve('sucess')
}
else {
    reject('error')
}
})

getUserData.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})


// Example

let learningJS = new Promise ((resolve,reject) => {
    const learning =  1 + 0
    if (learning == 0){
        resolve('JavaScript learnt sucessfully')
    }
    else {
        reject('Still need more practise')
    }
})


learningJS.then((learnt) => {
    console.log('Good Job - ', learnt)
}).catch((practising) => {
    console.log('notYet - ', practising)
})