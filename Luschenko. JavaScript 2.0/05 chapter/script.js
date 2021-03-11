
//ДЗ
//Задание 1

// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:

// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

const 
		b1 = document.querySelector('.b1'),
		o1 = document.querySelector('.o1');

		b1.onclick = function f1 () {
			for (let i = 1; i <= 50; i++) {
				o1.innerHTML += i + ' ';
			}
		}

//Задание 2

// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

// 2 4 6 ... 122

// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

const
		b2 = document.querySelector('.b2'),
		o2 = document.querySelector('.o2');

		b2.onclick = function f2() {
			for (let i = 2; i <= 122; i+=2)
			o2.innerHTML += i + ' ';
		}

//Задание 3

// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:

// 25 24 23 22 . . 7

// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

const
		b3 = document.querySelector('.b3'),
		o3 = document.querySelector('.o3');
		
		b3.onclick = function f3() {
			for (let i = 25; i >= 7; i--) {
				o3.innerHTML += i + ' ';
			}
		}

//Задание 4

// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:

// 77_74_71_68_65_62_ ... _38_35_

// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла. 

const
		b4 = document.querySelector('.b4'),
		o4 = document.querySelector('.o4');

		b4.onclick = function f4() {
			for(let i = 77; i >= 35; i -= 3) {
				o4.innerHTML += i + '_';
			}
		}

//Задание 5

// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:

// 1_*2_**3_*4_** ... 17_*

// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла. 

const
		b5 = document.querySelector('.b5'),
		o5 = document.querySelector('.o5');

		b5.onclick = function f5 () {
			for(let i = 1; i <= 17; i++) {
				if (i % 2 == 0) {
					o5.innerHTML += i + '_**'; 
				} else {
					o5.innerHTML += i + '_*';
				}
			}
		}

//Задание 6

// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:

// ******
// ******
// ******

// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6. 

const
		i6 = document.querySelector('.i6'),
		b6 = document.querySelector('.b6'),
		o6 = document.querySelector('.o6');

		b6.onclick = function f6 () {
			for(i = 0; i < i6.value; i++) {
				o6.innerHTML += '******' + '<br>';
			}
		}

//Задание 7

// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция t7, 
// которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:

// 4 3 2 1 0

// Задача решается с помощью цикла.

const
		i7 = document.querySelector('.i7'),
		b7 = document.querySelector('.b7'),
		o7 = document.querySelector('.o7');

		b7.onclick = function f7() {
			for (let i = i7.value; i >= 0; i--) {
				o7.innerHTML += i + ' ';
			}
		}

//Задание 8

// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. 
// По нажатию кнопки b-8 должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. 
// Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8

// Задача решается с помощью цикла.

let
		i81 = document.querySelector('.i81'),
		i82 = document.querySelector('.i82'),
		b8 = document.querySelector('.b8'),
		o8 = document.querySelector('.o8');

		b8.onclick = function f8() {
			for (let i = i81.value; i <= i82.value; i++) {
				if(i81.value <= i82.value) {
				o8.innerHTML += i + ' '; 
				} else {
					o8.innerHTML = 'Первое число должно быть меньше второго!';
				}
			}
		}

//Задание 9

// Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. 
// Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8

// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.

let
		i91 = document.querySelector('.i91'),
		i92 = document.querySelector('.i92'),
		b9 = document.querySelector('.b9'),
		o9 = document.querySelector('.o9');

		b9.onclick = function f9 () {
			if (i91.value < i92.value) {
				for (let i = i91.value; i <= i92.value; i++) {
					o9.innerHTML += i + ' '; 
				}
			} else {
				for (let i = i92.value; i <= i91.value; i++) {
					o9.innerHTML += i + ' ';
				}
			}
		}

//Задание 10

//Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

let
		b10 = document.querySelector('.b10'),
		o10 = document.querySelector('.o10');

		b10.onclick = function f10 () {
			for (let i = 1950; i <= 2000; i += 2) {
				o10.innerHTML += i + ' '; 
			}
		}

//Задание 11

// Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. 
// Разделитель - пробел. В результате должно получиться так:

// one 3 4 two


let
		b11 = document.querySelector('.b11'),
		d11 = document.querySelectorAll('.d11'),
		o11 = document.querySelector('.o11');

		b11.onclick = function f11 () {
			for (let i = 0; i < d11.length; i++) {
				o11.innerHTML += d11[i].innerHTML + ' ';
			}
		}

//Задание 12

//Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’

let
		b12 = document.querySelector('.b12'),
		d12 = document.querySelectorAll('.d12');

		b12.onclick = function f12 () {
			for (let i = 0; i <= d12.length; i++) {
				console.log(d12[i]);
				d12[i].style.background = 'orange';
			}
		}


//Задание 13

// Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, 
// причем к value первого должно равняться 1, второго - 2, третьего - 3... 

let
		b13 = document.querySelector('.b13'),
		i13 = document.querySelectorAll('.i13');

		b13.onclick = function f13 () {
			for (let i = 0; i <= i13.length; i++) {
					i13[i].value = i+1;
			}
		}

//Задание 14

// Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. 
// Проверить выбран ли элемент можно с помощью elem[i].checked. 

let
		b14 = document.querySelector('.b14'),
		i14 = document.querySelectorAll('.i14'),
		o14 = document.querySelector('.o14');

		b14.onclick = function f14 () {
			for (let i = 0; i <= i14.length; i++) {
				if (i14[i].checked) {
					o14.innerHTML += i14[i].value + ' ';
				} 
			}
		}

//Задание 15

// Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:

// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10

// Для вывода использовать цикл. 

let
		b15 = document.querySelector('.b15'),
		o15 = document.querySelector('.o15');

		b15.onclick = function f15 () {
			for (let i = 10; i >= 0; i--) {
				console.log(i);
					o15.innerHTML +=i + ' ' + (10 - i) + ' ';
				}
			}