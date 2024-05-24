const express = require('express');
// const axios = require('axios');
const { hashString } = require('../utils/hotelbedXKey');
// const { hotelPopulateFunctions } = require('../utils/hotelPopulate');
const { hotelBedSchema } = require('../model/hotelbed');
const hotelbedApiRoute = express.Router();
const hashed = hashString();
console.log(hashed, 'hashed');

// hotelbedApiRoute.get('/get-data', async (req, res) => {
//   try {
//     const allHotels = [
//       50568, 50570, 50571, 61320, 63321, 80432, 80433, 87438, 91431, 93375, 93376, 93377, 106438, 108520, 108521,
//       108522, 108524, 108525, 110093, 111636, 112087, 112633, 114241, 120192, 120193, 120196, 123541, 128332, 137378,
//       137380, 137381, 137382, 137744, 137845, 137847, 137849, 138607, 138608, 141906, 141907, 141908, 145084, 152772,
//       163391, 163450, 163451, 164122, 164527, 164921, 168933, 168938, 168942, 169876, 169878, 169879, 171148, 171446,
//       171552, 172192, 172411, 172412, 173633, 173878, 173879, 173933, 176446, 182907, 184210, 191051, 191099, 191270,
//       194605, 198712, 215386, 218351, 222514, 230652, 230960, 234724, 254245, 254888, 254889, 317344, 317586, 317713,
//       318655, 319179, 319436, 320094, 320232, 320372, 320458, 320680, 321288, 321468, 322279, 358305, 363697, 364717,
//       369197, 386238, 396433, 403878, 406000, 406798, 422504, 429638, 430558, 439641, 446902, 460741, 470941, 477181,
//       480261, 503087, 518645, 545481, 547322, 547562, 547581, 557606, 558661, 558961, 558982, 572901, 574901, 579522,
//       586258, 590482, 598881, 608861, 611003, 613303, 619642, 623841, 625030, 626641, 627761, 639603, 641382, 645339,
//       645361, 652052, 655249, 656837, 658925, 665464, 666004, 666063, 667937, 668333, 674806, 676087, 681767, 682397,
//       682398, 682402, 683607, 683608, 683610, 683990, 684663, 684905, 685037, 686202, 686203, 686204, 686703, 686705,
//       686820, 688562, 693608, 694283, 694284, 694285, 694435, 694438, 695248, 695790, 697417, 700691, 702787, 703303,
//       703437, 703438, 704159, 706417, 706419, 709803, 710006, 710201, 711778, 724944, 740581, 752789, 773038, 773440,
//       777828, 783040, 783058, 791852, 791864, 791873, 797577, 801643, 807815, 807816, 827188, 827201, 840334, 841545,
//       856485, 865686, 879276, 885682, 886694, 893689, 911814, 912514, 915202, 918764, 929332, 934600, 934602, 935498,
//       942923, 943138, 943387, 944300, 944305, 945220, 948557, 948990, 949733, 950406, 958829, 972843, 973039, 989537,
//       989920, 990018, 992905, 992983, 993922, 994564, 994692, 994718, 996566, 996795, 998470, 1001026, 1002879, 1003759,
//       1008585, 1009261, 1025330, 1026537,
//     ];

//     const chunkSize = 3; // Number of requests per batch
//     const delay = 10000; // Delay between batches in milliseconds (10 seconds)

//     const chunks = [];
//     for (let i = 0; i < allHotels.length; i += chunkSize) {
//       chunks.push(allHotels.slice(i, i + chunkSize));
//     }
//     const processBatch = async (batch, index) => {
//       for (const code of batch) {
//         try {
//           const response = await axios.get(
//             `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${code}/details?language=ENG&useSecondaryLanguage=False`,
//             {
//               headers: {
//                 Accept: 'application/json',
//                 'X-Signature': hashed,
//                 'Api-key': '34396c941923d1778d1e5ad83ca974cc',
//                 'Accept-Encoding': 'gzip',
//               },
//             },
//           );
//           const data = response.data;

//           const ans = hotelPopulateFunctions(data);
//           // console.log(Array.isArray(ans.rooms[0].hotelBedsData[0]?.extraFields));
//           const newHotel = new hotelBedSchema({ ...ans });
//           await newHotel.save();
//           console.log(newHotel);
//         } catch (error) {
//           console.error(`Error fetching data for hotel code ${code}:`, error);
//         }
//       }
//       if (index === chunks.length - 1) {
//         res.status(200).json({ message: 'All data processed successfully' });
//       }
//     };

//     for (let i = 0; i < chunks.length; i++) {
//       setTimeout(() => {
//         processBatch(chunks[i], i);
//       }, i * delay);
//       console.log(`Processing ${i} chunks`);
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

hotelbedApiRoute.post('/populate', async (req, res) => {
  try {
    const { name, code } = req.body;
    const findHotel = await hotelBedSchema.findOne({ 'hotel.name': name });
    if (findHotel) {
      return res.status(400).json({ message: 'Hotel already exists' });
    } else {
      return res.status(404).json({ error: 'Hotel not found' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hotelbedApiRoute.get('/get-all', async (req, res) => {
  try {
    const allHotels = await hotelBedSchema.find();
    res.status(200).json(allHotels);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { hotelbedApiRoute };
