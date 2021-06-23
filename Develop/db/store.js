const util = require('util');
const fs = require('fs');
const uid = require('uuidv1');
const readFA = util.promisify(fs.readFile);
const writeFA = util.promisify(fs.writeFile);