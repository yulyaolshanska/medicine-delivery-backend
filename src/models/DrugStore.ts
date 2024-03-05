import mongoose, { Schema, Document } from "mongoose";

export interface IDrugStore extends Document {
  name: string;
  address: string;
  contactInformation: {
    phone: string;
    email: string;
  };
}

export interface DrugStore extends mongoose.Document {
  name: string;
  address: string;
  contactInformation: {
    phone: string;
    email: string;
  };
}

const DrugStoreSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactInformation: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
});

export default mongoose.model<DrugStore>("DrugStore", DrugStoreSchema);
