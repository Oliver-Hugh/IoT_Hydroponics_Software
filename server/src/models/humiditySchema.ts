import mongoose from "mongoose";

const Schema = mongoose.Schema;

const humidity = new Schema({
  level: {
    type: Number,
    required: true,
    validate: {
      validator: (humidity_level) => humidity_level >= 0 && humidity_level <= 100,
      message: 'humidity level must be between 0 and 100'
    },
  },
});

const humidityLevelModel = mongoose.model("humidity Level", humidity);

export default humidityLevelModel;