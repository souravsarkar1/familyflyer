const fs = require('fs');

let hotels = [
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abf8',
    },
    hotel: {
      address: 'South Male, Atoll 20105, Maldives',
      name: 'Adaaran Prestige Vadoo',
    },
    propertyInformation: {
      lastRenovated: {
        $date: '2024-03-12T08:40:34.761Z',
      },
      scopeOfRenovation: [],
      stateOfRepair: 'test',
    },
    healthSafety: {
      media: {
        images: [],
      },
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.211Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      media: {
        images: [],
      },
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      media: {
        images: [],
      },
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
      images: [],
    },
    kidsClub: {
      activities: [],
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
      images: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      kidsFeatures: [],
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.432Z',
    },
    updatedAt: {
      $date: '2024-03-14T08:44:37.893Z',
    },
    activities: {
      activitiesAvailable: [],
      images: [],
    },
    foodAndBeverage: {
      images: [],
    },
    waterSports: {
      images: [],
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abf9',
    },
    hotel: {
      name: 'Adaaran Prestige Water Villas',
      address: 'Meedupparu, Maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.216Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
    updatedAt: {
      $date: '2024-03-14T07:44:04.651Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abfa',
    },
    hotel: {
      name: 'Airport Beach Hotel',
      address: 'Munich Residence, Lot 10969 Kaani Magu, Hulhumale, Maldives',
      website: 'http://airportbeachhotel.com-maldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.217Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abfb',
    },
    hotel: {
      name: 'Alila Kothaifaru Maldives',
      address: 'Kothaifaru Island, Maldives',
      website: 'https://www.alilahotels.com/kothaifaru-maldives/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.219Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abfc',
    },
    hotel: {
      name: 'Amari Raaya Maldives',
      address: 'Kudakurathu Island, Maldives',
      website: 'https://www.amari.com/raaya-maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.219Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abfd',
    },
    hotel: {
      name: 'Amaya Resort Kuda Rah',
      address: 'Kudarah Alifu Dhaalu Atoll, 00150, Maldives',
      website: 'https://www.amayaresorts.com/amayakudarah/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.220Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.434Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abfe',
    },
    hotel: {
      name: 'Amilla Maldives ',
      address: '',
      website: 'https://amilla.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.222Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55abff',
    },
    hotel: {
      name: 'Anantara Dhigu Maldives Resort',
      address: 'South Male Atoll 20109, Maldives',
      website:
        'https://www.anantara.com/dhigu-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Dhigu&utm_content=Home&utm_campaign=Google_GMB',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.225Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac00',
    },
    hotel: {
      name: 'Anantara Kihavah Maldives Villas',
      address: 'Kihavah Huravalhi Island Baa Atoll, 20215, Maldives',
      website:
        'https://www.anantara.com/kihavah-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Kihavah&utm_content=Home&utm_campaign=Google_GMB',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.227Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac01',
    },
    hotel: {
      name: 'Anantara Veli Maldives Resort',
      address: 'Veligandu South Male Atoll, 20109, Maldives',
      website:
        'https://www.anantara.com/en/veli-maldives/rooms/beach-pool-villa?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWO1nQdkr-ol2CIpPa_EQlQ5uvlhasNUvHvpr0Heppdiv4isXoPNVa3hoCxZgQAvD_BwE&gclsrc=aw.ds',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.229Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac02',
    },
    hotel: {
      name: 'Angsana Velavaru',
      address: 'Velavaru Island, 20177, Maldives•',
      website: 'https://www.angsana.com/maldives/velavaru?y_source=1_MTUzNTk0MjMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.230Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac03',
    },
    hotel: {
      name: 'Atmosphere Kanifushi Maldives',
      address: 'Atmosphere Kanifushi Maldives Lhaviyani Atoll, 07010, Maldives',
      website: 'https://www.atmosphere-kanifushi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.232Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac04',
    },
    hotel: {
      name: 'Avani+ Fares Maldives Resort',
      address: 'Fares, Baa Atoll 20077, Maldives',
      website:
        'https://www.avanihotels.com/fares-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Fares&utm_content=Home&utm_campaign=Google_GMB',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.232Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.435Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac05',
    },
    hotel: {
      name: 'Ayada Maldives',
      address: 'Gaafu Dhaalu Atoll Maguhdhuvaa Island, Maldives',
      website: 'http://www.ayadamaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.233Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac06',
    },
    hotel: {
      name: 'Baglioni Resort Maldives',
      address: 'Maagau Island, Rinbudhoo, Maldives',
      website: 'https://maldives.baglionihotels.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.233Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac07',
    },
    hotel: {
      name: 'Banyan Tree Vabbinfaru',
      address: 'Kaafu Atoll, North Male Atoll, Maldives',
      website: 'https://www.banyantree.com/en/maldives/vabbinfaru/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.234Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac08',
    },
    hotel: {
      name: 'Barceló Whale Lagoon Maldives',
      address: 'Bodufinolhu Island, Fenfushi 20209, Maldives',
      website:
        'https://www.barcelo.com/en-ww/barcelo-whale-lagoon-maldives/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=40962',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.234Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac09',
    },
    hotel: {
      name: 'Baros',
      address: 'Baros, Maldives',
      website: 'https://www.baros.com/?utm_source=google&utm_medium=organic&utm_campaign=barosmaldives&utm_term=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.236Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0a',
    },
    hotel: {
      name: 'Bolifushi Island',
      address: 'South Male Atoll Maldives, 08160, Maldives',
      website: 'https://www.theozencollection.com/ozenreserve-bolifushi',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.236Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0b',
    },
    hotel: {
      name: 'Brennia Kottefaru',
      address: 'Brennia Kottefaru Kottefaru, 20081, Maldives',
      website: 'http://www.brennia.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.237Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0c',
    },
    hotel: {
      name: 'Centara Grand Island Resort & Spa Maldives',
      address: 'Centara Grand Island, Maldives',
      website: 'http://www.centarahotelsresorts.com/centaragrand/cirm/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.241Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0d',
    },
    hotel: {
      name: 'Cheval Blanc Randheli',
      address: 'Randheli Island, 04130, Maldives',
      website: 'https://www.chevalblanc.com/en/maison/randheli/?y_source=1_MTkzOTczMDEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.244Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0e',
    },
    hotel: {
      name: 'Cinnamon Velifushi Maldives',
      address: 'Cinnamon Velifushi Maldives Aarah Vaavu Atoll Aarah, 20252, Maldives',
      website:
        'https://www.cinnamonhotels.com/cinnamonvelifushimaldives?utm_source=google&utm_medium=organic&utm_campaign=cinnamonvelifushimaldives&utm_term=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.244Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.436Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac0f',
    },
    hotel: {
      name: 'Coco Bodu Hithi',
      address: 'Coco Bodu Hithi Resort, North Male Atoll, Maldives',
      website:
        'https://cococollection.com/en/bodu-hithi?_gl=1*dx5c6b*_ga*MjAzOTc3ODI0NC4xNzAwNTUwMDUx*_ga_15J41CGHKZ*MTcwMDU1MDA1MS4xLjAuMTcwMDU1MDE4OS42MC4wLjA.&_ga=2.195110572.1021820593.1700550051-2039778244.1700550051',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.244Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac10',
    },
    hotel: {
      name: 'Coco Palm Dhuni Kolhu',
      address: 'Coco Palm Dhuni Kolhu Resort, Baa Atoll, Maldives',
      website: 'https://cococollection.com/en/palm-dk',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.245Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac11',
    },
    hotel: {
      name: 'Cocoon Maldives',
      address: 'Ookolhufinolhu, Lhaviyani Atoll 07040, Maldives',
      website: 'http://www.cocoonmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.247Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac12',
    },
    hotel: {
      name: 'COMO Cocoa Island',
      address: 'Makunufushi South Malé Atoll, 20109, Maldives',
      website:
        'https://www.comohotels.com/maldives/como-cocoa-island?utm_source=Google&utm_medium=GoogleMyBusiness&utm_campaign=GMBprofile',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.249Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac13',
    },
    hotel: {
      name: 'COMO Maalifushi',
      address: 'Thaa Atoll, Maldives',
      website:
        'https://www.comohotels.com/maldives/como-maalifushi?utm_source=Google&utm_medium=GoogleMyBusiness&utm_campaign=GMBprofile',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.249Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac14',
    },
    hotel: {
      name: 'Conrad Maldives Rangali Island',
      address: 'Rangali Island Alifu Dhaalu Atoll, 20077, Maldives',
      website: 'https://www.conradmaldives.com/?SEO_id=GMB-APAC-CI-MLEHICI',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.250Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.437Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac15',
    },
    hotel: {
      name: 'Constance Halaveli Maldives',
      address: 'Halaveli Island, Maldives',
      website: 'https://www.constancehotels.com/en/hotels-resorts/maldives/halaveli/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.250Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac16',
    },
    hotel: {
      name: 'Constance Moofushi Maldives',
      address: 'South Atoll, Alifu Atoll',
      website: 'https://www.constancehotels.com/en/hotels-resorts/maldives/moofushi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.251Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac17',
    },
    hotel: {
      name: 'Cora Cora Maldives',
      address: 'Raa Maamigili Raa Atoll, 05161, Maldives',
      website: 'http://www.coracoraresorts.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.251Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac18',
    },
    hotel: {
      name: 'Dhawa Ihuru',
      address: 'Ihuru Island, Maldives',
      website: 'https://www.dhawa.com/maldives/dhawa-ihuru?y_source=1_MTUzNTk0MjAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.252Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac19',
    },
    hotel: {
      name: 'Dhigali Maldives',
      address: 'North Maalhosmadulu Raa Atoll, 21012, Maldives',
      website: 'https://www.dhigali.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.252Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1a',
    },
    hotel: {
      name: 'Dhigufaru Island Resort',
      address: "Dhigufaruvinagan'du, Kendhoo, Maldives",
      website: 'http://www.dhigufaru.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.253Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.438Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1b',
    },
    hotel: {
      name: 'Diamonds Athuruga Maldives Resort & SPA',
      address: 'South Ari Atoll, Athuruga Island 00130, Maldives',
      website: 'http://athurugabeach.diamondsresorts.com/eng',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.260Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1c',
    },
    hotel: {
      name: 'Diamonds Thudufushi Maldives Resort & SPA',
      address: 'Diamonds Thudufushi, Thudufushi 20190, Maldives',
      website: 'http://thudufushibeach.diamondsresorts.com/eng',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.262Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1d',
    },
    hotel: {
      name: 'Dusit Thani Maldives',
      address: 'Mudhdhoo Island, Maldives',
      website:
        'https://www.dusit.com/dusitthani-maldives/?utm_source=google_maps&utm_medium=seo_maps&utm_campaign=seo_maps',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.262Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1e',
    },
    hotel: {
      name: 'Emerald Maldives Resort & Spa',
      address: 'Fasmendhoo Island, Maldives',
      website: 'https://www.emerald-maldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.263Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac1f',
    },
    hotel: {
      name: 'Emerald Faarufushi Resort & Spa',
      address: 'Faarufushi Island, Maldives',
      website: 'https://www.emerald-faarufushi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.263Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac20',
    },
    hotel: {
      name: 'Fairmont Maldives - Sirru Fen Fushi',
      address: 'Sirru Fen Fushi, SHAVIYANI ATOLL 20209, Maldives',
      website:
        'https://www.fairmont.com/maldives/?goto=fiche_hotel&code_hotel=B2H3&merchantid=seo-maps-MV-B2H3&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjEzNjctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.263Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac21',
    },
    hotel: {
      name: 'Finolhu Baa Atoll Maldives ',
      address: '',
      website: 'https://www.finolhu.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.264Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac22',
    },
    hotel: {
      name: 'Four Seasons Maldives Private Island at Voavah',
      address: 'Kudarikilu, Baa Atoll, Maldives',
      website: 'http://www.fourseasons.com/maldivesvoavah/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.264Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac23',
    },
    hotel: {
      name: 'Four Seasons Resort Maldives at Kuda Huraa',
      address: 'North Malé Atoll, 20097, Maldives',
      website: 'https://www.fourseasons.com/maldiveskh/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.276Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.439Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac24',
    },
    hotel: {
      name: 'Four Seasons Resort Maldives at Landaa Giraavaru',
      address: '20097, Maldives',
      website: 'https://www.fourseasons.com/maldiveslg/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.277Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac25',
    },
    hotel: {
      name: 'Furaveri Maldives',
      address: 'Furaveri Maldives, 20012, Maldives',
      website: 'http://www.furaveri.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.277Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac26',
    },
    hotel: {
      name: 'Fushifaru Maldives',
      address: '',
      website: 'https://www.fushifaru.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.279Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac27',
    },
    hotel: {
      name: 'Gangehi Island Resort',
      address: 'Gangehi Island 09120, Maldives',
      website: 'http://gangehi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.280Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac28',
    },
    hotel: {
      name: 'Gili Lankanfushi Maldives',
      address: 'Lankanfushi Island, North Malé Atoll Republic of Maldives, Maldives',
      website: 'https://gili-lankanfushi.com/?utm_source=gmb&utm_medium=link&utm_campaign=gmb_hotel_listing',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.280Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac29',
    },
    hotel: {
      name: 'Grand Park Kodhipparu',
      address: 'Kodhipparu, 08121, Maldives',
      website:
        'https://www.parkhotelgroup.com/north-male-atoll/grand-park-kodhipparu-maldives/?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=kodhipparu',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.281Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2a',
    },
    hotel: {
      name: 'Hard Rock Hotel Maldives',
      address: 'Eh`mafushi South Malé Atoll, 00000, Maldives',
      website: 'https://www.hardrockhotels.com/maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.281Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.440Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2b',
    },
    hotel: {
      name: 'Heritance Aarah',
      address: 'Meedhoo, Maldives',
      website: 'https://www.heritancehotels.com/aarah',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.312Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2c',
    },
    hotel: {
      name: 'Hideaway Beach Resort & Spa Maldives',
      address: 'Dhonakulhi Island, Maldives',
      website: 'http://www.hideawaybeachmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.312Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2d',
    },
    hotel: {
      name: 'Hilton Maldives Amingiri Resort & Spa',
      address: 'Malé 08540, Maldives',
      website:
        'https://www.hilton.com/en/hotels/mleaihi-hilton-maldives-amingiri-resort-and-spa/?SEO_id=GMB-APAC-HI-MLEAIHI',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.313Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.441Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2e',
    },
    hotel: {
      name: 'Hotel Riu Palace Maldivas',
      address: 'Gadifuri, Maldivas, Maldives',
      website:
        'https://www.riu.com/en/hotel/maldivas/dhaalu-atoll/hotel-riu-palace-maldivas/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=XMV',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.314Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac2f',
    },
    hotel: {
      name: 'Hurawalhi Island Resort',
      address: 'Hurawalhi Island, Lhaviyani Atoll 20187, Maldives',
      website: 'https://www.hurawalhi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.314Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac30',
    },
    hotel: {
      name: 'Huvafen Fushi',
      address: 'Nakachchafushi North Malé Atoll, 08390, Maldives',
      website: 'https://www.huvafenfushi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.315Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac31',
    },
    hotel: {
      name: 'Ifuru Island Maldives',
      address: 'Ifuru Island, Ifuru, Maldives',
      website: 'https://www.ifuruisland.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.315Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac32',
    },
    hotel: {
      name: 'InterContinental Maldives Maamunagau Resort, an IHG Hotel',
      address: 'Maamunagau Island, Raa Atoll 05060, Maldives',
      website:
        'https://www.ihg.com/intercontinental/hotels/us/en/maamunagau-island/mlemm/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-MV-_-MLEMM',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.318Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.442Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac33',
    },
    hotel: {
      name: 'JA Manafaru Private Island',
      address: 'Manafaru Private Island Resort, Maldives',
      website:
        'https://www.jaresortshotels.com/maldives/ja-manafaru?utm_source=google-local&utm_medium=organic&utm_campaign=gmb',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.319Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac34',
    },
    hotel: {
      name: 'JOALI Maldives',
      address: 'Muravandhoo Island, Maldives',
      website: 'https://www.joali.com/joali-maldives/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.320Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac35',
    },
    hotel: {
      name: 'JOALI BEING',
      address: 'Bodufushi Island, Maldives',
      website: 'https://www.joali.com/joali-being/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.321Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac36',
    },
    hotel: {
      name: 'Joy Island',
      address: 'Kassanfushi, Male 20026, Maldives',
      website: 'https://www.joyisland.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.323Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac37',
    },
    hotel: {
      name: 'Jumeirah Maldives Olhahali Island',
      address: 'Olhuhali, North Male Atoll Maldives',
      website:
        'https://www.jumeirah.com/en/stay/maldives/jumeirah-maldives?utm_source=google&utm_medium=google%20places&utm_campaign=hotel',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.323Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac38',
    },
    hotel: {
      name: 'JW Marriott Maldives Resort & Spa',
      address: "Van'gaaru Island, Atoll 40880, Maldives",
      website: 'https://www.marriott.com/en-us/hotels/mlejs-jw-marriott-maldives-resort-and-spa/overview/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.323Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac39',
    },
    hotel: {
      name: 'Kagi Maldives Resort & Spa',
      address: 'Kagi Maldives Spa, Island, Maldives',
      website: 'https://kagimaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.324Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.443Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3a',
    },
    hotel: {
      name: 'Kandima Maldives',
      address: 'Kandima 20066, Maldives',
      website: 'https://kandima.com/index.php/en?utm_source=google&utm_medium=gmb&utm_campaign=kandima-maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.324Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3b',
    },
    hotel: {
      name: 'Kandolhu Maldives',
      address: 'Kandolhudhoo, North Ari Atoll, Maldives',
      website: 'https://www.kandolhu.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.326Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3c',
    },
    hotel: {
      name: 'Kihaa Maldives',
      address: 'Kihaaddhufaru Island Male, Maldives',
      website: 'http://www.kihaamaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.327Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3d',
    },
    hotel: {
      name: 'Kuda Villingili Resort Maldives',
      address: 'Viligilimathidhahuraa, Maldives',
      website: 'http://www.kudavillingili.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.328Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3e',
    },
    hotel: {
      name: 'Kudadoo Maldives Private Island',
      address: 'Kudadoo Island, Lhaviyani Atoll 07080, Maldives',
      website: 'http://www.kudadoo.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.329Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac3f',
    },
    hotel: {
      name: 'Kudafushi Resort & Spa',
      address: 'Kudafushi Resort & SPA, Kudafushi 20081, Maldives',
      website: 'https://www.kudafushiresort.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.329Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac40',
    },
    hotel: {
      name: 'Kurumba Maldives ',
      address: 'Vihamanaafushi, North Male Atoll 08340, Maldives',
      website: 'https://www.kurumba.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.329Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac41',
    },
    hotel: {
      name: 'Le Méridien Maldives Resort & Spa',
      address: 'Lhaviyani Atoll Thilamaafushi Island, 07040, Maldives',
      website:
        'https://www.marriott.com/en-us/hotels/mlemd-le-meridien-maldives-resort-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.330Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac42',
    },
    hotel: {
      name: 'Lily Beach Resort & Spa',
      address: 'Huvahendhoo Island, 00160, Maldives',
      website: 'https://www.lilybeachmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.330Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.444Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac43',
    },
    hotel: {
      name: 'LUX South Ari Atoll',
      address: 'South Atoll, Dhidhoofinolhu, Maldives',
      website: 'https://www.luxresorts.com/en/maldives/hotel/luxsouthariatoll',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.331Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac44',
    },
    hotel: {
      name: 'Madifushi Private Island',
      address: 'Madifushi Private Island, 11020, Maldives',
      website: 'https://madifushiprivateisland.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.331Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac45',
    },
    hotel: {
      name: 'Milaidhoo Maldives',
      address: '',
      website: 'https://www.milaidhoo.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.332Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.448Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac46',
    },
    hotel: {
      name: 'Mirihi Island Resort',
      address: 'Mirihi Island Resort, Maldives',
      website: 'http://www.mirihi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.332Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac47',
    },
    hotel: {
      name: 'Mövenpick Resort Kuredhivaru Maldives',
      address: 'Kuredhivaru Island, 20026, Maldives',
      website:
        'https://movenpick.accor.com/en/asia/maldives/kuredhivaru/resort-kuredhivaru.html?merchantid=seo-maps-MV-B4P5&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Kuredhivaru-Maldives&y_source=1_MTUzNjI4NjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.333Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac48',
    },
    hotel: {
      name: 'Naladhu Private Island Maldives',
      address: 'Veligandu Huraa, South Male Atoll 20109, Maldives',
      website:
        'https://www.naladhu.com/?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Naladhu&utm_content=Home&utm_campaign=Google_GMB',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.333Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac49',
    },
    hotel: {
      name: 'NH Collection Maldives Havodda Resort',
      address: '17100, Maldives',
      website:
        'https://world.nh-hotels.com/en/nh-collection-maldives-havodda?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Havodda&utm_content=Home&utm_campaign=Google_GMB',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.334Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4a',
    },
    hotel: {
      name: 'Nika Island Resort & Spa',
      address: 'Nika Island Resort, Medhu-Uthuru Province, 20123, Maldives',
      website: 'http://www.nikaisland.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.335Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4b',
    },
    hotel: {
      name: 'Niyama Private Islands Maldives',
      address: 'Olhuveli, Kudahuvadhoo Dhaalu Atoll, 13080, Maldives',
      website: 'https://www.niyama.com/en',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.336Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4c',
    },
    hotel: {
      name: 'Noku Maldives',
      address: 'Kuda-Funafaru, Maldives',
      website: 'https://www.nokuhotels.com/maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.336Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4d',
    },
    hotel: {
      name: 'Nova Maldives',
      address: 'Kaneeru Villa 3rd Floor, Male, Maldives',
      website: 'https://nova-maldives.com/?utm_source=google&utm_medium=gmb&utm_campaign=novamaldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.336Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4e',
    },
    hotel: {
      name: 'Oaga Art Resort Maldives',
      address: 'K.Maaranfushi, North, Maldives',
      website: 'http://oagaresorts.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.339Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.449Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac4f',
    },
    hotel: {
      name: 'OBLU SELECT Lobigili',
      address: 'OBLU SELECT Lobigili, Malé, Maldives',
      website: 'https://coloursofoblu.com/oblu-select-lobigili',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.341Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac50',
    },
    hotel: {
      name: 'Oblu Select Sangeli',
      address: 'OBLU SELECT Sangeli North Male, 20094, Maldives',
      website: 'https://www.oblu-sangeli.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.341Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac51',
    },
    hotel: {
      name: 'One&Only Reethi Rah',
      address: 'Reethi Rah, North Malé Atoll, Malé 08440, Maldives',
      website:
        'https://www.oneandonlyresorts.com/reethi-rah?utm_source=GMBlisting&utm_medium=organic&utm_campaign=oorr-reethi-rah-gmb',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.343Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac52',
    },
    hotel: {
      name: 'Outrigger Konotta Maldives Resort',
      address: 'Dhevvadhoo, Maldives',
      website: 'https://www.outrigger.com/hotels-resorts/maldives/konotta-island/outrigger-konotta-maldives-resort',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.344Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac53',
    },
    hotel: {
      name: 'Outrigger Maldives Maafushivaru',
      address: 'Maafushivaru, Atoll 00240, Maldives',
      website: 'http://www.maafushivaru.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.344Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac54',
    },
    hotel: {
      name: 'Ozen Life Maadhoo, South Male Atoll',
      address: 'Ozen Life Maadhoo, Maadhoo Island South Malé Atoll Maadhoo Island, 20094, Maldives',
      website:
        'https://theozencollection.com/ozenlife-maadhoo/?utm_source=google&utm_medium=organic&utm_campaign=ozenlifemaadhoo&utm_term=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.344Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac55',
    },
    hotel: {
      name: 'Ozen Reserve Bolifushi, South Male Atoll',
      address: 'Bolifushi Island Kaafu Atoll, 20222, Maldives',
      website:
        'https://theozencollection.com/ozenreserve-bolifushi/?utm_source=google&utm_medium=organic&utm_campaign=ozenreservebolifushi&utm_term=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.345Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac56',
    },
    hotel: {
      name: 'Patina Maldives',
      address: 'North Malé Atoll, 20026, Maldives',
      website: 'https://patinahotels.com/maldives-fari-islands/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.345Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac57',
    },
    hotel: {
      name: 'Park Hyatt Maldives Hadahaa',
      address: 'Gaafu Alifu Atoll, Hadahaa, North Huvadhoo 20054, Maldives',
      website:
        'https://www.hyatt.com/en-US/hotel/maldives/park-hyatt-maldives-hadahaa/mldph?src=corp_lclb_gmb_seo_mldph',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.346Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac58',
    },
    hotel: {
      name: 'Pullman Maldives Resort',
      address: 'Maamutaa, Island 20219, Maldives',
      website:
        'https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9924&merchantid=seo-maps-MV-9924&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTUzNjE1ODMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.346Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.450Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac59',
    },
    hotel: {
      name: 'Radisson Blu Resort Maldives',
      address: 'Huruelhi Island Male, 20026, Maldives',
      website:
        'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-maldives?cid=a:se+b:gmb+c:apac+i:local+e:rdb+d:seap+h:MVHURRST',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.346Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5a',
    },
    hotel: {
      name: 'Raffles Maldives Meradhoo Resort',
      address: 'Meradhoo Island, 17100, Maldives',
      website: 'https://www.raffles.com/maldives/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.347Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5b',
    },
    hotel: {
      name: 'Riu Palace Maldives',
      address: '',
      website:
        'https://www.riu.com/de/hotel/maldivas/dhaalu-atoll/hotel-riu-palace-maldivas/?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWO2GtkiZn7-lWuYsk_pxaJ4xHiOc9LLiI9xwIP2g7WYPIR3P68sYfthoCCI0QAvD_BwE&gclsrc=aw.ds',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.347Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5c',
    },
    hotel: {
      name: 'Robinson Club Noonu',
      address: 'Orivaru Noonu Atoll Orivaru, 20293, Maldive',
      website:
        'https://www.robinson.com/de/de/cluburlaub/malediven/noonu/club-details/?utm_campaign=googlemybusiness&utm_medium=organic&utm_source=google',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.347Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5d',
    },
    hotel: {
      name: 'Royal Island Resort & Spa',
      address: 'Horubadhoo, Maldives',
      website: 'https://www.villaresorts.com/royal-island/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.348Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5e',
    },
    hotel: {
      name: 'SAii Lagoon Maldives, Curio Collection by Hilton',
      address: 'Eh`mafushi South, Malé, Maldives',
      website: 'https://www.hilton.com/en/hotels/mlegsqq-saii-lagoon-maldives/?SEO_id=GMB-APAC-QQ-MLEGSQQ',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.348Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac5f',
    },
    hotel: {
      name: 'Seaside Finolhu Baa Atoll Maldives',
      address: 'Kanufushi Island, Hithaadhoo, Maldives',
      website: 'http://www.finolhu.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.348Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac60',
    },
    hotel: {
      name: 'Sheraton Maldives Full Moon Resort & Spa',
      address: 'Furanafushi Island North Malé Atol, 08240, Maldives',
      website:
        'https://www.marriott.com/en-us/hotels/mlesi-sheraton-maldives-full-moon-resort-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.348Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac61',
    },
    hotel: {
      name: 'Six Senses Kanuhura',
      address: 'Kanuhura, 07060, Maldives',
      website: 'https://www.sixsenses.com/en/resorts/kanuhura',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.349Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac62',
    },
    hotel: {
      name: 'Six Senses Laamu',
      address: 'Laamu Atoll 15090, Maldives',
      website: 'https://www.sixsenses.com/en/resorts/laamu/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.349Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.451Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac63',
    },
    hotel: {
      name: 'Siyam World Maldives',
      address: 'Maadhoo, Dhigurah, 20066, Maldives',
      website: 'https://www.sunsiyam.com/siyam-world/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.349Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac64',
    },
    hotel: {
      name: 'SO/ Maldives',
      address: 'Malé, Maldives',
      website: 'https://all.accor.com/hotel/B986/index.en.shtml',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.350Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac65',
    },
    hotel: {
      name: 'Soneva Fushi',
      address: 'Kunfunadhoo Island, Eydhafushi, Maldives',
      website: 'https://soneva.com/resorts/soneva-fushi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.351Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac66',
    },
    hotel: {
      name: 'Soneva Jani',
      address: 'Medhufaru Island, Manadhoo, Maldives',
      website: 'https://soneva.com/resorts/soneva-jani/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.351Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac67',
    },
    hotel: {
      name: 'Sun Siyam Iru Fushi',
      address: 'Medhafushi, Maldives',
      website: 'https://www.sunsiyam.com/sun-siyam-iru-fushi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.351Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac68',
    },
    hotel: {
      name: 'Sun Siyam Iru Veli',
      address: '',
      website: 'https://www.sunsiyam.com/sun-siyam-iru-veli/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.352Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac69',
    },
    hotel: {
      name: 'Sun Siyam Vilu Reef',
      address: 'Dh. Meedhuffushi, South Nilandhe Atoll 13100, Maldives',
      website: 'https://www.sunsiyam.com/sun-siyam-vilu-reef/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.352Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6a',
    },
    hotel: {
      name: 'Taj Coral Reef Resort & Spa',
      address: 'North Male, Atoll 20195, Maldives',
      website:
        'https://www.tajhotels.com/en-in/taj/taj-coral-reef-maldives/?utm_source=Google&utm_medium=Local&utm_campaign=taj-coral-reef-maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.352Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6b',
    },
    hotel: {
      name: 'Taj Exotica Resort & Spa',
      address: 'Emboodhu Finolhu, South Male Atoll 02117, Maldives',
      website:
        'https://www.tajhotels.com/en-in/taj/taj-exotica-maldives/?utm_source=Google&utm_medium=Local&utm_campaign=Taj-Exotica-Maldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.352Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6c',
    },
    hotel: {
      name: 'The Nautilus Maldives',
      address: 'Thiladhoo, Baa atoll 20066, Maldives',
      website: 'https://www.thenautilusmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.353Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.452Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6d',
    },
    hotel: {
      name: 'The Residence Maldives at Dhigurah',
      address: 'Dhigurah, Maldives',
      website:
        'https://www.cenizaro.com/theresidence/maldives-dg?utm_source=google&utm_medium=organic&utm_campaign=dhigurah',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.353Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6e',
    },
    hotel: {
      name: 'The Residence Maldives at Falhumaafushi',
      address: 'Falhumaafushi, Maldives',
      website:
        'https://www.cenizaro.com/theresidence/maldives-fm?utm_source=google&utm_medium=organic&utm_campaign=falhumaafushi',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.353Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac6f',
    },
    hotel: {
      name: 'The Ritz-Carlton Maldives, Fari Islands',
      address: 'Fari Islands North, Male 20013, Maldives',
      website:
        'https://www.ritzcarlton.com/en/hotels/mlera-the-ritz-carlton-maldives-fari-islands/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.354Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac70',
    },
    hotel: {
      name: 'The St. Regis Maldives Vommuli Resort',
      address: 'Vommuli Island Dhaalu Atoll, 13080, Maldives',
      website:
        'https://www.marriott.com/en-us/hotels/mlexr-the-st-regis-maldives-vommuli-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.359Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac71',
    },
    hotel: {
      name: 'The Standard, Huruvalhi Maldives',
      address: 'Huruvalhi Island, Maldives',
      website: 'https://www.standardhotels.com/maldives/properties/huruvalhi',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.360Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac72',
    },
    hotel: {
      name: 'The Westin Maldives Miriandhoo Resort',
      address: 'Miriandhoo Island, 06060, Maldives',
      website:
        'https://www.marriott.com/en-us/hotels/mlewi-the-westin-maldives-miriandhoo-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.361Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac73',
    },
    hotel: {
      name: 'VARU by Atmosphere',
      address: 'Varu by Atmosphere Madivaru, 20050, Maldives',
      website: 'https://www.varu-atmosphere.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.361Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac74',
    },
    hotel: {
      name: 'Velaa Private Island Maldives',
      address: '',
      website: 'http://www.velaaprivateisland.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.361Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac75',
    },
    hotel: {
      name: 'Velassaru Maldives',
      address: '39 Orchid Magu, Malé 08350, Maldives',
      website: 'https://www.velassaru.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.362Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac76',
    },
    hotel: {
      name: 'Villa Nautica Maldives',
      address: 'Paradise Island Resort & Spa, Lankanfinolhu, Maldives',
      website: 'https://villaresorts.com/villa-nautica',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.362Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.453Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac77',
    },
    hotel: {
      name: 'Villa Park Maldives',
      address: 'Nalaguraidhoo, Maldives',
      website: 'https://www.villaresorts.com/villa-park',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.362Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac78',
    },
    hotel: {
      name: 'W Maldives',
      address: 'Fesdu Island North Ari Atoll, 09110, Maldives',
      website:
        'https://www.marriott.com/en-us/hotels/mlewh-w-maldives/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.363Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac79',
    },
    hotel: {
      name: 'Waldorf Astoria Maldives Ithaafushi',
      address: 'Ithaafushi Island South Malé Atoll Male, 20009, Maldives',
      website:
        'https://www.hilton.com/en/hotels/mleonwa-waldorf-astoria-maldives-ithaafushi/?SEO_id=GMB-APAC-WA-MLEONWA',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.363Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7a',
    },
    hotel: {
      name: 'You & Me Maldives',
      address: 'Uthurumaafaru, Ungoofaaru 05060, Maldives',
      website: 'http://www.youandmemaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.363Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7b',
    },
    hotel: {
      name: 'Adaaran Club Rannalhi',
      address: 'Rannalhi Island, Kaafu Atoll, SOUTH MALE ATOLL South Male, Maldives',
      website: 'http://www.adaaran.com/clubrannalhi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.363Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7c',
    },
    hotel: {
      name: 'Adaaran Select Hudhuran Fushi',
      address: 'North Male Atoll, Republic Of Maldives, North Male Atoll 20334, Maldives',
      website: 'http://www.adaaran.com/selecthudhuranfushi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.364Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7d',
    },
    hotel: {
      name: 'Adaaran Select Meedhupparu',
      address: 'Meedhupaaru, 05160, Maldives',
      website: 'http://www.adaaran.com/selectmeedhupparu/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.364Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7e',
    },
    hotel: {
      name: 'Angaga Island Resort & Spa',
      address: 'Mandhoo, Maldives',
      website: 'https://angaga.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.364Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.454Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac7f',
    },
    hotel: {
      name: 'Bandos Maldives',
      address: 'North Male atoll, 08480, Maldives',
      website: 'https://bandosmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.365Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac80',
    },
    hotel: {
      name: 'Canareef Resort Maldives',
      address: 'Addu City, Maldives',
      website: 'https://canareef.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.365Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac81',
    },
    hotel: {
      name: 'Centara Ras Fushi Resort',
      address: 'Male North Harbour, Boduthakurufaanu Magu, Maldives',
      website: 'http://www.centarahotelsresorts.com/centara/crf/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.365Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac82',
    },
    hotel: {
      name: 'Cinnamon Dhonveli Maldives',
      address: 'Dhonveli Island North Male Atoll, 20252, Maldives',
      website: 'https://www.cinnamonhotels.com/cinnamondhonvelimaldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.366Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac83',
    },
    hotel: {
      name: 'Cinnamon Hakuraa Huraa Maldives',
      address: 'Meemu Atoll, Huraa 20252, Maldives',
      website: 'https://www.cinnamonhotels.com/cinnamonhakuraahuraamaldives',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.366Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac84',
    },
    hotel: {
      name: 'Club Med Kani - Maldives',
      address: 'North male atoll Kani Kanifinolhu, 20000, Maldives',
      website: 'https://www.clubmed.ch/r/kani/y?locale=de-CH',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.367Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac85',
    },
    hotel: {
      name: 'Dreamland Maldives',
      address: 'Dreamland Maldives Baa Atoll, 06080, Maldives',
      website: 'http://www.dreamland.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.367Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac86',
    },
    hotel: {
      name: 'Drift Thelu Veliga Retreat',
      address: 'Thelu Veliga Island, South Ari Atoll, Maldives',
      website: 'http://www.driftretreat.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.367Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac87',
    },
    hotel: {
      name: 'Ellaidhoo Maldives by Cinnamon',
      address: 'Ellaidhoo Alifu Atoll, 20252, Maldives',
      website:
        'https://www.cinnamonhotels.com/ellaidhoomaldivescinnamon?utm_source=google&utm_medium=organic&utm_campaign=ellaidhoomaldivesbycinnamon&utm_term=gbp',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.368Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.455Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac88',
    },
    hotel: {
      name: 'Embudu Village',
      address: 'Embudu Village South Male atoll, 20012, Maldives',
      website: 'https://www.embuduvillage.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.368Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac89',
    },
    hotel: {
      name: 'Eriyadu Island Resort ',
      address: "North Male' Atoll Kaafu Atoll, 08210, Maldives",
      website: 'https://www.eriyadumaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.368Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8a',
    },
    hotel: {
      name: 'Fihalhohi Maldives',
      address: '',
      website: 'https://www.fihalhohimaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.368Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8b',
    },
    hotel: {
      name: 'Filitheyo Island Resort',
      address: "1st Floor G.Neem Majeedhee Magu Male' 20119, Feeali, Maldives",
      website: 'https://filitheyoresort.com/',
    },
    propertyInformation: {
      lastRenovated: {
        $date: '2024-03-12T08:40:34.761Z',
      },
      scopeOfRenovation: [],
      stateOfRepair: 'test',
    },
    healthSafety: {
      media: {
        images: [],
      },
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.369Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      media: {
        images: [],
      },
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      media: {
        images: [],
      },
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
      images: [],
    },
    kidsClub: {
      activities: [],
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
      images: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      kidsFeatures: [],
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-12T09:30:23.941Z',
    },
    activities: {
      activitiesAvailable: [],
      images: [],
    },
    foodAndBeverage: {
      images: [],
    },
    waterSports: {
      images: [],
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8c',
    },
    hotel: {
      name: 'Fiyavalhu Resort Maldives',
      address: 'Fiyavalhu Resort Maldives, Rahdhebai Magu, Mandhoo 00050, Maldives',
      website: 'http://www.fiyavalhumaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.369Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8d',
    },
    hotel: {
      name: 'Holiday Inn Resort Kandooma Maldives',
      address: 'Kandooma Fushi, 08310, Maldives',
      website:
        'https://www.ihg.com/holidayinnresorts/hotels/us/en/south-male-atoll/mlekf/hoteldetail?cm_mmc=GoogleMaps-_-RS-_-MV-_-MLEKF',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.369Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8e',
    },
    hotel: {
      name: 'Hotel Riu Atoll',
      address: 'Gadifuri-Maafushi Island, Maldives',
      website: 'https://www.riu.com/en/hotel/maldivas/dhaalu-atoll/hotel-riu-atoll/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.369Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac8f',
    },
    hotel: {
      name: 'Hulhule Island Hotel',
      address: 'Airport Main Road Male City, 22000, Maldives',
      website: 'https://hih.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.370Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac90',
    },
    hotel: {
      name: 'Innahura Maldives Resort',
      address: 'Innahura Lhaviyani Atoll, 75006, Maldives',
      website: 'https://www.innahura.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.370Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac91',
    },
    hotel: {
      name: 'Jawakara Islands Maldives ',
      address: 'Maabinhura Island, 20187, Maldives',
      website: 'https://jawakara.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.370Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.456Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac92',
    },
    hotel: {
      name: 'Jen Maldives Male',
      address: 'Ameer Ahmed Magu, Malé 20096, Maldives',
      website: 'https://www.shangri-la.com/en/hotels/jen/male/maldives/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.371Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.457Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.457Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac93',
    },
    hotel: {
      name: 'Kaani Beach Hotel',
      address: 'Aabaadhee Hingun Road, Maafushi, Maldives',
      website: 'http://www.kaanibeach.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.374Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.458Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.458Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac94',
    },
    hotel: {
      name: 'Kaani Palm Beach',
      address: 'Ziyaaraiy Magu Road, Maafushi 08090, Maldives',
      website: 'http://www.kaanipalm.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.376Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac95',
    },
    hotel: {
      name: 'Kaania Village & Spa',
      address: 'Mirihi Magu, Maafushi, Maldives',
      website: 'https://kaanitour.com/hotels/kaani-village-spa/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.376Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac96',
    },
    hotel: {
      name: 'Kiha Beach',
      address: 'Kiha Beach, Dharavandhoo 06060, Maldives',
      website: 'http://www.kihabeach.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.376Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac97',
    },
    hotel: {
      name: 'Komandoo Island Resort & Spa',
      address: 'Lhaviyani Atoll, Maldives Islands, Maldives',
      website: 'https://www.komandoo.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.377Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac98',
    },
    hotel: {
      name: 'Kuramathi Maldives',
      address: 'Kuramathi, Ari Atoll, Maldives',
      website: 'https://www.kuramathi.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.377Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac99',
    },
    hotel: {
      name: 'Kuredu Island Resort & Spa',
      address: 'Kuredu Island Resort & Spa, Maldives',
      website: 'https://www.kuredu.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.377Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9a',
    },
    hotel: {
      name: 'Maagiri Hotel',
      address: '20012 Malé, Boduthakurufaanu Magu, Malé, Maldives',
      website: 'https://maagirihotel.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.378Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9b',
    },
    hotel: {
      name: 'Makunudu Island',
      address: '',
      website: 'http://www.makunudu.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.378Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.459Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9c',
    },
    hotel: {
      name: 'Malahini Kuda Bandos Resort',
      address: '',
      website: 'http://www.malahini.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.378Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9d',
    },
    hotel: {
      name: 'Medhufushi Island Resort',
      address: 'Medhufushi, 20188, Maldives',
      website: 'https://medhufushiisland.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.379Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9e',
    },
    hotel: {
      name: 'Meeru Maldives Resort Island',
      address: 'Meerufenfushi Island North, Maldives',
      website: 'https://www.meeru.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.379Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55ac9f',
    },
    hotel: {
      name: 'Mercure Maldives Kooddoo Resort',
      address: 'Kooddoo Island, 20219, Maldives',
      website:
        'https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9923&merchantid=seo-maps-MV-9923&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTUzNjE1ODItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.379Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca0',
    },
    hotel: {
      name: 'NAKAI Dhiggiri Resort',
      address: 'Fulidhoo, Maldives•+960 670-0593',
      website: 'https://dhiggiri.nakairesorts.com/en/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.379Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca1',
    },
    hotel: {
      name: 'Nooe Maldives Kunaavashi',
      address: 'Vaavu Kunaavashi Island, NOOE Maldives Kunaavashi, 10010, Maldives',
      website: 'https://nooe.com/nooe-maldives-kunaavashi/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.380Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca2',
    },
    hotel: {
      name: 'OBLU NATURE Helengeli by SENTIDO',
      address: 'OBLU NATURE Helengeli, Helengeli 08280, Maldives',
      website: 'https://coloursofoblu.com/oblu-nature-helengeli',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.380Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca3',
    },
    hotel: {
      name: 'OBLU XPERIENCE Ailafushi',
      address: 'North Male Ailafushi Maldives, Malé, Maldives',
      website: 'https://coloursofoblu.com/oblu-xperience-ailafushi',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.380Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca4',
    },
    hotel: {
      name: 'Pearl Sands of Maldives',
      address: 'K. Huraa, Kaafu 08050, Maldives',
      website: 'https://psh.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.384Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca5',
    },
    hotel: {
      name: 'Rahaa Resort Maldives',
      address: 'Rahaa Resort Laamu Atoll, 15062, Maldives',
      website: 'http://rahaaresort.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.385Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca6',
    },
    hotel: {
      name: 'Reethi Beach Resort Maldives',
      address: 'Fonimagoodhoo, Maldives',
      website: 'http://www.reethibeach.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.385Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca7',
    },
    hotel: {
      name: 'Reethi Faru Resort',
      address: 'Filaidhoo, Maldives',
      website: 'http://www.reethifaru.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.385Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.460Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca8',
    },
    hotel: {
      name: 'Rihiveli Maldives Resort',
      address: 'Mahaanaelhihuraa Rihiveli Maldives, Maldives',
      website: 'http://www.rihiveliresort.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.386Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55aca9',
    },
    hotel: {
      name: 'Riu Atoll Hotel',
      address: 'Gadifuri-Maafushi Island, Maldives',
      website: 'https://www.riu.com/de/hotel/maldivas/dhaalu-atoll/hotel-riu-atoll/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.386Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acaa',
    },
    hotel: {
      name: 'Robinson Maldives',
      address: 'Funamadua, Kaadedhdhoo, Maldives',
      website: 'https://www.robinson.com/de/de/cluburlaub/malediven/maldives/club-details/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.386Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acab',
    },
    hotel: {
      name: 'Safari Island Resort',
      address: 'Mushimas Migili Alif Alif Mushimas Migili, 20119, Maldives',
      website: 'https://safariisland.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.387Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acac',
    },
    hotel: {
      name: 'Sandies Bathla ',
      address: 'Bathalaa, Maldives',
      website: 'https://bathalamaldives.sandies-resorts.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.387Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acad',
    },
    hotel: {
      name: 'Season Paradise',
      address: 'Aria, Thundee Magu, Thulusdhoo 08040, Maldives',
      website: 'http://seasonparadise.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.387Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acae',
    },
    hotel: {
      name: 'South Palm Resort',
      address: 'Ismehela Hera, Addu City, Maldives',
      website: 'http://www.southpalmresort.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.391Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acaf',
    },
    hotel: {
      name: 'Summer Island Maldives',
      address: 'North Male Atoll, 20012, Maldives',
      website: 'https://www.summerislandmaldives.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.392Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb0',
    },
    hotel: {
      name: 'Sun Siyam Olhuveli',
      address: 'South Male Atoll, Olhuveli Male, 08400, Maldives',
      website: 'https://www.sunsiyam.com/sun-siyam-olhuveli/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.392Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb1',
    },
    hotel: {
      name: 'The Barefoot Eco Hotel',
      address: 'Hanimaadhoo, Maldives',
      website: 'http://www.thebarefoot.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.393Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb2',
    },
    hotel: {
      name: 'Thulhagiri Island Resort',
      address: 'Thulhaagiri North, Himmafushi, Maldives',
      website: 'http://www.thulhagiri.com.mv/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.393Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.461Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb3',
    },
    hotel: {
      name: 'Unima Grand',
      address: 'Roashanee Magu, Malé 20002, Maldives',
      website: 'https://unimagrand.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.393Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb4',
    },
    hotel: {
      name: 'Velana Beach Hotel Maldives',
      address: 'Miskiy Magu Road, Maafushi 08090, Maldives',
      website: 'http://visitvelana.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.394Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
  },
  {
    _id: {
      $oid: '65e9584d44e8ebd93f55acb5',
    },
    hotel: {
      name: 'Vilamendhoo Island Resort & Spa',
      address: 'Vilamendhoo Island, Maldives',
      website: 'https://www.vilamendhoo.com/',
    },
    propertyInformation: {
      scopeOfRenovation: [],
    },
    healthSafety: {
      rating: 0,
      lastReviewDate: {
        $date: '2024-03-07T06:01:49.394Z',
      },
      policyForEvacuation: [],
      medicalEmergencyPolicy: [],
    },
    beach: {
      beachType: [],
      length: 0,
      hoursofLifeguardDuty: 0,
      lifeguardQualifications: [],
    },
    transferOptions: {
      timeLimitedbyTransferType: '',
      hotelFacilitatesTransferBooking: '',
    },
    reef: {
      accessibleFromBeach: [],
      houseReefAccessibleCost: 0,
      accessiblebyBoat: '',
      costTravel: 0,
      travelTime: 0,
      outerReef: '',
    },
    gym: {
      rangeofEquipment: [],
    },
    kidsClub: {
      ratioofStafftoChildren: 0,
      staffQualifications: [],
      languagesSpoken: [],
    },
    services: {
      trainingOrQualifications: [],
      safetyFeatures: [],
    },
    pool: {
      length: 0,
      depth: 0,
      width: 0,
      safetyFeatures: [],
    },
    rooms: {
      maxOccupancyAdult: 0,
      maxOccupancyChild: 0,
      safetyFeaturesifOverwaterBungalow: [],
      safetyFeaturesForBalcony: [],
      safetyFeaturesForPool: [],
      commentsOnHowPrivacyIsImpacted: '',
    },
    media: {
      images: [],
    },
    createdAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
    updatedAt: {
      $date: '2024-03-07T06:01:49.462Z',
    },
  },
];

// for (let i = 0; i < hotels.length; i++) {
//   const hotelNmae = hotels[i].hotel.name;
//   const hotelAddress = hotels[i].hotel.address;
//   const hotelId = hotels[i]._id.$oid;
//   console.log({ hotelNmae, hotelAddress, hotelId });
// }

const removeSpaces = str => {
  let newStr = str.replace(/\s+/g, '').replace(/,/g, '').toLowerCase();
  return newStr;
};

let newHotels = hotels.map(hotel => {
  const newHotel = {};
  const previousHotel = removeSpaces(hotel.hotel.name);
  newHotel.userName = previousHotel.substring(0, 7) + '@123'; // Concatenation corrected
  newHotel.password =
    previousHotel.substring(0, 3) + '123' + hotel._id.$oid.substring(hotel._id.$oid.length - 2, hotel._id.$oid.length); // Method name corrected
  newHotel.hotelId = hotel._id.$oid;
  return newHotel;
});

// console.log(newHotels);

// fs.writeFileSync('./hotelUser.json', JSON.stringify(newHotels));
