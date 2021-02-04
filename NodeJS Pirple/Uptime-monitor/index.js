/*
 * PRIMARY FILES for API
 */

// Dependencies 
const http = require('http');
const url = require('url');

// The server should respond to all request with a string
const server = http.createServer(
    (req,res)=>{ // a callback

    // 1. Get the URL and Parse it!
    const parsedURL = url.parse( req.url , true ); // when we create the server and tell it to listen, when we req comes in

    // 2. Get the path from URL

    const path = parsedURL.pathname; // untrimed path, path = hello
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');


    // 5. get the HTTP method 
    const method = req.method.toUpperCase();

    // 3. Send the response
    res.end('hello world\n');
    
    // 4. log the request path
    
    console.log('Request recieved: ' + trimmedPath + ' with method:  ' + method);

    // end callback
})


// Start the server, and have it listen to post 3000

server.listen(3000, ()=>{
    console.log('The server is listening on http://localhost:3000');
})