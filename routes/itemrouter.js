import express from 'express';
import { getAllItem, saveItem, getGoodItem, searchItem } from '../controllers/itemcontroller.js';
import { get } from 'mongoose';

const itemRouter = express.Router();

itemRouter.get("/",getAllItem)

itemRouter.post("/",saveItem)

itemRouter.get("/good",getGoodItem)

itemRouter.get("/:name",searchItem)




export default itemRouter;