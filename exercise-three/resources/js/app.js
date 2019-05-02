//Object.prototype
//Person.prototype


// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = 

}


// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Gets Married
Person.prototype.getsMaried = function(newlastName){
    this.lastName = newlastName;
}


const jelle = new Person('Jelle', 'Traa', '6-29-1995');
const céline = new Person('Céline', 'Lanting', '8-1-1997');

console.log(céline);

console.log(jelle.calculateAge());

console.log(céline.getFullName());

céline.getsMaried('Marley');

console.log(céline.getFullName());

console.log(céline.hasOwnProperty('firstName'));
console.log(céline.hasOwnProperty('getFullName'));

