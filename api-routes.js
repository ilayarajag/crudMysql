
const { _, moment } = require('../config/common-includes');
const express = require('express');
let api = express.Router();

const userController = require("../controllers/userController");

api.route('/user/add').post(userController.create);
api.route('/user/update').post(userController.update);
api.route('/user/details').post(userController.userDet);
module.exports = api;
