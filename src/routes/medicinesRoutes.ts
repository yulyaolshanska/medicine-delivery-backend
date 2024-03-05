import express from "express";
import { getMedicinesByDrugStore } from "../controllers/medicineController";

const router = express.Router();

router.get("/:drugStoreId/medicines", getMedicinesByDrugStore);

export default router;
