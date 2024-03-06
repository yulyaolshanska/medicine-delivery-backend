import mongoose, { Schema, Document } from "mongoose";

export interface DrugStore extends mongoose.Document {
  name: string;
  address: string;
  contactInformation: {
    phone: string;
    email: string;
  };
  medicineIds: mongoose.Types.ObjectId[];
}

const DrugStoreSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactInformation: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  medicineIds: [{ type: Schema.Types.ObjectId, ref: "Medicine" }],
});

export default mongoose.model<DrugStore>("Drug-store", DrugStoreSchema);
