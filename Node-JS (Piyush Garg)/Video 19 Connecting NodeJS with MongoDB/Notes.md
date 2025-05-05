# 🧠 What is MongoDB?
MongoDB is a database. It’s where your application stores data — kind of like a digital filing cabinet.

- 🔸 It’s a NoSQL database, which means it doesn’t use the traditional "tables and rows" structure (like in Excel or SQL databases).  
- 🔸 Instead, it stores data in JSON-like documents — imagine a data format that looks like JavaScript objects.

**MongoDB uses BSON (Binary JSON) format internally to store data.**

🔵 BSON is like JSON, but:
- ✅ Binary (not human-readable)
- ✅ Faster to read/write for the computer
- ✅ Supports more data types than JSON (like Date, Binary, ObjectId, etc.)<br><br>

# What is mongoose?
Mongoose helps you interact with MongoDB databases using JavaScript objects and schemas, making it easier to work with data. Mongoose is a Node.js package (or library) that you install using npm.

## What is a Schema in Mongoose?
A schema is like a blueprint or template that tells Mongoose what your data should look like.

It defines:

- What fields your documents will have
- What type of data each field should be (string, number, date, etc.)
- Any rules (e.g., required, unique, min/max, etc.)

Once you create a schema, you use it to build a model, which lets you actually save and retrieve data.

**✅ Basic Syntax:**
```javascript
const mongoose = require('mongoose');

// 1. Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  email: { type: String, required: true, unique: true }
});
```

## What is a Model in Mongoose?
A model is like a JavaScript version of your MongoDB collection. It's the tool you use to interact with MongoDB using the schema

You use it for CRUD operations:
- Create new documents (records)
- Read documents from the database
- Update existing documents
- Delete documents

**🔁 Relationship:**  
**Schema** = structure of your data  
**Model** = tool you use to work with that data

**✅ Basic Syntax:**
```javascript
const User = mongoose.model('User', userSchema);
```
- `"User"` is the name of the model
- `userSchema` is the schema you already created
- Mongoose will automatically create a collection called `users` in MongoDB (notice it pluralizes the name)

Always use `.then()` and `.catch()` to know if the connection worked or failed as it returns a Promise because connecting to a database takes some time — it’s not instant. So JavaScript doesn’t wait around — instead, Mongoose gives you a promise that will complete later.

## Some essential MongoDB commands:
| Command                           | Description                                                            |
|------------------------------------|-----------------------------------------------------------------------|
| `show dbs`                         | Lists all databases on the MongoDB server.                            |
| `use <dbName>`                     | Switches to a database (creates it if it doesn’t exist).              |
| `db`                               | Shows the current database.                                           |
| `show collections`                 | Lists all collections in the current database.                        |
| `db.createCollection(<name>)`      | Creates a new collection in the current database.                     |
| `db.<collection>.insertOne({})`     | Inserts a single document into a collection.                         |
| `db.<collection>.insertMany([{}])`  | Inserts multiple documents into a collection.                        |
| `db.<collection>.find()`           | Finds and returns all documents in a collection.                      |
| `db.<collection>.find({})`         | Finds documents that match the given query.                           |
| `db.<collection>.updateOne({}, {})`| Updates a single document in a collection.                            |
| `db.<collection>.updateMany({}, {})`| Updates multiple documents in a collection.                          |
| `db.<collection>.deleteOne({})`    | Deletes a single document from a collection.                          |
| `db.<collection>.deleteMany({})`   | Deletes multiple documents from a collection.                         |
| `db.<collection>.drop()`           | Deletes a collection from the database.                               |
| `db.dropDatabase()`                | Deletes the current database.                                         |
| `db.<collection>.countDocuments()` | Counts the number of documents in a collection.                       |
| `db.<collection>.findOne()`        | Finds and returns a single document in a collection.                  |
| `db.<collection>.aggregate([{}])`  | Performs an aggregation on the collection (e.g., grouping, sorting).  |
| `db.<collection>.createIndex()`    | Creates an index on a collection to improve search performance.       |


- Replace `<dbName>` with the name of your database.
- Replace `<collection>` with the name of your collection.
- Replace `{}` with the appropriate query or data to update, insert, etc.