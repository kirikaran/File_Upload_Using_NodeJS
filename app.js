const express =require('express');
const multer =require('multer');
const ejs =require('ejs');
const path=require('path');

//Init app
const app=express();

//EJS
app.set('view engine','ejs');

//public folder
app.use(express.static('./public'));

app.get('/',(req,res)=> res.render('index'));

const port=3000;

app.listen(port,()=> console.log(`Server started on port ${port}`));