'use strict';//использование стандартов

let money = +prompt("Ваш бюджет на месяц?");
let timeData = new Date();
timeData = prompt("Введите дату в формате YYYY-MM-DD");

let expensesUser = prompt("Введите обязательную статью расходов в этом месяце");
let howManyUser = prompt("Во сколько обойдется?");
let optionalExpenses = {};
var income = [];
let savings = true;
let expenses = {
"expensesUser":"howManyUser"
}
let appData = {
    money,
    timeData,
    expenses,
    optionalExpenses,
    income,
    savings
};
alert("Ваш бюджет на 1 день = " + money/30);







/*var leftBorderWidth = 1234;
let second = 2;
const pi = 3.14;
var symb = '!';
console.log(4/0);//инфинит
console.log('string'*9);//nan
console.log(symb);
//console.log(something);//ошибка, null
let something;
console.log(something);//undefined
var obj = {}; //в скобках свойство или метод

var person = {
    name: "Ram",
    age: 26,
    isMarr: false
};
console.log(person.name+" "+person.age);

let arr = ['1.jpg','2.jpg','3.jpg','4.jpg'];
console.log(arr[2]);

//let answer = confirm("Ты тут?");
let answer = +prompt("Введите abc, чтоб подтвердить, что вы не оптимус прайм");//в консоль выстрелит ответ
//если бахнуть +перед переменной, то можно явно задать ей тип int
console.log(typeof(answer));//true-false, typeof выводит строку, но array выводит как obj. Null так же object

//console.log("arr" + " - obj");//concat
//nan - Not A Number?*/




