const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer((req,res)=>
    {    
        console.log('request made\n',req.url , req.method);
        res.setHeader('Content-Type','text/html');
        let path = './Views/';

        // ------- simple routing ----------
        switch(req.url){
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/login':
                path += 'Login.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'About.html';
                res.statusCode = 200;
                break;   
            default:
                path += '404.html';
                res.statusCode = 404;
                break;             
        }
        // ----------  Reading & Sending : html page ------------

        fs.readFile(path,(err,data)=>{
            if(err){
                console.log(err);
                res.end();
            }else{
                console.log('html successfully sent');
                //res.write(data);
                res.end(data); // since it's only a one line then this is similar as above
            }
        });

        /*res.setHeader('content-type','text/html');
        res.write('<h3 style="color: blueviolet;margin-left: 43%;">This is a response</h3>');
        res.end();*/

    }).listen(3000,'localhost' , ()=>
    {
        console.log('Server is listening on port 3000')
    });

