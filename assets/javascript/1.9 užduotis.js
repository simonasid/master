function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  
  Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  const person1 = new Person('Jonas', 'Jonaitis', 7-8-80);
  const person2 = new Person('Petas', 'Petraitis', '8-2-90');
  
  console.log(person1.getBirthYear());
  console.log(person1.getFullName());