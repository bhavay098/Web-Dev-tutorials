# Getter and Setter in JavaScript
In JavaScript, getters and setters are special methods that allow you to get (retrieve) and set (update) the value of an object’s property in a controlled way.  
They are defined inside objects using the get and set keywords.
- Getter (get) allows reading a property like a normal variable.
- Setter (set) allows assigning a value with additional control (e.g., validation).
- No need to call them as functions (obj.getProperty() ❌ → obj.property ✅).
- If using getter, then using setter is neccessary


**<u>Why Use Getters and Setters?</u>**
- Encapsulation – They allow us to control how properties are accessed or modified.
- Validation – You can add checks before setting a value.
- Computed Properties – Getters can compute values dynamically.
- Read-Only Properties – A getter without a setter makes a property read-only.

## Private Properties Using Naming Convention (_property)
JavaScript does not have true private properties in regular objects and classes.
Instead, developers use a naming convention:  
✔ Prefix property names with an underscore (_) to indicate it should not be accessed directly.

**Example: Private Property (Naming Convention)**
```javascript
const user = new User("test@example.com", "12345");
console.log(user.email); // "TEST@EXAMPLE.COM"

user._email = "hacked@example.com"; // ❌ Can still be modified (not truly private)
console.log(user.email); // "HACKED@EXAMPLE.COM"
```

## Private Properties Using # (Truly Private)
Starting from ES2020, JavaScript introduced private fields using #.

**Example: Using # for True Private Properties**
```javascript
const user = new User("test@example.com", "12345");
console.log(user.email); // "TEST@EXAMPLE.COM"

console.log(user.#email); // ❌ ERROR: Private field '#email' must be declared in an enclosing class
```