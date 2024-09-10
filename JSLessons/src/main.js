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



