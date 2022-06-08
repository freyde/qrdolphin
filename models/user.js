const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        email_verified_at: {
            type: Date
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema)