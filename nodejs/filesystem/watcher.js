'use strict'

const fs = require('fs');
fs.watch('target.txt', () => console.log("File Changed!"));
console.log("Looking for changes");