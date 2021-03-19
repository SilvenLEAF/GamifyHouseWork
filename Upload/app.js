const express = require('express');
const path = require('path');
const multer = require('multer');



// ---------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `client`)));



/* ------------------------------------
.        multer settings (upload)
------------------------------------ */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

//var upload = multer({ dest: 'uploads/' })
let upload = multer({ storage: storage, fileFilter: imageFilter }).single('avatar');

/* ------------------------------------
.              routes (upload)
------------------------------------ */
app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, `client/index.html`));
})

app.post('/upload', upload, (req, res, next)=>{
  try {
    const reqFile = req.file;
    const reqBody = req.body;

    console.log({reqFile, reqBody});
    res.send(`HI`)


    
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




function imageFilter (req, file, cb) {
  console.log('file***********************************/n', file)
  console.log('file***********************************END')
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};