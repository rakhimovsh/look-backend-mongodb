import OrderModel from '../models/Order.js';

const GET = async (req, res) => {
  try {
    let orders = await OrderModel.aggregate([{
      $lookup: {
        from: 'foods',
        localField: 'foodId',
        foreignField: '_id',
        as: 'foods',
      },
    },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      }]);

    if (req.params?.orderId) orders = orders.find(order => order['_id'] === req.params.orderId);
    res.status(200).json({
      status: 200,
      message: '',
      data: orders,
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
    let newOrder = await OrderModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: 'order created successfully',
      data: newOrder,
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
    let order = await OrderModel.findByIdAndUpdate(req.params?.orderId, req.body);
    res.status(201).json({
      status: 201,
      message: 'order updated successfully',
      data: order,
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
    let order = await OrderModel.findByIdAndDelete(req.params?.orderId);
    res.status(200).json({
      status: 200,
      message: 'order deleted successfully',
      data: order,
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