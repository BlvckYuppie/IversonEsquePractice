var passport = require('passport');
var express = require("express");


module.exports = function (app) {
    
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (userid, done) {


        done(null, userid);
    });

    require('./strategies/local.strategy')();

};