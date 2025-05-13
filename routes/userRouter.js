  import express from "express";

  import { saveUser, loginUser } from "../controllers/userController.js";

  const userRouters = express.Router();

  userRouters.post("/",saveUser)

  userRouters.post("/login",loginUser)

  export default userRouters;