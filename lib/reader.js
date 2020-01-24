'use strict'


const fs = require('fs');
const util = require('util');

const readerWithCallback = (file, cb) => {
    fs.readFile(file, (err, data) => {
        if (err) { cb(err) }
        cb(null, data);

    })
}


const readerFilePromise = util.promisify(fs.readFile);
const readerWithPromise = (file) => {
    return readerFilePromise(file)
    .then (file=> file.toString())
    .catch(err => console.error(err))
}

module.exports = {readerWithCallback, readerWithPromise}