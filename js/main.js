// Array 1

// function getLevel2(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

// let n = 6;
// let resultArray = getLevel2(n);
// console.log(resultArray);


// Array 2
// function generateSumArray(n, A, B) {
//   let result = [A, B];

//   for (let i = 2; i < n; i++) {
//     result[i] = result.reduce((sum, num) => sum + num, 0);
//   }

//   return result;
// }

// let n = 5;
// let A = 2;
// let B = 3;
// let resultArray = generateSumArray(n, A, B);
// console.log(resultArray);

// Array 3
// function reverseArray(arr) {
//   let reversedArray = arr.slice().reverse();
//   return reversedArray;
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5];
// let reversedArray = reverseArray(inputArray);

// console.log("Asl massiv:", inputArray);
// console.log("Teskari tartibdagi massiv:", reversedArray);

// Array 4
// function printOddIndicesAndValues(arr) {
//   let oddIndices = [];
//   let oddValues = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       oddIndices.push(i);
//       oddValues.push(arr[i]);
//     }
//   }

//   console.log("Toqlar indekslari:", oddIndices);
//   console.log("Toqlar sonlari:", oddValues);
// }

// // Test qismi
// let inputArray = [ 4, 5, 8, 7, 6, 9];
// printOddIndicesAndValues(inputArray);


// Array 5
// function printEvenIndicesAscendingOddIndicesDescending(arr) {
//   let evenIndices = [];
//   let evenValues = [];
//   let oddIndices = [];
//   let oddValues = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenIndices.push(i);
//       evenValues.push(arr[i]);
//     } else {
//       oddIndices.push(i);
//       oddValues.push(arr[i]);
//     }
//   }

//   console.log("Juftlar indekslari (o'sish tartibda):", evenIndices);
//   console.log("Juftlar sonlari (o'sish tartibda):", evenValues);

//   console.log("Toqlar indekslari (kamayish tartibda):", oddIndices.reverse());
//   console.log("Toqlar sonlari (kamayish tartibda):", oddValues.reverse());
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// printEvenIndicesAscendingOddIndicesDescending(inputArray);


// Array 6
// function printEvenIndexedElements(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printEvenIndexedElements(inputArray);

// Array 7
// function printReverseOddIndexedElements(arr) {
//   for (let i = arr.length - 1; i >= 1; i -= 2) {
//     console.log(arr[i]);
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// printReverseOddIndexedElements(inputArray);

// Array 8
// function printEvenOddIndexedElements(arr) {
//     for (let i = 1; i < arr.length; i += 2) {
//       console.log(arr[i]);
//     }
//   for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }

// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printEvenOddIndexedElements(inputArray);


// Array 9
// function printOddEvenIndexedElements(arr) {
//     // Juft indekslilar kamayish tartibida chiqarish
//     for (let i = arr.length - 2; i >= 0; i -= 2) {
//     console.log(arr[i]);
//     }
//   // Toq indekslilar o'sish tartibida chiqarish
//   for (let i = 1; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }

// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// printOddEvenIndexedElements(inputArray);


// Array 10
// function printCustomOrder(arr) {
//   let result = [];

//   for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
//     result.push(arr[i], arr[arr.length - 1 - i]);
//   }

//   if (arr.length % 2 !== 0) {
//     result.pop(); // O'rta elementni o'chirish
//   }

//   console.log(result);
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// printCustomOrder(inputArray);

// Array 11
// function rangeOutSum(arr, K, L) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let K = 2;
// let L = 6;

// let resultSum = rangeOutSum(inputArray, K, L);
// console.log("K va L orasidagi tashqari elementlar yig'indisi:", resultSum);

// Array 12
// function separateTruthyFalsy(arr) {
//   let truthyArray = [];
//   let falsyArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       truthyArray.push(arr[i]);
//     } else {
//       falsyArray.push(arr[i]);
//     }
//   }

//   return { truthyArray, falsyArray };
// }

// let inputArray = [10, false, "", "Abdulaziz", null];
// let { truthyArray, falsyArray } = separateTruthyFalsy(inputArray);

// console.log("Truthy:", truthyArray);
// console.log("Falsy:", falsyArray);

// Array 13
// function getOddMin(arr) {
//   let minOdd = Infinity;

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < minOdd) {
//       minOdd = arr[i];
//     }
//   }

//   return minOdd === Infinity ? undefined : minOdd;
// }

// // Test qismi
// let inputArray = [10, 5, 3, 8, 12, 7];
// let minOdd = getOddMin(inputArray);
// console.log("Juft indeksli elementlar orasidan eng kichigi:", minOdd);


// Array 14
// function getEvenMax(arr) {
//   let maxEven = -Infinity;

//   for (let i = 1; i < arr.length; i += 2) {
//     if (arr[i] > maxEven) {
//       maxEven = arr[i];
//     }
//   }

//   return maxEven === -Infinity ? undefined : maxEven;
// }

// // Test qismi
// let inputArray = [10, 5, 3, 8, 12, 7];
// let maxEven = getEvenMax(inputArray);
// console.log("Toq indeksli elementlar orasidan eng katta:", maxEven);


// Array 15
// function getLastLocalMaxIndex(arr) {
//   let lastIndex = arr.length - 1;

//   if (lastIndex < 2) {
//     // Massivda kamida 3 element bo'lishi kerak, aks holda lokal maksimum aniqlanmaydi
//     return undefined;
//   }

//   for (let i = lastIndex - 1; i > 0; i--) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       // Lokal maksimum topildi
//       return i;
//     }
//   }

//   return undefined; // Lokal maksimum topilmadi
// }

// // Test qismi
// let inputArray = [1, 3, 5, 2, 8, 6, 4];
// let lastLocalMaxIndex = getLastLocalMaxIndex(inputArray);
// console.log("Oxirgi lokal maksimum elementning indeksi:", lastLocalMaxIndex);

// Array 16
// function findClosestToR(arr, R) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   let closestNumber = arr[0];
//   let minDifference = Math.abs(arr[0] - R);

//   for (let i = 1; i < arr.length; i++) {
//     let currentDifference = Math.abs(arr[i] - R);
//     if (currentDifference < minDifference) {
//       minDifference = currentDifference;
//       closestNumber = arr[i];
//     }
//   }

//   return closestNumber;
// }

// // Test qismi
// let inputArray = [1, 3, 5, 8, 10];
// let R = 7;
// let closestNumber = findClosestToR(inputArray, R);
// console.log("Massiv elementlari orasidan", R, "soniga eng yaqin son:", closestNumber);

// Array 17
// function findMaxPair(arr) {
//   if (arr.length < 2) {
//     return undefined;
//   }

//   let maxSum = arr[0] + arr[1];
//   let maxPair = [arr[0], arr[1]];

//   for (let i = 1; i < arr.length - 1; i++) {
//     let currentSum = arr[i] + arr[i + 1];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       maxPair = [arr[i], arr[i + 1]];
//     }
//   }

//   return maxPair;
// }

// // Test qismi
// let inputArray = [1, 3, 5, 8, 2, 4, 6];
// let maxPair = findMaxPair(inputArray);
// console.log("Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni element:", maxPair);


// Array 18
// function findDuplicateIndices(arr) {
//   let indexMap = {};

//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];

//     if (indexMap[currentElement] !== undefined) {
//       // Bir xil qiymatga ega ikkita element topildi
//       return [indexMap[currentElement], i];
//     }

//     indexMap[currentElement] = i;
//   }

//   // Bir xil qiymatga ega ikkita element topilmadi
//   return undefined;
// }

// // Test qismi
// let inputArray = [1, 3, 5, 8, 3, 4, 6];
// let duplicateIndices = findDuplicateIndices(inputArray);

// if (duplicateIndices !== undefined) {
//   console.log("Bir xil qiymatga ega ikkita elementning indekslari:", duplicateIndices);
// } else {
//   console.log("Bir xil qiymatga ega ikkita element topilmadi.");
// }


// Array 19
// function findMostFrequentValue(arr) {
//   let frequencyMap = {};
//   let mostFrequentValue;
//   let maxFrequency = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];

//     if (frequencyMap[currentElement] === undefined) {
//       frequencyMap[currentElement] = 1;
//     } else {
//       frequencyMap[currentElement]++;
//     }

//     if (frequencyMap[currentElement] > maxFrequency) {
//       mostFrequentValue = currentElement;
//       maxFrequency = frequencyMap[currentElement];
//     }
//   }

//   if (maxFrequency > 1) {
//     // Eng ko'p qatnashgan qiymat topildi
//     let lastIndexOfMostFrequentValue = arr.lastIndexOf(mostFrequentValue);
//     return { value: mostFrequentValue, lastIndex: lastIndexOfMostFrequentValue };
//   }

//   // Eng ko'p qatnashgan qiymat topilmadi
//   return undefined;
// }

// // Test qismi
// let inputArray = [1, 3, 5, 8, 3, 4, 6, 8, 8];
// let mostFrequent = findMostFrequentValue(inputArray);

// if (mostFrequent !== undefined) {
//   console.log("Eng ko'p qatnashgan qiymat:", mostFrequent.value);
//   console.log("Qiymatning oxirgi indeksi:", mostFrequent.lastIndex);
// } else {
//   console.log("Eng ko'p qatnashgan qiymat topilmadi.");
// }

// Array 20
// function createEvenArray(a) {
//   let b = [];

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       b.push(a[i]);
//     }
//   }

//   return b;
// }

// // Test qismi
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = createEvenArray(a);

// console.log("b massivining soni:", b.length);
// console.log("b massivining elementlari:", b);

// Array 21
// function increaseByK(a, k) {
//   for (let i = 0; i < a.length; i++) {
//     a[i] += k;
//   }
// }

// // Test qismi
// let a = [1, 2, 3, 4, 5];
// let k = 3;

// increaseByK(a, k);
// console.log("Yangilangan a massivi:", a);

// Array 22 
// function swapHalves(arr) {
//   if (arr.length % 2 === 0) {
//     let halfLength = arr.length / 2;

//     for (let i = 0; i < halfLength; i++) {
//       let temp = arr[i];
//       arr[i] = arr[i + halfLength];
//       arr[i + halfLength] = temp;
//     }
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6];
// swapHalves(inputArray);

// console.log("Almashtirilgan massiv:", inputArray);

// Array 23
// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     // Almashtirish
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     // Indeksni o'zgartirish
//     left++;
//     right--;
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5];
// reverseArray(inputArray);

// console.log("Teskari tartibdagi massiv:", inputArray);

// Array 24
// function zeroBetweenMinMax(arr) {
//   if (arr.length === 0) {
//     return;
//   }

//   let minIndex = 0;
//   let maxIndex = 0;

//   // Eng kichik va eng katta elementlarni topish
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     } else if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }

//   // Eng kichik va eng katta elementlar orasidagi barcha elementlarni nolga almashtirish
//   for (let i = minIndex + 1; i < maxIndex; i++) {
//     arr[i] = 0;
//   }
// }

// // Test qismi
// let inputArray = [3, 8, 1, 6, 2, 7, 4, 5];
// zeroBetweenMinMax(inputArray);

// console.log("Massiv:", inputArray);

// Array 25
// function rotateArrayLeft(arr) {
//   if (arr.length <= 1) {
//     return arr; // Siklik amalga oshmadi
//   }

//   let temp = arr[0];

//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }

//   arr[arr.length - 1] = temp;
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5];
// rotateArrayLeft(inputArray);

// console.log("Massiv after rotation:", inputArray);

// Array 26
// function deleteElementWithIndex(arr, k) {
//   if (k >= 0 && k < arr.length) {
//     arr.splice(k, 1);
//     return arr;
//   } else {
//     console.log("Noto'g'ri indeks kiritildi.");
//     return arr; // Agar indeks noto'g'ri bo'lsa, massivni o'zgartirmaymiz
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5];
// let k = 2;
// let modifiedArray = deleteElementWithIndex(inputArray, k);

// console.log("Yangi massiv:", modifiedArray);

// Array 27
// function deleteElementsInRange(arr, k, m) {
//   if (k > 0 && m < arr.length && k < m) {
//     arr.splice(k, m - k + 1);
//     return arr;
//   } else {
//     console.log("Noto'g'ri indekslar kiritildi.");
//     return arr; // Agar indekslar noto'g'ri bo'lsa, massivni o'zgartirmaymiz
//   }
// }

// // Test qismi
// let inputArray = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;
// let m = 4;
// let modifiedArray = deleteElementsInRange(inputArray, k, m);

// console.log("Yangi massiv:", modifiedArray);

// Array 28
// function removeDuplicate(arr) {
//   let uniqueSet = new Set(arr);
//   let uniqueArray = Array.from(uniqueSet);
//   return uniqueArray;
// }

// // Test qismi
// let inputArray = [1, 2, 3, 2, 4, 5, 3, 6];
// let resultArray = removeDuplicate(inputArray);

// console.log("Yangi massiv:", resultArray);

// Array 29
// function getElementsOneTime(arr) {
//   let seen = {};
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];

//     if (!seen[currentElement]) {
//       seen[currentElement] = true;
//     } else {
//       // Agar element ko'rishgan bo'lsa, uni o'chiramiz
//       delete seen[currentElement];
//     }
//   }

//   // Yangi massivni tuzamiz
//   for (let key in seen) {
//     result.push(parseInt(key));
//   }

//   return result;
// }

// // Test qismi
// let inputArray = [1, 5, 6, 1, 5, 7, 2];
// let resultArray = getElementsOneTime(inputArray);

// console.log("Yangi massiv:", resultArray);


// Array 30
// function searchAllElements(arr, k) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === k) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// // Test qismi
// let inputArray = [1, 3, 5, 3, 7, 3, 9];
// let searchValue = 3;
// let resultIndices = searchAllElements(inputArray, searchValue);

// console.log(`Qiymat ${searchValue} ga teng bo'lgan elementlar indekslari:`, resultIndices);