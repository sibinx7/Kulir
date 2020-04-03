const express = require('express');
const router = express.Router();

const VideoCtrl = require('../controllers/video.ctrl');

/* Video routes */
/**
 * @swagger
 * tags:
 *   - name: Videos
 *     description: Video routes 
 */
router.get('/', VideoCtrl.index)
router.get('/:id', VideoCtrl.show)


module.exports = router;