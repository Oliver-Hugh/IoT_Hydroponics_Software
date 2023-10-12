import mongoose from "mongoose";

const Schema = mongoose.Schema;

const firstSchema = new Schema({
  title: String,
  date: Date
});

const firstSchemaModel = mongoose.model("First Schema", firstSchema);

export default firstSchemaModel;