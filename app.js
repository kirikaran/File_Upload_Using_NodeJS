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
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:function(req,cb){
        checkFileType(file,cb);
    }
}).single('myImage')

//check file type 
function checkFileType(file,cb){
    //Allowed ext
    const filetypes=/jpeg|jpg |png|gif/;
   // check ext
   const extname=filetypes.test( path.extname(file.originalname).toLocaleLowerCase());
   //check mine
   const mimetype=filetypes.test(file.mimetype);
}


//Init app
const app=express();

//EJS
app.set('view engine','ejs');

//public folder
app.use(express.static('./public'));

app.get('/',(req,res)=> res.render('index'));

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            es.render('index',{
                msg:err
            });
        }else{
            console.log(req.file);
            res.send('test');
        }
    })
})

const port=3000;

app.listen(port,()=> console.log(`Server started on port ${port}`));