import { Router } from "express";
import  getInventory  from "../controllers/getInventory";

const router = Router();

router.get('/', getInventory);


export default router;