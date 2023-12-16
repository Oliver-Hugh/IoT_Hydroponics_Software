import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dissolvedOxygen = new Schema({
  level: {
    type: Number,
    required: true,
    validate: {
      validator: (dissolved_oxygen_level) => dissolved_oxygen_level >= 0 && dissolved_oxygen_level <= 14,
      message: 'dissolved oxygen level must be between 0 and 14'
    },
  },
});

const dissolvedOxygenLevelModel = mongoose.model("Dissolved Oxygen Level", dissolvedOxygen);

export default dissolvedOxygenLevelModel;