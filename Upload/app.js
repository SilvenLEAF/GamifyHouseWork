const express = require('express');
const path = require('path');
const multer = require('multer');



// ---------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `client/build`)));



/* ------------------------------------
.              routes (upload)
------------------------------------ */
app.post('/upload', (req, res, next)=>{
  try {
    res.send('HI!')
  } catch (err) {
    next(err, req, res);
  }
})
// errors handler
app.use((err, req, res, next)=>{
  console.log(err.message);
  console.log(err);
  res.json({ msg: `Server error!`, error: err.message });
})


// --------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})