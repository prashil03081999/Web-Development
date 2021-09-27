console.log("This is modulee");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.lenght;
}

module.exports = average;