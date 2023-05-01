const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//express
app.use('/static', express.static('static'))//for serving static file
app.use(express.urlencoded())

//pug 
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"));


//endpoint
app.get('/', (req,res)=>{
   const con = "this used to be my fav game"
   const param = {'title': 'PubG', "content": con}
   res.status(200).render('index.pug', param);
})

app.post('/', (req,res)=>{
   console.log(req.body)
   const param = {'message': 'your message has been submitted successfully'}
   res.status(200).render('index.pug',param);
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})