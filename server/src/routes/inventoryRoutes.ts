import { Router } from "express";
import  getInventories  from "../controllers/getInventories";

const router = Router();

router.get('/', getInventories)

export default router;