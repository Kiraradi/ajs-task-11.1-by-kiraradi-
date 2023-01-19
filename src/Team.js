export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Метод add добавляет выбранного персонажа в команду (объект класса Character).
  add(character) {
    if (this.members.has(character)) {
      throw new Error('В команде уже  есть этот персонаж');
    }
    this.members.add(character);
  }

  // Метод addAll добавляет произвольное количество персонажей в команду.
  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  // Метод toArray возвращает массив команды(персонажей).
  toArray() {
    if (this.members.size < 1) {
      throw new Error('В команде нет персонажей');
    }
    const arrayMembers = [];
    this.members.forEach((character) => {
      arrayMembers.push(character);
    });
    return arrayMembers;
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let current = 0;
    return {
      next() {
        if (current < members.length) {
          current += 1;
          return {
            done: false,
            value: members[current - 1],
          };
        }
        return { done: true };
      },

    };
  }
}
