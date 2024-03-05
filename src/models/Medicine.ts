import mongoose, { Schema, Document } from "mongoose";
import { IDrugStore } from "./DrugStore";

export interface IMedicine extends Document {
  name: string;
  price: number;
  description: string;
  drugStoreId: IDrugStore["_id"];
}

const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  drugStoreId: {
    type: Schema.Types.ObjectId,
    ref: "DrugStore",
    required: true,
  },
});

export default mongoose.model<IMedicine>("Medicine", MedicineSchema);
