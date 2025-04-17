import express from 'express';
import { deleteStudent, getAllStudent, saveStudent, updateStudent } from '../controllers/studentcontroller.js';

const studentRouter = express.Router();

studentRouter.get("/", getAllStudent)

studentRouter.post("/",saveStudent)

studentRouter.put("/",updateStudent)

studentRouter.delete("/",deleteStudent)


export default studentRouter