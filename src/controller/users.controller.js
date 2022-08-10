import UserModel from '../models/User.js';

const GET = async (req, res) => {
  try {
    let users = req.params?.userId ? await UserModel.findById(req.params?.userId) : await UserModel.find();

    res.status(200).json({
      status: 200,
      message: '',
      data: users,
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
  try {
    let newUser = await UserModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: 'user created successfully',
      data: newUser,
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
    let user = await UserModel.findByIdAndUpdate(req.params?.userId, req.body);
    res.status(201).json({
      status: 201,
      message: 'user updated successfully',
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
    let user = await UserModel.findByIdAndDelete(req.params?.userId);
    res.status(200).json({
      status: 200,
      message: 'user deleted successfully',
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


export default { GET, POST, PUT, DELETE };