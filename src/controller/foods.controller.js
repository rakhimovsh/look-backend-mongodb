const { default: FoodModel } = await import('../models/Food.js');
import path from 'path';
import fs from 'fs';

const GET = async (req, res) => {
  try {
    let foods = req.params?.foodId ? await FoodModel.findById(req.params?.foodId) : await FoodModel.find();

    res.status(200).json({
      status: 200,
      message: '',
      data: foods,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};
const POST = async (req, res) => {
  const { image } = req.files;
  let { name: foodImg, mv } = image;
  foodImg = Date.now() + foodImg.replace(/\s/g, '');
  mv(path.join(process.cwd(), 'src', 'uploads/foodImg', foodImg));
  const food = {
    foodName: req.body?.foodName,
    currency: req.body?.currency,
    foodImg: foodImg,
  };
  try {
    const newFood = await FoodModel.create(food);
    res.status(201).json({
      status: 201,
      message: 'food created successfully',
      data: newFood,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};
const PUT = async (req, res) => {
  try {
    let foodImg;
    if (req?.files) {
      const { image } = req?.files;

      let { name, mv } = image;
      foodImg = Date.now() + name.replace(/\s/g, '');
      mv(path.join(process.cwd(), 'src', 'uploads/foodImg', foodImg));
    } else {
      foodImg = undefined;
    }
    const foodName = req.body?.foodName;
    const currency = req.body?.currency;
    const food = {
      foodName,
      currency,
      foodImg,
    };
    let user = await FoodModel.findByIdAndUpdate(req.params?.foodId, food);
    res.status(201).json({
      status: 201,
      message: 'food updated successfully',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};

const DELETE = async (req, res) => {
  try {
    let user = await FoodModel.findByIdAndDelete(req.params?.foodId);
    res.status(200).json({
      status: 200,
      message: 'food deleted successfully',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};


const GETIMG = async (req, res) => {
  let { img } = req.params;
  res.sendFile(path.resolve(process.cwd(), 'src', 'uploads', 'foodImg', img));
};


export default { GET, POST, PUT, DELETE, GETIMG };