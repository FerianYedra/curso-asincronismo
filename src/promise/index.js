const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
    //Aquí va el código asíncrono
});

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There aren't enough cows on the farm");
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'))