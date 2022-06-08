const express = require('express');
const router = express.Router();
const {
    getQrCodes,
    setQrCode,
    updateQrCode,
    deleteQrCode
} = require('../controllers/qrcodeController');

router.route('/').get(getQrCodes).post(setQrCode);
router.route('/:id').put(updateQrCode).delete(deleteQrCode);

module.exports = router