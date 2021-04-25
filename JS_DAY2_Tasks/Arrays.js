// 1. 
function randomNum(){
    for (let i = 0; i < number.length; i++){
    let random = (Math.floor(100 + Math.random() * 900 ));
    number [i] = random;
    }
    
    max=number[0]; 
    min=number[0]; 
    for (let j = 0; j < number.length; j++) {
        if (number[j] > max){
            max = number[j];
        }
        if  (number[j] < min){
            min = number[j];
        }
    }
    }
    randomNum()
    console.log("maximum : "+max+" minumum : "+min);

    // 2. program to sort the array and then find the 2nd largest and the 2nd smallest element.
    function sortingArray(){
        let num = new Array(10);
        for (let i = 0; i < num.length; i++){
        let random = Math.floor(100 + Math.random() * 900 );
        num[i] = random;
        }
    
        let sortedNumberArray = num.sort();
        console.log(`Number array ${num}`);
        console.log(`2nd largest number :  ${sortedNumberArray[sortedNumberArray.length-2]} \n2nd smallest number : ${sortedNumberArray[1]}`);
        }
    sortingArray();

// 3. Prime Factorization Program to store all the Prime Factors of a number n into an array
let integer = window.prompt("Enter the Number: ");
function getPrimeFactors(integer) {
    const primeArray = [];
    let isPrime;
    for (let i = 2; i <= integer; i++) {
      if (integer % i !== 0) continue;
      for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
      }
      if (!isPrime) continue;
      integer /= i
      primeArray.push(i);
    }
    return primeArray;
  }
  alert(`(${getPrimeFactors(integer).join(', ')})`);

// 4. Sum of three Integer adds to ZERO
function sumOfThreeIntegers(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === triplet) {
                    console.log(`integers(${array[i]}, ${array[j]}, ${array[k]})`);
                }
            }
        }
    }
}
let integers = 0;
let arr = new Array(0, -1, 2, -3, 1);
sumOfThreeIntegers(arr);

// 5. the digits that are repeated twice like 33, 77, etc and store them in an array
function mutiples() {
    for (let i = 1; i <= 100; i++) {
        if (i % 11 === 0) {
            array[count] = i;
            count++;
        }
    }
}
let count = 0;
let array = new Array();
mutiples();
console.log(array);