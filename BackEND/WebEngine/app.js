//core modules
const express = require('express');
const path = require('path');


// firing express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/client')));



app.get("/", (request, response)=>{
  response.sendFile(path.join(__dirname, '/client/index.html'));
});



app.post("/me", (request, response)=>{
  const { msg } = request.body;
  response.json({ message: msg });
});




const PORT = process.env.PORT || 5000;
app.listen(5000, ()=>{
  console.log(`I'm listening.`);
})

