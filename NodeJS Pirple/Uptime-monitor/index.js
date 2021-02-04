/*
 * PRIMARY FILES for API
 */

// Dependencies 
const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;
// The server should respond to all request with a string
const server = http.createServer(
    (req,res)=>{ // a callback

    // 1. Get the URL and Parse it!
    const parsedURL = url.parse( req.url , true ); // when we create the server and tell it to listen, when we req comes in

    // 2. Get the path from URL

    const path = parsedURL.pathname; // untrimed path, path = hello
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');


    // get the query string
    const queryStringObject = parsedURL.query;

    // get the HTTP method 
    const method = req.method.toUpperCase();

    // get the headers
    const headers= req.headers;


    // get the payload
    const decoder = new stringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data)=>{
        buffer +=  decoder.write(data);
    });

    req.on('end', ()=>{
        buffer += decoder.end();

        // 3. Send the response
        res.end('hello world\n');
        
        // 4. log the request path
        
        console.log('Request recived with these payload: ', buffer);
    })



    // end callback
})


// Start the server, and have it listen to post 3000

server.listen(3000, ()=>{
    console.log('The server is listening on http://localhost:3000');
})