import mongoose from "mongoose";

const Schema = mongoose.Schema;

const electricalConductivity = new Schema({
  level: {
    type: Number,
    required: true,
    validate: {
      validator: (electrical_level) => electrical_level >= 0 && electrical_level <= 14,
      message: 'electrical conductivity level must be between 0 and 14'
    },
  },
});

const electricalConductivityLevelModel = mongoose.model("Electrical Level", electricalConductivity);

export default electricalConductivityLevelModel;