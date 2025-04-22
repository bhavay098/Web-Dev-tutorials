# What is fs module?
fs stands for File System. It's a built-in module that allows you to work with the file system on your computer. With fs, you can:
- Read files
- Write to files
- Create files
- Delete files
- Rename files
- Work with directories

# 🧵 What is the libuv Thread Pool?
The libuv thread pool is used by Node.js to offload expensive or blocking tasks so they don't block the main thread.

Tasks that use the thread pool include:
- File system operations (fs.readFile, fs.writeFile)
- DNS lookups (with dns.lookup)
- Some crypto operations (pbkdf2, scrypt, etc.)
- Compression (zlib)

**Default libuv Thread Pool Size:** 4 Threads - This means at any time, only 4 blocking operations can run in parallel.

**Maximum Thread Pool Size:** 128 Threads - This is a hard limit in libuv.