/*
 * HTTPS MODULE
 //importing https as  the domain is https
 import https from 'https';
 
 https.get('https://www.lynda.com/', res => {
 console.log(res);
 
 // get contents from the response as chunk to string
 
 res.on('data', chunk => {
 console.log(chunk.toString());
 });
 });
 */
import config from './config';
import express from 'express';
import fs from 'fs';
const server = express();
/*
 * two ways to serve the static html files
 */
/*
 * first method is by using the express method static, while using static we dont even need the fs module
 */
//server.use(express.static('public'));
/*
 * second method is the server.get and fs mothod
 */
/*server.get('/about.html', (req, res) => {
 fs.readFile('./public/index.html', (err, data) => {
 res.send(data.toString());
 });
 });
 */
/*
 * setting the view enginr to ejs-next
 * 
 */

server.listen(8000);
