import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24* 60 * 60* 1000, // In MS
        httpOnly: true, // to prevent the XSS attacks or cross-site-scripting attack
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
    console.log("Token generated and cookie set", token);
}

export default generateTokenAndSetCookie