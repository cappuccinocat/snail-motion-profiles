var router = require('express').Router();
var xyzRouter = require('./api/xyz');

router.use('/xyz', xyzRouter);

module.exports = router;
