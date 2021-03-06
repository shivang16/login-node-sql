const express = require('express')
const authController = require('../controllers/auth');
const routes = express.Router()


routes.post("/register",authController.register);

routes.post("/login",authController.login);

routes.get("/logout",authController.logout);

routes.post("/forgotPassword",authController.forgotPassword);

routes.post('/otp',authController.otp);

routes.get('/changePass',authController.changePass);

routes.post('/changePassword',authController.changePassword);

module.exports = routes;