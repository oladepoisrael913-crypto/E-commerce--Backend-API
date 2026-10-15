const express = require("express");
const userRoutes = express.Router();
const {reggisterUser, LoginUser} = require("../controller/userController.js");
const { validateRegister, validateLogin } = require("../MiddleWare/Validator.js");
const {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("../controller/userController.js");

userRoutes.post("/create", validateRegister, createUser);
userRoutes.post("/login", validateLogin, LoginUser);
userRoutes.get("/getAll", getAllUsers);
userRoutes.get("/getSingle/:id", getSingleUser);
userRoutes.patch("/update/:userId", updateUser);
userRoutes.delete("/delete/:id", deleteUser);

module.exports = userRoutes;
