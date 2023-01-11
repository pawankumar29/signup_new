import express from 'express'

import userController from '../controllers/userController.js'
const Router=express.Router();
const controllerObj=new userController();
Router.route('/signup').post(controllerObj.postData);
Router.route('/login').post(controllerObj.checkUser);



export default Router;