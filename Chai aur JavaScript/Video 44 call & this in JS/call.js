function setUsername(username) {
    // complex DB calls
    this.username = username
    console.log('called')
}

function createUser(username, email, password){
    setUsername.call(this, username)   // using call to hold the reference of this function
    this.email = email
    this.password = password
}
// .call() method allows us to explicitly set this when calling a function
// Here, .call() is executing setUsername(username) while ensuring this refers to the current object being created inside createUser.

let chai = new createUser('chai', 'chai@fb.com', '123')  // 'new' creates an empty object
console.log(chai)


// https://www.figma.com/design/hvqya1rVnqEsZL3NGc8KKp/Video-44-call-%26-this-in-JS?node-id=0-1&t=tnOhMbjT9QNR8PVJ-1