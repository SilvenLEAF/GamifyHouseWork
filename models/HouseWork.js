const mongoose = require('mongoose');




// creating HouseWork Schema
const HouseWorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title MUST be gived'],
  },
  ownerId: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  reward: {
    type: Number,
  },
  description: {
    type: String,    
  },
  createdAt: String,
});







// creating HouseWork model
module.exports = HouseWork = mongoose.model('housework', HouseWorkSchema);