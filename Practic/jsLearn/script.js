// "use strict";


/*

var permisiion1 = {
    canEdit: "true",
}

var permisiion2 = {
    canAdd: "true",
}

var user = {
    name: "Pete",
}

Object.assign(user, permisiion1, permisiion2);

var answer = prompt("What would u like to know about user?", "here...");
alert(user[answer]);

for(var prop in user){
    alert(prop + " - " + user[prop]);
}

var object = {
    name: "cube",
    size: {
        height: "200px",
        width: "200px",
        length: "200px",
    }
}

for(var prop in object.size){
    alert(prop + " - " + object.size[prop]);
}

var clone = Object.assign({}, object);
clone.name = "rectangle";
clone.size.length = "400px";

for(var prop in clone.size){
    alert(prop + " - " + clone.size[prop]);
}

if(clone == object){
    alert("Equal");
} else {
    alert("Not equal");
}

*/

/*
function multiplyNumeric(obj){
    for(var prop in object){
        if(typeof object[prop] == 'number'){
            object[prop] *= 2;
        } else {
            continue;
        }
    }
}

function readObject(obj){
    for(var prop in obj){
        alert(prop + " -> " + obj[prop]);
    }
}

var object = {
    width: 200,
    length: 300,
    heigth: 400,
    name: "rectangle"
}

alert(multiplyNumeric(object));
alert(readObject(object));
*/

/*
var id = Symbol("id");
var object = {
    name: "Daniel",
    [id]: 123
};
*/

// var clone = Object.assign({}, object);
/*
var clone = new Object();
for(var prop in object){
    clone[prop] = object[prop];
}
alert(clone[id] + " -> " + clone.name);
*/

// function userCreate(){
//     return "Hello, world";
// }
//
// var result = userCreate;
// alert(result());

// function getAnswer(answer, yes, no){
//     if(confirm(answer)){
//         yes();
//     } else {
//         no();
//     }
// }
//
// function onYes(){
//     alert("YES!");
// }
//
// function onNo(){
//     alert("NO!");
// }
//
// getAnswer("Help me?", onYes(), onNo());


// function randomInteger(min, max){
//     return Math.round(min + Math.random(min, max) * (max-min));
// }
//
// alert(randomInteger(1, 10));

// function readNumber(value){
//     do{
//         if(isFinite(value)){
//             return alert("It's a number -> " + value);
//         } else if(value == ""){
//             return alert("Right decision");
//         } else {
//             return alert("Not value");
//         }
//     } while(isFinite(value) || value == "");
// }
//
// readNumber("daniel");

// var guestList = `Guests:
//  * John
//  * Pete
//  * Mary`;
//
// alert(guestList);

// var arr = ["apples", "oranges", "pineapples"];
// alert(arr[2]);
//
// var arr = new Array();
// for(var counter = 0; counter < 5; counter++){
//     arr[counter] = counter + 1;
//     alert(arr[counter]);
// }

// var styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.round((styles.length-1)/2)] = "Classics";
// alert(styles.shift());
// styles.unshift("Rap", "Reggae");
// alert(styles);

// function sumInput(){
//     var numbers = [];
//     while(true){
//         var number = prompt("Enter number: ", "Here...");
//         if(number == "" || number == null || !isFinite(number)){
//             break;
//         }
//         numbers.push(+number);
//     }
//
//     var Sum = 0;
//     for(var prop in numbers){
//         Sum += numbers[prop];
//     }
//     return Sum;
// }
//
// alert(sumInput());

// function ConCat(arr1, arr2){ // 2, 3
//     var newSize = arr1.length + arr2.length; // 5
//     var arr = new Array(newSize);
//     var count = 0;
//     for(var counter1 = 0; counter1 < arr1.length; counter1++){ // 0 -> 2
//         arr[counter1] = arr1[counter1];
//     }
//
//     for(var counter2 = arr1.length; counter2 < newSize; counter2++){ // 2 -> 5
//         arr[counter2] = arr2[count];
//         count++;
//     }
//
//     return arr;
// }
//
// alert(ConCat(["1", "2", 5, true], ["3", "4", "5", { name: "Dan" }]));

// function IndexOf(arr, item, from){
//     for(var counter = from; counter < arr.length; counter++){
//         if(arr[counter] == item)
//             return counter;
//     }
//     return -1;
// }
//
// function IndexOf(arr, item){
//     for(var counter = 0; counter < arr.length; counter++){
//         if(arr[counter] == item)
//             return counter;
//     }
//     return -1;
// }
//
// var Array = [5, 10, 15, 20, 25, 30, 35, 40];
// alert(IndexOf(Array, false));

// function ObjectAssign(obj1, obj2){
//     for(var prop in obj1){
//         obj2[prop] = obj1[prop];
//     }
// }
//
// var object1 = {
//     name: "Dan",
//     age: 16,
//     country: "Ukraine"
// };
//
// var object2 = new Object();
//
// ObjectAssign(object1, object2);
//
// for(var prop in object2){
//     alert(object2[prop]);
// }

// function power(x, n){
//     var result = 1;
//     for(var counter = 0; counter < n; counter++){
//         result *= x;
//     }
//     return result;
// }
//
// alert(power(2, 4));

// var company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],
//
//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],
//
//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

// function ReverseMode(array){
//     var Arr = new Array(array.length);
//     for(var counter1 = 0, counter2 = array.length - 1; counter1 < array.length; counter1++, counter2--){
//         Arr[counter1] = array[counter2];
//     }
//     return Arr;
// }
//
// alert(ReverseMode([1, 2, 3, 4, 5, 6, 7]));

// var users = ["Daniel", "Mark", "Ina"];

// var result = users.filter(item => item.id < 3);
// alert(result.length);

// var result = users.map(name => name.length);
// alert(result);

// var names = 'Bilbo, Gandalf, Nazgul';
//
// var arr = names.split(', ');
//
// for (let name of arr) {
//     alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// var user1 = {
//     name: "Dan"
// };
//
// var user2 = {
//     name: "Ina"
// };
//
// function hello(){
//     return this.name;
// }
//
// user1.func = hello;
// user2.func = hello;
//
// alert(user1.func());
// alert(user2.func());

// var number = 5;
// var array = ["Dan", "Mark"];
// alert(Array.isArray(array));

// function camelize(str){
//     var arr = str.split('-');
//     for(var counter = 0; counter < arr.length; counter++){
//         arr[0].toUpperCase();
//     }
//     var newArr = arr.join('');
//     return newArr;
// }
//
// var str = "border-left-width";
// alert(camelize(str));

// function FilterRange(arr, a, b){
//     var newArray = new Array(b - a);
//     var count = 0;
//     for(var counter = a; counter <= b; counter++){
//         newArray[count] = arr[counter];
//         count++;
//     }
//     return newArray;
// }
//
// var aRray = [3, 5 , 6 ,10, 11];
// alert(FilterRange(aRray, 1, 3));
// alert(aRray);

// function filterRangeInPlace(arr, a, b){
//     var newArray = new Array(b - a);
//     var count = 0;
//     for(var counter = a; counter < b; counter++){
//         newArray[count] = arr[counter];
//         count++;
//         delete arr[counter];
//     }
//
//     for(var counter = 0; counter < b - a; counter++){
//         arr.fill(newArray[counter]);
//     }
//
//     return arr;
// }
//
// var arr = [5, 1, 17, 8, 3, 5, 2];
// alert(filterRangeInPlace(arr, 1, 3));


// var john = { name: "John", age: 25 };
// var pete = { name: "Pete", age: 30 };
// var mary = { name: "Mary", age: 28 };
//
// var users = [ john, pete, mary ];
//
// var names = users.map(item => item.name);
// var ages = users.map(item => item.age);
//
// alert( names + " -> " + ages); // John, Pete, Mary

// var arr = ["apples", "oranges", "pineapples"];
// arr.splice(1, 1, "juice");
// alert(arr);

// var calculator = {
//     read: function() {
//         this.a = +prompt("Enter number1: ", "Here...");
//         this.b = +prompt("Enter number2: ", "Here...");
//     },
//
//     sum: function() {
//         return this.a + this.b;
//     },
//
//     mul: function () {
//         return this.a * this.b;
//     }
//
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// var ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // shows the current step
//         alert(this.step);
//         return this;
//     }
// };
//
// alert(ladder.up().up().down().showStep());

// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }
//
// function Admin(name){
//     this.name = name;
//     this.isAdmin = true;
// }
//
// var user1 = new User("Daniel");
// alert(user1.name + " -> " + user1.isAdmin);
// var user2 = new Admin("Mark");
// alert(user2.name + " -> " + user2.isAdmin);

// function User(name){
//     this.name = name;
//     this.func = function () {
//         alert(`My name is ${name}`);
//     }
// }
//
// var user = new User("Dan");
// user.func();

//
// function Calculator(){
//     this.read = function(){
//         this.number1 = +prompt("Enter number 1: ", "Here...");
//         this.number2 = +prompt("Enter number 2: ", "Here...");
//     };
//
//     this.sum = function(){
//         return this.number1 + this.number2;
//     };
//
//     this.mul = function(){
//         return this.number1 * this.number2;
//     };
// }
//
//
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue){
//     this.value = startingValue;
//
//     this.read = function(){
//         this.number = +prompt("Enter the number: ", "Here...");
//         this.value += this.number;
//     }
// }
//
// var accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values
//
// function Calculator(){
//
//     var methods = {
//         "+": (number1, number2) => number1 + number2,
//         "-": (number1, number2) => number1 - number2
//     };
//
//     this.calculate = function (arr) {
//         var newArray = arr.split(' ');
//         var number1 = +newArray[0];
//         var number2 = +newArray[2];
//         var operation = newArray[1];
//
//         if(!methods[operation] || isNaN(number1) || isNaN(number2)){
//             return NaN;
//         }
//
//         return methods[operation](number1, number2);
//     };
//
//     this.addMethod = function(name, func) {
//         methods[name] = func;
//     };
// }
//
// var powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// var result = powerCalc.calculate("20 ** 3");
// alert( result ); // 8

// var map = new Map();
// map.set("1", "Damn");
// map.set(1, "Dear");
// alert(map.get("1"));
// alert(map.get(1));
// alert(map.has("2"));

// var map = new Map([
//     ["apple", 800],
//     ["meizu", 100],
//     ["samsung", 750]
// ]);
//
// for(var key of map.keys()){
//     alert(key);
// }
//
// for(var prop of map.values()){
//     alert(prop);
// }
//
// for(var index of map){
//     alert(index);
// }

// var map = new Map([
//     ["apple", 800],
//     ["meizu", 200]
// ]);
//
// map.forEach((value, key, map) => {
//     alert(`${key} : ${value}`);
// });

// var marry = { name: "Marry" };
// var john = { name: "John" };
// var lily = { name: "Lily" };
//
// var set = new Set();
// set.add(marry);
// set.add(john);
// set.add(lily);
// alert(set.size);
// set.delete(john);
// alert(set.size);
//
// for(var key of set.keys()){
//     alert(key.name);
// }
//
// for(var prop of set){
//     alert(prop);
// }

// function unique(arr) {
//     return Array.from(new Set(arr));
// }
//
// var values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare, Krishna, :-O
//
// function aclean(arr){
//     var map = new Map();
//
//     for (var word of arr) {
//         var sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//
//     return Array.from(map.values());
// }
//
// var arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) );

// var map = new Map();
//
// map.set("name", "John");
//
// var keys = Array.from(map.keys());
//
// // Error: numbers.push is not a function
// keys.push("more");
//
// alert(keys);

// var messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//
// var readMessages = new Set();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
//
// readMessages.add(messages[0]);
//
// alert(readMessages.has(messages[0]));
//
// messages.shift();

// function sumSalaries(salaries){
//     var summary = 0;
//     for(var value of Object.values(salaries)){
//         summary += value;
//     }
//     return summary;
// }
//
// var salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// alert( sumSalaries(salaries) );

// function count(obj){
//     var Count = 0;
//     for(var prop in Object.values(obj)){
//         Count++;
//     }
//     return Count;
// }
//
// var user = {
//     name: 'John',
//     age: 30
// };
//
// alert( count(user) );

// let [firstName, surname] = "Dan Orel".split(' ');
// alert(firstName + " " + surname);

// let user = {
// //     name: "Dan",
// //     age: 17
// // };
// //
// // for(let [key, prop] of Object.entries(user)){
// //     alert(`${key} -> ${prop}`);
// // }

// let map = new Map();
// map.set("Dan", 17);
// map.set("Ina", 50);
//
// for(let [key, value] of map.entries()){
//     alert(`${key} -> ${value}`);
// }

// let [key, value, word, letter] = [1, "51", "holy", ];
// // alert(key + " " + value + " " + word + " " + letter);

// let object = {
//     width: 100,
//     height: 200,
//     length: 50,
//     name: "something"
// };
//
// let {width, height, length, name} = object;
// alert(width);
// object.width = 200;
// alert(width);

// let [key, value, ...rest] = ["Age", "17", "Dan", "Idiot", "Foundation"];
// alert(rest);

// let options = {
//     sizes: {
//         width: 100,
//         height: 50,
//         length: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };
//
// let {
//     sizes: {
//         width,
//         height,
//         length
//     },
//     items: [item1, item2],
//     title = "Menu"
// } = options;
//
// alert(item1);

// let UI = {
//     title: "Main Menu",
//     items: [" Input/Output form", " Window form"]
// };
//
// function createUI({title = "Untitled", width = 200, height = 150, items = []}) {
//     alert(`${title}, sizes: ${width}x${height}`);
//     alert(`Contain:` + items);
// }
//
// createUI(UI);

// let user = {
// //     name: "John",
// //     years: 30
// // };
// //
// // let {name, years: age, isAdmin = false} = user;
// //
// // alert( name ); // John
// // alert( age ); // 30
// // alert( isAdmin ); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// function topSalary(salaries) {
//     let maxValue = 0;
//     let maxPaid = null;
//
//     for(let [person, value] of Object.entries(salaries)){
//         if(maxValue <= value){
//             maxValue = value;
//             maxPaid = person;
//         }
//     }
//     return maxPaid;
// }
//
// alert(topSalary(salaries));

// let start = new Date();
// let doSomething = 1;
// for(let i = 1; i <= 100; i++){
//     doSomething *= i;
// }
// let end = new Date();
// alert(`To carry out this cycle need over ${end-start}ms`);
// alert(doSomething);

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }
//
// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }
//
// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
//
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }
//
// alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

// let ms = new Date( Date.parse('2014-04-12T13:54:13.156-02:00'));
//
// alert(ms);
//
// let milis = Date.parse('2014-04-12T13:54:13.156-02:00');
//
// alert(milis);

// let date = new Date(2012, 0, 20, 3, 12);
//
// alert(date);

// let date = new Date(2018, 0, 3);
//
// function getWeekDay(date) {
//     let dates = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//     return dates[date.getDay()];
// }
//
// function getLocalDay(date) {
//     let day = date.getDay();
//     let dates = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
//     if (day == 0){
//         day = 7;
//     }
//     return dates[day];
// }
//
// alert(getWeekDay(date));
// alert(getLocalDay(date));

// function getDateAgo(date, days) {
//     let editDate = new Date(date);
//     editDate.setDate(date.getDate() - days);
//     return editDate.getDate();
// }
//
// let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// let date = new Date(2015, 0, 2);
//
// alert(date.getDate() + 2);
//
// let newDate = new Date(date);

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
//
// alert(getLastDayOfMonth(2012, 1));

// function getSecondsToday(){
// //     let now = new Date();
// //     let h = now.getHours();
// //     let m = now.getMinutes();
// //     let s = now.getSeconds();
// //     let ms = now.getMilliseconds();
// //     let summary = h * 3600 + m * 60 + s + Math.round(ms/1000);
// //     return summary
// // }
// //
// // alert(getSecondsToday());

// let student = {
//     name: "Dan",
//     age: 17,
//     university: "K-M academy",
//     speciality: "programming"
// };
//
// let json = JSON.stringify(student);
// alert(json);
// alert(typeof json);
//
// let reJson = JSON.parse(json);
// alert(reJson);
// alert(typeof reJson);

// let room = {
//     number: 17
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{ name: "Dan" }, { name: "Marry"}],
//     place: room
// };
//
// room.occupiedBy = meetup;
//
// alert( JSON.stringify( meetup,  function replacer(key, value) {
//     alert(`${key} -> ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

// let room = {
//     number: 17
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{ name: "Dan" }, { name: "Marry"}],
//     place: room
// };
//
// alert( JSON.stringify(meetup, null, 4));

// let room = {
//     number: 23,
//     // toJSON() {
//     //     return this.number;
//     // }
// };
//
// let meetup = {
//     title: "Conference",
//     room
// };
//
// alert( JSON.stringify(meetup, null, 1) );

// let json = '{"name": "Dan", "age": "17", "employment": "none"}';
// let object = JSON.parse(json);
// alert(object.name);

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
//
// let holyday = JSON.parse(schedule, function review(key, value){
//     if(key == "date") return new Date(value);
//     return value;
// });
//
// alert(holyday.meetups[0].date.getDate());

// let user = {
//     name: "John Smith",
//     age: 35
// };
//
// let json = JSON.stringify(user, null, 1);
// alert(json);
// let reJson = JSON.parse(json);
// alert(reJson);
//
// let company = { // the same object, compressed for brevity
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// function getSummary(department){
//     if(Array.isArray(department)){
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for( let subcase of Object.values(department)){
//             sum += getSummary(subcase);
//         }
//         return sum;
//     }
// }
//
// alert(getSummary(company));

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// alert(list.next.next.value);
//
// let newList = list.next.next.next;
// list.next.next.next = null;
//
// alert(newList.value);

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
//
// list = { value: 0, next: list };

// function sumTo(n) {
//     if(n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }
//
// alert(sumTo(100));

// function sumTo(n) {
//     let sum = 0;
//     for( let counter = 1; counter <= n; counter++ ){
//         sum += counter;
//     }
//     return sum;
// }
//
// alert(sumTo(100));

// function sumTo(n) {
//     return ((((2 * 1) + 1 * (n - 1))/2)*n)
// }
//
// alert(sumTo(100));

// function fib(n) {
//     if(n <= 1){
//         return n;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }
//
// alert(fib(77));

// function printList(list) {
//     if(list.next == null){
//         return "completed";
//     } else {
//         alert(list.value);
//         let newList = list.next;
//         return printList(newList);
//     }
// }
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// alert(printList(list));

// function sayHi() {
//     alert("Hello, world!");
// }
//
// setTimeout(sayHi, 2000);

// function call(phrase, who) {
//     alert(phrase + ", " + who);
// }
//
// setTimeout(call, 1000, "Hi", "Daniel");

// setTimeout((who) => alert("Hello, " + who), 1000, "Daniel");

// repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 1000);
// //
// // // after 5 seconds stop
// // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//
// }, 2000);
//
// let timerID = setInterval(() => alert("Tick"), 1000);
//
// timerID = setTimeout(() => { clearInterval(timerID); alert====---00998877665544332211qwertyuioop[]\';lkjhgfds=====

// let i = 0;
//
// let start = Date.now();
//
// function count() {
//
//     // do a piece of the heavy job (*)
//     do {
//         i++;
//     } while (i % 1e6 != 0);
//
//     if (i == 1e9) {
//         alert("Done in " + (Date.now() - start) + 'ms');
//     } else {
//         setTimeout(count, 0); // schedule the new call (**)
//     }
//
// }
//
// count();

// let i = 0;
//
// let start = Date.now();
//
// function count() {
//
//     // move the scheduling at the beginning
//     if (i < 1e9 - 1e6) {
//         setTimeout(count, 0); // schedule the new call
//     }
//
//     do {
//         i++;
//     } while (i % 1e6 != 0);
//
//     if (i == 1e9) {
//         alert("Done in " + (Date.now() - start) + 'ms');
//     }
//
// }
//
// count();

// let start = Date.now();
// let times = [];
//
// setTimeout(function run() {
//     times.push(Date.now() - start); // remember delay from the previous call

//     if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
//     else setTimeout(run, 0); // else re-schedule
// }, 0);

// function slow(x) {
//     alert(`Called with ${x}`);
//     return x;
// }
//
// function cachingDecorator(func) {
//     let cache = new Map();
//
//     return function() {
//         if(cache.has(x)){
//             return cache.get(x);
//         } else {
//             let result = func(x);
//
//             cache.set(x, result);
//             return result;
//         }
//     }
// }
//
//
//
// slow = cachingDecorator(slow);
//
// alert( slow(1) ); // slow(1) is cached
// alert( "Again: " + slow(1) ); // the same
//
// alert( slow(2) ); // slow(2) is cached
// alert( "Again: " + slow(2) ); // the same as the previous line

// let worker = {
//     slow(min, max) {
//         return min + max;
//     }
// };
//
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x, y){
//         if(cache.has(x) && cache.has(y)) {
//             return cache.get(x) + cache.get(y);
//         }
//
//         let result = func.call(this, x, y);
//         cache.set(x, result);
//         cache.set(y, result);
//         return result;
//     }
// }
//
// alert(worker.slow(1, 2));

// let user = {
//     firstName: "John",
//     sayHi() {
//         alert(`Hello, ${this.firstName}!`);
//     }
// };
//
// setTimeout(() => user.sayHi(), 1000); // Hello, undefined!
//
// let object = user;
// user = null;
//
// setTimeout(() => object.sayHi(), 1000); // Hello, undefined!

// let user = {
//     name: "Daniel"
// };
//
// function func() {
//     alert("Hello, " + this.name);
// }
//
// let funcUser = func.bind(user);
// funcUser();

// let user = {
//     name: "Daniel",
//     saySmth(phrase) {
//         alert(phrase + ", " +this.name);
//     }
// };
//
// let userHi = user.saySmth.bind(user);
// userHi("Hello");
//
// function multi(num1, num2) {
//     return num1 * num2;
// }
//
// let result = multi.bind(null, 3);
// for(let i = 1; i <= 10; i++ ){
//     alert(result(i));
// }

// let user = {
//     name: "Daniel"
// };
//
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// alert(JSON.stringify(descriptor, null, 2));
//
// Object.defineProperty(user, 'surname', {
//     value: "Orel"
// });
//
// let descr = Object.getOwnPropertyDescriptor(user, 'surname');
// alert(JSON.stringify(descr, null, 2));
// user.surname = "Krikynov";
// alert(user.surname);

// let user = { };
// Object.defineProperties(user, {
//     name: {value: "Daniel", writable: true},
//     surname: {value: "Orel", writable: true }
// });
//
// alert(user.name + " " + user.surname);
//
// let user = {
//     name: "Daniel",
//     surname: "Orel",
//     status: "admin"
// };
//
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
//
// alert(JSON.stringify(Object.getOwnPropertyDescriptors(clone), null, 2));

// let user = {
//     set propSetName(n) {
//         Object.defineProperty(user, 'name', { value: n, writable: false });
//     },
//     set propSetSurname(s) {
//         Object.defineProperty(user, 'surname', { value: s, writable: false });
//     },
//     get propInfo() {
//         alert(this.name + " " + this.surname);
//     },
// };
//
// user.propSetName = "Daniel";
// user.propSetSurname = "Orel";
// user.propInfo;

// function User(name, surname, birthday) {
//     this.name = name;
//     this.surname = surname;
//     Object.defineProperty(this, 'age', {
//         get() {
//             let today = new Date().getFullYear();
//             return today - this.birthday.getFullYear();
//         },
//     })
// }
//
// let user = new User("Daniel", "Orel", new Date(2000, 4, 12));
// alert(user.name + " " + user.surname + " " + user.birthday);
//
// let animal = {
//     eats: true,
//     walk() {
//         alert("It walks!");
//     }
// };
//
// let rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal;
// alert(rabbit.eats);
// rabbit.walk();

// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walks!");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// rabbit.walk = function() {
//     alert("Rabbit walks");
// };
//
// rabbit.walk();
//
// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(string) {
//         [this.name, this.surname] = string.split(" ");
//     },
//
//     get fullName() {
//         alert(this.name + " " + this.surname);
//     }
// };
//
// let admin = {
//     isAdmin: true,
//     __proto__: user
// };
//
// admin.fullName("Daniel Orel");
// admin.fullName;
//
// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// let start1 = new Date();
// alert(pockets.pen);
// let end1 = new Date();
// alert(end1 - start1 + "ms");
//
// let start2 = new Date();
// alert(bed.glasses);
// let end2 = new Date();
// alert(end2 - start2 + "ms");

// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster
// };
//
// let lazy = {
//     __proto__: hamster
// };
//
// speedy.eat("apple");
// alert(speedy.stomach);
//
// alert(lazy.stomach);
//
// let animal = {
//     eats: true
// };
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;

// function makeCounter() {
//     let CurrentCounter = 1;
//     return {
//         getNext: function () {
//             return CurrentCounter++;
//         },
//
//         set: function(value) {
//             CurrentCounter = value;
//         },
//
//         reset: function() {
//             CurrentCounter = 1;
//         }
//     }
// }
//
// var counter = makeCounter();
// counter.set(3);
// alert(counter.getNext());
// counter.reset();
// alert(counter.getNext());

// function Summary(number1) {
// //     return function (number2) {
// //         return number1 + number2;
// //     }
// // }
// //
// // alert(Summary(1)(2));

// function makeBuffer() {
//     let text = "";
//
//     return function(piece) {
//         if(arguments.length == 0) {
//             return text;
//         }
//         text += piece;
//     }
// }
//
// let buffer = makeBuffer();
//
// buffer("Hello, ");
// buffer("Daniel!");
// buffer();

// function Notes() {
//     let notebook = new Map();
//     let currentPage = 1;
//     return {
//         nextPage: function() {
//             currentPage++;
//         },
//
//         previusPage: function() {
//             currentPage--;
//         },
//
//         addNotes: function(notes) {
//             if(notebook.has(currentPage)){
//                 if(confirm("Delete page?")){
//                     notebook.set(currentPage, notes);
//                 }
//             } else {
//                 notebook.set(currentPage, notes);
//             }
//         },
//
//         getNotes: function() {
//             alert(notebook.get(currentPage));
//         }
//     }
// }
//
// let noteBook = Notes();
// noteBook.addNotes("Daniel Orel");
// noteBook.getNotes();
// noteBook.nextPage();
// noteBook.addNotes("Programming - pretty useful kind of employment!");
// noteBook.getNotes();
// noteBook.previusPage();
// noteBook.getNotes();
// noteBook.addNotes("Wtf");
// noteBook.getNotes();

// window.a = 5;
// alert(a);

// (function () {
//     let message = "Hello!";
//     function showMessage() {
//         alert(message);
//     }
//     showMessage();
// }());

// function sumTo(n) { // обычный цикл 1+2+...+n
//     var result = 0;
//     for (var i = 1; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }
//
// function sumToRec(n) { // рекурсия sumToRec(n) = n+SumToRec(n-1)
//     return n == 1 ? 1 : n + sumToRec(n - 1);
// }
//
// var timeLoop = performance.now();
// for (var i = 1; i < 1000; i++) sumTo(1000); // цикл
// timeLoop = performance.now() - timeLoop;
//
// var timeRecursion = performance.now();
// for (var i = 1; i < 1000; i++) sumToRec(1000); // рекурсия
// timeRecursion = performance.now() - timeRecursion;
//
// alert( "Разница в " + (timeRecursion / timeLoop) + " раз" );

// var obj = {
//     weight: 10
// };
//
// with(obj) {
//     weight = 20; // (1)
//     size = 35; // (2)
// }
//
// alert( obj.size ); // undefined
// alert( window.size ); // 35

// let object = {
//     animal: "humanoid",
//     name: "Daniel",
//     toString: function() {
//         return this;
//         }
//  alert(object);

// function Summary(a){
//     return function(b) {
//         return a + b;
//     }
// }
//
// alert(Summary(1)(2));
//
// new Date(0) - 0  -> 0
// new Array(1)[0] + "" -> undefined
// ({})[0] -> undefined
//     [1] + 1 -> 11
//     [1,2] + [3,4] -> 1,23,4
//     [] + null + 1 -> null1
//     [[0]][0][0] -> 0
// ({} + {}) -> + {}

// function Journal(date) {
//     this.date = date;
// }
//
// Journal.compare = function(journalA, journalB) {
//     return journalA.date - journalB.date;
// };
//
// let journal1 = new Journal(new Date(2000, 12, 4));
// let journal2 = new Journal(new Date(1994, 4, 18));
// alert(Journal.compare(journal1, journal2) + " ms difference");

// function Article() {
//     Article.count++;
// }
//
// Article.count = 0;
//
// Article.showCount = function() {
//     alert(Article.count);
// };
//
// new Article();
// new Article();
// Article.showCount();
//
// function copy() {
//     let object = arguments[0];
//     for (let count = 1; count < arguments.length; count++) {
//         let arg = arguments[count];
//         for (let key in arg) {
//             object[key] = arg[key];
//         }
//     }
//     return object;
// }
//
// let user = {
//     isUser: true,
//     isEmailConfirmed: true
// };
//
// let admin = {
//     isAdmin: true,
//     hasEditOpportunities: true
// };
//
// let daniel = {
//     name: "Daniel",
//     age: 17
// };
//
// let KMA = {
//     isStudent: true
// };
//
// copy(daniel, user, admin, KMA);
//
// for(let key in daniel){
//     alert(daniel[key] + " -> " + key);
// }
//
// let arr = new Array(10);
// for(let i = 0; i < 10; i++){
//     arr[i] = i + 1;
// }
//
// arr.forEach(function(item, i, arr){
//     alert(item + ", " + i + ", " + arr);
// });

// let array = [1, -5, 2, -3, 3];
// // // //
// // // // let possitiveArray = array.filter(function(item){
// // // //     return item > 0;
// // // // });
// // // //
// // // //

// let Array = ["HTML", "CSS", "JavaScript"];
//
// let lengthfilter = Array.filter(function(length, i){
//     return Array[i].length > 4;
// });
//
// alert(lengthfilter);
//
// let user = new Object();
//
// Object.defineProperty(user, name, {
//     value: "Daniel",
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
//
// for(let key in user){
//     alert(user[key] + " " + key);
// }
//
// delete user.name;
//
// for(let key in user){
//     alert(user[key] + " " + key);
// }

// function User(name, birthday) {
// //     this.name = name;
// //     this.birthday = birthday;
// //     Object.defineProperty(this, "age", {
// //         get: function(){
// //             let today = new Date();
// //             let delta = today.getFullYear() - this.birthday.getFullYear();
// //
// // if (today.getMonth() > this.birthday.getMonth() ||
// //     (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
// //     return delta;
// // }
// //
// // return delta - 1;
// // },
// // writable: true,
// //     enumerable: true
// // });
// // }
// //
// // let Daniel = new User("Daniel", new Date(2000, 10, 4));
// //
// // alert(Daniel.birthday.getFullYear());

// function Article() {
//     Article.counter++;
// }
//
// Article.counter = 1;
//
// Article.showCounter = function(){
//     return this.counter;
// };
//
// new Article();
// new Article();
// alert(Article.showCounter());


// Date.format = function(journal) {
//
// };
//
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//
//     Object.defineProperty(this, "Journal", {
//         set: function s(date){
//             this.date = date;
//         },
//         get: function g() {
//             let arr = [];
//             arr.forEach(function (item, i, arr){
//                 arr[i] = arguments[i];
//             });
//             arr.split(' ');
//             arr.join('.');
//             return arr;
//         },
//         writable: true,
//         enumerable: true,
//         configurable: true
//     });
// }
//
// let daniel = new User("Daniel", 17);
// alert(daniel.g());
//
// function Journal(date) {
//     this.date = date;
//
//     this.formatDate = function(date) {
//         return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
//     };
//
//     this.getTitle = function() {
//         return "Выпуск от " + this.formatDate(this.date);
//     };
//
// }
//
// Journal.compare = function(journalA, journalB) {
//     return journalA.date - journalB.date;
// };
//
// // использование:
// var journals = [
//     new Journal(new Date(2012, 1, 1)),
//     new Journal(new Date(2012, 0, 1)),
//     new Journal(new Date(2011, 11, 1))
// ];
//
// function findMin(journals) {
//     var min = 0;
//     for (var i = 0; i < journals.length; i++) {
//         // используем статический метод
//         if (Journal.compare(journals[min], journals[i]) > 0) min = i;
//     }
//     return journals[min];
// }
//
// alert( findMin(journals).getTitle() );

// function showfullname() {
//     alert( this.name + " " + this.surname);
// }
//
// let user = {
//     name: "Daniel",
//     surname: "Orel"
// };
//
// showfullname.call(user);

// function joinArgs() {
//     arguments.join = [].join;
//     let args = arguments.join(':');
//     return args;
// }
//
// alert(joinArgs(12, 52, 46));

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// //
// // let arrLength = arr.map(function(item){
// //     return item.length;
// // });
// //
// // alert( arrLength ); // 4,5,2,5

// let arr = [1, 2, 3, 4, 5];
// //
// // function getSums(){
// //     let result = [];
// //     if(arguments.length === 0) return result;
// //     arr.reduce(function(sum, current){
// //         result.push(sum);
// //         return sum + current;
// //     }, 0);
// //
// //     return result;
// // }
// //
// // alert(getSums(arr));

// function sumArgs() {
//     arguments.reduce = [].reduce;
//     return arguments.reduce(function(last, current){
//         return last + current;
//     }, 0);
// }
//
// alert( sumArgs(1, 2, 3) );

// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//     return [].reduce.call(arguments, function(a, b) {
//         return a * b;
//     });
// }
//
// function applyAll(){
//
// }
//
// alert(applyAll(mul, 1, 2, 3));

// function printArgs() {
//     let Args = [].slice.call(arguments);
//     alert(Args);
// }
//
// let user = {
//     name: "Dan",
//     surname: "Orel",
//     length: 2
// };
//
// printArgs(user);

// let arr = [];
// arr.push(5);
// arr.push(3);
// arr.push(1);
// alert(Math.max.apply(null, arr));
//
// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//     return [].reduce.call(arguments, function(a, b) {
//         return a * b;
//     });
// }
//
// function applyAll(func) {
//     return func.apply(this, [].slice.call(arguments, 1));
// }
//
// alert( applyAll(sum, 1, 2, 3) );
// alert( applyAll(Math.max, 2, -2, 3) );

// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// let arrLength = arr.map(function(item){
//     return item.length;
// });
//
// alert( arrLength ); // 4,5,2,5

// function camelize(str) {
//     let Str = str.split('-');
//     for(let counter = 1; counter < Str.length; counter++) {
//         Str[counter] = Str[counter].charAt(0).toUpperCase() + Str[counter].slice(1);
//     }
//     return Str.join('');
//
// }
//
// alert(camelize("background-color-main"));

// let obj = {
//     className: 'open menu menu obj menu'
// };
//
// function removeClass(obj, attribute) {
//     let arr = obj.className.split(' ');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == attribute) {
//             arr.splice(i, i + 1);
//         }
//     }
//     return arr.join(' ');
// }
//
// alert(removeClass(obj, "menu"));

// function unique(arr) {
//     let set = new Set();
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!set.has(arr[i])){
//             set.add(arr[i]);
//             newArray[i] = arr[i];
//         }
//     }
//     return newArray;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// alert( unique(strings) ); // кришна, харе, 8-()

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user1 = new User("Dan", 17);
// let user2 = new User("Ina", 50);
//
// alert(user1.age);
// alert(user1.name);
// alert(user2.age);
// alert(user2.name);

//
// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// // function compare(num1, num2) {
// //     return num2 - num1;
// // }
//
// let set = new Set();
// let arr = [];
// let arrSize = 10;
// for(let counter = 0; counter < arrSize; counter++) {
//     arr[counter] = getRandom(1,10);
// }
// alert(arr);
// let minNumber = arr[0];
// let minSecNumber = arr[1];
//
// for(let counter = 2; counter < arrSize; counter++) {
//     if(arr[counter] < minNumber) minNumber = arr[counter];
// }
// alert(minNumber);



//
// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// let arr1 = [4, 7, 4, 5, 1, 3];
// let arr2 = [6, 5, 3, 4, 8, 4];
//
// let arr3 = [];
// arr3.length = arr1.length + arr2.length;
//
// for(let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i];
// }
//
// for(let j = arr1.length, i = 0; j < arr3.length; j++, i++) {
//     arr3[j] = arr2[i];
// }
//
// let sortedArr3 = arr3.sort();
// alert(sortedArr3);

// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// class Stack {
//     constructor() {
//         this.items = [];
//     }
//
//     push(value) {
//         this.items.push(value);
//     }
//
//     popAll() {
//         do{
//             this.pop();
//         } while (!this.isEmpty());
//     }
//
//     pop() {
//         if(this.isEmpty()) {
//             return "Can't pop, not elements in stack!";
//         }
//         this.items.pop();
//     }
//
//     isEmpty() {
//         if(this.items.length == 0) return true;
//         return false;
//     }
// }
//
// let stack = new Stack();
// let size = 10;
// for(let counter = 0; counter < size; counter++) {
//     stack.push(getRandom(1, 10));
// }
//
// alert(stack.items);
//
// stack.popAll();
//
// alert(stack.items);

// function getRandom(min, max) {
// //     return Math.round(Math.random() * (max - min) + min);
// // }
// //
// // class Queue {
// //     constructor() {
// //         this.items = [];
// //     }
// //
// //     Enqueue(element) {
// //         this.items.push(element);
// //     }
// //
// //     Dequeue() {
// //         if(this.isEmpty()) return "Queue is empty! Fill it before cleaning";
// //         this.items.shift();
// //     }
// //
// //     isEmpty() {
// //         if(this.items.length == 0) return true;
// //         return false;
// //     }
// //
// //     Top() {
// //         if(this.isEmpty()) return "Fill in queue before asking its' front!";
// //         return this.items[0];
// //     }
// //
// //     printQueue() {
// //         let str = "";
// //         for(let i = 0; i < this.items.length; i++) {
// //             str += this.items[i] + " ";
// //         }
// //         alert(str);
// //     }
// //
// //     deleteTop() {
// //         if(this.isEmpty()) return "Fill in queue before asking its' deleting!";
// //         delete this.items[0];
// //     }
// //
// //     deleteQueue() {
// //         for(let i = 0; i < queue.items.length; i++) {
// //             delete queue.items[i];
// //         }
// //     }
// // }
// //
// // let size = 10;
// // let queue = new Queue();
// // for(let counter = 0; counter < size; counter++) {
// //     queue.Enqueue(getRandom(1, 10));
// // }
// // queue.printQueue();
// // alert(queue.Top());
// // queue.deleteTop();
// // alert(queue.items);

// function linkedList() {
//     this.head = null;
//     this.tail = null;
// }
//
// function Node(value, next, previous) {
//     this.value = value;
//     this.next = next;
//     this.previous = previous;
// }
//
// linkedList.prototype.addToHead() {
//
// }

// let user = {
//     name: "Dan"
// };

// let strMap = new Map();
// strMap.set(user, 1);
// alert(strMap.size);
// user = null;
// alert(strMap.size);

// let wkMap = new WeakMap();
// wkMap.set(user, 2);
// alert(wkMap.size);
// user = null;
// alert(wkMap.size);


// function f(x) {
//     alert( x );
// }
//
// function delay(f, ms) {
//
//     return function() {
//         let savedThis = this;
//         let savedArgs = arguments;
//
//         setTimeout(function() {
//             f.apply(savedThis, savedArgs);
//         }, ms);
//     };
//
// }
//
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

//
// let data = '{ "age": 18 }';
// let warning = "Lack Of Data";
// try {
//     let user = JSON.parse(data);
//     if(!user.name) throw new SyntaxError(warning);
// } catch(error) {
//     alert(error.name);
//     alert(error.message);
// }

// function CoffeeMachine(power) {
// //     this.waterAmount = 0;
// //     let WATER_HEAT_CAPACITY = 4200;
// //
// //     let self = this;
// //     let timerID;
// //
// //     function getBoilTime() {
// //         return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
// //     }
// //
// //     function onReady() {
// //         alert( 'Кофе готово!' );
// //     }
// //
// //     this.stop = function() {
// //         clearTimeout(timerID);
// //     };
// //
// //     this.run = function() {
// //         timerID = setTimeout(onReady, getBoilTime());
// //     };
// //
// // }
// //
// // let coffee = new CoffeeMachine(100);
// // coffee.Mass = 200;
// // coffee.run();
// // coffee.stop();

//
// function CoffeeMachine(power, capacity) {
//     let waterAmount = 0;
//     let C = 4200;
//     let timerID;
//     function getBoilTime() {
//         return C * waterAmount * 80 / power;
//     }
//
//     function onReady() {
//         alert("Coffee is ready!");
//     }
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime());
//     };
//
//     this.stop = function() {
//         clearTimeout(timerID);
//     };
//
//     this.setWaterAmount = function(amount) {
//         if(amount < 0) {
//             throw new Error("Value must be positive");
//         }
//         if(amount > capacity) {
//             throw new Error("Value must be smaller than capacity");
//         }
//
//         waterAmount = amount;
//     };
//
//     this.getWaterAmount = function() {
//         return waterAmount;
//     };
// }
//
// let coffee = new CoffeeMachine(1000, 400);
// coffee.setWaterAmount(500);
// coffee.getWaterAmount();
//
// function User() {
//     let firstName, surname;
//     this.setFirstName = function(name) {
//         // if(arguments.length == 0) {
//         //     firstName = "Anonymous";
//         //     throw new Error("Name is absent!");
//         // }
//         firstName = name;
//     };
//
//     this.setSurname = function(Surname) {
//         // if(arguments.length == 0) {
//         //     surname = "Anonymous";
//         //     throw new Error("Surname is absent!");
//         // }
//         surname = Surname;
//     };
//
//     this.getFullName = function() {
//         return surname + " " + firstName;
//     }
// }
//
// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
//
// alert( user.getFullName() ); // Петя Иванов
//
// function CoffeeMachine(power, capacity) {
//     let timerID;
//     let C = 4200;
//     let waterAmount = 0;
//     let temp = 80;
//     function onReady() {
//         alert("Coffee is ready!");
//     }
//
//     function getBoilTime() {
//         return C * waterAmount * temp / power;
//     }
//
//     this.run = function() {
//         timerID = setTimeout(onReady, getBoilTime());
//     };
//
//     this.stop = function() {
//         clearTimeout(timerID);
//     };
//
//     this.setWaterAmount = function(amount) {
//         if (amount < 0) {
//             throw new Error("Значение должно быть положительным");
//         }
//         if (amount > capacity) {
//             throw new Error("Нельзя залить воды больше, чем " + capacity);
//         }
//
//         waterAmount = amount;
//     };
//
//     this.getWaterAmount = function() {
//         return waterAmount;
//     };
//
//     this.getMachinePower = function() {
//         return power;
//     };
//
//     this.addWater = function(water) {
//         if(waterAmount + water > capacity) {
//             throw new Error("Too much water, caution!");
//         }
//         if(waterAmount + water < 0) {
//             throw new Error("U've poor out the water");
//         }
//
//         waterAmount += water;
//     };
//
//     this.isRunning = function() {
//         if(this.run()) {
//             return true;
//         } else return false;
//     }
// }
//
// let coffee = new CoffeeMachine(1000, 500);
// coffee.setWaterAmount(200);
// alert(coffee.getMachinePower());
// coffee.addWater(100);
// coffee.addWater(300);
// coffee.run();
// alert(coffee.getWaterAmount());

// function Machine() {
//     let state = false;
//     this.enable = function() {
//         return true;
//     };
//
//     this.disable = function() {
//         return false;
//     }
// }
//
// function CoffeeMachine(power, capacity) {
//     Machine.call(this);
//     let C = 4200;
//     let waterAmount = 0;
//     let Temperature = 80;
//     function getBoilTime() {
//         return C * waterAmount * Temperature / power;
//     }
//
//     function onReady() {
//         alert("Coffee is ready!");
//     }
//
//     this.run = function() {
//         if(this.enable()) {
//             setTimeout(onReady, getBoilTime());
//         } else {
//             alert("Coffee running is failed! Enable the machine");
//         }
//     }
// }
//
// let coffee = new CoffeeMachine(220, 400);
// coffee.enable();
// coffee.run();
// coffee.disable();

// function Machine() {
//     this.state = false;
//     this.enable = function() {
//         this.state = true;
//     };
//     this.disable = function() {
//         this.state = false;
//     }
// }
//
// function CoffeeMachine() {
//     Machine.call(this);
//     let timerID;
//
//     function onReady() {
//         alert("Coffee is ready!");
//     }
//
//     this.run = function() {
//         if(this.state) {
//             timerID = setTimeout(onReady, getBoilTime());
//         } else {
//             this.stop();
//         }
//     };
//
//     this.stop = function() {
//         if(this.state) {
//             clearTimeout(timerID);
//         } else {
//             alert("Machine is already stopped!");
//         }
//     }
//
//
// }
//
// let coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();

// function Machine() {
//     this.state = false;
//     this.enable = function() {
//         this.state = true;
//     };
//     this.disable = function() {
//         this.state = false;
//     }
// }
//
// function Fridge(power) {
//     Machine.call(this);
//     let food = [];
//     let maxFoodCount = Math.round(power/100);
//     this.addFood = function() {
//         if(this.state && maxFoodCount > food.length){
//             if(arguments.length === 0) {
//                 alert("Nothing to add!");
//             } else if(arguments.length === 1) {
//                 food.push(arguments[0]);
//                 alert("You've recently added new item - " + arguments[0]);
//             } else {
//                 for(let counter = 0; counter < arguments.length; counter++) {
//                     food.push(arguments[counter]);
//                 }
//             }
//         } else {
//             alert("Adding food is not allowed! Enable this option or free the fridge.");
//         }
//     };
//
//     this.getFood = function() {
//         return food;
//     }
// }


// function Machine(power) {
//     this._enabled = false;
//
//     this.enable = function() {
//         this._enabled = true;
//     };
//
//     this.disable = function() {
//         this._enabled = false;
//     };
// }
//
// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//
//     let waterAmount = 0;
//     let timerId;
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
//     function onReady() {
//         alert('Кофе готов!');
//     }
//
//     let parentDisable = this.disable;
//
//     this.disable = function() {
//         parentDisable.call(this);
//         clearTimeout(timerId);
//     };
//
//     this.run = function() {
//         if (!this._enabled) {
//             throw new Error("Кофеварка выключена");
//         }
//         timerId = setTimeout(onReady, 1000);
//     };
//
// }
//
// let coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();
//
// function Machine() {
//     this._state = false;
//
//     this.enable = function() {
//         this._state = true;
//     };
//
//     this.disable = function() {
//         this._state = false;
//     }
// }
//
// function CoffeeMachine(power, maxWaterAmount) {
//     Machine.apply(this, arguments);
//
//     let C = 4200;
//     let Temperature = 80;
//     this.addWaterMass = 0;
//     let timerID;
//
//     function getBoilTime() {
//         return C * Temperature * this.addWaterMass / power;
//     }
//
//     let onReady = function() {
//         alert("Coffee is ready!");
//     };
//
//     this.stop = function() {
//         clearTimeout(timerID);
//     };
//
//     this.run = function() {
//         if(this._state){
//             timerID = setTimeout(onReady, 1000);
//         } else {
//             alert("Enable coffee machine before using it.");
//         }
//     };
//
//     this.addWater = function(waterAmount) {
//         if((waterAmount + this.addWaterMass > maxWaterAmount) || this._state) {
//             throw new Error("Failed to add water! Turn off the machine before adding water or poor not more than " + (maxWaterAmount - this.addWaterMass));
//         } else {
//             this.addWaterMass += waterAmount;
//         }
//     }
// }
//
// let coffeeMachine = new CoffeeMachine(10000, 500);
// coffeeMachine.addWaterMass = 200;
// coffeeMachine.enable();
// coffeeMachine.addWater(299);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();


// function Machine() {
//     this._state = false;
//
//     this.enable = function() {
//         this._state = true;
//     };
//
//     this.disable = function() {
//         this._state = false;
//     }
// }
//
// function Fridge(power) {
//     Machine.apply(this, arguments);
//     let map = new Map();
//     let maxItems = Math.floor(power/100);
//     this.addFood = function() {
//         if(arguments.length === 0) throw new Error("No arguments found!");
//         if(this._state) {
//             for (let counter = 0; counter < arguments.length; counter++) {
//                 if(maxItems != map.size) {
//                     map.set();
//                 } else throw new Error("Too much items in the fridge!");
//             }
//         } else throw new Error("Open fridge before adding some items in it!");
//     };
//
//     this.getFood = function() {
//         return food.slice();
//     };
//
//     this.removeFood = function(item) {
//         for(let key in Object.values(map)) {
//             if(item === key) {
//
//             }
//         }
//     }
// }

// let fridge = new Fridge(250);
// fridge.addFood("котлета");
// alert(fridge.getFood());

// let fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт");
// alert(fridge.getFood());

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");
//
// var fridgeFood = fridge.getFood();
// alert( fridgeFood ); // котлета, сок, варенье
//
// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");
//
// alert( fridge.getFood() );

// let fridge = new Fridge(450);
// fridge.enable();
// fridge.addFood({ name: "котлета", calories: 100});
// fridge.addFood({ name: "сок", calories: 30 });
// fridge.addFood({ name: "огурец", calories: 50 });
// fridge.addFood({ name: "помидор", calories: 40 });
// alert(fridge.getFood());
// fridge.removeFood("кабачок");
// alert(fridge.getFood());

// function inherit(proto) {
//     function F() {}
//     F.prototype = proto;
//     let obj = new F;
//     return obj;
// }
//
// let animal = {
//     sleep: true
// };
//
// let rabbit = inherit(animal);
// rabbit.eats = true;
// alert(rabbit.sleep);


// function Rabbit() {
//     this.eats = true;
// }
//
// let animal = {
//     sleep: true
// };
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit();
// alert(rabbit.sleep);


// function inherit(proto) {
//     function ObjCreation() {}
//     ObjCreation.prototype = proto;
//     let object = new ObjCreation();
//     return object;
// }
//
// let animal = {
//     sleeps: true
// };
//
// let rabbit = inherit(animal);
// alert(rabbit.sleeps);
//
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// alert( rabbit.eats );
//
// function Rabbit(name) {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype.eats = false;
//
// alert( rabbit.eats );
//
// function Menu(options) {
//     let opts = Object.create(options);
//     opts.width = 300;
//     alert("Menu width: " + opts.width);
//     alert("Menu height: " + opts.height);
// }
//
// let options = {
//     width: 200,
//     height: 100
// };
//
// let menu = new Menu(options);
// alert("Origin width: " + options.width);
// alert("Origin height: " + options.height);


// let array = [1, 2, 3];
// alert(array.__proto__.__proto__.__proto__ == null);
// alert({}.__proto__.toString);
// alert(array);
// alert(array.toString());

//
// Object.prototype.each = function(f) {
//     for(let prop in this){
//         if(!this.hasOwnProperty(prop)) continue;
//         let value = this[prop];
//         f.call(value, prop, value);
//     }
// };
//
// let user = {
//     name: "Dan",
//     age: 17
// };
//
// user.each(function(value, prop) {
//     alert(prop);
// });

// Array.prototype.repeat = function(times) {
//     return new Array(times + 1).join(this);
// };
//
// let array = ["a", "b", "c"];
// alert(array.repeat(3));

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };
//
// function f() {
//     alert( "привет" );
// }
//
// f.defer(1000);

// Function.prototype.defer = function(ms) {
//     let f = this;
//     // alert(f);
//     return function() {
//         let args = arguments, context = this;
//         setTimeout(function() {
//             f.apply(context, args);
//         }, ms);
//     }
// };
//
// function func(a, b) {
//     alert( a + b );
// }
//
// func.defer(1000)(1, 2);
//
// function Animal(name) {
//     this.speed = 0;
//     this.name = name;
// }
//
//
// Animal.prototype.addSpeed = function(spd) {
//     this.speed += spd;
// };
//
// Animal.prototype.getSpeed = function() {
//     alert(this.name + " is running " + this.speed + "km/h");
// };
//
// Animal.prototype.stop = function() {
//     this.speed = 0;
//     alert(this.name + " stopped!");
// };
//
// let rabbit = new Animal("Pooh");
// rabbit.addSpeed(5);
// rabbit.getSpeed();
// rabbit.addSpeed(10);
// rabbit.getSpeed();
// rabbit.stop();
// rabbit.getSpeed();

// function CoffeeMachine(power) {
//     this._power = power;
//     this._waterAmount = 0;
// }
//
// CoffeeMachine.prototype._WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype._getTimeToBoil = function() {
//     return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this._waterAmount = amount;
// };
//
// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//         alert( 'Кофе готов!' );
//     }, this._getTimeToBoil());
// };
//
// let coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();
//
// let array = [1, 2, 3];

// function Animal() {
//     this.eats = true;
//     this.speed = 0;
// }
//
// function Rabbit() {
//     Animal.apply(this, arguments);
// }
//
// let rabbit = new Rabbit();
// alert(rabbit.eats);

// function Animal(name) {
// //     this.name = name;
// // }
// //
// // Animal.prototype.walk = function() {
// //     alert( "ходит " + this.name );
// // };
// //
// // function Rabbit(name) {
// //     this.name = name;
// // }
// // Rabbit.prototype = Object.create(Animal.prototype);
// //
// // Rabbit.prototype.walk = function() {
// //     alert( "прыгает! и ходит: " + this.name );
// // };

// function Valid(a, b, c){
//     if(a + b > c && a + c > b && b + c > a ) {
//         return true;
//     } else {
//         alert("Bye, world!");
//     }
// }

// function nameOfFunction(){
//     return ;
// }
//
// function factiorial(N) {
//     if(N == 1 || N == 0) {
//         return 1;
//     } else {
//         return N * factiorial(N - 1);
//     }
// }
//
// alert(factiorial(4));

// function quicksort(arr) {
//     let spot = arr[0];
//
//     do {
//
//     } while(i !== arr.length);
// }

// function Karel() {
//     this._turnLeft = function() {
//
//     };
//
//     this._turnRight = function() {
//         for(let counter = 0; counter < 3; counter++) {
//             left();
//         }
//     };
//
//     this._turnAround = function() {
//         for(let counter = 0; counter < 2; counter++) {
//             left();
//         }
//     };
//
//     this._putBeeper = function() {
//         putBeeper();
//     };
//
//     this._pickBeeper = function() {
//         pickBeeper();
//     };
//
//     this._fillTheHoles = function() {
//
//     }
// }

