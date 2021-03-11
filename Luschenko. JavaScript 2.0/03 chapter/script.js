
// ДЗ

//Задание 1

// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). 
// Результат сравнения - true или false выведите в out-1.

let i_1 = document.querySelector('.i-1');
const b_1 = document.querySelector('.b-1');
let o_1 = document.querySelector('.out-1');

b_1.onclick = () => {
	let num = +i_1.value;
	if (num == 4) {
		o_1.innerHTML = 'true';
	} else {
		o_1.innerHTML = 'false';
	}
}


//Задание 2

// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. 
// Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = document.querySelector('.a21'), 
	 a22 = document.querySelector('.a22'),
	 b_2 = document.querySelector('.b-2'),
	 o_2 = document.querySelector('.out-2');

b_2.onclick = function () {
	let num1 = +a21.value,
		 num2 = +a22.value;
	if (num1 > num2) {
		o_2.innerHTML = num1;
	} else {
		o_2.innerHTML = num2;
	}
}

//Задание 3



// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. 
// Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.

// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let i_31 = document.querySelector('.i-31'),
	 i_32 = document.querySelector('.i-32'),
	 o_3 = document.querySelector('.out-3');
const b_3 = document.querySelector('.b-3');

b_3.onclick = function () {
	let num1 = +i_31.value,
		 num2 = +i_32.value;
	if (num1 > num2) {
		o_3.innerHTML = num1;
	} else {
		o_3.innerHTML = num2;
	}
}

//Задание 4

// Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. 
// Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let i_4 = document.querySelector('.i-4'),
	 b_4 = document.querySelector('.b-4'),
	 o_4 = document.querySelector('.out-4'),
	 curr = 2021,
	 i41 = +i_4.value;

	b_4.onclick = function() {
		if ((curr-i41) >= 18) {
			o_4.innerHTML = 1;
		} else {
			o_4.innerHTML = 0;
		}
	}

//Задание 5

// Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. 
// Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 
// 0 если число равно нулю и 1 если больше.

let i5 = document.querySelector('.i-5'),
	 o5 = document.querySelector('.out-5');
const b5 = document.querySelector('.b-5');

b5.onclick = function () {
	let num = +i5.value;
	if (num < 0) {
		o5.innerHTML = 'm';
	} else if (num == 0) {
		o5.innerHTML = 0;
	} else {
		o5.innerHTML = 1;
	}
}

//Задание 6

// Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. 
// Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток 
// от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.

let i6 = document.querySelector('.i-6'),
	 b6 = document.querySelector('.b-6'),
	 o6 = document.querySelector('.out-6');

b6.onclick = function () {
	let num = +i6.value;
	if ((num % 2) == 0) {
		o6.innerHTML = 'even';
	} else {
		o6.innerHTML = 'odd';
	}
}

//Задание 7

// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. 
// Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. 
// Для возведения в степень можно использовать **, или Math.pow.

let i_71 = document.querySelector('.i_71'),
	 i_72 = document.querySelector('.i_72'),
	 b_7 = document.querySelector('.b_7'),
	 out_7 = document.querySelector('.out_7');

b_7.onclick = function f7() {
	let num1 = +i_71.value,
		 num2 = +i_72.value;
	out_7.innerHTML = num1 ** num2;
}

//Задание 8

// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. 
// Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. 
// И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

const numb = document.getElementById('s8').value,
	 b8 = document.querySelector('.b8');
let o8 = document.querySelector('.o8');
	 
b8.onclick = function f8 () {
	let v = +numb;
	switch(v) {
		case 1:
			o8.innerHTML = 'one';
			break;
		case 2:
			o8.innerHTML = 'two';
			break;
		case 3:
			o8.innerHTML = 'three';
			break;
	}
}

//Задание 9

// Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. 
// Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.

// если от 1 до 32 - то вывести цифру 1
// если от 33 до 43 - то вывести 2
// если от 44 до 64 - то 3.
// В противном случае, вывести 0.

let i9 = document.querySelector('.i9'),
	b9 = document.querySelector('.b9'),
	o9 = document.querySelector('.o9');

	b9.onclick = function f9 () {
		let num = +i9.value;
		if (num >= 1 && num <= 32) {
			o9.innerHTML = 1;
		} else if (num >= 33 && num <= 43) {
			o9.innerHTML = 2;
		} else if (num >= 44 && num <= 64) {
			o9.innerHTML = 3;
		} else {
			o9.innerHTML = 0;
		}
	}

//Задание 10

//Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let num10 = document.getElementById('s100').value,
	b10 = document.querySelector('.b10'),
	o10 = document.querySelector('.o10');

	b10.onclick = function f10 () {
		let v = +num10;
		o10.innerHTML = v;
	}

//Задание 11

//Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let s110 = document.getElementById('s110').value,
	 o11 = document.querySelector('.o11');

	 function numFunction () {
		 let v = +s110;
		 o11.innerHTML = 'Вы выбрали: ' + v;

	 }

//Задание 12

// Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. 
// Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу. 

let i120 = document.querySelector('.i120'),
	 b12 = document.querySelector('.b12'),
	 o12 = document.querySelector('.o12');

	 b12.onclick = function f12 () {
		 let v = +i120.value;
		 o12.innerHTML = typeof(v);
	 }

//Задание 13

// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, 
// а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, 
// но тип данных будет string!

document.querySelector('.b13').onclick = function f13 () {
	document.querySelector('.o13').innerHTML = typeof(document.querySelector('.i13').value);
}

//Задание 14

// Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. 
// Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14. 

let i141 = document.querySelector('.i141'),
	i142 = document.querySelector('.i142'),
	s143 = document.getElementById('s143').value,
	b14 = document.querySelector('.b14'),
	o14 = document.querySelector('.o14');

	b14.onclick = function f14 () {
	let 
	v1 = +i141.value,
	v2 = +i142.value;

	switch(s143) { 
		case 'sum':
			o14.innerHTML = v1 + v2;
			break;
		case 'sub':
			o14.innerHTML = v1 - v2;
			break;
		case 'div':
			o14.innerHTML = v1 / v2;
			break;
		case 'multipl':
			o14.innerHTML = v1 * v2;
			break;
		default: o14.innerHTML = 'Not a number';
	}
	}

//Задание 15

// Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. 
// Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0. 

let
	s151 = document.getElementById('s151').value, 
	s152 = document.getElementById('s152').value,
	s153 = document.getElementById('s153').value,
	b15 = document.querySelector('.b15'),
	o15 = document.querySelector('.o15');

	b15.onclick = function f15 () {
		let v1 = +s151,
			v2 = +s152,
			login = s153;

			if (s153 == 'and') 
			{
				o15.innerHTML = v1 && v2;
			} else {
				o15.innerHTML = v1 || v2;
			}
	}




