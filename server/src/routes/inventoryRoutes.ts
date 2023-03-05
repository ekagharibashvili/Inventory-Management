import { Router } from "express";
import  getInventory  from "../controllers/getInventory";
import createInventoryItem from "../controllers/createInventoryItem";
import deleteInventoryItem from "../controllers/deleteInventoryItem";

const router = Router();

router.get('/', getInventory);

router.post('/', createInventoryItem);

router.delete('/:inventoryID', deleteInventoryItem)


export default router;