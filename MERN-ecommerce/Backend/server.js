import express from 'express';
import { env } from 'process';
import data from './data.js';

const app = express();

app.get('/',
        (req,res)=>{
            res.send('Server is ready!');
});

app.get('/api/products',
        (req, res)=>{
            res.send(data.products);
            console.log(data.products);
        }
);

const port = 5000 || process.env.PORT;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
});