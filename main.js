// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
// потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    let arr = str.split('');
    for(let i = 0; i<= arr.length; i++) {
        if(arr[i] == '-') {
            arr[i+1] = arr[i+1].toUpperCase();
        }
    }
    return arr = arr.join('').split('-').join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

console.log('');
console.log('==========================');
console.log('');

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let filtered = arr.filter(el => {
        if (el >= a && el <= b) return el;
    });

    return filtered;
}

console.log(filterRange(arr, 1, 4));
console.log(arr);

console.log('');
console.log('==========================');
console.log('');

let arr4 = [5, 2, 1, -10, 8];

function compare(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

arr4.sort(compare);

console.log(arr4);

console.log('');
console.log('==========================');
console.log('');

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

let arr5 = ["HTML", "JavaScript", "CSS"];

function compare2(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
}

function copySorted(arr) {
    return arr.map(el => el).sort(compare2);
}

let sorted = copySorted(arr5);

console.log(sorted);
console.log(arr5);

console.log('');
console.log('==========================');
console.log('');

// Трансформировать в массив имён. У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

const names = users.map(el => el.name);

console.log(names);

console.log('');
console.log('==========================');
console.log('');

