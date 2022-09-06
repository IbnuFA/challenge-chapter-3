class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }

    introduce(){
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old')
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status)
        this.master = master
    }

    GreetMaster(){
        console.log('Hello ' + this.master)
    }
}

Hiu = new Shark('Hiu Macan', 15, 'Hidup')
Hiu.introduce();

Kucing = new Cat('Anggora', 5, 'Hidup')
Kucing.introduce();

Anjing = new Dog('Siberian Husky', 8, 'Hidup', 'Diluc')
Anjing.introduce();
Anjing.GreetMaster();