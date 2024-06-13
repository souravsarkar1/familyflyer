const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    hotel: {
      name: { type: String },
      address: { type: String },
      website: { type: String },
      userName: { type: String },
      password: { type: String },
      hotelBedApiCode: { type: Number },
      email: { type: String },
      phoneNumber: [{ phoneNumber: { type: String }, phoneType: { type: String } }],
      category: { code: { type: String }, description: { type: String } }, // 5 stars , 7 stars, etc.
      chain: { code: { type: String }, description: { type: String } }, // groups together hotels that belong to the same chain
      pdfUrl: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    propertyInformation: {
      languagesSpoken: { type: [String] }, // add by me
      description: { type: String },
      scopeOfRenovation: { type: [String] },
      stateOfRepair: { type: [String] },
      propertyType: { type: [String] },
      rating: { type: Number },
      numberofRooms: { type: String },
      lqbtqiFriendly: { type: Boolean },
      design: { type: String },
      isAdultOnly: { type: Boolean },
      numberOfFloor: { type: Number },
      totalNumberOfDoubleRooms: { type: Number },
      propertymap: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      bungalows: { type: Number },
      resort: { type: Boolean },
      lastRenovated: { type: Date },
      thirdPartyReviewsaorAwards: { type: [String] },
      ecoAwardsOrCertification: { type: [String] },
      wifi: { type: Boolean },
      uniqueSellingPoints: { type: [String] },
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      city: { type: String },
      roadAndNumber: { type: String },
      suburb: { type: String },
      postCode: { type: Number },
      country: { type: String },
      state: { type: String },
      atoll: { type: String },
    },
    healthSafety: {
      lastReviewDate: { type: Date },
      rating: { type: Number },
      comments: { type: [String] },
      policyForEvacuation: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      medicalEmergencyPolicy: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      doctorOnSite: { type: Boolean },
      doctorIsPermanent: { type: Boolean },
      nurseOnsite: { type: Boolean },
      nurseIsPermanent: { type: Boolean },
      onPremiseQualifications: { type: [String] }, // doctor should have a masters degree
      defibrillatorsOnProperty: { type: Boolean },
      defibrillatorsByPool: { type: Boolean },
      nearestClinicHospital: { type: [String] },
      specialitiesOfNearestHospital: { type: [String] },
      nearestChildrenHospital: { type: [String] },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    transferOptions: {
      weatherlimited: { type: Boolean },
      timeLimitedbyTransferType: { type: Boolean }, // transport types has only slow options (horse, boat)
      hotelFacilitatesTransferBooking: { type: Boolean },
      qualityofBoats: { type: String },
      transferOption: { type: String },
      boatschedules: { type: [String] },
      seaplaneSchedules: { type: [String] },
      seaplaneProviders: { type: [String] },
      domesticAirlineSchedules: { type: [String] },
      likelihoodofDelays: { type: String },
      distanceOrTimeFromMale: { type: String },
      meetAndGreetAtAirport: { type: String },
    },
    features: {
      fullBoard: { type: [String] },
      halfBoard: { type: [String] },
      breakfastIncluded: { type: Boolean },
      boards: [
        {
          code: { type: String },
          description: {
            content: { type: String },
          },
        },
      ],
    },
    beach: {
      beachType: { type: [String] },
      length: { type: Number },
      features: { type: [String] },
      instagramSpots: { type: [String] },
      tidesRips: { type: Boolean },
      hoursofLifeguardDuty: { type: Number },
      areaOfBeachPatrolledbyLifeguards: { type: String },
      lifeguardQualifications: { type: [String] },
      areSomePartsofTheBeachOnlyForPrivateUse: { type: Boolean },
      willBeachVillasbeDisturbed: { type: Boolean },
      cleanliness: { type: String },
      include: { type: [String] },
      BBQSpots: { type: [String] },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },

    reef: {
      entryPointSandLengthofSwim: { type: String },
      accessibleFromBeach: { type: Boolean },
      houseReefAccessiblebyBoat: { type: Boolean },
      houseReefAccessibleCost: { type: Number },
      accessiblebyBoat: { type: Boolean },
      costTravel: { type: Number },
      travelTime: { type: Number },
      sites: { type: [String] },
      outerReef: { type: Boolean },
      qualityOfCoral: { type: String },
      houseReef: { type: Boolean },
      distanceFromBeach: { type: String },
      qualityofFish: { type: String },
      nearestOtherReefforGoodCoral: { type: String },
      onsiteMarineBiologist: { type: Boolean },
      entryPointsAndLengthOfSwim: { type: String },
      abundanceOfReefSharks: { type: Boolean },
      reviewsSentiments: { type: [String] },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    waterSports: {
      diving: { type: Boolean },
      affiliation: { type: Boolean },
      sites: { type: [String] },
      languagesSpoken: { type: [String] },
      submarineTour: { type: Boolean },
      costs: { type: Number },
      maximumOccupancy: { type: Number },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      waterFlotationDevicesProvided: { type: Boolean },
      minimumAge: { type: Number },
      equipmentProvided: { type: Boolean },
      otherServices: { type: [String] },
      nameOfSurfSite: { type: String },
      reviewsSentiments: { type: [String] },
    },
    gym: {
      isGYMPresedOrNot: { type: Boolean },
      isGymFree: { type: Boolean },
      qualityOfEquipment: { type: String },
      rangeofEquipment: { type: [String] },
      spaPreBookingAdvised: { type: Boolean },
      classes: { type: Boolean },
      specialistMachines: { type: Boolean },
      trainerOnSite: { type: Boolean },
      cost: { type: Number },
      openingTimes: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      reviewsSentiments: { type: [String] },
    },
    activities: {
      activitiesAvailable: { type: [String] },
      stingrayOrFishFeeding: { type: Boolean },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      cost: { type: Number },
    },
    spa: {
      typesServices: { type: [String] },
      reviewsSentiments: { type: [String] },
      numberOfRooms: { type: Number },
      preBookingAdvised: { type: Boolean },
      cost: { type: Number },
      hours: { type: Number },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    kidsClub: {
      ratioofStafftoChildren: { type: Number },
      staffQualifications: { type: [String] },
      languagesSpoken: { type: [String] },
      hours: { type: Number },
      cost: { type: Number },
      preBookingAdvised: { type: Boolean },
      agesAccommodated: { type: String },
      activities: { type: [String] },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    foodAndBeverage: {
      InclusionsOrExclusionsforFullOrhalfBoard: { type: Boolean },
      extraCostForRoomService: { type: Boolean },
      numberOfBarsAndNames: { type: [String] },
      hoursOfOperation: { type: Number },
      specialties: { type: [String] },
      numberOfRestaurantsandNames: { type: [String] },
      typesOfCuisine: { type: [String] },
      halaalOption: { type: Boolean },
      kidsMenu: { type: [String] },
      roomService: { type: Boolean },
      reviewsSentiments: { type: [String] },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    services: {
      trainingOrQualifications: { type: [String] },
      needToPreBook: { type: Boolean },
      safetyFeatures: { type: [String] },
      isNannyavAilable: { type: Boolean },
      cost: { type: Number },
    },
    pool: {
      length: { type: Number },
      depth: { type: Number },
      width: { type: Number },
      lapPool: { type: Boolean },
      safetyFeatures: { type: [String] },
      totalNumberOfPool: { type: Number },
      reviewsSentiments: { type: [String] },
      IsadultOnly: { type: Boolean },
      kidsFeatures: { type: [String] },
      heated: { type: Boolean },
      cleanliness: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    rooms: [
      {
        // maxOccupancy: ,
        roomCode: { type: String },
        isParentRoom: { type: Boolean },
        maxOccupancyAdult: { type: Number },
        maxOccupancyChild: { type: Number },
        //adultAndChildCombinations: { type: Number },
        NeedtoPreBookExtraBedding: { type: Boolean },
        safetyFeaturesifOverwaterBungalow: { type: [String] },
        safetyFeaturesForBalcony: { type: [String] },
        safetyFeaturesForPool: { type: [String] },
        commentsOnHowPrivacyIsImpacted: { type: String },
        interconnected: { type: Boolean },
        noiseAtNight: { type: String },
        privacyLevelsGoodEnoughForStrictMuslim: { type: String },
        movieSystemsOrDVDs: { type: Boolean },
        roomName: { type: String },
        numberOfRooms: { type: Number },
        reviewsSentiments: { type: [String] },
        roomSize: { type: String },
        childAgeCategory: { type: String },
        cotAllowedAndcost: { type: String },
        rollawayBedAllowedAndCost: { type: String },
        roomLayoutMap: { type: String },
        separateToilet: { type: Boolean },
        separateLivinRoomwoutDoor: { type: Boolean },
        needToPreBookExtrabedding: { type: Boolean },
        numberOfBathrooms: { type: Number },
        bath: { type: String },
        freeWifi: { type: Boolean },
        balconyPatio: { type: Boolean },
        privatePool: { type: Boolean },
        dimensionsOfPool: { type: String },
        poolHeated: { type: Boolean },
        overwater: { type: Boolean },
        beachAccess: { type: Boolean },
        isTV: { type: Boolean },
        ironIroningBoard: { type: Boolean },
        teaOrCoffeeOrKettle: { type: Boolean },
        isMicrowave: { type: Boolean },
        musicSystem: { type: Boolean },
        laundryService: { type: Boolean },
        kitchenFacilitiesAndWhatFacilities: { type: [String] },
        safe: { type: Boolean },
        isSmokingRoom: { type: Boolean },
        pillowMenu: { type: [String] },
        blackoutCurtains: { type: Boolean },
        FanOrAC: { type: String },
        babyBath: { type: Boolean },
        babyMonitor: { type: Boolean },
        childrensToys: { type: Boolean },
        childrensCutlery: { type: Boolean },
        description: { type: String },
        typeOfRoom: { type: String },
        hotelBedsData: [
          {
            extraFields: [
              {
                facilityCode: {
                  type: Number,
                },
                facilityGroupCode: {
                  type: Number,
                },
                description: {
                  content: {
                    type: String,
                  },
                },
                indLogic: {
                  type: Boolean,
                },
                indFee: {
                  type: Boolean,
                },
                indYesOrNo: {
                  type: Boolean,
                },
                number: {
                  type: Number,
                },
                voucher: {
                  type: Boolean,
                },
              },
            ],
            roomStays: [
              {
                stayType: { type: String },
                order: { type: String },
                description: { type: String },
                roomStayFacilities: [
                  {
                    facilityCode: { type: Number },
                    facilityGroupCode: { type: Number },
                    description: {
                      content: { type: String },
                    },
                    number: { type: Number },
                  },
                ],
              },
            ],
          },
        ],

        images: [
          {
            title: { type: String },
            url: { type: String },
          },
        ],
      },
    ],
    media: {
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    extraFields: [
      {
        description: {
          content: { type: String },
        },
        indLogic: { type: Boolean },
        indFee: { type: Boolean },
        voucher: { type: Boolean },
        number: { type: Number },
        indYesOrNo: { type: Boolean },
        timeFrom: { type: String },
        timeTo: { type: String },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const hotelBedSchema = mongoose.model('hotelbedapidata', ProductSchema);

module.exports = { hotelBedSchema };
