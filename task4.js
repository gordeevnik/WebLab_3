function User(name) {
  this.name = name;
}

// У каждого объекта есть прототип, мы можем его расширить
// Это позволяет оптимизировать распределение данного метода между экзмемплярами
User.prototype.getName = function() {
  return this.name
  //Метод возвращения имени
}

const me = new User('Rex');

console.log(me.getName()); // Rex