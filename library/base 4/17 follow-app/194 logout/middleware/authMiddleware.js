require("dotenv").config();
const jwt = require('jsonwebtoken');

const authControl = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT, (error, result) => {
            if(error){
                res.redirect('/login')
            }else{
                next();
            }
        });
    }else{
        res.redirect('/login')
    }
}

const logoutControl = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT, (error, result) => {
            if(error){
                console.log(error.message);
                res.redirect('/login')
            }else{
                console.log(result);
                next();
            }
        });
    }else{
        res.redirect('/login')
    }
}

module.exports = {authControl};