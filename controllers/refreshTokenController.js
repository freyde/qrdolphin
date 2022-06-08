const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    // console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    // const foundUser;
    // if (!foundUser) return res.sendStatus(403); // Forbidden

    // // evaluate jwt
    // jwt.verify(
    //     refreshToken,
    //     process.env.REFRESH_TOKEN_SECRET,
    //     (err, decoded) => {
    //         if (err || foundUser.id !== decoded.id) return res.sendStatus(403);
    //         const accessToken = jwt.sign(
    //             {
    //                 "id": decoded.id,
    //             },
    //             process.env.ACCESS_TOKEN_SECRET,
    //             { expiresIn: '5m' }
    //         );
    //         res.json({ accessToken });
    //     }
    // );
})

module.exports = { handleRefreshToken }