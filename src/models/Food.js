import mongoose from 'mongoose';
import { v4 } from 'uuid';


const Schema = mongoose.Schema({
    _id: {
      type: String,
      default: v4,
    },
    foodName: {
      type: String,
      required: true,
      unique: true,
    },
    currency: {
      type: Number,
      required: true,
      min: 5000,
    },
    foodImg: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  });

export default mongoose.model('Food', Schema);
