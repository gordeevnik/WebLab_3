//Создаем функцию счетчика со внутренним состоянием
function createCounter() {
  let innerState = 1

  return () => innerState++ 
  //После каждого вызова этого объекта инкрементируем счетчик
}

const count = createCounter(); //Возвращаем стрелочную функцию

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5