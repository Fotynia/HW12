// "use strict"
  // function randomDelayPrint(message) {
  //   for (let i = 0; i < message.length; i++) {
  //   const letter = message[i];
  //   const delay = Math.random() * 1000; 
  //   setTimeout(() => {
  //   console.log(letter); 
  //   }, delay);
  //   }
  // }
  //  randomDelayPrint("Hello");



  //  function debounce(func, delay) {
  //   let timeoutId;
  
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  
  //     clearTimeout(timeoutId);
  
  //     timeoutId = setTimeout(function () {
  //       func.apply(context, args);
  //     }, delay);
  //   };
  // }
  
  // const expensiveOperation = () => console.log("Виконую складну операцію...");
  // const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);




  // function intervalRace(functions, t) {
  //   const results = [];
  //   let index = 0;
  //   function runFunction() {
  //    if (index < functions.length) {
  //   const currentFunction = functions[index];
  //   const result = currentFunction();
  //       results.push(result);
  //       index++;
  //         setTimeout(runFunction, t);
  //     }
  //   }
  //     runFunction();
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(results);
  //     }, functions.length * t);
  //   });
  // }
  // const function1 = () => "Функція 1 викликана";
  // const function2 = () => "Функція 2 викликана";
  // const function3 = () => "Функція 3 викликана";
  // const functionsArray = [function1, function2, function3];
  // const interval = 1000;
  // intervalRace(functionsArray, interval).then((results) => {
  // console.log("Результати викликів функцій:", results);
  // });
  // debouncedExpensiveOperation();
 