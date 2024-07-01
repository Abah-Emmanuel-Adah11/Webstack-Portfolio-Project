const express = require('express');
const planController = require('../controllers/planController')

const router = express.Router();

router.get('/', planController.getplan);
router.post('/save', planController.saveplan);
router.post('/update', planController.updateplan);
router.post('/delete', planController.deleteplan);

module.exports = router;