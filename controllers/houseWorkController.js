const HouseWork = require('../models/HouseWork')


/* ---------------------------------------
.           CREATE HOUSE WORK
--------------------------------------- */
module.exports.create_house_work = async (req, res, next)=>{
  try {
    console.log(req.body);

    // const createdHouseWork = await HouseWork.create({...req.body, ownerId: req.user._id, createdAt: new Date() })
    const createdHouseWork = await HouseWork.create({...req.body, createdAt: new Date() })
    res.json(createdHouseWork);


  } catch (err) {
    next(err, req, res)
  }
}





/* ---------------------------------------
.           UPDATE HOUSE WORK
--------------------------------------- */
module.exports.update_house_work = async (req, res, next)=>{
  try {
    const { houseWorkId } = req.body;
    const updatedHouseWork = await HouseWork.findByIdAndUpdate(houseWorkId, req.body);

    res.json(updatedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}








/* ---------------------------------------
.           UPDATE HOUSE WORK
--------------------------------------- */
module.exports.delete_house_work = async (req, res, next)=>{
  try {
    const { houseWorkId } = req.body;
    const deletedHouseWork = await HouseWork.findByIdAndDelete(houseWorkId);

    res.json(deletedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}








/* ---------------------------------------
.           GET ALL HOUSE WORKS
--------------------------------------- */
module.exports.get_all_house_works = async (req, res, next)=>{
  try {
    
    const allHouseWorks = await HouseWork.find({});

    res.json(allHouseWorks.reverse());

  } catch (err) {
    next(err, req, res)
  }
}