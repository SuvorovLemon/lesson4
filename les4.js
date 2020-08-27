//LOOPS циклы

//WHILE
// аргумент
// while(условие) {
// выполнение
// дальнейшее действие - итерация
// }

//DO ... WHILE
// аргумент
// do {
//     выполнение
//     итерация
// }while (условие)

//FOR

// for (аргумент,условие,итерация) {
//     выполнение
// }

//FOR ... IN
//const object ={a:1,b:2,c:2}
//for (const property in object)
//


//break - 
//continue - 

//цикличные методы
//filter - фильтр для массивов
//forEach - 
//map - получить новый массив (старый остался)

const arr = [];
for (x=0; x<=10; x++ ) {
    arr.push(x);
    
console.log(arr);
};

let a=''
x=1;
while (x<10) {
    a+=x;
    x++;
};
console.log(a);

function mas (a) {
    let arr1 = [];
    
    for (x=1; x<=a; x++){    
    arr1.push(x);}
    return arr1
};
console.log(mas(4));



