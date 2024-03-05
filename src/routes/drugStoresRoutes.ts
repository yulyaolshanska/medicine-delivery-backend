import express from "express";
import { getAllDrugStores } from "../controllers/drugStoreController";
const router = express.Router();

router.get("/", getAllDrugStores);

export default router;
