# What Are Classes in JavaScript?
A class in JavaScript is like a blueprint for creating objects. Imagine you're building a car factory. Instead of building each car from scratch, you create a template (class) that defines:

- What features each car should have (properties).
- What each car can do (methods).  

Using this blueprint, you can then create multiple cars (objects) easily.

```javascript
// Creating a class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;  // Property
    this.model = model;
    this.year = year;
  }

  displayInfo() {  // Method
    console.log(`This car is a ${this.year} ${this.brand} ${this.model}.`);
  }
}

// Creating objects from the class
let car1 = new Car("Toyota", "Corolla", 2022);
let car2 = new Car("Honda", "Civic", 2023);

// Using the method
car1.displayInfo(); // Output: This car is a 2022 Toyota Corolla.
car2.displayInfo(); // Output: This car is a 2023 Honda Civic.
```

# What Does extends Do?
- extends is a keyword in JavaScript that allows one class to inherit - properties and methods from another class.
- The Teacher class will get all the properties and methods of the User class.
- This is an example of inheritance, which is a key concept in Object-Oriented Programming (OOP).

Extends and __ proto __ both achieve inheritance, they let one class/object inherit from another.  
BUT extends is a modern, clean way to do it, while __ proto __ is an older, manual way.

# What is static in JavaScript?
In JavaScript, the static keyword is used inside a class to define methods or properties that belong to the class itself, not to instances of the class.

📌 Key points about static:

- Belongs to the class, not individual objects.
- Cannot be accessed through class instances.
- Useful for utility/helper functions or shared data.