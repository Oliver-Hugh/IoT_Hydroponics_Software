import mongoose from "mongoose";

const Schema = mongoose.Schema;

const temp = new Schema({
  degrees: {
    type: Number,
    required: true,
    validate: {
      validator: (temp_level) => temp_level >= 0 && temp_level <= 200,
      message: 'temperature degrees must be between 0 and 200'
    },
  },
});

const tempLevelModel = mongoose.model("temp Level", temp);

export default tempLevelModel;