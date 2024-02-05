import express from "express";
import UserControllers from "../Controllers/userController.js";
import { upload } from "../config/cloudinary.js";
const userRoute = express.Router();

//signup
userRoute.post(
  "/signup",
  upload.single("userImage"),
  UserControllers.signupUser
);

//login
userRoute.post("/login", UserControllers.loginUser);
import Verification from "../Middleware/jwt.js";
//route after sending email

//get all
userRoute.get("/", UserControllers.getAllUsers);

//get by id
userRoute.get("/:id", UserControllers.getUserById);

//update
userRoute.put(
  "/:id",
  upload.single("userImage"),
  
  UserControllers.updateUserById
);

//delete
userRoute.delete("/:id",  Verification.verifyAdmin,UserControllers.deleteUser);
// userRoute.delete("/:id",  UserControllers.deleteUser);


export default userRoute;