const express = require('express');
const axios = require('axios');
const { hashString } = require('../utils/hotelbedXKey');
const { hotelPopulateFunctions } = require('../utils/hotelPopulate');
const { hotelBedSchema } = require('../model/hotelbed');
const hotelbedApiRoute = express.Router();

hotelbedApiRoute.post('/', async (req, res) => {
  try {
    const code = req.body.code;
    let data;

    const hashed = hashString();
    try {
      const response = await axios.get(
        `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${code}/details?language=ENG&useSecondaryLanguage=False`,
        {
          headers: {
            Accept: 'application/json',
            'X-Signature': hashed,
            'Api-key': '34396c941923d1778d1e5ad83ca974cc',
            'Accept-Encoding': 'gzip',
          },
        },
      );

      data = response.data;
      let asn = hotelPopulateFunctions(data);
      const newHotel = new hotelBedSchema(asn);
      await newHotel.save();
      res.status(200).json(newHotel);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { hotelbedApiRoute };
