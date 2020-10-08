const { logRed, logGreen, logOrange, logBlue } = require('./chalkFunctions');

if(process.env.NOD_ENV !== 'production'){
  require('dotenv').config();
  
}



const express = require('express');
const path = require('path');


// -------------------FIRING EXPRESS APP
const app = express();
app.use(express.static(path.join(__dirname, `/client/build`)));






/* --------------------------------------
.                   config
-------------------------------------- */
require('./config/mongoDBConfig');







/* --------------------------------------
.                   routes
-------------------------------------- */
app.get('*', (req, res, next)=>{
  try {
    res.sendFile(path.join(__dirname, `/client/build/index.html`));
  } catch (err) {
    next(err, req, res);
  }
})




// errors handling
app.use((err, req, res)=>{
  console.log("err.message")
  logRed(err.message)
  console.log(err);
  res.json({ msg: `Server error.`, error: err.message });

})






// -------------------------------LISTEN
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})
