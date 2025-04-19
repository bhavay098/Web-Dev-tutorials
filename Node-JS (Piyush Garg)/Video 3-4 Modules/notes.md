# 📦 Key Files

## package.json
A file that holds metadata about our project and lists all the dependencies (like a manifest).

## node_modules/
A folder where all installed packages live. It can get huge — we usually don’t touch it directly.

## package-lock.json
Keeps track of the exact versions of installed packages to ensure consistency across environments.

# 📦 What is a Package?
- A package in programming is like a ready-made ingredient.  
- It’s a bundle of code someone else already wrote to solve a specific problem.  
- We can just "install" it and use it in our project, instead of writing it ourself.

# 🔗 What is a Dependency?
A dependency is just a package our project depends on to work.  
- When we install a package, like express, our project becomes dependent on it. If we remove it, the project might break.
- That’s why we track dependencies in a special file (package.json), so we know what your project needs to run properly.