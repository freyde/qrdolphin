const asyncHandler = require('express-async-handler');

// @desc    Get QR codes
// @route   GET /api/qrcodes
// @access  Private
const getQrCodes = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get QR codes' });
})

// @desc    Set QR code
// @route   POST /api/qrcodes
// @access  Private
const setQrCode = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Set QR code' });
})

// @desc    Update QR code
// @route   PUT /api/qrcodes/:id
// @access  Private
const updateQrCode = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update QR code ${req.params.id}` });
})

// @desc    Delete QR code
// @route   DELETE /api/qrcodes/:id
// @access  Private
const deleteQrCode = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete QR code ${req.params.id}` });
})

module.exports = {
    getQrCodes,
    setQrCode,
    updateQrCode,
    deleteQrCode
}