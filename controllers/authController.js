const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

// @desc    Login user
// @route   GET /auth
// @access  Private
const login = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login user' });
})

// @desc    Signup user
// @route   POST /auth
// @access  Private
const signup = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Signup user' });
})

// @desc    Logout user
// @route   GET /auth/logout
// @access  Private
const logout = asyncHandler(async (req, res) => {
    // On client, also delete the accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    // const foundUser;
    // if (!foundUser) {
    //     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    //     return res.sendStatus(204);
    // }

    // Code here to delete refreshToken in db...
    
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure: true - only serves on https
    res.sendStatus(204);
})

module.exports = {
    login,
    signup,
    logout
}