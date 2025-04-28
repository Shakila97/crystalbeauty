  import express from "express";
import { saveUser } from "../controllers/userController.js";

  const userRouters = express.Router();

  userRouters.post("/",saveUser)

  export default userRouters;