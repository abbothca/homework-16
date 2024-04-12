"use strict";

// console.group буде порожнім : закриється зразу ж, бо проміс потрапить в Job queue і буде виконаний пізніше
console.group("Task 3"); 

// стоврюємо новий проміс і переводимо його в стан felfilled зі значенням \2\
const promise = new Promise(res => res(2));
// запускаємо ланцюжок промісів, щою обробити const promise
promise.then(v => {
    // виводимо в консоль вхідне значення \2\ - перший запис
    console.log(v);
    // повернемо 2*2 = 4
    return v * 2;
})
    .then(v => {
        // виводимо в консоль вхідне значення \4\ - другий запис
        console.log(v);
        // повернемо 2*4 = 8
        return v * 2;
    })
    // завершимо викнання коду 
    .finally(v => {
        // метод finally не приймає аргументів, тому в консоль піде undefined - третій запис
        console.log(v);
        // метод finally повертає новий проміс зі станом, з яким завершився поточний проміс
        return v * 2;
    })
    // починається обробка нового проміса, який отримає на вході зарезолвене значення \8\
    .then(v => {
        // в консоль піде 8 - останній четвертий запис
        console.log(v);
    });

    console.groupEnd()