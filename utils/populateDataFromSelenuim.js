const axios = require('axios');
const { log } = require('console');
const populateSeleniumData = (hotel) => {
    hotel = encodeURIComponent(hotel);


    axios.get(`http://localhost:4000/getall?name=${hotel}`).then((result) => {
        const data = result.data.allHotels[0];
        const exc = {
            propertyInformation: {
                rating: parseInt(data.star_Rating.split(' ')[0]),
                numberofRooms: parseInt(data.number_of_rooms),
                isAdultOnly: data.exclusivityForAdults === 'Yes',
                lastRenovated: data.lastRenovationDate ? new Date(data.lastRenovationDate) : null,
                thirdPartyReviewsaorAwards: data.reviewsAwards.split(', '),
                wifi: data.uniqueSellingPoints.includes('Complimentary Wi-Fi'),
                uniqueSellingPoints: data.uniqueSellingPoints.split('. ').filter(point => point !== ''),
            },
            location: {
                latitude: parseFloat(data.gps_coordinates.split(',')[0]),
                longitude: parseFloat(data.gps_coordinates.split(',')[1]),
                city: data.city,
                roadAndNumber: data.road_and_number,
                suburb: data.suburb,
                postCode: parseInt(data.post_code),
                country: data.country,
                state: data.state,
                atoll: data.atoll || null,
            },
            healthSafety: {
                lastReviewDate: data.last_review ? new Date(data.last_review) : null,
                rating: parseInt(data.rating.split('+')[0]),
                doctorOnSite: data.doctor_on_site === 'There is a doctor on site',
                doctorIsPermanent: data.doctor_is_Permanent_Seasonal_etc === 'Permanent doctors are available at the hotel.',
                defibrillatorsOnProperty: data.defibrillators_on_property === 'Yes',
                defibrillatorsByPool: data.defibrillators_by_pool === 'Yes',
                nearestClinicHospital: data.hospitalSpecialties.split(', ').filter(hospital => hospital.includes('The nearest hospital')),
                images: [{ title: 'Hospital Image', url: 'URL_TO_IMAGE' }], // Provide a URL to hospital image
            },
            transferOptions: {
                weatherlimited: data.weather_limited === "The hotel's facilities are affected by weather conditions.",
                timeLimitedbyTransferType: data.time_limited_by_transfer_type === 'Yes',
                hotelFacilitatesTransferBooking: data.hotel_facilitates_transfer_booking === 'Yes',
                qualityofBoats: data.quality_of_boats,
                transferOption: data.transferOptions,
                boatschedules: data.transferOptions,
                seaplaneSchedules: data.transferOptions,
                seaplaneProviders: data.transferOptions,
                domesticAirlineSchedules: data.transferOptions,
                likelihoodofDelays: data.transferOptions,
                distanceOrTimeFromMale: data.distanceFromMale,
                meetAndGreetAtAirport: data.meet_and_greet_at_airport,
            },
            features: {
                fullBoard: data.specialtyNights.includes('Dinner included'),
                halfBoard: data.specialtyNights.includes('Lunch included'),
                breakfastIncluded: data.breakfastInclusion === 'Yes',
            },
            beach: {
                beachType: data.type_of_sand.split(', '),
                length: data.beachDistance,
                tidesRips: data.tides_Rips === 'Yes',
                hoursofLifeguardDuty: parseInt(data.hours_of_lifeguard_duty.split(' ')[0]),
                areaOfBeachPatrolledbyLifeguards: data.off_beach_patrolled_by_lifeguards === 'Yes',
                lifeguardQualifications: data.lifeguard_qualifications.split(', '),
                images: [{ title: 'Beach Image', url: 'URL_TO_IMAGE' }], // Provide a URL to beach image
            },
            reef: {
                entryPointSandLengthofSwim: data.entry_points_and_length_of_swim,
                houseReefAccessiblebyBoat: data.houseReef === 'Yes',
                houseReefAccessibleCost: data.house_Reef_accessible_by_boat_and_cost,
                accessiblebyBoat: data.accessible_by_boat_cost_Travel_time.includes('Accessible by boat'),
                costTravel: data.costTravel,
                travelTime: data.travelTime,
                outerReef: data.outer_reef === 'Yes',
                distanceFromBeach: data.distanceFromBeach,
                onsiteMarineBiologist: data.onsiteMarineBiologist === 'Yes',
                abundanceOfReefSharks: data.abundanceOfReefSharks === 'Yes',
                images: [{ title: 'Reef Image', url: 'URL_TO_IMAGE' }], // Provide a URL to reef image
            },
            waterSports: {
                submarineTour: data.availabilityOfSubmarineTours.includes('yes'),
                costs: data.houseReefAccessibleCost,
                maximumOccupancy: parseInt(data.maximumOccupancy),
                images: [{ title: 'Water Sports Image', url: 'URL_TO_IMAGE' }], // Provide a URL to water sports image
            },
            gym: {
                isGYMPresedOrNot: data.gym === 'yes',
                qualityOfEquipment: data.quality_of_equipment,
                rangeofEquipment: data.range_of_equipment.split(', '),
                trainerOnSite: data.trainerAvailability === 'yes',
                cost: data.cost,
                openingTimes: data.hours,
                images: [{ title: 'Gym Image', url: 'URL_TO_IMAGE' }], // Provide a URL to gym image
            },
            activities: {
                activitiesAvailable: data.affiliatedActivities.split(', '),
                stingrayOrFishFeeding: data.stingrayFishFeeding === 'yes',
                cost: data.cost,
                images: [{ title: 'Activities Image', url: 'URL_TO_IMAGE' }], // Provide a URL to activities image
            },
            foodAndBeverage: {
                extraCostForRoomService: data.extra_cost_for_room_service === 'yes',
                roomService: data.room_service === 'Yes',
                images: [{ title: 'Food and Beverage Image', url: 'URL_TO_IMAGE' }], // Provide a URL to food and beverage image
            },
            pool: {
                length: data.poolDimensions ? parseInt(data.poolDimensions.split(' ')[0]) : null,
                depth: data.depth ? parseInt(data.depth.split(' ')[0]) : null,
                lapPool: data.lap_pool === 'Yes',
                safetyFeatures: data.safety_features_for_pool.split(', '),
                totalNumberOfPool: data.totalRooms ? parseInt(data.totalRooms) : null,
                IsadultOnly: data.exclusivityForAdults === 'Yes',
                heated: data.heated === 'yes',
                cleanliness: data.cleanlinessStandards,
                images: [{ title: 'Pool Image', url: 'URL_TO_IMAGE' }], // Provide a URL to pool image
            },
            rooms: {
                maxOccupancyAdult: parseInt(data.maximumOccupancy),
                maxOccupancyChild: parseInt(data.maximumOccupancy),
                description: data.summary,
                safetyFeaturesifOverwaterBungalow: { type: data.safety_features_if_Overwater_Bungalow.split(', ') },
                safetyFeaturesForBalcony: data.safety_features_for_balcony.split(', '),
                safetyFeaturesForPool: data.safety_features_for_pool.split(', '),
                commentsOnHowPrivacyIsImpacted: data.comments_on_how_privacy_is_impacted,
                interconnected: data.interconnected === 'yes',
                noiseAtNight: data.noise_at_night_Distance_from_communal_areas,
                roomName: 'Default Room Name',
                numberOfRooms: parseInt(data.number_of_rooms),
                roomSize: data.averageRoomSize,
                childAgeCategory: data.childAgeCategories.split(', '),
                cotAllowedAndcost: data.cotAvailabilityCosts,
                rollawayBedAllowedAndCost: data.rollawayBedPolicyCosts,
                bath: data.bath,
                freeWifi: data.wifi,
                balconyPatio: data.balcony_or_patio === 'Yes',
                privatePool: data.private_pool === 'Yes',
                dimensionsOfPool: data.poolDimensions,
                overwater: data.overwater === 'Yes',
                beachAccess: data.beach_access === 'Private beach',
                isTV: data.tv === 'Yes',
                ironIroningBoard: data.iron_ironing_board === 'Yes',
                teaOrCoffeeOrKettle: data.tea_coffee_kettle === 'Yes',
                isMicrowave: data.microwave === 'Yes',
                musicSystem: data.music_system === 'Yes',
                laundryService: data.laundry_service === 'Yes',
                kitchenFacilitiesAndWhatFacilities: data.kitchenFacilities ? data.kitchenFacilities.split(', ') : [],
                safe: data.safe === 'Yes',
                pillowMenu: data.pillow_menu === 'Yes' ? ['Pillow Menu'] : [],
                blackoutCurtains: data.blackout_Curtains === 'Yes',
                FanOrAC: data.fan_AC,
                babyBath: data.availabilityOfBabyBathDuringTransfers === 'Yes',
                childrensToys: data.childrensToys === 'Yes',
                childrensCutlery: data.childrensCutleryAvailability === 'yes',
                images: [{ title: 'Room Image', url: 'URL_TO_IMAGE' }], // Provide a URL to room image
            },
            media: {
                images: [{ title: 'Hotel Image', url: data.image }],
            }
        }
        log(exc)
    }).catch((err) => {
        log(err)
    });
}
populateSeleniumData('You & Me Maldives')