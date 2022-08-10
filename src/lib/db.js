import mongoose from 'mongoose';

async function main(){
  await mongoose.connect("mongodb://localhost:27017/look_db")
}

export default main