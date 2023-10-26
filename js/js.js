let arr2 = [5, 6, 4, 6, 2, 1, 5, 10, 11, 19]
let arr3 = ["Jack", "Anna", "Grigori", "Ilya", "Tesla", "Alan", "jimi"]
arr2.sort((a, b) => a - b)
arr3.sort()
console.log(arr2);
console.log(arr3);


arr2 = arr2.concat(arr3)
console.log(arr2);

arr3 = arr3.concat(arr2)
console.log(arr3);

console.log(arr3.indexOf('Jack'));
console.log(arr2.indexOf(2));

console.log(arr2.includes('Anna'));
console.log(arr3.indexOf('Roma'));

console.log(arr3.includes('Anna', 19)); //начинает искать слово с 19 элемента

let be = arr3.slice(12)
let arr4 = be.slice(0,5)
let arr5 = be.splice(5,6)
console.log(be);
console.log(arr4);
console.log(arr5);

// 

let imena = ["Jack", "Anna"]
let obj = {
    a:"Grigori",
    b:"Ilya"
}
let obyedinenie = Object.keys(obj )
console.log(obyedinenie);