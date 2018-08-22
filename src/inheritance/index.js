// illustrating class inheritance

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
    
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
    
  }
}

let rabbit = new Rabbit('white rabbit');
rabbit.run(5);
rabbit.hide();