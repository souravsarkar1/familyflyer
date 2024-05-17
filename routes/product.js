const express = require('express');
// const { ProductModel } = require('../model/product');
const { ProductModel } = require('../model/product');
// const { newHotels } = require('./allHotel');
const { log } = require('console');

const productRoute = express.Router();

// GET all products
productRoute.get('/', async (req, res) => {
  try {
    // Extract pagination parameters from the request query
    // const { page = 1, pageSize = 5 } = req.query;

    // Convert page and pageSize to numbers
    // const pageNumber = parseInt(page);
    // const pageSizeNumber = parseInt(pageSize);

    // Calculate the number of documents to skip
    // const skip = (pageNumber - 1) * pageSizeNumber;

    // Fetch products with pagination from the database
    const products = await ProductModel.find();
    // Respond with a 200 status and the retrieved products in JSON format
    res.status(200).json({ products });
  } catch (error) {
    // Handle any errors that occur during the database query or response
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//  GET SINGLE PRODUCT

productRoute.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST A NEW PRODUCT
productRoute.post('/', async (req, res) => {
  //console.log(req.body.beach);
  try {
    const data = req.body;
    const { userName } = data.hotel;
    const isUserRegistered = await ProductModel.findOne({ 'hotel.userName': userName });
    // console.log(isUserRegistered);
    if (isUserRegistered) {
      return res.status(400).json({ status: 400, message: 'User is already registered. Please try with a new one.' });
    }
    const product = new ProductModel(data);
    await product.save();
    res.status(201).json({ message: 'Diteals is Added', product });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// UPDATE PRODUCT

productRoute.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Ensure the provided ID is valid
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Find the product by ID and update it with the new data
    const product = await ProductModel.findByIdAndUpdate(id, data, { new: true });

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Respond with the updated product
    res.status(200).json(product);
  } catch (error) {
    // Handle any errors that occur during the update or response
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE PRODUCT

productRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Ensure the provided ID is valid
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Find the product by ID and remove it
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    // Check if the product exists
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the deletion or response
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// productRoute.post('/hit-this', async (req, res) => {
//   try {
//     console.log(newHotels, 'hotels');
//     const updatedHotels = newHotels.map(item => {
//       return {
//         hotel: {
//           name: item?.name,
//           address: item?.address,
//           website: item?.website,
//           website: item?.website,
//           userName: item?.userName,
//           password: item?.password,
//         },
//         propertyInformation: {
//           scopeOfRenovation: [''],
//           stateOfRepair: [''],
//           propertyType: [''],
//           rating: 0,
//           numberofRooms: 0,
//           lqbtqiFriendly: true,
//           design: '',
//           isAdultOnly: true,
//           propertymap: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           lastRenovated: '',
//           thirdPartyReviewsaorAwards: [''],
//           ecoAwardsOrCertification: [''],
//           wifi: true,
//           uniqueSellingPoints: [''],
//         },
//         location: {
//           latitude: 0,
//           longitude: 0,
//           city: '',
//           roadAndNumber: 0,
//           suburb: '',
//           postCode: 0,
//           country: '',
//           state: '',
//           atoll: '',
//         },
//         healthSafety: {
//           lastReviewDate: '',
//           rating: 0,
//           comments: [''],
//           policyForEvacuation: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           medicalEmergencyPolicy: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           doctorOnSite: true,
//           doctorIsPermanent: true,
//           nurseOnsite: true,
//           nurseIsPermanent: true,
//           onPremiseQualifications: [''], // doctor should have a masters degree
//           defibrillatorsOnProperty: true,
//           defibrillatorsByPool: true,
//           nearestClinicHospital: [''],
//           specialitiesOfNearestHospital: [''],
//           nearestChildrenHospital: [''],
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },
//         transferOptions: {
//           weatherlimited: true,
//           timeLimitedbyTransferType: true, // transport types has only slow options (horse, boat)
//           hotelFacilitatesTransferBooking: true,
//           qualityofBoats: '',
//           transferOption: '',
//           boatschedules: [''],
//           seaplaneSchedules: [''],
//           seaplaneProviders: [''],
//           domesticAirlineSchedules: [''],
//           likelihoodofDelays: '',
//           distanceOrTimeFromMale: '',
//           meetAndGreetAtAirport: '',
//         },
//         features: {
//           fullBoard: [''],
//           halfBoard: [''],
//           breakfastIncluded: true,
//         },
//         beach: {
//           beachType: [''],
//           length: 0,
//           features: [''],
//           instagramSpots: [''],
//           tidesRips: true,
//           hoursofLifeguardDuty: 0,
//           areaOfBeachPatrolledbyLifeguards: '',
//           lifeguardQualifications: [''],
//           areSomePartsofTheBeachOnlyForPrivateUse: true,
//           willBeachVillasbeDisturbed: true,
//           cleanliness: '',
//           include: [''],
//           BBQSpots: [''],
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },

//         reef: {
//           entryPointSandLengthofSwim: '',
//           accessibleFromBeach: true,
//           houseReefAccessiblebyBoat: true,
//           houseReefAccessibleCost: 0,
//           accessiblebyBoat: true,
//           costTravel: 0,
//           travelTime: 0,
//           sites: [''],
//           outerReef: true,
//           qualityOfCoral: '',
//           houseReef: true,
//           distanceFromBeach: '',
//           qualityofFish: '',
//           nearestOtherReefforGoodCoral: '',
//           onsiteMarineBiologist: true,
//           entryPointsAndLengthOfSwim: '',
//           abundanceOfReefSharks: true,
//           reviewsSentiments: [''],
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },
//         waterSports: {
//           diving: true,
//           affiliation: true,
//           sites: [''],
//           languagesSpoken: [''],
//           submarineTour: true,
//           costs: 0,
//           maximumOccupancy: 0,
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           waterFlotationDevicesProvided: true,
//           minimumAge: 0,
//           equipmentProvided: true,
//           otherServices: [''],
//           nameOfSurfSite: '',
//           reviewsSentiments: [''],
//         },
//         gym: {
//           qualityOfEquipment: '',
//           rangeofEquipment: [''],
//           spaPreBookingAdvised: true,
//           classes: true,
//           specialistMachines: true,
//           trainerOnSite: true,
//           cost: 0,
//           openingTimes: '',
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           reviewsSentiments: [''],
//         },
//         activities: {
//           activitiesAvailable: [''],
//           stingrayOrFishFeeding: true,
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//           cost: 0,
//         },
//         spa: {
//           typesServices: [''],
//           reviewsSentiments: [''],
//           numberOfRooms: 0,
//           preBookingAdvised: true,
//           cost: 0,
//           hours: 0,
//         },
//         kidsClub: {
//           ratioofStafftoChildren: 0,
//           staffQualifications: [''],
//           languagesSpoken: [''],
//           hours: 0,
//           cost: 0,
//           preBookingAdvised: true,
//           agesAccommodated: '',
//           activities: [''],
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },
//         foodAndBeverage: {
//           InclusionsOrExclusionsforFullOrhalfBoard: true,
//           extraCostForRoomService: true,
//           numberOfBarsAndNames: [''],
//           hoursOfOperation: 0,
//           specialties: [''],
//           numberOfRestaurantsandNames: [''],
//           typesOfCuisine: [''],
//           halaalOption: true,
//           kidsMenu: [''],
//           roomService: true,
//           reviewsSentiments: [''],
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },
//         services: {
//           trainingOrQualifications: [''],
//           needToPreBook: true,
//           safetyFeatures: [''],
//           isNannyavAilable: true,
//           cost: 0,
//         },
//         pool: {
//           length: 0,
//           depth: 0,
//           width: 0,
//           lapPool: true,
//           safetyFeatures: [''],
//           totalNumberOfPool: 0,
//           reviewsSentiments: [''],
//           IsadultOnly: true,
//           kidsFeatures: [''],
//           heated: true,
//           cleanliness: '',
//         },
//         rooms: {
//           // maxOccupancy: ,
//           maxOccupancyAdult: 0,
//           maxOccupancyChild: 0,
//           //adultAndChildCombinations: 0,
//           NeedtoPreBookExtraBedding: true,
//           safetyFeaturesifOverwaterBungalow: [''],
//           safetyFeaturesForBalcony: [''],
//           safetyFeaturesForPool: [''],
//           commentsOnHowPrivacyIsImpacted: '',
//           interconnected: true,
//           noiseAtNight: '',
//           privacyLevelsGoodEnoughForStrictMuslim: '',
//           movieSystemsOrDVDs: true,
//           roomName: '',
//           numberOfRooms: 0,
//           reviewsSentiments: [''],
//           roomSize: 0,
//           childAgeCategory: '',
//           cotAllowedAndcost: '',
//           rollawayBedAllowedAndCost: '',
//           roomLayoutMap: '',
//           separateToilet: true,
//           separateLivinRoomwoutDoor: true,
//           needToPreBookExtrabedding: true,
//           numberOfBathrooms: 0,
//           bath: '',
//           freeWifi: true,
//           balconyPatio: true,
//           privatePool: true,
//           dimensionsOfPool: '',
//           poolHeated: true,
//           overwater: true,
//           beachAccess: true,
//           isTV: true,
//           ironIroningBoard: true,
//           teaOrCoffeeOrKettle: true,
//           isMicrowave: true,
//           musicSystem: true,
//           laundryService: true,
//           kitchenFacilitiesAndWhatFacilities: [''],
//           safe: true,
//           pillowMenu: [''],
//           blackoutCurtains: true,
//           FanOrAC: '',
//           babyBath: true,
//           babyMonitor: true,
//           childrensToys: true,
//           childrensCutlery: true,
//         },
//         media: {
//           images: [
//             {
//               title: '',
//               url: '',
//             },
//           ],
//         },
//       };
//     });

//     await ProductModel.insertMany(updatedHotels);
//     return res.send('OK');
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = { productRoute };
