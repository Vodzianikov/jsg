


const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];


// 1) Переставить 'Janett', 'Mike' в начало массива

// const copiedArr = arr.slice(arr.indexOf('Janett'));
// arr.splice(0, 0, copiedArr);
// arr.pop();
// arr.pop();

// console.log(arr.flat());


// 2) Заменить 'Dan', 'David' на 'Bob', 'Oliver'

// arr.splice(arr.indexOf('Dan'), 2, 'Bob', 'Oliver');
// console.log(arr);


// 3) Перевернуть массив и заменить первые 3 элемента на 'Robert'

// arr.reverse()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.unshift('Robert')
// arr.unshift('Robert')
// arr.unshift('Robert')

// arr.reverse().splice(0, 3, 'Robert', 'Robert', 'Robert')

// arr.reverse().fill('Robert', 0, 3)


// console.log(arr)



// 4) Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Скопировать все эелемнты начиная с 'Oliver' и вставить их в конец первого массива

const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];

// const slicedArr = arr2.slice(arr2.indexOf('Oliver'));

// const resultArr = arr.concat(slicedArr);

// console.log(resultArr);


// 5) Из второго массива скопировать 'Robert' и вставить меджу 'David' и 'Lambert'

// const indexRobert = arr2.indexOf('Robert');
// const indexLambert = arr.indexOf('Lambert');

// const copiedElement = arr2.slice(indexRobert, indexRobert + 1);

// arr.splice(indexLambert, 0, copiedElement.join());

// console.log(arr);






// function declaration - простое объявление функции в коде



// function greeting (text) {
//     // тело функции
//     // блок кода, который будет выполняться при вызове функции
//     console.log(`${text} from function`)
// }

// greeting('Hi');
// greeting('Hello');
// greeting('Good morning');
// greeting('Здарова');
// greeting('Приветики');


// function sum(a, b) {
//     const result = a + b;
//     return result;
//     console.log('После return'); // => не выполнится
// }

// const resultFunc = sum(2, 6);
// const resultFunc2 = sum(6, 10);
// const resultFunc3 = sum(9, 800);
// const resultFunc4 = sum(2, 660);

// console.log(resultFunc);




// Function Expression  - функциональное выражение

// func2();


// function func2 () {
//     console.log('hello from func declaration')
// }



// анонимные
// const func = function () {
//     console.log('Hello from func expression')
// }

// func();



// let userName = 'Евгений';
// let userSurname = 'Петрович';

// function getFullName(firstName, secondName) {
//     console.log(`Добро пожаловать, ${firstName} ${secondName}`);
// }

// getFullName(userName, userSurname);

// console.log(firstName) // => будет ошибка, параметры функции доступны только внутри функции


// const func = function () {
//     console.log('Hello from func expression')
// }

// console.log(func) // => function
// console.dir(func)


// Функция - объект первого класса
// функции можно присваивать переменным
// функции можно передавать как аргументы другим функциям
// функции можно возвращать из других функций


// let a = 5;
// let b = 10;

// function sumOfThreeNumbers(a, b, c) {

//     if (arguments.length === 3) {
//         console.log(a + b + c);
//     } else {
//         console.log('Не хватает аргументов');
//     }

//     // псевдо массив, у него нет методов массива, есть индексы и длина
//     // на этом всё сходство с массиов заканчивается
//     console.log(arguments);

//     // устаревший метод значений по умолчанию для параметров функции
//     // let aDefault = a || 0; 
//     // let bDefault = b || 0;

//     // внешнюю переменную a - не изменяет, а изменяет внутреннюю
//     // a += 10;

// }


// sumOfThreeNumbers(a, b, 10);

// console.log(a);


// Arrow function - стрелочная функция


// const func1 = (a = 2, b = 3) => {
//     console.log('Hello from arrow func', a)
// };

// func1(10);



// 1) Написать функцию-валидатор числа, которая принимает сроку и возвращает true, если эта строка может быть числом, false - если не может


// const validationNumber = (str) => {
//     const isNumber = Number(str);
//     if (!!isNumber) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const is359true = validationNumber('359');

// console.log(is359true);



// 2) Написать функцию, которая вычисляет среднее арифметическое за год (нужно передавать оценки за 4 четверти)


// function gerAverage (num1, num2, num3, num4) {
//     let result = (num1 + num2 + num3 + num4) / 4;
//     console.log(result);
//     return result;
// }


// gerAverage(6, 8, 9, 6);



// 3) Написать функцию, которая вычисляет процент побед. Функция принимает количество побед и поражений, и возвращает процент


const getPercent = function (wins, losses) {
    const allGames = wins + losses;
    const winsPercent = (wins / allGames) * 100;
    const lossesPercent = (losses / allGames) * 100;
    const message = `Процент побед: ${winsPercent.toFixed(2)}% и процент поражений ${lossesPercent.toFixed(2)}%`;
    console.log(message);
    return message;
};


getPercent(16, 9);
getPercent(10, 3);
