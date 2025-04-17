import express from 'express';
import { getAllItem, saveItem } from '../controllers/itemcontroller.js';

const itemRouter = express.Router();

itemRouter.get("/",getAllItem)

itemRouter.post("/",saveItem)



export default itemRouter;