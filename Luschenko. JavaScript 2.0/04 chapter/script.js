
//ДЗ
//Задание 1

//Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

 document.querySelector('.b1').onclick = () => {
	 alert('Задача 1');
	  }


//Задание 2

//Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную. 

let a = document.querySelector('.but2');
a.onclick = function () {
	alert('Задание 2');
}

//Задание 3

//Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

let a3 = document.querySelector('.p3');
a3.onclick = function () {
	alert('Задача 3');
}

//Задание 4

// Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. 
// Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

let b4 = document.querySelector('.b4'),
	 out4 = document.querySelector('.out4');

	 b4.onclick = function () {
		 let i4 = document.querySelector('.i4');
		console.log(i4.checked);
		if (i4.checked) {
			out4.innerHTML = 'true';
		} else {
			out4.innerHTML = 'false';
		}
	 }

//Задание 5

// Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если 
// checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.

let 
	 i5 = document.querySelector('.i5'),
	 b5 = document.querySelector('.b5'),
	 o5 = document.querySelector('.out5');

	 b5.onclick = function () {
		 if (i5.checked) {
			 o5.innerHTML = i5.value;
		 } else {
			 o5.innerHTML = false;
		 }
	 }

//Задание 6

//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.

let
	 i6 = document.querySelector('.i6'),
	 b6 = document.querySelector('.b6'),
	 o6 = document.querySelector('.o6');

	 b6.onclick = function () {
		 o6.innerHTML = i6.value;
	 }

//Задание 7

// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. 
// В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

let 
	 i7 = document.querySelector('.i7'),
	 b7 = document.querySelector('.b7'),
	 o71 = document.querySelector('.o71'),
	 o72 = document.querySelector('.o72');

	 b7.onclick = function () {
		 o71.innerHTML = i7.value;
		 if(i7.value.length >= 6) {
			 o72.innerHTML = 1;
		 } else {
			 o72.innerHTML = 0;
		 }
	 }

//Задание 8

// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). 
// Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let 
	 b8 = document.querySelector('.b8'),
	 o8 = document.querySelector('.o8');

	 b8.onclick = function () {
		 o8.innerHTML = "<input class=\"i81\"></input><button class=\"b81\">OK</button><div class=\"o81\"></div>";
			let b81 = document.querySelector('.b81'),
				 i81 = document.querySelector('.i81');

			b81.onclick = function () {
				let o81 = document.querySelector('.o81');
				o81.innerHTML = i81.value;
			}
	 }

//Задание 9

//Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.

let
	 r9 = document.querySelector('.r9'),
	 b9 = document.querySelector('.b9'),
	 o9 = document.querySelector('.o9');

	 b9.onclick = function () {
		 if (r9.checked) {
			 o9.innerHTML = r9.value;
		 } else {
			 o9.innerHTML = 0;
		 }
	 }

//Задание 10

//Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

let 
	 i10 = document.querySelector('.i10'),
	 b10 = document.querySelector('.b10'),
	 o10 = document.querySelector('.o10');

	 b10.onclick = function () {
		 console.log(i10.value);
		 o10.innerHTML = " - ";
		 o10.style.backgroundColor = i10.value;
	 }

//Задание 11

//Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

let 
	 i111 = document.querySelector('.i111'),
	 i112 = document.querySelector('.i112'),
	 b11 = document.querySelector('.b11');

	 b11.onclick = function () {
		i112.value = i111.value;
	 }


//Задание 12

//Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.

let
	 i12 = document.querySelector('.i12'),
	 b12 = document.querySelector('.b12'),
	 o12 = document.querySelector('.o12');

	 b12.onclick = function() {
		 o12.innerHTML = i12.value;
	 }

//Задание 13

//Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

let 
	 i13 = document.querySelector('.i13'),
	 o13 = document.querySelector('.o13');

	 i13.oninput = function () {
		 o13.innerHTML = i13.value;
	 }

//Задание 14

//Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

let
	 t14 = document.querySelector('#t14'),
	 b14 = document.querySelector('.b14'),
	 o14 = document.querySelector('.o14');

	 b14.onclick = function () {
		 o14.innerHTML = t14.value;
	 }

//Задание 15

//Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

let
	 t15 = document.querySelector('#t15'),
	 i15 = document.querySelector('.i15'),
	 b15 = document.querySelector('.b15'),
	 o15 = document.querySelector('.o15');

	 b15.onclick = function () {
		 t15.value = i15.value;
		 o15.innerHTML = i15.value;
	 }

//Задание 16

//Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

const
	 	s16 = document.querySelector('#s16'),
		b16 = document.querySelector('.b16'),
	 	o16 = document.querySelector('.o16');
		 		
	 	b16.onclick = function () {
			switch(s16.value) {
				case 'man':
					o16.innerHTML = "Муж";
					break;
				case 'female':
					o16.innerHTML = "Жен";
					break;
				case 'child':
					o16.innerHTML = "реб";
					break;
				default: o16.innerHTML = "не выбран";
			}
		 }
//Задание 17

//Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

let 
		 s17 = document.querySelector('#s17'),
		 o17 = document.querySelector('.o17');

		 s17.onchange = function f17 () {
			o17.innerHTML = s17.value;
		 }

//Задание 18

// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. 
// Функция должна выводить в input i-18 value выбранного в select option.

let
		 s18 = document.querySelector('#s18'),
		 i18 = document.querySelector('.i18');

		 s18.onchange = function f18 () {
			 i18.value = s18.value;
		 }

//Задание 19

// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. 
// По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. 
// Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

let
		 i191 = document.querySelector('.i191'),
		 i192 = document.querySelector('.i192'),
		 b19 = document.querySelector('.b19'),
		 o19 = document.querySelector('.o19');

		 b19.onclick = function f19 () {
			 o19.innerHTML = i191.value + ' ' + i192.value;
		 }

//Задание 20

//Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements 

const
		 f20 = document.querySelector('.f20').elements,
		 tx20 = document.querySelector('.tx20'),
		 psw20 = document.querySelector('.psw20'),
		 o20 = document.querySelector('.o20'),
		 b20 = document.querySelector('.b20');

		 b20.onclick = function () {
			 o20.innerHTML = f20[0].value + ' ' + f20[1].value;
		 }




