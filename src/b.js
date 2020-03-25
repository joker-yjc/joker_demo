class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 5) {
      console.log('too short');
    } else {
      this._name = value;
    }
  }
  sayHi() {
    console.log('my name is : ', this.names);
  }
}

class SportMan extends User {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }

  sayHi() {
    super.sayHi();
    console.log('speed is : ', this.speed);
  }
}

let user = new User('John');
user.sayHi();

let liu = new SportMan('刘翔', 200);
liu.sayHi();


