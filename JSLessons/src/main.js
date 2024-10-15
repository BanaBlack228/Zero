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

//const JQwery = require("./JQwery");

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

//JQwery и работа с ним!!!


/*
$(document).ready(function () {
    $("button").click(function () {
        $("p").toggle();
    });
});
*/

/*
$(document).ready(function () {
    //$("p").text("Текст установленный из JQuery");
    //$("p").html("<h3>Текст установленный из JQuery</h3>");
    //$("input").val("Значение поля, установленное из JQuery");
    $("p").attr("style","font-size:24px;");
    /* 
    $("p").append("Hello")- Добавление значения в конец тега
    $("p").prepend("Oh,man,Jesus Crist...") - добавление значение в начало тега
    $("p").after("div");
    $("p").before("div");
    
    div::after{
    
    }

    div::before{
    
    }

    $("p").remove()- удаление дочернего обьекта ( или указанного в методе)
    $("p").empty() - удаление всех дочерних элементов

    });
    */

/*
    $(document).ready(function () {
    // $("#callAjax").click(function(){
    //$("#ajaxContent").load("../TEXT.TXT")
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/1",
            type: "GET",
            success: function (data) {
                    for (key in data){
                    $("#ajaxPicture").append(key + ":" + data[key] + "<br>");
                    }
                },
            error: function(error) {
                $("#ajaxPicture").text(eror);
            },
        });
    });
*/

//const user = new Object()

/*
const user = {}
const car = {
    brand: "BMW",
    model: "M5 compitition"
};

user. name = "Misha";
user.age = 32;

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.phone)

const breed = "Mops"
const color = "Red"
const dog = {breed,color}
console.log(dog)

const power = 220;
const capacity = 2.5;

const engine = {power,capacity}

const carBMW = {
    brand:"BMW",
    model:"M8",
    engine,
    toGO: function(){
        console.log(`${this.brand} ${this.model} GO!`)
    }
}


const cat = {
["color"]: "White",
["breed"]: "Siam",
["may"]: function(){
    console.log("MAYYY")
}

}

const home = {
    "height wall": 3,
    "area kitchen": 22
}

delete home["height wall"]
delete home.areaKitchen

console.log(home["height wall"])
console.log(carBMW)
carBMW.toGO()


const carInfo = [
    ["brand", "Audi"],
    ["model", "A8"],
    ["color", "Brown"],
]
const carInfoObject = Object.fromEntries(carInfo)
console.log(carInfoObject)
console.log(carInfoObject.brand)
console.log(carInfoObject.model)
console.log(carInfoObject.color)
*/

//console.log(this)


// function testFunc() {
//     let name = "Misha";
//     console.log(this.name);
// }

//let name = "Alex";
//testFunc();

// const user = {
//     name: "Misha",
//     display: function(){
//         console.log(this.name)
//     }
// }

// let name = "Alex"
// user.display();

// function outerFunc(){
//     let age = 100;
//     console.log(this.age)
// }

// const manFirst = {
//     age:50,
//     display:outerFunc
// }

// const manSecond = {
//     age:25,
//     display:outerFunc
// }



// outerFunc()
// manFirst.display()
// manSecond.display()

// const user = {
//     name: "Misha",
//     say: ()=> console.log(`My name is ${this.name}`)
// }

// var name = "Alex"
// user.say()

// const user = {
//     name: "Misha",
//     hello(){
//         console.log("Hello")
//         let say = ()=> console.log(`My name is ${this.name}`)
//         say()
//     }
// }

// user.hello()
/*
const country = {
    name:"Russia",
    language: "Rissian",
    capital:{
        name: "Moscow",
        population: 13000000,
        year:877
    }
}

console.log(`Столица  - ${country.capital.name}`)
console.log(`Население - ${country["capital"]["population"]}`)
console.log(`Население - ${country.capital["year"]}`)
*/
