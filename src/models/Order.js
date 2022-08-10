import mongoose from 'mongoose';
import { v4 } from 'uuid';


const Schema = mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  foodId: {
    type: String,
    required: true,
    ref: 'Food',
  },
  userId: {
    type: String,
    required: true,
    ref: 'User',

  },
  count: Number,
}, {
  versionKey: false,
  timestamps: true,
});


export default mongoose.model('Order', Schema);