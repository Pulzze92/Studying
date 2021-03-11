//ДЗ

//Задание 1

// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.

function t1 () {

	let a = 1;

	while (a <= 50) {
		document.querySelector('.o1').innerHTML += a + ' ';
		a++;
	}
}

document.querySelector('.b1').onclick = t1;

//Задание 2

// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.

function t2() {

	let a = 2;

	while (a <= 122) {
		document.querySelector('.o2').innerHTML += a + ' ';
		a += 2;
	}
}

document.querySelector('.b2').onclick = t2;

//Задание 3

// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.

function t3() {

	let a = 25;

	while (a >= 7) {
		document.querySelector('.o3').innerHTML += a + ' ';
		a--;
	}
}

document.querySelector('.b3').onclick = t3;

//Задание 4

// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while. 

function t4() {
 
	let a = 77;

	while (a >= 35) {
		document.querySelector('.o4').innerHTML += a + '_';
		a -= 3;
	}
}

document.querySelector('.b4').onclick = t4;

//Задание 5

// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла while. 

function t5() {

	let a = 1;

	while (a <= 17) {
		if (a % 2 == 0) {
			document.querySelector('.o5').innerHTML += a + '_**';
		} else {
			document.querySelector('.o5').innerHTML += a + '_*';
		}
		a++;
	}
}

document.querySelector('.b5').onclick = t5;

//Задание 6

// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек 
// без пробелов и символ переноса строки br. Количество строк (итераций, повторений) 
// цикла while вводит пользователь в i-6. 

let o6 = document.querySelector('.o6');
let outStr = '';

function t6() {
	let p = 0;
	while (p < 3) {
		let p1 = 0;
		while (p1 < 6) {
			outStr += '*';
			p1++;
		}
		outStr += '<br>';
		p++;
	}
	o6.innerHTML = outStr;
}
document.querySelector('.b6').onclick = t6;

//Задание 7

// Есть input i-7 куда пользователь может ввести число больше нуля 
// (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 
// должна запускаться функция f7, которая выводит в out-7 числа от 
// введенного пользователем до нуля включительно. Разделитель пробел. 
// Если пользователь ввел 4 и нажал кнопку, мы получим:

// 4 3 2 1 0

// Задача решается с помощью цикла while.

let o7 = document.querySelector('.o7'),
	 i7 = document.querySelector('#i7');

function t7() {
	while (i7.value >= 0) {
		o7.innerHTML += i7.value + ' ';
		i7.value--;
	}
	i7.value = '';
}

document.querySelector('.b7').onclick = t7;

//Задание 8

// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля
//  (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше 
//  первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 
//  числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. 
//  Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8

// Задача решается с помощью цикла while.

let
	i81 = document.querySelector('#i81'),
	i82 = document.querySelector('#i82'),
	o8 = document.querySelector('.o8');

function t8() {
	while (i82.value >= i81.value) {
		o8.innerHTML += i81.value + ' ';
		i81.value++;
	}
	i81.value = '';
	i82.value = '';
}

document.querySelector('.b8').onclick = t8;

//Задание 9

// Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, 
// которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. 
// Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8

// Задача решается с помощью цикла. 

let 
	i91 = document.querySelector('#i91'),
	i92 = document.querySelector('#i92'),
	o9 = document.querySelector('.o9');

function t9() {
	if (i91.value < i92.value) {
		while (i91.value <= i92.value) {
			o9.innerHTML += i91.value + ' ';
			i91.value++;
		}
		i91.value = '';
		i92.value = '';
	} else if (i91.value > i92.value) {
		while (i92.value <= i91.value) {
			o9.innerHTML += i92.value + ' ';
			i92.value++;
		}
		i91.value = '';
		i92.value = '';
	} else {
		o9.innerHTML = i91.value;
	}
}

document.querySelector('.b9').onclick = t9;

//Задание 10

//Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. 
//Разделитель - пробел. Задача решается через цикл while.

o10 = document.querySelector('.o10');

function t10() {
	let a = 1950;
	while (a <= 2000) {
		o10.innerHTML += a + ' ';
		a += 2;
	}
}

document.querySelector('.b10').onclick = t10;

//Задание 11

// Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 
// перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] вывести в out-11
//  содержимое каждого блока. Разделитель - пробел. В результате должно получиться так:
//  one 3 4 two

let o11 = document.querySelector('.o11'),
	 d11 = document.querySelectorAll('.d11'),
	 b11 = document.querySelector('.b11');

	b11.onclick = function t11() {
	let i = 0;
		while (i <= d11.length) {
	console.log(d11.innerHTML);
	o11.innerHTML += d11[i].textContent + ' ';
	i++;
}
}

//Задание 12

// Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их 
// с помощью цикла while. Обращение к div выглядит так elem[i] применить 
// к каждому elem[i].style.background = ‘orange’

let d12 = document.querySelectorAll('.d12');
	 

function t12() {
let a = 0;
while (a <= d12.length) {
	d12[a].style.background = 'orange';
	a++;
}
}

document.querySelector('.b12').onclick = t12;

//Задание 13

// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let b13 = document.querySelector('.b13'),
	 i13 = document.querySelectorAll('.i13');

function t13() {
	let a = 0;

	while (a <= i13.length) {
		i13[a].value = a + 1;
		a++;
	}
}

document.querySelector('.b13').onclick = t13;

//Задание 14

//Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла while. 
//Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked. 

let 
	b14 = document.querySelector('.b14'),
	i14 = document.querySelectorAll('#i14'),
	o14 = document.querySelector('.o14');

function t14() {
	let a = 0;

	while (a <= i14.length) {
		if (i14[a].checked) {
			o14.innerHTML += i14[a].value + ' ';
		}
		a++;
	}

}

b14.onclick = t14;

//Задание 15

// Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:

// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10

// Для вывода использовать цикл while. 

let 
	b15 = document.querySelector('.b15'),
	o15 = document.querySelector('.o15');

function t15 () {
	let a = 10;

		while (a >= 0) {
			o15.innerHTML += a + ' ' + (10 - a) + ' ';
			a--;
		}


}

b15.onclick = t15;