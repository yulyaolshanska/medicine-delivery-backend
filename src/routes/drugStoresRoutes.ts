import express from "express";
import {
  getAllDrugStores,
  getMedicinesByDrugStore,
} from "../controllers/drugStoreController";
const router = express.Router();

router.get("/", getAllDrugStores);
router.get("/:drugStoreId/medicines", getMedicinesByDrugStore);

export default router;
