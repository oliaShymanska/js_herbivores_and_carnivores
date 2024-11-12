'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Carnivore || victim.hidden === true) {
      return;
    }

    victim.health -= 50;

    if (victim.health <= 0) {
      const indexDeadAnimal = Animal.alive.indexOf(victim);

      Animal.alive.splice(indexDeadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
