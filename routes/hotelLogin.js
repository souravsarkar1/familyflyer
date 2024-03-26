const express = require('express');
const { HotelUserModel } = require('../model/hotelUser');
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

    const hotelUser = await HotelUserModel.findOne({ userName, password });
    console.log(hotelUser);
    if (!hotelUser) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Invalid username or password!`, res);
      return res.status(404).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ hotelUser });
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
