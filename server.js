const express = require('express')
const app = express();
const {sweetsmenu}=require('./sweets');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
var movies = [
    { id: 101, name: "Jawan", year: 2023, rating: 7.2 },
    { id: 102, name: "Pushpa: The Rise - Part 1", year: 2021, rating: 7.6 },
    { id: 103, name: "K.G.F: Chapter 1", year: 2018, rating: 8.2 },
    { id: 104, name: "Dear Comrade", year: 2019, rating: 7.3 },
]

var sweets=[{sno:1,shopname:"Haldiram",sweetname:["Hiramani","Kajukatli","Chenatoast","Rasgulla","Gulabjamun","Rasmalai","Santra Barfi"],location:"Nagpur"},
{sno:2,shopname:"Bombaywala",sweetname:["Hiramani","Rasmalai","Gulabjamun","Chamcham","Chena toast","Kesar chamcham","Malai sandwich","Kaju modak"],location:"Mumbai"},
{sno:3,shopname:"Heera Sweets",sweetname:["Jalebi","Imarti","Peda","Kesar peda","Kalakand","Milk Cake","Rajbhog","Motichur laddu"],location:"Nagpur"}];


// /getMovieDetail/101 - use path variable
app.get('/getMovieDetail/:id', (req, res) => {
    let id = req.params['id'];
    console.log(id);
    let movieObj = movies.filter((mov) => {
        console.log(typeof (id));
        console.log(typeof (mov.id));
        if (mov.id == id)
            return mov;
    })
    console.log(movieObj);
    res.send(movieObj);
})

// getMovieDetailsByMovieName - use query param 
app.get('/getMovieDetailsByMovieName', (request, response) => {
    let movNm = request.query['movieName'];
    let movObj = movies.filter((mov) => {
        if (movNm == mov.name) {
            return mov;
        }
    })
    response.send(movObj)
})



app.get('/', (req, res) => {
    console.log(req.baseUrl);
    res.send('Welcome')
})

app.get('/callme', (req, res) => {
    let name = req.query['name'];
    console.log(req.query)
    res.send('Calling ' + name)
})

app.get('/movies', (request, response) => {
    response.send(movies)
})

app.get('/sweets',(req,res)=>{
    let id=req.params['id'];
    console.log(id);
    res.send(sweets);
})

app.get('/getsweetsbyId/:sno',(req,res)=>{
    let sno=req.params['sno'];
    console.log(sno);
   let sweetslist= sweets.filter((check)=>{
        if(check.sno==sno)
        return check;
    })
    console.log(sweetslist);
    res.send(sweetslist);
    
        

})

app.get('/getsweetsbySno/:sno',(req,res)=>{
    let sno=req.params['sno'];
    
    console.log(sno);
    let sweetslist=sweetsmenu.filter((sname)=>{
        if(sname.sno==sno)
        return sname;
    })
    res.send(sweetslist);
})
app.get('/test',(req,res)=>{
    console.log(sweetsmenu);
    res.send(sweetsmenu);
})


app.post('/sendUserDetail',(req,res)=>{
    console.log(req.body);
    res.send("user detail saved");
    
})


app.listen(8080, (err) => {
    console.log('Server is running on port 8080.');
})
