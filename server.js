const express=require("express");
const path=require('path')
const parser=require('body-parser');

const app=express();
app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}))

//app.use('/static',express.static('public'));

// app.get('/',(req,res)=>{
//     console.log("root api");
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

app.get('/send',(req,res)=>{
    let name=req.query['fname'];
    res.send("welcome "+name);
})

app.post('/send',(req,res)=>{
    console.log(req.body);
 let name=req.body['fname']
     res.send("welcome"+name);
    // let obj=req.body;
    
   
})



app.listen(8080,()=>{
console.log("server running on 8080 port");
})