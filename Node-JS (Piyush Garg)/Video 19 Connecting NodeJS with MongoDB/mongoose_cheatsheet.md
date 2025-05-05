# 🛠️ Mongoose Syntax Cheat Sheet

## 🔌 mongoose.connect()
```js
mongoose.connect('mongodb://localhost:27017/dbName', {
  useNewUrlParser: true,    // parse MongoDB URI correctly
  useUnifiedTopology: true  // use the new Server Discover and Monitoring engine
})
  .then(() => console.log('Connected'))   // executed on successful connection
  .catch(err => console.error(err));      // executed on connection error
```
- **URI**: `'mongodb://localhost:27017/dbName'` specifies host, port, and database name.
- **useNewUrlParser**: uses the new URL string parser under the hood.
- **useUnifiedTopology**: opts in to the new topology engine for monitoring server status.

---

## 🧱 mongoose.Schema()
```js
const schema = new mongoose.Schema({
  field: {
    type: String,         // data type
    required: true,       // field must be provided
    unique: true          // no duplicate values in this field
  },
  other: Number           // shorthand: only type provided
}, {
  timestamps: true        // adds `createdAt` and `updatedAt` Date fields
});
```
- **type**: data type (String, Number, Boolean, Date, Array, ObjectId, etc.).
- **required**: ensures the field is not empty when saving.
- **unique**: creates a unique index at the database level.
- **timestamps**: automates tracking of creation and update times.

---

## 🧪 Model.create()
```js
const doc = await Model.create({
  field: 'value',        // must match schema field names
  other: 42
});
```
- Creates and saves a new document in the collection.
- Returns a **Promise** that resolves to the saved document.

---

## 🔍 Model.findById()
```js
const doc = await Model.findById('60a7f8b4e8b3b2c9a6e12345');
```
- **Argument**: document’s `_id` string or ObjectId.
- Returns `null` if no document matches the provided ID.
- Returns a **Promise** resolving to the found document.

---

## ✏️ Model.findByIdAndUpdate()
```js
const updated = await Model.findByIdAndUpdate(
  '60a7f8b4e8b3b2c9a6e12345',  // target document _id
  { field: 'newValue' },       // update operations
  {
    new: true,                 // return the *updated* document, not the original
    runValidators: true        // enforce schema validation on updated fields
  }
);
```
- **new**: when `true`, delivers the updated document in the result.
- **runValidators**: ensures that updates conform to schema rules.

---

## ❌ Model.findByIdAndDelete()
```js
const deleted = await Model.findByIdAndDelete('60a7f8b4e8b3b2c9a6e12345');
```
- Deletes the document with the matching `_id`.
- Returns the deleted document, or `null` if none found.

---

## 📋 Summary Table

| Method                        | Purpose                                 | Key Options                         |
|-------------------------------|-----------------------------------------|-------------------------------------|
| `mongoose.connect()`          | Connect to MongoDB                      | `useNewUrlParser`, `useUnifiedTopology` |
| `new mongoose.Schema()`       | Define document structure               | `required`, `unique`, `timestamps`  |
| `Model.create()`              | Add a new document                      |                                     |
| `Model.findById()`            | Retrieve a document by its `_id`        |                                     |
| `Model.findByIdAndUpdate()`   | Update a document by its `_id`          | `new`, `runValidators`              |
| `Model.findByIdAndDelete()`   | Remove a document by its `_id`          |                                     |
