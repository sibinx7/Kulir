const express = require('express');
const router = express.Router();

const VideoCtrl = require('../controllers/video.ctrl');

/* Video routes */
router.get('/', VideoCtrl.index)


module.exports = router;