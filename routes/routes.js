const routes = require("express").Router();
const TaskController = require("../controller/TaskController.js");

routes.get("/home", TaskController.getAll);

module.exports = routes

