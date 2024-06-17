const express = require('express');
// const { ProductModel } = require('../model/product');
const { ProductModel } = require('../model/product');
// const { newHotels } = require('./allHotel');
const { log } = require('console');
const { newHotels } = require('./allHotel');

const productRoute = express.Router();

// GET all products
productRoute.get('/', async (req, res) => {
  try {
    // Extract pagination, sorting, and search parameters from the request query
    const { page = 1, pageSize = 10, sortField = 'createdAt', sortOrder = 'asc', search = '' } = req.query;

    // Convert page and pageSize to numbers
    const pageNumber = parseInt(page);
    const pageSizeNumber = parseInt(pageSize);

    // Calculate the number of documents to skip
    const skip = (pageNumber - 1) * pageSizeNumber;

    // Determine the sort order
    const sort = {};
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;

    const searchFilter = search
      ? {
        $or: [
          { 'hotel.name': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.name'
          { 'hotel.address': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.address'
          { 'hotel.email': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.email'
          { 'hotel.category.description': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.category.description'
          { 'hotel.chain.description': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.chain.description'
          { 'hotel.phoneNumber.phoneNumber': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.phoneNumber.phoneNumber'
          { 'hotel.phoneNumber.phoneType': { $regex: search, $options: 'i' } }, // case-insensitive search on 'hotel.phoneNumber.phoneType'
        ]
      }
      : {};


    // Fetch products with pagination, sorting, and search filter from the database
    const products = await ProductModel.find(searchFilter).skip(skip).limit(pageSizeNumber).sort(sort);

    // Get the total count of products in the collection for pagination info
    const totalProducts = await ProductModel.countDocuments(searchFilter);

    // Respond with a 200 status and the retrieved products in JSON format
    res.status(200).json({
      products,
      totalProducts,
      totalPages: Math.ceil(totalProducts / pageSizeNumber),
      currentPage: pageNumber,
    });
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
    const product = await ProductModel.findByIdAndUpdate(id, data, { new: null });

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

productRoute.post('/hit-this', async (req, res) => {
  try {
    console.log(newHotels, 'hotels');
    const updatedHotels = newHotels.map(item => {
      return {
        hotel: {
          name: item?.name,
          address: item?.address,
          website: item?.website,
          userName: item?.userName,
          password: item?.papassword,

        },
        propertyInformation: {
          scopeOfRenovation: [''],
          stateOfRepair: [''],
          propertyType: [''],
          rating: 0,
          numberofRooms: 0,
          lqbtqiFriendly: null,
          design: '',
          isAdultOnly: null,
          propertymap: [
            {
              title: '',
              url: '',
            },
          ],
          lastRenovated: '',
          thirdPartyReviewsaorAwards: [''],
          ecoAwardsOrCertification: [''],
          wifi: null,
          uniqueSellingPoints: [''],
        },
        location: {
          latitude: 0,
          longitude: 0,
          city: '',
          roadAndNumber: 0,
          suburb: '',
          postCode: 0,
          country: '',
          state: '',
          atoll: '',
        },
        healthSafety: {
          lastReviewDate: '',
          rating: 0,
          comments: [''],
          policyForEvacuation: [
            {
              title: '',
              url: '',
            },
          ],
          medicalEmergencyPolicy: [
            {
              title: '',
              url: '',
            },
          ],
          doctorOnSite: null,
          doctorIsPermanent: null,
          nurseOnsite: null,
          nurseIsPermanent: null,
          onPremiseQualifications: [''], // doctor should have a masters degree
          defibrillatorsOnProperty: null,
          defibrillatorsByPool: null,
          nearestClinicHospital: [''],
          specialitiesOfNearestHospital: [''],
          nearestChildrenHospital: [''],
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },
        transferOptions: {
          weatherlimited: null,
          timeLimitedbyTransferType: null, // transport types has only slow options (horse, boat)
          hotelFacilitatesTransferBooking: null,
          qualityofBoats: '',
          transferOption: '',
          boatschedules: [''],
          seaplaneSchedules: [''],
          seaplaneProviders: [''],
          domesticAirlineSchedules: [''],
          likelihoodofDelays: '',
          distanceOrTimeFromMale: '',
          meetAndGreetAtAirport: '',
        },
        features: {
          fullBoard: [''],
          halfBoard: [''],
          breakfastIncluded: null,
        },
        beach: {
          beachType: [''],
          length: 0,
          features: [''],
          instagramSpots: [''],
          tidesRips: null,
          hoursofLifeguardDuty: 0,
          areaOfBeachPatrolledbyLifeguards: '',
          lifeguardQualifications: [''],
          areSomePartsofTheBeachOnlyForPrivateUse: null,
          willBeachVillasbeDisturbed: null,
          cleanliness: '',
          include: [''],
          BBQSpots: [''],
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },

        reef: {
          entryPointSandLengthofSwim: '',
          accessibleFromBeach: null,
          houseReefAccessiblebyBoat: null,
          houseReefAccessibleCost: 0,
          accessiblebyBoat: null,
          costTravel: 0,
          travelTime: 0,
          sites: [''],
          outerReef: null,
          qualityOfCoral: '',
          houseReef: null,
          distanceFromBeach: '',
          qualityofFish: '',
          nearestOtherReefforGoodCoral: '',
          onsiteMarineBiologist: null,
          entryPointsAndLengthOfSwim: '',
          abundanceOfReefSharks: null,
          reviewsSentiments: [''],
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },
        waterSports: {
          diving: null,
          affiliation: null,
          sites: [''],
          languagesSpoken: [''],
          submarineTour: null,
          costs: 0,
          maximumOccupancy: 0,
          images: [
            {
              title: '',
              url: '',
            },
          ],
          waterFlotationDevicesProvided: null,
          minimumAge: 0,
          equipmentProvided: null,
          otherServices: [''],
          nameOfSurfSite: '',
          reviewsSentiments: [''],
        },
        gym: {
          qualityOfEquipment: '',
          rangeofEquipment: [''],
          spaPreBookingAdvised: null,
          classes: null,
          specialistMachines: null,
          trainerOnSite: null,
          cost: 0,
          openingTimes: '',
          images: [
            {
              title: '',
              url: '',
            },
          ],
          reviewsSentiments: [''],
        },
        activities: {
          activitiesAvailable: [''],
          stingrayOrFishFeeding: null,
          images: [
            {
              title: '',
              url: '',
            },
          ],
          cost: 0,
        },
        spa: {
          typesServices: [''],
          reviewsSentiments: [''],
          numberOfRooms: 0,
          preBookingAdvised: null,
          cost: 0,
          hours: 0,
        },
        kidsClub: {
          ratioofStafftoChildren: 0,
          staffQualifications: [''],
          languagesSpoken: [''],
          hours: 0,
          cost: 0,
          preBookingAdvised: null,
          agesAccommodated: '',
          activities: [''],
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },
        foodAndBeverage: {
          InclusionsOrExclusionsforFullOrhalfBoard: null,
          extraCostForRoomService: null,
          numberOfBarsAndNames: [''],
          hoursOfOperation: 0,
          specialties: [''],
          numberOfRestaurantsandNames: [''],
          typesOfCuisine: [''],
          halaalOption: null,
          kidsMenu: [''],
          roomService: null,
          reviewsSentiments: [''],
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },
        services: {
          trainingOrQualifications: [''],
          needToPreBook: null,
          safetyFeatures: [''],
          isNannyavAilable: null,
          cost: 0,
        },
        pool: {
          length: 0,
          depth: 0,
          width: 0,
          lapPool: null,
          safetyFeatures: [''],
          totalNumberOfPool: 0,
          reviewsSentiments: [''],
          IsadultOnly: null,
          kidsFeatures: [''],
          heated: null,
          cleanliness: '',
        },
        rooms: {
          // maxOccupancy: ,
          maxOccupancyAdult: 0,
          maxOccupancyChild: 0,
          //adultAndChildCombinations: 0,
          NeedtoPreBookExtraBedding: null,
          safetyFeaturesifOverwaterBungalow: [''],
          safetyFeaturesForBalcony: [''],
          safetyFeaturesForPool: [''],
          commentsOnHowPrivacyIsImpacted: '',
          interconnected: null,
          noiseAtNight: '',
          privacyLevelsGoodEnoughForStrictMuslim: '',
          movieSystemsOrDVDs: null,
          roomName: '',
          numberOfRooms: 0,
          reviewsSentiments: [''],
          roomSize: 0,
          childAgeCategory: '',
          cotAllowedAndcost: '',
          rollawayBedAllowedAndCost: '',
          roomLayoutMap: '',
          separateToilet: null,
          separateLivinRoomwoutDoor: null,
          needToPreBookExtrabedding: null,
          numberOfBathrooms: 0,
          bath: '',
          freeWifi: null,
          balconyPatio: null,
          privatePool: null,
          dimensionsOfPool: '',
          poolHeated: null,
          overwater: null,
          beachAccess: null,
          isTV: null,
          ironIroningBoard: null,
          teaOrCoffeeOrKettle: null,
          isMicrowave: null,
          musicSystem: null,
          laundryService: null,
          kitchenFacilitiesAndWhatFacilities: [''],
          safe: null,
          pillowMenu: [''],
          blackoutCurtains: null,
          FanOrAC: '',
          babyBath: null,
          babyMonitor: null,
          childrensToys: null,
          childrensCutlery: null,
        },
        media: {
          images: [
            {
              title: '',
              url: '',
            },
          ],
        },
      };
    });

    await ProductModel.insertMany(updatedHotels);
    return res.send('OK');
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { productRoute };
