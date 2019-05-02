// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}



// const jelle = new Person('Jelle', 23);
// const john = new Person('John', 30);

// console.log(john.age);


const jelle = new Person('Jelle', '6-29-1995');
console.log(jelle.calculateAge());































// const jelle = {
//     name: 'Jelle',
//     age: 23
// }

// console.log(jelle);

// console.log(jelle.age);