# 🔹 What is a Schema?
A Schema in Mongoose is like a blueprint / structure for your MongoDB documents.

It tells Mongoose:
- What fields exist in a document
- What type each field should be (String, Number, Boolean, ObjectId, etc.)
- Validation rules (e.g., `required: true`, `default`, `enum`)
- Relationships with other collections (ref)

👉 Think of it like a class definition in OOP. It defines the shape of the data, but doesn’t directly interact with the database.

---

# 🔹 What is a Model?
A Model is a constructor function created from a schema.
It represents a collection in MongoDB and gives you methods to create, read, update, and delete (CRUD) documents.

👉 You cannot directly use a Schema to interact with MongoDB — you must turn it into a Model.

**<u>Note:</u>** Mongoose automatically makes the model name lowercase + plural.