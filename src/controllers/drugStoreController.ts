import { Request, Response } from "express";
import DrugStore from "../models/DrugStore";
import Medicine from "../models/Medicine";

export const getAllDrugStores = async (req: Request, res: Response) => {
  try {
    const drugStores = await DrugStore.find();
    res.json(drugStores);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMedicinesByDrugStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { drugStoreId } = req.params;

  try {
    console.log("Fetching medicines for drug store:", drugStoreId);

    // Find the DrugStore by ID
    const drugStore = await DrugStore.findById(drugStoreId);

    if (!drugStore) {
      console.log("Drug store not found:", drugStoreId);
      res.status(404).json({ error: "Drug store not found" });
      return;
    }
    console.log("drugStore", drugStore);
    const medicineIds = drugStore.medicineIds;

    console.log("Medicine IDs associated with drug store:", medicineIds);

    // Fetch all medicines associated with the drug store
    const medicines = await Medicine.find({ _id: { $in: medicineIds } });

    console.log("Fetched medicines:", medicines);

    res.status(200).json({
      message: "success",
      data: { result: medicines },
    });
  } catch (error) {
    console.error("Error fetching medicines by drug store:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
