import mongoose from 'mongoose';
import { v4 } from 'uuid';


const schema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  username: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    maxLength: [9, 'telefon raqam 9 belgidan oshmasligi kerak'],
  },
}, {
  timestamps: true,
  versionKey: false,
});


export default mongoose.model('User', schema);