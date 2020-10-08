const router = require('express').Router();
const houseWorkController = require('../controllers/houseWorkController');




router.post('/', houseWorkController.create_house_work)
router.put('/', houseWorkController.update_house_work)
router.delete('/', houseWorkController.delete_house_work)
router.post('/all', houseWorkController.get_all_house_works)





module.exports = router;