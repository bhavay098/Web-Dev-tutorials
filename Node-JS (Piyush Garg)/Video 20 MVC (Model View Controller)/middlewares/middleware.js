const fs = require('fs');

function logReqRes(filename) {
    return function (req, res, next) {
        fs.appendFile(filename, `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`, (err) => {
            next();
        });
    };
};

module.exports = { logReqRes };