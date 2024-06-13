const express = require('express');
const axios = require('axios');
const { hashString } = require('../utils/hotelbedXKey');
const { hotelPopulateFunctions } = require('../utils/hotelPopulate');
const { hotelBedSchema } = require('../model/hotelbed');
const fs = require('fs');
const { allHotelsName } = require('./allHotel');
const hotelbedApiRoute = express.Router();
const hashed = hashString();

hotelbedApiRoute.get('/get-data', async (req, res) => {
  try {


    const allHotels = [
      215386,
      470941,
      545481,
      547322,
      558661,
      993922
    ]
    let errorCode = [];
    const chunkSize = 3;
    const delay = 10000;

    const chunks = [];
    for (let i = 0; i < allHotels.length; i += chunkSize) {
      chunks.push(allHotels.slice(i, i + chunkSize));
    }
    const processBatch = async (batch, index) => {
      for (const code of batch) {
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
          const data = response.data;
          console.log(data);
          const ans = hotelPopulateFunctions(data);
          // console.log(Array.isArray(ans.rooms[0].hotelBedsData[0]?.extraFields));
          try {
            const newHotel = new hotelBedSchema({ ...ans });
            await newHotel.save();
            console.log(newHotel);
          } catch (error) {
            errorCode.push(code);
          }
        } catch (error) {
          console.error(`Error fetching data for hotel code ${code}:`, error);
        }
      }
      if (index === chunks.length - 1) {
        res.status(200).json({ message: 'All data processed successfully' });
      }
    };

    for (let i = 0; i < chunks.length; i++) {
      setTimeout(() => {
        processBatch(chunks[i], i);
      }, i * delay);
      console.log(`Processing ${i} chunks`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hotelbedApiRoute.get('/get-all', async (req, res) => {
  try {
    const {
      hotel
    } = req.query;

    let searchCriteria = {};

    if (hotel) searchCriteria['hotel.name'] = { $regex: hotel, $options: 'i' };

    console.log(searchCriteria);

    const allHotels = await hotelBedSchema.find(searchCriteria);

    res.status(200).json(allHotels);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
hotelbedApiRoute.get("/get-all-count", async (req, res) => {
  try {
    // Fetch all hotel documents from the database
    const allHotels = await hotelBedSchema.find();
    let newarr = [];

    for (let i = 0; i < allHotelsName.length; i++) {
      // Find the hotel document by name in the fetched documents
      const foundHotel = allHotels.find(item => item.hotel.name === allHotelsName[i]);
      if (foundHotel) {
        // Check if the hotel already exists in newarr
        const existingHotelIndex = newarr.findIndex(item => item.hotel === allHotelsName[i]);
        if (existingHotelIndex !== -1) {
          // If the hotel already exists, increment its count
          newarr[existingHotelIndex].count++;
        } else {
          // If the hotel doesn't exist, add it with count 1
          const obj = { hotel: allHotelsName[i], count: 1 };
          newarr.push(obj);
        }
      }
    }
    res.status(200).json({ allHotels: newarr });

  } catch (error) {
    // Handle error
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

hotelbedApiRoute.get('/get-all-data', async (req, res) => {
  try {
    const { searchTerm, page, page_size = 5 } = req.query;

    let searchCriteria = {};

    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i'); // 'i' for case-insensitive

      searchCriteria = {
        $or: [
          { 'hotel.name': regex },
          { 'hotel.address': regex },
          { 'hotel.website': regex },
          { 'hotel.userName': regex },
          { 'hotel.email': regex },
          { 'hotel.phoneNumber.phoneNumber': regex },
          { 'hotel.category.code': regex },
          { 'hotel.chain.code': regex },
        ],
      };
    }

    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * page_size;

    const allHotels = await hotelBedSchema
      .find(searchCriteria)
      .skip(skip)
      .limit(page_size);

    const totalHotelsCount = await hotelBedSchema.countDocuments(searchCriteria);
    const totalPages = Math.ceil(totalHotelsCount / page_size);

    res.status(200).json({ hotels: allHotels, currentPage, totalPages });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hotelbedApiRoute.get('/get-all', async (req, res) => {
  try {
    const {
      hotel,
      address,
      website,
      userName,
      hotelBedApiCode,
      email,
      phoneNumber,
      categoryCode,
      chainCode,
    } = req.query;

    let searchCriteria = {};

    if (hotel) searchCriteria['hotel.name'] = hotel;
    if (address) searchCriteria['hotel.address'] = address;
    if (website) searchCriteria['hotel.website'] = website;
    if (userName) searchCriteria['hotel.userName'] = userName;
    if (hotelBedApiCode) searchCriteria['hotel.hotelBedApiCode'] = hotelBedApiCode;
    if (email) searchCriteria['hotel.email'] = email;
    if (phoneNumber) searchCriteria['hotel.phoneNumber.phoneNumber'] = phoneNumber;
    if (categoryCode) searchCriteria['hotel.category.code'] = categoryCode;
    if (chainCode) searchCriteria['hotel.chain.code'] = chainCode;

    console.log(searchCriteria);

    const allHotels = await hotelBedSchema.find(searchCriteria);

    res.status(200).json(allHotels);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



hotelbedApiRoute.get('/get-all-name', async (req, res) => {
  try {
    // const allHotelsCode = [
    //   108525, 108524, 108522, 108520, 108521, 918764, 993922, 403878, 396433, 137847, 222514, 137845, 168938, 168942,
    //   358305, 972843, 318655, 684905, 120196, 168933, 992983, 87438, 992905, 176446, 114241, 171552, 80433, 137849,
    //   665464, 173879, 173878, 574901, 194605, 254245, 111636, 141906, 141907, 547581, 480261, 317586, 163391, 106438,
    //   106438, 91431, 911814, 627761, 120192, 623841, 319179, 163450, 112087, 320680, 439641, 598881, 558661, 169879,
    //   586258, 658925, 666063, 893689, 120193, 123541, 558982, 230652, 198712, 996795, 137382, 942923, 703303, 915202,
    //   172192, 686820, 686202, 879276, 724944, 558961, 626641, 773440, 184210, 138607, 886694, 686705, 547562, 191051,
    //   93377, 61320, 138608, 128332, 319436, 320372, 470941, 112633, 93375, 518645, 547322, 145084, 639603, 137744,
    //   406798, 363697, 234724, 163451, 948990, 152772, 994564, 827201, 320232, 320232, 164527, 676087, 710201, 652052,
    //   688562, 164122, 590482, 429638, 655249, 656837, 994692, 645339, 460741, 477181, 63321, 169876, 1001026, 169878,
    //   557606, 668333, 317344, 254888, 137378, 137380, 369197, 681767, 215386, 777828, 545481, 684663, 641382, 682397,
    //   807816, 422504, 80432, 364717, 50483, 110093, 645361, 666004,
    // ];

    // const allHotels = await hotelBedSchema.find();
    // const allHotelsName = new Set(allHotels.map(item => item.hotel.hotelBedApiCode));
    // const newHotel = [];

    // for (const code of allHotelsCode) {
    //   if (!allHotelsName.has(code)) {
    //     newHotel.push(code);
    //   }
    // }
    const allHotels = await hotelBedSchema.find();
    const allHotelsCode = allHotels.map(item => {
      const obj = {
        name: item.hotel.name,
        address: item.hotel.address,
        website: item.hotel.website,
        hotelBedApiCode: item.hotel.hotelBedApiCode
      }
      return obj;
    });

    res.status(200).json(allHotelsCode);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { hotelbedApiRoute };
