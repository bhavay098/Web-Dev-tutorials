# What is Math.PI?
Math.PI in JavaScript is a property of the Math object that represents the mathematical constant π (pi), which is approximately 3.14159.  
You can use it in calculations involving circles, such as finding the circumference or area.  
Since Math.PI is a read-only property, you cannot change its value:

# Object.getOwnPropertyDescriptor()
The Object.getOwnPropertyDescriptor() method in JavaScript returns an object that describes the properties (attributes) of a specified property on an object. 

**Syntax:**
```javascript
Object.getOwnPropertyDescriptor(object, "propertyName");
```
- object: The object to inspect.
- propertyName: The property whose descriptor you want to retrieve.

## The Descriptor Object:
The returned object contains:

- value – The current value of the property.
- writable – true if the property can be modified, otherwise false.
- enumerable – true if the property appears in loops like for...in or Object.keys().
- configurable – true if the property can be deleted or its attributes modified.

**Why Use It?**

- To inspect how a property behaves.
- To modify property attributes using Object.defineProperty().
- To prevent modifications by setting writable or configurable to false.

## Modifying a Property Descriptor using Object.defineProperty()
The Object.defineProperty() method allows you to add or modify a property on an object with detailed control over its attributes.

**Syntax:**
```javascript
Object.defineProperty(object, 'propertyName', {descriptor});
```

- object → The object where the property will be added or modified.
- propertyName → The name of the property.
- descriptor → An object that defines property attributes.

# Object.create() in JavaScript
The Object.create() method is used to create a new object with a specified prototype.  

**Syntax:**
```javascript
Object.create(prototype, propertiesObject);
```
- prototype – The object that will be set as the prototype of the new object.
- propertiesObject (optional) – Defines new properties for the created object.