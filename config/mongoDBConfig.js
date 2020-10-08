const mongoose = require('mongoose');


mongoose.connect(
  process.env.MONGODB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useCreateIndex: false
  },
  (err)=> {
    if(err) throw err;
    console.log(`Connected to mongoDB`);
  }
)