function Person(firstName, lastName, age) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.fullName = function()  {
      return this.firstName + ' ' + this.lastName
    };
  }

  const arjun = new Person('arjun', 'kumar', 29);
  const arjun1 = new Person('arjun4', 'kumar4', 29);