import { Request, Response } from "express";
import DrugStore from "../models/DrugStore";

export const getAllDrugStores = async (req: Request, res: Response) => {
  try {
    const drugStores = await DrugStore.find();
    res.json(drugStores);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
