import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ph = new Schema({
  level: {
    type: Number,
    required: true,
    validate: {
      validator: (ph_level) => ph_level >= 0 && ph_level <= 14,
      message: 'pH level must be between 0 and 14'
    },
  },
});

const phLevelModel = mongoose.model("ph Level", ph);

export default phLevelModel;