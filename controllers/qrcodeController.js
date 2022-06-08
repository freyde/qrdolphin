const asyncHandler = require('express-async-handler');

const QRCode = require('../models/qrcode');

// @desc    Get QR codes
// @route   GET /api/qrcodes
// @access  Private
const getQrCodes = asyncHandler(async (req, res) => {
    const qrcodes = await QRCode.find();
    res.status(200).json(qrcodes);
})

// @desc    Set QR code
// @route   POST /api/qrcodes
// @access  Private
const setQrCode = asyncHandler(async (req, res) => {
    if (!req.body.data) {
        res.status(400);
        throw new Error('Please add a data field');
    }

    const qrcode = await QRCode.create({
        data: req.body.data
    })

    res.status(200).json(qrcode);
})

// @desc    Update QR code
// @route   PUT /api/qrcodes/:id
// @access  Private
const updateQrCode = asyncHandler(async (req, res) => {
    const qrcode = await QRCode.findById(req.params.id);

    if (!qrcode) {
        res.status(400);
        throw new Error('QR code not found');
    }

    const updatedQrCode = await QRCode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    res.status(200).json(updatedQrCode);
})

// @desc    Delete QR code
// @route   DELETE /api/qrcodes/:id
// @access  Private
const deleteQrCode = asyncHandler(async (req, res) => {
    const qrcode = await QRCode.findById(req.params.id);

    if (!qrcode) {
        res.status(400);
        throw new Error('QR code not found');
    }

    await qrcode.remove();

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getQrCodes,
    setQrCode,
    updateQrCode,
    deleteQrCode
}