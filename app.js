import express from 'express';
import Dotenv from 'dotenv';
import swig from 'swig';
import path from 'path';
import bodyParser from 'body-parser';
Dotenv.config();
import DB from './core/DbConnect.js'
import Router from './modules/Routes/Route.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const module=path.join(__dirname,'modules');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// three for using the view engine
app.set('views', path.join(module, 'views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/v1',Router);
app.get('/',(req,res)=>{
     res.render('Form');
})

app.listen(3000,()=>{
    console.log("running at 3000");
})



//error
// 1.give .js extension on import