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

// Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. 
//Попробуйте использовать =>. Это небольшая уловка.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let users1Mapped = users1.map(el => {
    return {fullName: el.name + ' ' + el.surname, id: el.id}
});

console.log(users1Mapped);

console.log('');
console.log('==========================');
console.log('');

// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let users2 = [ vasya2, petya2, masha2 ];

function compare3(a, b) {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
}

function sortByAge(users) {
    return users.sort(compare3);
}

console.log(sortByAge(users2));

console.log('');
console.log('==========================');
console.log('');

// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];
// shuffle(arr);
// arr = [3, 2, 1]
// shuffle(arr);
// arr = [2, 1, 3]
// shuffle(arr);
// arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть 
// переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

let arr6 = [1, 2, 3];

function getRandomIntInclusive(max) {
    return Math.floor(Math.random() * (max + 1));
}

function shuffle(arr) {
    const shuffledArr = []; 
    let max = arr.length-1;
    let index = getRandomIntInclusive(max);
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        shuffledArr[i] = arr[index];
        max--;
        arr.splice(index, 1);
        index = getRandomIntInclusive(max);
    }
    
    return shuffledArr;
}

console.log(shuffle(arr6));

console.log('');
console.log('==========================');
console.log('');

// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и 
// возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let users3 = [ vasya3, petya3, masha3 ];

function getAverageAge(users) {
    const arr = users.map(el => el.age);
    
    let ageSumm = users3.reduce((accum, el) => accum + el.age, 0);
    
    // let ageSumm = 0;
    
    // for (let i = 0; i < arr.length; i++) {
    //     ageSumm = ageSumm + arr[i];
    // }

    return ageSumm/arr.length;
}

console.log(getAverageAge(users3));

console.log('');
console.log('==========================');
console.log('');

// Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// alert( unique(strings) ); // кришна, харе, :-O

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    const uniqueArr = [strings[0]];
    
    arr.forEach(el => {
        if (el !== uniqueArr[0]) uniqueArr.push(el);
    });
    
    return uniqueArr;
}

console.log(unique(strings));



console.log('');
console.log('==========================');
console.log('');

// Создайте объект с ключами из массива
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами 
// массива в качестве значений.

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // после вызова у нас должно получиться:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Такая функция очень удобна при работе с данными, которые приходят с сервера.
// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// Используйте метод .reduce в решении.

let users4 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users4);

function groupById(users) {
    let obj = {};

    users.forEach(el => {
        obj[el.id] = el;
    });
    
    return obj;
}

console.log(usersById);


// let usersById = {};

// users4.forEach(el => {
//     usersById[el.id] = el;
// });

// console.log(usersById);

