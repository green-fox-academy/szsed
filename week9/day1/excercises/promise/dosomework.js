'use strict';

const http = require('q-io/http');

http.read('http://localhost:7000').then(result => http.read(`http://localhost:7001/${result}`).then(JSON.parse).then(console.log));