/*console.log("Hello from JavaScript!")*/
/*
undefined - неинициализированнные значения
null - флак отутствия значений (либо нулевое значение)
bool (Boolean) - логический тип данных,true или false
string - последовательность символов(или символ), объединеннные в структуру 
number - число (любого вида), NaN (Not-a-Number), Infinity (-Infinity), +0 (-0)
object - пердставление объекта языка JavaScript

Декремент:
++x или x++ <=> x+1

Инкремент:
--x или x-- <=> x-1
*/

//alert("Hello from JavaScript!") - /*окно информационных сообщений*/;
//confirm("Cогласны,Узнали?") - /*окно информационных сообщений*/;

/*
let ans;
ans = prompt("Укажите ваше имя:");
alert("Ваше имя -" + ans);
*/

/*
if (condition){
    statement
}

else{
    other statement;
}

*/

/*
let ans;
ans = prompt("Введите код операции:");
if (ans=='9734'){
    alert("Молодец! Правильный ответ")
}
else{
    alert("Код неверный! Еще раз ;c")
    location.reload();
}
*/

/*
let x, b, S;
x = prompt ("Введите число:");
b = prompt ("Введите число:");
x = Number(x);
b = Number(b);
S = (x+b) / 2;
alert("Ваше число в квадрате:" + S);
location.reload();
*/

/*
const mile = 3.621371
let x = Number(prompt ("Введите кол-во километров:"));
alert("Количество километров в милях" + x / mile);
*/
/*
let input = prompt("Введите пятизначное число:");
// 0 1 2 3 4 5
//['1','2','3','4','5'] = '12345';
let last = input.slice(5);
let res = last + input.slice(0,5);
alert("Ваше число теперь:" + res)
*/


/*
let x = Number(prompt ("Введите число:"));
let y = Number(prompt ("Введите число:"));
let S = (x+y);
let D = (x-y);
let F = (x*y);
let H = (x/y);
alert("Плюс: " + S + "\n Минус: " + D + "\n Умножить: " + F + "\n Делить: " + H);
*/

/*
window.onload = function () {
    function foo(){
        let a = Number(prompt ("Введите число:"));
        let x = Number(prompt ("Введите число:"));
        const k=8;
        let y =(8*x)+((a*x)**2);
        alert("Ответ: "+ y);
    }
}
*/

/*
function calc(a, b, operation){
    if (operation == '+'){
        return a + b;
    }
    else if (operation == '-'){
        return a - b;
    }
    else if (operation == '*'){
        return a * b;
    }
    else if (operation == '/'){
        if (b == 0) {
        return "Делить на ноль нельзя!";
    }
    else{
        return a /b;
    }
    }
    else{
        return "Неизвестная операцияю Попробуйте еще раз!";
    }
}
function calcPaS (){
    let x = Number(document.getElementsByName("num1")[0].value);
    let y = Number(document.getElementsByName("num2")[0].value);
    let op = document.getElementsByName("operation")[0].value;
    let res = calc(x, y, op);
    alert("Результат операции: " + res)
}
window.onload = () => {
    //let x = Number(prompt("Введите первое число:"));
    //let y = Number(prompt("Введите второе число:"));
    //let op =prompt("Введите тип операции (+,-,*,/)");
    //let res = calc(x, y, op);
    //alert("Результат вашей операции:" + res);
    let buttonCalc = document.getElementById("calculator");
    buttonCalc.addEventListener("click", calcPaS);
}
*/

//let user = new Object();

/*
let user = {
    name: "Denis",
    age: 27,
};
*/

//console.log(user.name);
//console.log(user["age"]);

//user.isAdmin = true;
//delete user.age;

//console.log(user);

/*
let fruit = prompt("Кайда favourite фрукты ?")

let user1 = {
    name: "Andery",
    age: 23,
    height: 180,
    wight: 2,
    hobby: "music",
    profession: "Student",
    city: "Saint-Peterburg",
    alive: true,
    [fruit]: "favourite",
}

console.log(user1);
*/

/*
let rectangle = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
};

function set_rectangle(o) {
    A = prompt("Введите координаты первой точки (через запятую):");
    o.A = A;
    B = prompt("Введите координаты первой точки (через запятую):");
    o.B = B;
    C = prompt("Введите координаты первой точки (через запятую):");
    o.C = C;
    D = prompt("Введите координаты первой точки (через запятую):");
    o.D = D;
}

function rectangleInfo(o) {
    alert(`Точка А: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`);
}

function getWidth(o) {
    alert(`Ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`);
}

function getHeight(o) {
    alert(`Высота прямоугольника: ${Number(o.A[2]) - Number(o.D[2])}`);
}

function getArea(o) {
    alert(`Плошадь  прямоугольника: ${Number(o.B[0]) - Number(o.A[0]) * (Number(o.A[2]) - Number(o.D[2])) }`);
}

function getPerimeter(o) {
    alert(`Плошадь  прямоугольника: ${Number(o.B[0]) - Number(o.A[0]) * 2 + (Number(o.A[2]) - Number(o.D[2]) * 2) }`);
}
*/

