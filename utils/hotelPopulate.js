// const { hoteldetail } = require('?./allExactlySameHotelName?.js');
// const fs = require('fs');
const findTheFieldExistOrNot = (data, field, returnType) => {
  if (Array?.isArray(data)) {
    for (let i = 0; i < data?.length; i++) {
      if (data[i]?.description?.content === field) {
        if (returnType === 'Boolean') return true;
        else if (returnType === 'Number') return data[i];
      }
    }
    if (returnType === 'Boolean') return null;
    else if (returnType === 'Number') return 0;
  }
};
const findNumberofRoom = string => {
  // Define a mapping from words to numbers
  const numberMap = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
  };

  // Convert the input string to uppercase to ensure case-insensitivity
  const upperString = string?.toUpperCase();

  // Iterate through the number map and check if the string contains any of the keys
  for (let word in numberMap) {
    if (upperString?.includes(word)) {
      return numberMap[word];
    }
  }

  // If no number words are found, return a default value (e?.g?., -1 or null)
  return null;
};

const roomFacilitiesFinding = (data, field, subfield, returnType) => {
  // Ensure data is an array and iterate through it
  for (let i = 0; i < data?.length; i++) {
    // console?.log(data);
    // Check if description and content exist and include 'TV'
    if (data[i]?.description?.content?.toUpperCase().includes('TV')) {
      return true;
    }
    if (data[i].description?.content.toUpperCase().includes('SAFE')) {
      return data[i]?.indLogic;
    }
    if (data[i]?.description?.content === field && subfield === 'roomSize' && returnType === 'String')
      return `${data[i].number} sqm`;
  }
  return false;
};

const findTheFieldExistOrNotInFacilities = (data, field, returnType, subfield) => {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].description?.content === field) {
        if (returnType === 'StringofArr' && subfield === 'scopeOfRenovation')
          return [`year : ${data[i].number}`, `${data[i].order} time`];
        else if (returnType === 'StringofArr' && subfield === 'lastRenovated') return `year : ${data[i].number}`;
        else if (returnType === 'StringofArr' && subfield === 'stateOfRepair') return [`${data[i].order} time`];
        else if (returnType === 'Number' && subfield === 'numberofRooms') return data[i].number;
        else if (returnType === 'Boolean' && subfield === 'wifi') return data[i].indYesOrNo;
        else if (returnType === 'StringofArr' && subfield === 'uniqueSellingPoints')
          return [data[i].description.content];
        else if (returnType === 'StringofArr' && subfield === 'comments') return [data[i].description.content];
        else if (returnType === 'Boolean' && subfield === 'isGYMPresedOrNot') return true;
        else if (returnType === 'Boolean' && subfield === 'isGymFree') return data[i]?.indFee;
        else if (returnType === 'Number' && subfield === 'numberOfFloor') return data[i].number;
        else if (returnType === 'Number' && subfield === 'numberofRooms') return data[i].number;
        else if (returnType === 'Number' && subfield === 'bungalows') return data[i].number;
        else if (returnType === 'Boolean' && subfield === 'resort') return data[i].indLogic;
      }
    }
    if (returnType === 'Boolean') return null;
    else if (returnType === 'Number') return 0;
  }
};

// const hotelData = hoteldetail;
const hotelPopulateFunctions = hotelData => {
  const transformedData = {
    hotel: {
      name: hotelData?.hotel?.name?.content,
      address: hotelData?.hotel?.address?.content,
      website: hotelData?.hotel?.web,
      userName: '',
      password: '',
      hotelBedApiCode: hotelData?.hotel?.code,
      category: {
        code: hotelData?.hotel?.category?.code,
        description: hotelData?.hotel?.category?.description?.content,
      },
      chain: {
        code: hotelData?.hotel?.chain?.code,
        description: hotelData?.hotel?.chain?.description?.content,
      },
      email: hotelData?.hotel?.email,
      phoneNumber: hotelData?.hotel?.phones,
      pdfUrl: [],
    },
    propertyInformation: {
      numberOfFloor: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Number of floors (main building)',
        'Number',
        'numberOfFloor',
      ),
      bungalows: findTheFieldExistOrNotInFacilities(hotelData.hotel.facilities, 'Bungalows', 'Number', 'bungalows'),
      resort: findTheFieldExistOrNotInFacilities(hotelData.hotel.facilities, 'resort', 'Boolean', 'resort'),
      totalNumberOfDoubleRooms: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Double rooms',
        'Number',
        'numberofRooms',
      ),
      //'Number of floors (main building)',
      //'Double rooms'
      description: hotelData?.hotel?.description?.content,
      scopeOfRenovation: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Year of most recent renovation',
        'StringofArr',
        'scopeOfRenovation',
      ),
      stateOfRepair: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Year of most recent renovation',
        'StringofArr',
        'stateOfRepair',
      ),
      propertyType: hotelData.hotel.categoryGroup.description.content,
      rating: hotelData?.hotel['S2C'].split('')[0],
      numberofRooms: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Total number of rooms',
        'Number',
        'numberofRooms',
      ),
      lqbtqiFriendly: null,
      design:
        hotelData.hotel.accommodationType.typeMultiDescription.content +
        ' ' +
        hotelData.hotel.accommodationType.typeDescription,
      isAdultOnly: null,
      propertymap: [],
      lastRenovated: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Year of most recent renovation',
        'StringofArr',
        'lastRenovated',
      ), // Set to a default value or extract from the data if available
      thirdPartyReviewsaorAwards: [],
      ecoAwardsOrCertification: [],
      wifi: findTheFieldExistOrNotInFacilities(hotelData.hotel.facilities, 'Wi-fi', 'Boolean', 'wifi'),
      uniqueSellingPoints: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Extra beds on demand',
        'StringofArr',
        'uniqueSellingPoints',
      ) || [''],
    },
    location: {
      latitude: hotelData?.hotel?.coordinates?.latitude,
      longitude: hotelData?.hotel?.coordinates?.longitude,
      city: hotelData?.hotel?.city?.content,
      roadAndNumber: hotelData?.hotel?.address?.street,
      suburb: '',
      postCode: hotelData?.hotel?.postalCode,
      country: hotelData?.hotel?.country?.description?.content,
      state: hotelData?.hotel?.state?.name,
      atoll: hotelData?.hotel?.zone.name,
    },
    healthSafety: {
      lastReviewDate: new Date(),
      rating: 0,
      comments: findTheFieldExistOrNotInFacilities(hotelData.hotel, 'Medical service', 'StringofArr', 'comments'),
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
      doctorOnSite: null,
      doctorIsPermanent: null,
      nurseOnsite: null,
      nurseIsPermanent: null,
      onPremiseQualifications: [],
      defibrillatorsOnProperty: null,
      defibrillatorsByPool: null,
      nearestClinicHospital: [],
      specialitiesOfNearestHospital: [],
      nearestChildrenHospital: [],
      images: hotelData.hotel.images
        .filter(
          item =>
            item?.type?.description?.content?.toUpperCase().includes('HEALTH') ||
            item?.type?.description?.content?.toUpperCase().includes('MEDICAL') ||
            item?.type?.description?.content?.toUpperCase().includes('SAFETY') ||
            item?.type?.description?.content?.toUpperCase().includes('FIRST') ||
            item?.type?.description?.content?.toUpperCase().includes('AID'),
        )
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    transferOptions: {
      weatherlimited: null,
      timeLimitedbyTransferType: null,
      hotelFacilitatesTransferBooking: null,
      qualityofBoats: '',
      transferOption: '',
      boatschedules: [],
      seaplaneSchedules: [],
      seaplaneProviders: [],
      domesticAirlineSchedules: [],
      likelihoodofDelays: '',
      distanceOrTimeFromMale: '',
      meetAndGreetAtAirport: '',
    },
    features: {
      fullBoard: [],
      halfBoard: [],
      breakfastIncluded: findTheFieldExistOrNot(hotelData?.hotel?.boards, 'BED AND BREAKFAST', 'Boolean'),
      boards: hotelData?.hotel?.boards,
    },
    beach: {
      beachType: findBeachType(hotelData.hotel.facilities),
      length: 0,
      features: [],
      instagramSpots: [],
      tidesRips: null,
      hoursofLifeguardDuty: 0,
      areaOfBeachPatrolledbyLifeguards: '',
      lifeguardQualifications: [],
      areSomePartsofTheBeachOnlyForPrivateUse: null,
      willBeachVillasbeDisturbed: null,
      cleanliness: '',
      include: [],
      BBQSpots: [],
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('BEACH'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    reef: {
      entryPointSandLengthofSwim: '',
      accessibleFromBeach: null,
      houseReefAccessiblebyBoat: null,
      houseReefAccessibleCost: 0,
      accessiblebyBoat: null,
      costTravel: 0,
      travelTime: 0,
      sites: [],
      outerReef: null,
      qualityOfCoral: '',
      houseReef: null,
      distanceFromBeach: '',
      qualityofFish: '',
      nearestOtherReefforGoodCoral: '',
      onsiteMarineBiologist: null,
      entryPointsAndLengthOfSwim: '',
      abundanceOfReefSharks: null,
      reviewsSentiments: [],
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('REEF'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    waterSports: {
      diving: null,
      affiliation: null,
      sites: [],
      languagesSpoken: [],
      submarineTour: null,
      costs: 0,
      maximumOccupancy: 0,
      images: [],
      waterFlotationDevicesProvided: null,
      minimumAge: 0,
      equipmentProvided: null,
      otherServices: [],
      nameOfSurfSite: '',
      reviewsSentiments: [],
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('SPORTS'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    gym: {
      //(data, field, returnType, subfield)
      isGYMPresedOrNot: findTheFieldExistOrNotInFacilities(
        hotelData.hotel.facilities,
        'Gym',
        'Boolean',
        'isGYMPresedOrNot',
      ),
      isGymFree: findTheFieldExistOrNotInFacilities(hotelData.hotel.facilities, 'Boolean', 'Gym', 'isGymFree'),
      qualityOfEquipment: '',
      rangeofEquipment: [],
      spaPreBookingAdvised: null,
      classes: null,
      specialistMachines: null,
      trainerOnSite: null,
      cost: 0,
      openingTimes: '',
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('GYM'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
      reviewsSentiments: [],
    },
    activities: {
      activitiesAvailable: [],
      stingrayOrFishFeeding: null,
      images: hotelData.hotel.images
        .filter(
          item =>
            item?.type?.description?.content?.toUpperCase().includes('islands'.toUpperCase()) ||
            item?.type?.description?.content?.toUpperCase().includes('mesmerizing'.toUpperCase()),
        )
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
      cost: 0,
    },
    spa: {
      typesServices: addSpaTypes(hotelData.hotel.facilities),

      reviewsSentiments: [],
      numberOfRooms: findTheFieldExistOrNot(hotelData.hotel.facilities, 'Total number of rooms'),
      preBookingAdvised: null,
      cost: 0,
      hours: 0,
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('SPA'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
      hours: 0,
      cost: 0,
      preBookingAdvised: null,
      agesAccommodated: '',
      activities: [],
      images: [],
    },
    foodAndBeverage: {
      InclusionsOrExclusionsforFullOrhalfBoard: null,
      extraCostForRoomService: null,
      numberOfBarsAndNames: [],
      hoursOfOperation: 0,
      specialties: [],
      numberOfRestaurantsandNames: [],
      typesOfCuisine: [],
      halaalOption: null,
      kidsMenu: [],
      roomService: null,
      reviewsSentiments: [],
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('FOOD'))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    services: {
      trainingOrQualifications: [],
      needToPreBook: null,
      safetyFeatures: [],
      isNannyavAilable: null,
      cost: 0,
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      lapPool: null,
      safetyFeatures: [],
      totalNumberOfPool: 0,
      reviewsSentiments: [],
      IsadultOnly: null,
      kidsFeatures: [],
      heated: null,
      cleanliness: '',
      images: hotelData.hotel.images
        .filter(item => item?.type?.description?.content?.toUpperCase().includes('pool'.toUpperCase()))
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
    },
    rooms: hotelData?.hotel?.rooms?.map(room => ({
      roomCode: room.roomCode,
      isParentRoom: room.isParentRoom,
      maxOccupancyAdult: room?.maxAdults,
      maxOccupancyChild: room?.maxChildren,
      description: room?.description,
      NeedtoPreBookExtraBedding: null,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      safe: roomFacilitiesFinding(roomFacilitiesFinding(room?.roomFacilities, 'Safe')),
      commentsOnHowPrivacyIsImpacted: '',
      interconnected: null,
      noiseAtNight: '',
      privacyLevelsGoodEnoughForStrictMuslim: '',
      //'Satellite TV '
      movieSystemsOrDVDs: findTheFieldExistOrNotSome(
        room?.roomFacilities,
        'Satellite TV ',
        'Boolean',
        'movieSystemsOrDVDs',
      ),
      roomName: room?.description,
      numberOfRooms: findNumberofRoom(room?.characteristic?.description?.content),
      reviewsSentiments: [],
      roomSize: findTheFieldExistOrNotSome(room?.roomFacilities, 'Room size (sqm)', 'String', 'roomSize'),
      isSmokingRoom: findTheFieldExistOrNotSome(room?.roomFacilities, 'Smoking rooms', 'Boolean', 'isSmokingRoom'),
      childAgeCategory: '',
      cotProvided: null,
      bathrobes: null,
      slippers: null,
      isTV: findingTvOrNot(room?.roomFacilities, 'TV'),
      TVChannelsinLanguagesSpoken: [],
      TVChannelsinNonLocalLanguages: [],
      roomLayout: '',
      sittingArea: null,
      outdoorArea: null,
      typeOfBed: '',
      bedtype: '',
      number: '',
      bedWidth: 0,
      bedLength: 0,
      specialBedding: '',
      teaOrCoffeeOrKettle: roomFacilitiesFinding(room?.roomFacilities, 'Tea and coffee making facilities '),
      isMicrowave: roomFacilitiesFinding(room?.roomFacilities, ''),
      FanOrAC: fidnFanAndAC(room.roomFacilities, room.roomStays),
      images: hotelData?.hotel?.images
        ?.filter(item => item.type.description.content === 'Room' && item.roomCode === room.roomCode)
        .map(item => ({
          url: `http://photos.hotelbeds.com/giata/${item.path}`,
          title: item?.type?.description?.content,
        })),
      typeOfRoom: room?.type?.description?.content,
      hotelBedsData: [{ extraFields: room.roomFacilities, roomStays: room?.roomStays }],
    })),
    media: {
      images: hotelData?.hotel?.images?.map(item => ({
        url: `http://photos.hotelbeds.com/giata/${item.path}`,
        title: item?.type?.description?.content,
      })),
    },
    extraFields: hotelData.hotel?.facilities,
  };
  return transformedData;
};
// console.log(transformedData);

module.exports = { hotelPopulateFunctions };

function findTheFieldExistOrNotSome(data, field, returnType, subfield) {
  for (let i = 0; i < data?.length; i++) {
    if (data[i].description.content === field) {
      if (returnType === 'String' && subfield === 'roomSize') return `${data[i].number} sqm`;
      if (returnType === 'Boolean' && subfield === 'movieSystemsOrDVDs') return true;
      if (returnType === 'Boolean' && subfield === 'isSmokingRoom') return data[i].indYesOrNo;
    }
  }
}

function findBeachType(data) {
  let newBeachType = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].description.content.toUpperCase().includes('BEACH')) {
      newBeachType.push(data[i].description.content);
    }
  }
  return newBeachType;
}

function addSpaTypes(data) {
  let newSpaTypes = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].description.content.toUpperCase().includes('SPA') &&
      !data[i].description.content.toUpperCase().includes('NEWSPAPER')
    ) {
      if (data[i].indLogic) {
        newSpaTypes.push(data[i].description.content);
      }
    }
  }
  return newSpaTypes;
}

function findingTvOrNot(data) {
  for (let i = 0; i < data?.length; i++) {
    if (data[i].description.content.toUpperCase().includes('TV')) {
      if (data[i].indLogic) return true;
    }
  }
  return false;
}

function fidnFanAndAC(data, stayData) {
  let fan = false;
  let ac = true;
  for (let i = 0; i < data?.length; i++) {
    if (data[i].description.content.toUpperCase().includes('FAN')) {
      if (data[i].indLogic) fan = true;
    }
    if (
      data[i].description.content.toUpperCase().includes('AC') ||
      data[i].description.content.toUpperCase().includes('Air conditioning'.toUpperCase())
    ) {
      if (data[i].indLogic) ac = false;
    }
  }
  for (let i = 0; i < stayData?.length; i++) {
    if (stayData[i].description?.content?.toUpperCase()?.includes('FAN')) {
      if (stayData[i]?.indLogic) fan = true;
    }
    if (
      stayData[i]?.description?.content?.toUpperCase()?.includes('AC') ||
      stayData[i]?.description?.content?.toUpperCase()?.includes('Air conditioning'?.toUpperCase())
    ) {
      if (stayData[i]?.indLogic) ac = false;
    }
  }
  if (fan && ac) {
    return 'Both Fan and Aircondition are available';
  }
  if (fan && !ac) {
    return 'Fan is available';
  }
  if (!fan && ac) {
    return 'Aircondition is available';
  }
  if (!ac && !fan) {
    return null;
  }
}
