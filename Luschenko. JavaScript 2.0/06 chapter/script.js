// let out = document.querySelector('.out');
// console.log(out);

// for (let i = 0; i < 5; i++) {
// 	for (let j = 0; j < 10; j++){
// 		out.innerHTML += j;
// 	}
// 	out.innerHTML +='<br>';
// }

// for (let i = 1; i < 10; i++) {
// 	//out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
// 	for (let j = 1; j < 10; j++) {
// 		out.innerHTML +=`${i}*${j}=${j * i}<br>`;
// 	}
// 	out.innerHTML += `<hr>`;
// }

//ДЗ
//Задание 1
// С помощью вложенных циклов, нарисуйте строку:

// ***_***_***_

// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

let o1 = document.querySelector('.o1');

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			o1.innerHTML += '*';
		}
		o1.innerHTML += '_';
	}

//Задание 2

// С помощью вложенных циклов, нарисуйте строку:

// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_

// Решить задачу с помощью вложенных циклов. 

let o2 = document.querySelector('.o2');

	for (let i = 1; i <= 3; i++) {
		
		o2.innerHTML += '<br>';
		o2.innerHTML += i;
		o2.innerHTML += '<br>';

		for (let j = 1; j <= 3; j++) {
			o2.innerHTML += '*';
			o2.innerHTML += '_' + ' '; 
		}
		
	}
	
//Задание 3

// С помощью вложенных циклов, нарисуйте строку:

// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_


let o3 = document.querySelector('.o3');

for (let i = 1; i < 5; i++) {
	o3.innerHTML += '<br>';
	for (let j = 1; j < 4; j++) {
		o3.innerHTML += '*';
		o3.innerHTML += '_';
	}
}

//Задание 4

// С помощью вложенных циклов, нарисуйте строку:

// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5



let o4 = document.querySelector('.o4');

for (let i = 1; i < 4; i++) {
	o4.innerHTML += i + '_';
	for (let j = 1; j < 6; j++) {
		o4.innerHTML += j + ' ';
	}
}

//Задание 5

// С помощью вложенных циклов, нарисуйте строку:

// 101010
// 101010
// 101010


let o5 = document.querySelector('.o5');
	for (let h = 0; h < 3; h++) {
		o5.innerHTML += '<br>';
		for (let i = 0; i < 3; i++) {
			o5.innerHTML += '1' + '0';
	}
}

//Задание 6

// С помощью вложенных циклов, нарисуйте строку:

//  10x01x
//  10x01x
//  10x01x


let o6 = document.querySelector('.o6');

	for (let i = 0; i < 3; i++) {
		o6.innerHTML += '<br>';
		for (let j = 0; j < 1; j++) {
			o6.innerHTML += '10x';
			o6.innerHTML += '01x';
		}
	}

//Задание 7

// *
// **
// ***
// ****

let o7 = document.querySelector('.o7');

for (let i = 0; i < 5; i++) {
	o7.innerHTML += '<br>';
	for (let j = 0; j < i; j++) {
		o7.innerHTML += '*';
	}
}

//Задание 8

// С помощью вложенных циклов, нарисуйте строку:

// *****
// ****
// ***
// **
// *


let o8 = document.querySelector('.o8');

for (let i = 0; i < 5; i++) {
	o8.innerHTML += '<br>';
	for (let j = 5; j > i; j--) {
		o8.innerHTML += '*';
	}
}

//Задание 9

// С помощью вложенных циклов, нарисуйте строку:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let o9 = document.querySelector('.o9');

for (let i = 0; i < 7; i++) {
	o9.innerHTML += '<br>';
	for (let j = 1; j < i; j++) {
		o9.innerHTML += j;
	}
}

//Задание 10

// С помощью вложенных циклов, нарисуйте строку:

// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50


let o10 = document.querySelector('.o10');

for (let i = 0; i < 5; i++) {
	o10.innerHTML += '<br>';
	for (let j = 1; j < 11; j++) {
		if (i == 0 && j != 10) {
			o10.innerHTML += '0' + j + ' ';
	} else if (i == 0 && j == 10) {
		o10.innerHTML += j;
	} else if(j == 10){
		o10.innerHTML += i * j + 10 + ' ';
	} else {
		o10.innerHTML += `${i}${j} `;
	}
}
}

//Задание 11

// Используя вложенные циклы создайте таблицу умножения от 1 до 10. 
// Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее.
// Оформить в виде столбцов где выводятся множители и результат.

let o11 = document.querySelector('.o11');

for (let i = 1; i < 10; i++){
	o11.innerHTML += '<br>';
	for (let j = 1; j < 10; j++) {
		o11.innerHTML += `${i} * ${j} = ${i * j} <br>`; 
	}
}


//Задание 12

// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    *****
//    *****

let o12 = document.querySelector('.o12');

for (let i = 0; i < 3; i++) {
	o12.innerHTML += '<br>';
	for (let j = 0; j < 5; j++) {
		o12.innerHTML += '*'; 
	}
}

//Задание 13

// С помощью вложенных циклов и символа * нарисуйте:

//    *****
//    ****
//    ***
//    **
//    *

let o13 = document.querySelector('.o13');

for (let i = 6; i > 0; i-- ) {
	o13.innerHTML += '<br>';
	for (let j = 1; j < i; j++) {
		o13.innerHTML += '*';
	}
}

//Задание 14

// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *****
//    *****


let out14 = '';
let q14 = 3;
let r14 = 7;

for (let i = 0; i < 3; i++) {
	out14 += '<br>';
	for (let j = 0; j < 8; j++) {
		if (j < q14 || (r14 < j && i >= 1)) {
			out14 += '&nbsp ';
		} else {
		out14 += '* ';
		}
	}
	q14--;
	r14--;
} 

document.querySelector('.o14').innerHTML = out14;

//Задание 15

// С помощью вложенных циклов и символа * нарисуйте:

//    *
//    **
//    ***
//    **
//    *


let out15 = '';
let q15 = 0;
let r15 = 4;

for (let i = 0; i < 5; i++) {
	out15 += '<br>';
	for (let j = 0; j < 3; j++) {
		if (q15 < j || r15 < j) {
			out15 += '&nbsp; &nbsp;';
		} else {
		out15 += '* ';
		}
	}
	q15++;
	r15--;
}

document.querySelector('.o15').innerHTML = out15;

//Задание 16

// С помощью вложенных циклов и символа * нарисуйте:

// 	******
// 	*       *
// 	*       *
// 	*       *
//    ******


let out16 = '';
let q16 = 1;

for (let i = 0; i < 5; i++) {
	out16 += '<br>';
	for (let j = 0; j < 7; j++) {
		if (j >= q16 && j < 6 && (i > 0 && i < 4)) {
			out16 += '&nbsp; &nbsp';
		} else {
		out16 += '*';
		}
	}
}

document.querySelector('.o16').innerHTML = out16;

//Задание 17

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


let out17 = '';
let q17 = 6;

for (let i = 0; i < 5; i++) {
	out17 += '<br>';
	for (let j = 5; j > 0; j--) {
		 if (q17 <= j) {
		 	out17 += '';
		 } else {
		out17 += j;
		 }
	}
	q17--;
}

document.querySelector('.o17').innerHTML = out17;

//Задание 18

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

let out18 = '';
let q18 = 1;

for (let i = 0; i < 5; i++) {
	out18 += '<br>';
	for (let j = 5; j > 0; j--) {
		if (q18 < j) {
			out18 += '&nbsp; &nbsp';
		} else {
		out18 += j + ' ';
		}
	}
	q18++;
}

document.querySelector('.o18').innerHTML = out18;


//Задание 19

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

let out19 = '';
let q19 = 1;

for (let i = 0; i < 5; i++) {
	out19 += '<br>';
	for (let j = 5; j > 0; j--) {
		if (q19 < j) {
			out19 += 'X';
		} else {
		out19 += j + ' ';
		}
	}
	q19++;
}

document.querySelector('.o19').innerHTML = out19;

//Задание 20

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5

let out20 = '';
let q20 = 5;

for (let i = 1; i < 6; i++) {
	out20 += '<br>';
	for (let j = 1; j < 6; j++) {
		if (q20 > j) {
			out20 += ' ';
		} else {
		out20 += i + ' ';
		}
	}
	q20--;
}

document.querySelector('.o20').innerHTML = out20;

//Задание 21

// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):

//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1

let out21 = '';
let q21 = 1;

for (let i = 5; i > 0; i--) {
	out21 += '<br>';
	for (let j = 1; j < 6; j++) {
		if (q21 < j) {
			out21 += '';
		} else if (i == 4 || i == 2){
			out21 += 'X' + ' ';
		} else {
		out21 += i + ' ';
		}
	}
	q21++;
}

document.querySelector('.o21').innerHTML = out21;

//Задание 22

// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *******
//    *********


let out = '';
let q = 3;
let r = 5;

for (let i = 0; i < 3; i++) {
	for (let k = 0; k < 8; k++) {
		if (k < q || k > r ) {
			out += '&nbsp; &nbsp';
		} else {
		out += '* ';
		}
	}
	q--;
	r++;
	out += '<br>';
}

document.querySelector('.o22').innerHTML = out;

//Задание 23

// С помощью вложенных циклов и символа * нарисуйте:

//      **
//     ****
//    ******
//     ****
//      **

let out23 = '',
	 q23 = 3,
	 r23 = 4,
	 s23 = -1,
	 t23 = 8;

for (let i = 1; i < 6; i++) {
	out23 += '<br>';
	for (let j = 1; j < 7; j++) {
		if (q23 > j) {
			out23 += '&nbsp; &nbsp;';
		} else if (r23 < j){
			out23 += '&nbsp; &nbsp;';
		} else if ((s23 > j) && (i > 3)){
			out23 += '&nbsp; &nbsp;';
		}
		else if (t23 < j && i > 3) {
			out23 += '&nbsp; &nbsp;';
		} else {
			out23 += '*' + ' ';			
		}
	}
	q23--;
	r23++;
	s23++;
	t23--;

}

document.querySelector('.o23').innerHTML = out23;


