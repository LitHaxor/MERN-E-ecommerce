/*
 * PRIMARY FILES for API
 */

// Dependencies 
const http = require('http');


// The server should respond to all request with a string
const server = http.createServer((req,res)=>{
    res.end('hello world\n');
})


// Start the server, and have it listen to post 3000

server.listen(3000, ()=>{
    console.log('The server is listening on http://localhost:3000');
})