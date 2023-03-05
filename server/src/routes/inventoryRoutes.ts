import { Router } from "express";
import  getInventory  from "../controllers/getInventory";
import createInventoryItem from "../controllers/createInventoryItem";

const router = Router();

router.get('/', getInventory);
router.post('/', createInventoryItem);


export default router;