
//ДЗ

//Задание 1

//Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a1 = 7, b1 = 9;
console.log(a1 * b1);

//Задание 2

//Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.


let c = 7, d = 9;
document.querySelector('.result').innerHTML = c * d;

//Задание 3

//Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.


let e = 3, f = 5;
document.querySelector('.result1').innerHTML = e + f;

//Задание 4

//Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. 

let e1 = '3', f1 = 5;
document.querySelector('.result2').innerHTML = e1 + f1; //Одно из значений строковое, поэтому результат строковый

//Задание 5

//Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.

let e2 = 3, f2 = 0;
document.querySelector('.result3').innerHTML = e2 / f2;

//Задание 6

//Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.

let e3 = 3, f3 = 'Hello';
document.querySelector('.result4').innerHTML = e3 + f3;

//Задание 7

//Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.

let e4 = 3, f4 = 'Hello';
document.querySelector('.result5').innerHTML = e4 * f4;

//Задание 8

//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let i = document.querySelector('.second_input');
let btn = document.querySelector('.second_button');

btn.onclick = function () {
	let x = i.value;
	console.log(x);
}

//Задание 9

//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let i1 = document.querySelector('.third_input');
let btn1 = document.querySelector('.third_button');

btn1.onclick = function () {
	let x = i1.value;
	console.log(x);
	i1.value = '';
}

//Задание 10

//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let i2 = document.querySelector('.fourth_input'),
	btn2 = document.querySelector('.fourth_button');

	btn2.onclick = function () {
		let rst = document.querySelector('.result6');
		let z = i2.value;
		rst.innerHTML = z * 10;
	}
//Задание 11

//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.

let i3 = document.querySelector('.fifth_input'),
	btn3 = document.querySelector('.fifth_button');

	btn3.onclick = function () {
		let rst1 = document.querySelector('.result7');
		let z1 = +i3.value;
		rst1.innerHTML = z1 + 10;
	}
//Задание 12

// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. 
// При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', 
// где имя - имя пользователя и фамилия - введенная фамилия.

let i6 = document.getElementById('one'),
	i7 = document.getElementById('two'),
	btn6 = document.querySelector('.sixth_button'),
	wcm = document.querySelector('.welcome');

btn6.onclick = function () {
	console.log('Hello' + ' ' + i6.value + ' ' + i7.value);
	wcm.innerHTML = 'Hello,' + ' ' + i6.value + ' ' + i7.value;
}

//Задание 13

// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, 
// которая выводит сумму данных двух чисел на страницу.

let i8 = document.getElementById('three'),
	 i9 = document.getElementById('four'),
	 btn7 = document.querySelector('.seventh_button'),
	 rslt = document.querySelector('.result8');

	btn7.onclick = function () {
		rslt.innerHTML = +i8.value + + i9.value;
	}

//Задание 14

//Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let i10 = document.getElementById('five');
i10.value = 'Hello';

//Задание 15

// Создайте input и получите его в переменную y. 
// В js выполните следующее присвоение: y.style.border = '2px solid red' .

let y = document.querySelector('.six');
y.style.border = '2px solid red';

//Задание 16

// Создайте два input type=number, куда пользователь может ввести числа. 
// Выведите на страницу сумму данных чисел.

let i11 = document.querySelector('.input11'),
	 i12 = document.querySelector('.input12'),
	 rslt2 = document.querySelector('.result9');

	 rslt2.innerHTML = + i11.value + + i12.value;

//Задание 17

// Создайте input type="text" куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. 
// А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль.  
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let input17 = document.querySelector('.input17'),
	 button17 = document.querySelector('.button17');

	 button17.onclick = function () {
		 let t = input17.value;
		 	  t = parseInt(t);
				console.log(t);
	 }

//Задание 18

// Создайте input type="text" куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), 
// и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте 
// по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let input18 = document.querySelector('.input18'),
	 button18 = document.querySelector('.button18');

	 button18.onclick = function () {
		 let t = input18.value;
		 	  t = parseFloat(t);
				console.log(t);
	 }

//Задание 19

// Создайте два input type=number, куда пользователь может ввести отрицательные числа. 
// Выведите на страницу сумму данных чисел. Мы это делали! Зачем? 
// Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let input19_1 = document.querySelector('.input19_1'),
	 input19_2 = document.querySelector('.input19_2'),
	 rslt19 = document.querySelector('.result19');

	 rslt19.innerHTML = parseInt(input19_1.value) + parseInt(input19_2.value);

//Задание 20

// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. 
// По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда 
// поставьте соответствующие данные из inputов.

let	name20 = document.getElementById('name20'), 
	 	sirname20 = document.getElementById('sirname20'),
		age20 = document.getElementById('age20'),
		job20 = document.getElementById('job20'),
		button20 = document.querySelector('.button20'),
		answer = document.querySelector('.answer');

button20.onclick = function () {
	answer.innerHTML = 'Уважаемый' + ' ' + name20.value + ', ' + sirname20.value + ', ваш возраст ' + 
	age20.value + ' года' + ' , по профессии вы ' + job20.value;
}

