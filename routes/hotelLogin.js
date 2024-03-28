const express = require('express');
const { ProductModel } = require('../model/product');
// const { allHotelUser } = require('../htelData');

const hotelLoginRoutes = express.Router();

hotelLoginRoutes.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    if (!userName || !password) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a username and password!`, res);
      return res.status(404).json({ error: 'please provide a username and password' });
    }

    const hotelUser = await ProductModel.findOne({ 'hotel.userName': userName, 'hotel.password': password });
    console.log(hotelUser);
    if (!hotelUser) {
      return res.status(404).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ id: hotelUser._id });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// hotelLoginRoutes.post('/hit', async (req, res) => {
//   try {
//     // console.log(allHotelUser, 'hotels');

//     await HotelUserModel.insertMany(allHotelUser);
//     return res.send('OK');
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = { hotelLoginRoutes };
