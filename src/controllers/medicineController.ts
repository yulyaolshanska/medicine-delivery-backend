import { Request, Response } from "express";
import Medicine from "../models/Medicine";

export const getMedicinesByDrugStore = async (req: Request, res: Response) => {
  try {
    const { drugStoreId } = req.params;
    const medicines = await Medicine.find({ drugStoreId });
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
