import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./server";
require("dotenv").config();
import drugStoresRouter from "./routes/drugStoresRoutes";
import medicinesRouter from "./routes/medicinesRoutes";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());

connectDB();

app.use("/api/drugStores", drugStoresRouter);
app.use("/api/medicines", medicinesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
