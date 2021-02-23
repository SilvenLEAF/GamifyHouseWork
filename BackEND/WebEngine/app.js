const express = require('express');
const path = require('path');


// firing express app
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client')));




/* -------------------------------------------
.                   routes
------------------------------------------- */
app.get("/", (req, res, next)=>{
  try {
    res.sendFile(path.join(__dirname, '/client/index.html'));
  } catch (err) {
    next(err, req, res);
  }
});

app.post("/me", (req, res, next)=>{  
  try {
    const { msg } = req.body;
    res.json({ message: msg });
  } catch (err) {
    next(err, req, res);
  }
});



// error handler
app.use((err, req, res, next)=>{
  console.log(err.message);
  console.log(err);

  res.status(500).json({ error: true, error: err.message || `Server Error!` })
})







// -------------------------- LISTEN
const PORT = process.env.PORT || 5000;
app.listen(5000, ()=>{
  console.log(`I'm listening.`);
})

