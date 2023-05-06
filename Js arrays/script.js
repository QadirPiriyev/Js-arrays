//task1
let myArr = [6, 8, 4, 13, "9", 9];

function dublicateFinder(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
    return false;
}

console.log(dublicateFinder(myArr));


//task2
function biggerNumber(numberArr){
    let bigElement = numberArr[0];

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i]> bigElement) {
            bigElement = numberArr[i];
        }
    }
    return bigElement;
}
console.log(biggerNumber(myArr));

//task3
function arrayHandler(double){
    for (let i = 0; i < double.length; i++) {
        double[i] *=2;
    }
    return double;
  }

  console.log(arrayHandler(myArr));