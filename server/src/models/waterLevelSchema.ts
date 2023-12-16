import mongoose from "mongoose";

const Schema = mongoose.Schema;

const water = new Schema({
  level: {
    type: Number,
    required: true,
    validate: {
      validator: (water_level) => water_level >= 0 && water_level <= 200,
      message: 'water level must be between 0 and 200'
    },
  },
});

const waterLevelModel = mongoose.model("water Level", water);

export default waterLevelModel;