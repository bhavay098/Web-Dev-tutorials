# javascript and classes

## OOP (Object Oriented Programming)
- Programming paradigm => programming paradigm is a style or approach to programming, defining how programs should be structured and executed. Different paradigms provide different ways of thinking about and solving problems.

## Object
- collection of properties and methods
- toLowerCase

## Why use OOP

## Parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## Constructor function
The 'new' keyword in JavaScript is used to create instances of objects from constructor functions or classes. It helps in creating multiple objects with the same structure.  
A constructor function is a regular function that is used to create objects. It returns the object automatically (even though we don’t explicitly return it).  
It follows these rules:

- Function name starts with a capital letter (by convention).
- It uses 'this' to assign properties.
- When called with 'new', it creates a new object.

### <u>How new Works Behind the Scenes ?</u>
When you use new User("Bhavay", 5), JavaScript does the following:

- Creates a new empty object: {}.
- Sets this inside the function to refer to that object.
- Assigns properties to the object (this.username = username).
- Returns the object automatically (even though we don’t explicitly return it).

## 4 Pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### 1. Abstraction
**Concept:**  
Abstraction means hiding complex details and exposing only the necessary parts of an object. Think of it as using a remote control: you don’t need to know the intricate workings inside the TV; you just press a button to change the channel.  

**Example in JavaScript:**  
In this example, the Car class exposes a simple startEngine() method that internally calls a helper method to perform the ignition. The inner workings (igniting the fuel) are hidden from the user.

### 2. Encapsulation
**Concept:**  
Encapsulation is the bundling of data (properties) and methods (functions) into a single unit (a class) and controlling access to that data. It prevents external code from directly accessing or modifying internal object state.  

**Example in JavaScript:**  
Here, the BankAccount class uses a private field (denoted by the # prefix) to store the balance. The balance can only be changed using the provided deposit() and withdraw() methods, keeping the internal state safe from outside interference.
