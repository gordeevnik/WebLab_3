// Cоздаются 3 объекта, сравниваем их на схожесть
const object1 = {
	name: 'Boris',
  weight: 15,
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};


// Функция сравнивает по полям объекты путем полного перевода в строку формата Json
const isEquivalent = (first, second) => {
  return JSON.stringify(first) === JSON.stringify(second)
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false
