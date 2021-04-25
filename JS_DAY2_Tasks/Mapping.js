// 1. Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times

let myMapping = new Map();
for (let i = 1; i<300; i++){
    let result=(Math.floor(Math.random() * 6 + 1));
    if(myMapping.has(result)){
        let num=myMapping.get(result)+1;
        myMapping.set(result,num);
                if(num===10){
                    console.log(`Face ${result} 10 times has occured`);
                    break;
		   }
		}else{
        	    myMapping.set(result,1);
	}
}

const mapSorting = new Map([...myMapping.entries()].sort());
console.log(`${mapSorting}`);




// 2. generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print. 
let myMap = new Map();
for (let i = 1; i<=50; i++){
    let yearInc= 1991+Math.floor(Math.random() * 2 + 1);
    let result=Math.floor(Math.random() * 12 + 1)+","+yearInc;
    if(myMap.has(result)){
        let num=myMap.get(result)+1;
        myMap.set(result,num);
    }else{
        myMap.set(result,1);
    }
}
const sortingMap = new Map([...myMap.entries()].sort());
console.log(sortingMap);