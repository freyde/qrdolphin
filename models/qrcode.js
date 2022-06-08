const mongoose = require('mongoose');

const qrcodeSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('QRCode', qrcodeSchema)