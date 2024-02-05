require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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

const userControl = async (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT, (error, result) => {
            if(error){
                res.locals.user = null;
                next();
            }else{
                let user = User.findById(result.id);
                res.locals.user = user;
                next();
            }
        });
    }else{
        res.locals.user = null;
        next();
    }
}


module.exports = {authControl, userControl};