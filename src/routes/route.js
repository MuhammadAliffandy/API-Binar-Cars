const express = require('express' );
const router = express.Router();

const car = require('../api/cars');
const tes = require('../api/test');

router.use('/cars', car);
router.use('/test', tes);

module.exports = router;