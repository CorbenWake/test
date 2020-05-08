//ex1

// let num = 123;
// alert(num);

//ex2

// let a = 1,
//     b = 2,
//     c = 3;
// alert(a);
// alert(b);
// alert(c);

//ex3

// let a = 10;
// alert(a);
// a = 20;
// alert(a);

//ex21

// let a = (1 + 2 + 3);
// alert(a);

//ex22

// alert(2 + 2 + 3);

//ex23

// let a = 10;
//     b = 2;

//     c = a + b;
//     d = a - b;
//     e = a * b;
//     f = a / b;

// alert('дано a = 10 и b = 2');
// alert('сумма a и b равна ' + c);
// alert('разность a и b равна ' + d);
// alert('произведение a и b равна ' + e);
// alert('частное a и b равно ' + f);

//ex24

// let c = 10, d = 5;
// result = c + d;
// alert(result);

//ex25

// let a = 1, b = 2, c = 3;
// alert(a + b + c);

//ex26

// let a = 10;
//     b = 5;
//     c = a - b;
//     d = 7;
//     result = c + d;
// alert(result);

//ex27

// let a = 8 + 2 / 2;
// alert(a);

//ex219

// let a = 1.5,
//     b = 0.75;
// alert(a + b);

//ex220/221

// let a = -100;
// alert(a);
// alert(-a);

//ex222

// let a = 10, b = 3;
// alert(a % b);

//ex223

// let a = 2;
// alert(a ** 10);

//ex225

// let a = (3 * 2) ** 3;
// alert(a);

//ex31

// let a = '!!!';
// alert(a);

//ex32

// let a = 'java', b ='script';
// alert(a + b);

//ex33

// let a = 'hello', b ='world';
// alert(a + ' ' + b);

//ex34

// let name = 'Phil';
// alert('привет, ' + name + '!');

//ex35

// let age = 36;
// alert('мне ' + age + ' лет');

//ex36

// let a = 'вислоухий жоповерт';
// alert(a.length);

//ex37

// let a = `a
// b
// c`;
// alert(a);

//ex41

// let a;
// alert(a);

//ex42

// let a = null;
// alert(a);

//ex43

// let a = true;
// alert(a);


//ex44

// let a = false;
// alert(a);

//ex45

// alert('abc' * 'def')

//ex46

// alert(10 / 0);

//ex46

// alert(-10 / 0);

//ex51-55

// let s = 60, //seconds per minute
//     m = 60, //minute per hour
//     h = 24, //hours per day
//     d = 365; //days in year

// sd = s * m * h; // seconds in day
// sd30 = sd * 30; // seconds in 30 days
// sy = sd * d; //seconds in year
// md = m * h; // minutes in day
// my = md * d; // minutes in year

// document.write('секунд в сутках ' + sd);
// document.write('<br/>');
// document.write('секунд в 30 сутках ' + sd30);
// document.write('<br/>');
// document.write('секунд в году ' + sy);
// document.write('<br/>');
// document.write('минут в сутках ' + md);
// document.write('<br/>');
// document.write('минут в году ' + my);
// document.write('<br/>');

//ex56-60

// let b = 1,
//     kb = b * 1024,
//     mb = kb * 1024,
//     gb = mb * 1024,
//     tb = gb * 1024,
//     gb10 = gb * 10,
//     kbInTb = tb / 1024;

// document.write('байт в мегабайте ' + mb);
// document.write('<br/>');
// document.write('байт в гигобайте ' + gb);
// document.write('<br/>');
// document.write('байт в 10 гигобайтах ' + gb10);
// document.write('<br/>');
// document.write('байт в терабайте ' + tb);
// document.write('<br/>');
// document.write('килобайт в терабайте ' + kbInTb);
// document.write('<br/>');

//ex61

// let r = prompt('укажите радиус круга', '');
// s = 3.14 * r ** 2;
// alert('площадь круга с радиусом ' + r + ' равна ' + s);

//ex62

// let a = prompt('укажите сторону квадрата', '');
// s = a ** 2;
// alert('площадь квадрата со стороной ' + a + ' равна ' + s);

//ex63

// let a = prompt('укажите сторону прямоугольника A ', '');
// let b = prompt('укажите сторону прямоугольника B ', '');
// s = a * b;
// alert('площадь прямоугольника со сторонами ' + a + ' и ' + b + ' равна ' + s);

//ex64

// let a = prompt('укажите сторону прямоугольника A ', '');
// let b = prompt('укажите сторону прямоугольника B ', '');
// let p = (Number(a) + Number(b)) * 2;
// // alert(p);
// alert('периметр прямоугольника со сторонами ' + a + ' и ' + b + ' равна ' + p);

//ex65

// let tc = prompt('Укажите температуру в Цельсиях', '');
// let tf = Number(tc) * 1.8 + 32;
// alert('Аналогичная температура в Фаренгейтах будет ' + tf);

//ex66

// let tf = prompt('Укажите температуру в Фаренгейтах', '');
// let tc = (Number(tf) - 32) / 1.8;
// alert('Аналогичная температура в Цельсиях будет ' + tc);

//ex71

// let a = '10',
//     b = '20';
// alert(Number(a) + Number(b));

//ex75

// let a = +'2';
// let b = +'3';
// alert(a + b);

//ex76

// let a = '5px',
//     b = '6px';
// alert(parseInt(a) + parseInt(b));

//ex77

// let a = '5.5px',
//     b = '6.25px';
// alert(parseFloat(a) + parseFloat(b));

//ex78

// let a = '5.5px',
//     b = '6.25px';
// alert(parseFloat(a) + parseFloat(b) + 'px');

//ex79

// let a = 234,
//     b = 543;
// alert(String(a) + String(b));

//ex710

// let a = 710;
// alert(String(a).length);

//ex710

let a = 710,
    b = 1821;
alert(String(a).length + String(b).length);






