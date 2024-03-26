const { Schema, model } = require('mongoose');

const hotelUserSchema = Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  hotelId: { type: Schema.Types.ObjectId, ref: 'Product' },
});

const HotelUserModel = model('HotelUser', hotelUserSchema);

module.exports = { HotelUserModel };
