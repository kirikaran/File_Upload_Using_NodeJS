const express =require('express');
const multer =require('multer');
const ejs =require('ejs');
const path=require('path');

//set Storage Engine
const storage =multer.diskStorage({
    destination:'./public/upload/',
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
})

//Init Upload
const upload=multer({
    storage:storage
}).single('myImage')

//Init app
const app=express();

//EJS
app.set('view engine','ejs');

//public folder
app.use(express.static('./public'));

app.get('/',(req,res)=> res.render('index'));

app.post('/upload',(rq,res)=>{
    res.send('test');
})

const port=3000;

app.listen(port,()=> console.log(`Server started on port ${port}`));