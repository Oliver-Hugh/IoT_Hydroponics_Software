import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fungicide = new Schema({
  time_since_fungicide: Date,
});

const fungicideModel = mongoose.model("time_since_fungicide", fungicide);

export default fungicideModel;