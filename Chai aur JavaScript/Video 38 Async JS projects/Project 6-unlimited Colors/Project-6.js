// Project link: https://stackblitz.com/edit/dom-project-chaiaurcode-guipqmde?file=6-unlimitedColors%2Findex.html,6-unlimitedColors%2Fchaiaurcode.js


// generate a random color

const randomColor = function () {
    let hex = '0123456789ABCDEF'; // hex values range
    let color = '#';
    for (let i = 0; i < 6; i++) {   // hex color code contains 6 digits
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
let startChangingColor = function () {
    if (!intervalId) {   // or use intervalId == null   // Prevent multiple intervals
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
};
let stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // clearing the value of intervalId and dereferencing it
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);