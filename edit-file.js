'use strict';


const fs = require('fs');
const util = require('util');



const reader = require('./lib/reader.js');

let file = `${__dirname}/data/person.json`

///////Callback function/////////////
fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log('callback',data.toString().trim());

})



///////Promise Function///////////////
let readFilePromise = util.promisify(fs.readFile);

readFilePromise(file)
    .then(file => console.log('promise: ', file.toString()))
    .catch(err => console.error(err));



///////////Async/Await Function/////////////

async function readFileAsync(file) {
    try {
        let data = await readFilePromise(file);
        console.log('Async', data.toString().trim())
    } catch (err) {
        console.error('error: ', err);
    }
}

readFileAsync(file);



/////////////Write with Callback Function////////////

fs.writeFile("data/output.txt", JSON.stringify(file), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File saved successfully!");
});

