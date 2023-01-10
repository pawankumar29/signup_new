import express from 'express';
import Dotenv from 'dotenv';
import swig from 'swig';
import path from 'path';
Dotenv.config();
import DB from './core/DbConnect.js'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const module=path.join(__dirname,'modules');

const app=express();



// three for using the view engine
app.set('views', path.join(module, 'views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.get('/',(req,res)=>{
     res.render('Form');
})

app.post('/postData',(req,res)=>{
     
    const data=req.body.data;

    if(!data){
        retr
    }

})
app.listen(3000,()=>{
    console.log("running at 3000");
})
