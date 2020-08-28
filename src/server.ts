import express, { request } from 'express';

const app  = express();

app.get('/', (req, resp) => {
    return resp.json({message:'hello world!!'});
});   

app.listen(3333, () => {
    console.log('Running server!!');
});