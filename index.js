// Task 1

// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
// так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Task 2

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000); // will be ignored
});

promise.then(alert);

// Task 3

promise.then(f1).catch(f2); // shows resolve return if promise complited, if not => reject return complited

promise.then(f1, f2); // shows only resolve returns
