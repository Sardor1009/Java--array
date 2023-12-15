// Array 1

// function getLevel2(n){
// let res =[]
// for (let i=1; i<= n; i++){
//     res.push(2**i);
// }
// return res;
// }

// let arr = getLevel2(5)
// console.log(arr);

// Array 2

// function generateSequence(n, A, B) {
    
//     let result = [A, B];
    

//   for (let i = 2; i < n; i++) {
  
//      result.push(result.reduce((a, b) => a + b, 0));
//   }
//   return result;
// }

// let  output = generateSequence(5, 2, 3);

// console.log(output);


// Array 3

    // let arr = [4, 7, 2, 9, 1];
        
    // let arrReversed = arr.toReversed()
    
    // console.log(arr);
    // console.log(arrReversed);

    
// }


// Array 4

// function findOdds(arr) {
//   let  odds = arr.filter(element => element % 2 !== 0);

//   let  oddsCount = odds.length;

//   console.log("Massiv elementlar: " + arr);
//   console.log("Natija: " + odds + " toqlar soni = " + oddsCount);
// }

// let  elements = [4, 5, 7, 8, 6, 9];

// findOdds(elements);


// Array 5


// function findOdds(arr) {
//   let  odds = arr.filter(element => element % 2 !== 0);
//   let couple = arr.filter(element => element % 2 == 0);

//   console.log("Massiv elementlar: " + arr);
//   console.log("Juftlari: " + couple + " Toqlari: " + odds.toReversed() );
// }

// let  elements = [4, 5, 7, 8, 6, 9];

// findOdds(elements);



// Array 6

// function array(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);


// Array 7


// function array(arr) {
//   for (let i = arr.length-2; i >= 1; i -= 2) {
//     console.log(arr[i]);
//   }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);


// Array 8

// function array (arr) {
//     for (let i=0; i<=arr.length ; i+=2){
//         console.log(arr[i]);
//     }
//      for (let i=1; i<arr.length ; i+=2){
//         console.log(arr[i]);
//     }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);

// Array 9

// function array (arr) {
//     for (let i=1; i<arr.length ; i+=2){
//         console.log(arr[i]);
//     }
//      for (let i=arr.length-1; i>=0 ; i-=2){
        
//         console.log(arr[i]);
//     }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);




// Array 10


// function printCustomPattern(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n  ; i +=3) {
//     console.log(arr[i]);
//     console.log(arr[i+1]);
//     console.log(arr[n - 1 - i]);
//     console.log(arr[n - 2 - i]);
//   }
  
// }

// var myArray = [1, 4, 2, 8, 5, 6, 9];

// printCustomPattern(myArray);

// Array 11

// let K =1;
// let L =4;
// let Sum =0

// function rangeOutSum(arr){
//     N = arr.length-1; 
//     if (0 <= K && K <= L && L< N){
//         for ( let i = 0; i<=arr.length-1; i++){
//             Sum += arr[i]
//         }
//         console.log(Sum - arr[K]-arr[L]);
//     }
// }


// rangeOutSum(myarray=[1, 2, 3, 4, 5, 6, 7, 8, 9])


// Array 12


// function separateTruthyFalsy(arr){
//     let truthyArray = [];
//     let falsyArray = [];

//     for (let i = 0; i< arr.length; i++){
//         arr[i] || falsyArray.push(arr[i]);
//         arr[i] && truthyArray.push(arr[i]);
//     }

//     console.log('Truthy:', truthyArray);
//     console.log('Falsy:', falsyArray);

// }


// let inputArray = [10, false, "", "Abdulaziz", null];

// separateTruthyFalsy(inputArray);


// Array 13

// function getOddMin(arr){
//     let min = arr[0];

//     for (let i = 0; i<arr.length; i +=2){
//          if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let inputArray = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let min = getOddMin(inputArray)

// console.log(min);


// Array 14

// function getOddMin(arr){
//     let max = arr[0];

//     for (let i = 1; i<arr.length; i +=2){
//          if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let inputArray = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10000, 11]

// let max = getOddMin(inputArray)

// console.log(max);


// Array 15

// function getOddMin(arr){
//     let max = arr[0];

//     for (let i = 1; i<arr.length-1; i ++){
//          if (arr[i] > max) {
//             max = arr[i];
//             console.log("Lokal maksimum elementi indeksi: " + i);
//         }
//     }
// }

// let inputArray = [100, 2, 3, 4, 500000, 6, 7, 8, 9, 10000, 11]

// let max = getOddMin(inputArray)


// Array 16


/*// function getOddMin(arr){
//     let max = arr[0];
//     let R = 500;   
//     let min=[] 
    
//     for (let i = 0; i<arr.length; i ++){
//         min.push(Math.abs(R-arr[i]));
//     }
//         // console.log(min);
        
//         let minnn= min[0];

//         for (let el of min){
//             if (el<minnn){
//                 el = minnn
//             }
//         }console.log(minnn);
    
//     }
    
//     let inputArray = [10000, 100, 3, 4, 5, 6, 7, 8, 9, 10000, 11]
    
//     let max = getOddMin(inputArray)*/

// function findClosestToR(arr, R) {
//     if (arr.length === 0) {
//         return undefined; 
//     }

//     let closest = arr[0]; 
//     let minDifference = Math.abs(R - arr[0]); 

//     for (let i = 1; i < arr.length; i++) {
//         let currentDifference = Math.abs(R - arr[i]);

//         if (currentDifference < minDifference) {
//             minDifference = currentDifference;
//             closest = arr[i];
//         }
//     }

//     return closest;
// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3];
// let R = 5;

// let closestElement = findClosestToR(inputArray, R);

// if (closestElement !== undefined) {
//     console.log(`Massiv elementlari orasidan ${R} ga eng yaqin son: ${closestElement}`);
// } else {
//     console.log('Massiv bo\'sh.');
// }




// Array 17


// function findMax2(arr) {
//     if (arr.length < 2) {
//         return undefined; 
//     }

//     let max1 = arr[0] + arr[1]; 
//     let max2 = [arr[0], arr[1]]; 

//     for (let i = 1; i < arr.length - 1; i++) {
//         let currentSum = arr[i] + arr[i + 1];

//         if (currentSum > max1) {
//             max1 = currentSum;
//             max2 = [arr[i], arr[i + 1]];
//         }
//     }

//     return max2;
// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3];

// let max2 = findMax2(inputArray);

// if (max2 !== undefined) {
//     console.log(`Massivning elementlari orasidan yig'indisi eng katta bo'lgan 2 ta qo'shni: ${max2}`);
// } else {
//     console.log('Massivda kamida ikkita element bo\'lishi kerak.');
// }
