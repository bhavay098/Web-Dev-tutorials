# What is MVC (Model-View-Controller)?
MVC is a software design pattern used for developing applications—especially web apps—that separates the application into three interconnected components:

## 🔷 1. Model
- What it is: The part that manages the data, logic, and rules of the application.
- Responsibility: It handles data storage, retrieval, and manipulation (usually from a database).
- Example: In a todo app, the Model would define what a "task" is (its properties like `title`, `completed`, `dueDate`) and handle storing or updating that task.

## 🔷 2. View
- What it is: The UI or presentation layer. What the user sees and interacts with.
- Responsibility: It displays data to the user and sends user actions (like clicks) to the controller.
- Example: The webpage or screen that shows the list of todos, input fields, and buttons.

## 🔷 3. Controller
- What it is: The middleman between Model and View.
- Responsibility: It receives input from the View, processes it (maybe using the Model), and updates the View accordingly.
- Example: If a user clicks "Add Task", the Controller takes that input, tells the Model to create a new task, and then tells the View to refresh the task list.

## 💡 Visual Analogy:
Imagine a restaurant:
- Model = Kitchen (prepares the food/data)
- View = Waiter showing you the menu and serving food (what you see)
- Controller = Waiter taking your order and delivering it to the kitchen (handles logic and flow)