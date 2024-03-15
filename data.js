const hotels = [
  {
    hotelName: {
      name: 'Adaaran Prestige Vadoo',
      address: 'South Male, Atoll 20105, Maldives',
      hotelURL: 'http://www.adaaran.com/prestigevadoo/',
    },
  },
  {
    hotelName: {
      name: 'Adaaran Prestige Water Villas',
      address: 'Meedupparu, Maldives',
      hotelURL: 'http://www.adaaran.com/prestigewatervillas/',
    },
  },
  {
    hotelName: {
      name: 'Airport Beach Hotel',
      address: 'Munich Residence, Lot 10969 Kaani Magu, Hulhumale, Maldives',
      hotelURL: 'http://airportbeachhotel.com-maldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Alila Kothaifaru Maldives',
      address: 'Kothaifaru Island, Maldives',
      hotelURL: 'https://www.alilahotels.com/kothaifaru-maldives/',
    },
  },
  {
    hotelName: {
      name: 'Amari Raaya Maldives',
      address: 'Kudakurathu Island, Maldives',
      hotelURL: 'https://www.amari.com/raaya-maldives',
    },
  },
  {
    hotelName: {
      name: 'Amaya Resort Kuda Rah',
      address: 'Kudarah Alifu Dhaalu Atoll, 00150, Maldives',
      hotelURL: 'https://www.amayaresorts.com/amayakudarah/',
    },
  },
  {
    hotelName: {
      name: 'Amilla Maldives ',
      address: '',
      hotelURL: 'https://amilla.com/',
    },
  },
  {
    hotelName: {
      name: 'Anantara Dhigu Maldives Resort',
      address: 'South Male Atoll 20109, Maldives',
      hotelURL:
        'https://www.anantara.com/dhigu-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Dhigu&utm_content=Home&utm_campaign=Google_GMB',
    },
  },
  {
    hotelName: {
      name: 'Anantara Kihavah Maldives Villas',
      address: 'Kihavah Huravalhi Island Baa Atoll, 20215, Maldives',
      hotelURL:
        'https://www.anantara.com/kihavah-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Kihavah&utm_content=Home&utm_campaign=Google_GMB',
    },
  },
  {
    hotelName: {
      name: 'Anantara Veli Maldives Resort',
      address: 'Veligandu South Male Atoll, 20109, Maldives',
      hotelURL:
        'https://www.anantara.com/en/veli-maldives/rooms/beach-pool-villa?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWO1nQdkr-ol2CIpPa_EQlQ5uvlhasNUvHvpr0Heppdiv4isXoPNVa3hoCxZgQAvD_BwE&gclsrc=aw.ds',
    },
  },
  {
    hotelName: {
      name: 'Angsana Velavaru',
      address: 'Velavaru Island, 20177, Maldives•',
      hotelURL: 'https://www.angsana.com/maldives/velavaru?y_source=1_MTUzNTk0MjMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Atmosphere Kanifushi Maldives',
      address: 'Atmosphere Kanifushi Maldives Lhaviyani Atoll, 07010, Maldives',
      hotelURL: 'https://www.atmosphere-kanifushi.com/',
    },
  },
  {
    hotelName: {
      name: 'Avani+ Fares Maldives Resort',
      address: 'Fares, Baa Atoll 20077, Maldives',
      hotelURL:
        'https://www.avanihotels.com/fares-maldives?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Fares&utm_content=Home&utm_campaign=Google_GMB',
    },
  },
  {
    hotelName: {
      name: 'Ayada Maldives',
      address: 'Gaafu Dhaalu Atoll Maguhdhuvaa Island, Maldives',
      hotelURL: 'http://www.ayadamaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Baglioni Resort Maldives',
      address: 'Maagau Island, Rinbudhoo, Maldives',
      hotelURL: 'https://maldives.baglionihotels.com/',
    },
  },
  {
    hotelName: {
      name: 'Banyan Tree Vabbinfaru',
      address: 'Kaafu Atoll, North Male Atoll, Maldives',
      hotelURL: 'https://www.banyantree.com/en/maldives/vabbinfaru/',
    },
  },
  {
    hotelName: {
      name: 'Barceló Whale Lagoon Maldives',
      address: 'Bodufinolhu Island, Fenfushi 20209, Maldives',
      hotelURL:
        'https://www.barcelo.com/en-ww/barcelo-whale-lagoon-maldives/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=40962',
    },
  },
  {
    hotelName: {
      name: 'Baros',
      address: 'Baros, Maldives',
      hotelURL: 'https://www.baros.com/?utm_source=google&utm_medium=organic&utm_campaign=barosmaldives&utm_term=gbp',
    },
  },
  {
    hotelName: {
      name: 'Bolifushi Island',
      address: 'South Male Atoll Maldives, 08160, Maldives',
      hotelURL: 'https://www.theozencollection.com/ozenreserve-bolifushi',
    },
  },
  {
    hotelName: {
      name: 'Brennia Kottefaru',
      address: 'Brennia Kottefaru Kottefaru, 20081, Maldives',
      hotelURL: 'http://www.brennia.com/',
    },
  },
  {
    hotelName: {
      name: 'Centara Grand Island Resort & Spa Maldives',
      address: 'Centara Grand Island, Maldives',
      hotelURL: 'http://www.centarahotelsresorts.com/centaragrand/cirm/',
    },
  },
  {
    hotelName: {
      name: 'Cheval Blanc Randheli',
      address: 'Randheli Island, 04130, Maldives',
      hotelURL: 'https://www.chevalblanc.com/en/maison/randheli/?y_source=1_MTkzOTczMDEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Cinnamon Velifushi Maldives',
      address: 'Cinnamon Velifushi Maldives Aarah Vaavu Atoll Aarah, 20252, Maldives',
      hotelURL:
        'https://www.cinnamonhotels.com/cinnamonvelifushimaldives?utm_source=google&utm_medium=organic&utm_campaign=cinnamonvelifushimaldives&utm_term=gbp',
    },
  },
  {
    hotelName: {
      name: 'Coco Bodu Hithi',
      address: 'Coco Bodu Hithi Resort, North Male Atoll, Maldives',
      hotelURL:
        'https://cococollection.com/en/bodu-hithi?_gl=1*dx5c6b*_ga*MjAzOTc3ODI0NC4xNzAwNTUwMDUx*_ga_15J41CGHKZ*MTcwMDU1MDA1MS4xLjAuMTcwMDU1MDE4OS42MC4wLjA.&_ga=2.195110572.1021820593.1700550051-2039778244.1700550051',
    },
  },
  {
    hotelName: {
      name: 'Coco Palm Dhuni Kolhu',
      address: 'Coco Palm Dhuni Kolhu Resort, Baa Atoll, Maldives',
      hotelURL: 'https://cococollection.com/en/palm-dk',
    },
  },
  {
    hotelName: {
      name: 'Cocoon Maldives',
      address: 'Ookolhufinolhu, Lhaviyani Atoll 07040, Maldives',
      hotelURL: 'http://www.cocoonmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'COMO Cocoa Island',
      address: 'Makunufushi South Malé Atoll, 20109, Maldives',
      hotelURL:
        'https://www.comohotels.com/maldives/como-cocoa-island?utm_source=Google&utm_medium=GoogleMyBusiness&utm_campaign=GMBprofile',
    },
  },
  {
    hotelName: {
      name: 'COMO Maalifushi',
      address: 'Thaa Atoll, Maldives',
      hotelURL:
        'https://www.comohotels.com/maldives/como-maalifushi?utm_source=Google&utm_medium=GoogleMyBusiness&utm_campaign=GMBprofile',
    },
  },
  {
    hotelName: {
      name: 'Conrad Maldives Rangali Island',
      address: 'Rangali Island Alifu Dhaalu Atoll, 20077, Maldives',
      hotelURL: 'https://www.conradmaldives.com/?SEO_id=GMB-APAC-CI-MLEHICI',
    },
  },
  {
    hotelName: {
      name: 'Constance Halaveli Maldives',
      address: 'Halaveli Island, Maldives',
      hotelURL: 'https://www.constancehotels.com/en/hotels-resorts/maldives/halaveli/',
    },
  },
  {
    hotelName: {
      name: 'Constance Moofushi Maldives',
      address: 'South Atoll, Alifu Atoll',
      hotelURL: 'https://www.constancehotels.com/en/hotels-resorts/maldives/moofushi/',
    },
  },
  {
    hotelName: {
      name: 'Cora Cora Maldives',
      address: 'Raa Maamigili Raa Atoll, 05161, Maldives',
      hotelURL: 'http://www.coracoraresorts.com/',
    },
  },
  {
    hotelName: {
      name: 'Dhawa Ihuru',
      address: 'Ihuru Island, Maldives',
      hotelURL: 'https://www.dhawa.com/maldives/dhawa-ihuru?y_source=1_MTUzNTk0MjAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Dhigali Maldives',
      address: 'North Maalhosmadulu Raa Atoll, 21012, Maldives',
      hotelURL: 'https://www.dhigali.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
  },
  {
    hotelName: {
      name: 'Dhigufaru Island Resort',
      address: "Dhigufaruvinagan'du, Kendhoo, Maldives",
      hotelURL: 'http://www.dhigufaru.com/',
    },
  },
  {
    hotelName: {
      name: 'Diamonds Athuruga Maldives Resort & SPA',
      address: 'South Ari Atoll, Athuruga Island 00130, Maldives',
      hotelURL: 'http://athurugabeach.diamondsresorts.com/eng',
    },
  },
  {
    hotelName: {
      name: 'Diamonds Thudufushi Maldives Resort & SPA',
      address: 'Diamonds Thudufushi, Thudufushi 20190, Maldives',
      hotelURL: 'http://thudufushibeach.diamondsresorts.com/eng',
    },
  },
  {
    hotelName: {
      name: 'Dusit Thani Maldives',
      address: 'Mudhdhoo Island, Maldives',
      hotelURL:
        'https://www.dusit.com/dusitthani-maldives/?utm_source=google_maps&utm_medium=seo_maps&utm_campaign=seo_maps',
    },
  },
  {
    hotelName: {
      name: 'Emerald Maldives Resort & Spa',
      address: 'Fasmendhoo Island, Maldives',
      hotelURL: 'https://www.emerald-maldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Emerald Faarufushi Resort & Spa',
      address: 'Faarufushi Island, Maldives',
      hotelURL: 'https://www.emerald-faarufushi.com/',
    },
  },
  {
    hotelName: {
      name: 'Fairmont Maldives - Sirru Fen Fushi',
      address: 'Sirru Fen Fushi, SHAVIYANI ATOLL 20209, Maldives',
      hotelURL:
        'https://www.fairmont.com/maldives/?goto=fiche_hotel&code_hotel=B2H3&merchantid=seo-maps-MV-B2H3&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjEzNjctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Finolhu Baa Atoll Maldives ',
      address: '',
      hotelURL: 'https://www.finolhu.com/',
    },
  },
  {
    hotelName: {
      name: 'Four Seasons Maldives Private Island at Voavah',
      address: 'Kudarikilu, Baa Atoll, Maldives',
      hotelURL: 'http://www.fourseasons.com/maldivesvoavah/',
    },
  },
  {
    hotelName: {
      name: 'Four Seasons Resort Maldives at Kuda Huraa',
      address: 'North Malé Atoll, 20097, Maldives',
      hotelURL: 'https://www.fourseasons.com/maldiveskh/',
    },
  },
  {
    hotelName: {
      name: 'Four Seasons Resort Maldives at Landaa Giraavaru',
      address: '20097, Maldives',
      hotelURL: 'https://www.fourseasons.com/maldiveslg/',
    },
  },
  {
    hotelName: {
      name: 'Furaveri Maldives',
      address: 'Furaveri Maldives, 20012, Maldives',
      hotelURL: 'http://www.furaveri.com/',
    },
  },
  {
    hotelName: {
      name: 'Fushifaru Maldives',
      address: '',
      hotelURL: 'https://www.fushifaru.com/',
    },
  },
  {
    hotelName: {
      name: 'Gangehi Island Resort',
      address: 'Gangehi Island 09120, Maldives',
      hotelURL: 'http://gangehi.com/',
    },
  },
  {
    hotelName: {
      name: 'Gili Lankanfushi Maldives',
      address: 'Lankanfushi Island, North Malé Atoll Republic of Maldives, Maldives',
      hotelURL: 'https://gili-lankanfushi.com/?utm_source=gmb&utm_medium=link&utm_campaign=gmb_hotel_listing',
    },
  },
  {
    hotelName: {
      name: 'Grand Park Kodhipparu',
      address: 'Kodhipparu, 08121, Maldives',
      hotelURL:
        'https://www.parkhotelgroup.com/north-male-atoll/grand-park-kodhipparu-maldives/?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=kodhipparu',
    },
  },
  {
    hotelName: {
      name: 'Hard Rock Hotel Maldives',
      address: 'Eh`mafushi South Malé Atoll, 00000, Maldives',
      hotelURL: 'https://www.hardrockhotels.com/maldives',
    },
  },
  {
    hotelName: {
      name: 'Heritance Aarah',
      address: 'Meedhoo, Maldives',
      hotelURL: 'https://www.heritancehotels.com/aarah',
    },
  },
  {
    hotelName: {
      name: 'Hideaway Beach Resort & Spa Maldives',
      address: 'Dhonakulhi Island, Maldives',
      hotelURL: 'http://www.hideawaybeachmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Hilton Maldives Amingiri Resort & Spa',
      address: 'Malé 08540, Maldives',
      hotelURL:
        'https://www.hilton.com/en/hotels/mleaihi-hilton-maldives-amingiri-resort-and-spa/?SEO_id=GMB-APAC-HI-MLEAIHI',
    },
  },
  {
    hotelName: {
      name: 'Hotel Riu Palace Maldivas',
      address: 'Gadifuri, Maldivas, Maldives',
      hotelURL:
        'https://www.riu.com/en/hotel/maldivas/dhaalu-atoll/hotel-riu-palace-maldivas/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=XMV',
    },
  },
  {
    hotelName: {
      name: 'Hurawalhi Island Resort',
      address: 'Hurawalhi Island, Lhaviyani Atoll 20187, Maldives',
      hotelURL: 'https://www.hurawalhi.com/',
    },
  },
  {
    hotelName: {
      name: 'Huvafen Fushi',
      address: 'Nakachchafushi North Malé Atoll, 08390, Maldives',
      hotelURL: 'https://www.huvafenfushi.com/',
    },
  },
  {
    hotelName: {
      name: 'Ifuru Island Maldives',
      address: 'Ifuru Island, Ifuru, Maldives',
      hotelURL: 'https://www.ifuruisland.com/',
    },
  },
  {
    hotelName: {
      name: 'InterContinental Maldives Maamunagau Resort, an IHG Hotel',
      address: 'Maamunagau Island, Raa Atoll 05060, Maldives',
      hotelURL:
        'https://www.ihg.com/intercontinental/hotels/us/en/maamunagau-island/mlemm/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-MV-_-MLEMM',
    },
  },
  {
    hotelName: {
      name: 'JA Manafaru Private Island',
      address: 'Manafaru Private Island Resort, Maldives',
      hotelURL:
        'https://www.jaresortshotels.com/maldives/ja-manafaru?utm_source=google-local&utm_medium=organic&utm_campaign=gmb',
    },
  },
  {
    hotelName: {
      name: 'JOALI Maldives',
      address: 'Muravandhoo Island, Maldives',
      hotelURL: 'https://www.joali.com/joali-maldives/',
    },
  },
  {
    hotelName: {
      name: 'JOALI BEING',
      address: 'Bodufushi Island, Maldives',
      hotelURL: 'https://www.joali.com/joali-being/',
    },
  },
  {
    hotelName: {
      name: 'Joy Island',
      address: 'Kassanfushi, Male 20026, Maldives',
      hotelURL: 'https://www.joyisland.com/',
    },
  },
  {
    hotelName: {
      name: 'Jumeirah Maldives Olhahali Island',
      address: 'Olhuhali, North Male Atoll Maldives',
      hotelURL:
        'https://www.jumeirah.com/en/stay/maldives/jumeirah-maldives?utm_source=google&utm_medium=google%20places&utm_campaign=hotel',
    },
  },
  {
    hotelName: {
      name: 'JW Marriott Maldives Resort & Spa',
      address: "Van'gaaru Island, Atoll 40880, Maldives",
      hotelURL: 'https://www.marriott.com/en-us/hotels/mlejs-jw-marriott-maldives-resort-and-spa/overview/',
    },
  },
  {
    hotelName: {
      name: 'Kagi Maldives Resort & Spa',
      address: 'Kagi Maldives Spa, Island, Maldives',
      hotelURL: 'https://kagimaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Kandima Maldives',
      address: 'Kandima 20066, Maldives',
      hotelURL: 'https://kandima.com/index.php/en?utm_source=google&utm_medium=gmb&utm_campaign=kandima-maldives',
    },
  },
  {
    hotelName: {
      name: 'Kandolhu Maldives',
      address: 'Kandolhudhoo, North Ari Atoll, Maldives',
      hotelURL: 'https://www.kandolhu.com/',
    },
  },
  {
    hotelName: {
      name: 'Kihaa Maldives',
      address: 'Kihaaddhufaru Island Male, Maldives',
      hotelURL: 'http://www.kihaamaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Kuda Villingili Resort Maldives',
      address: 'Viligilimathidhahuraa, Maldives',
      hotelURL: 'http://www.kudavillingili.com/',
    },
  },
  {
    hotelName: {
      name: 'Kudadoo Maldives Private Island',
      address: 'Kudadoo Island, Lhaviyani Atoll 07080, Maldives',
      hotelURL: 'http://www.kudadoo.com/',
    },
  },
  {
    hotelName: {
      name: 'Kudafushi Resort & Spa',
      address: 'Kudafushi Resort & SPA, Kudafushi 20081, Maldives',
      hotelURL: 'https://www.kudafushiresort.com/',
    },
  },
  {
    hotelName: {
      name: 'Kurumba Maldives ',
      address: 'Vihamanaafushi, North Male Atoll 08340, Maldives',
      hotelURL: 'https://www.kurumba.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
  },
  {
    hotelName: {
      name: 'Le Méridien Maldives Resort & Spa',
      address: 'Lhaviyani Atoll Thilamaafushi Island, 07040, Maldives',
      hotelURL:
        'https://www.marriott.com/en-us/hotels/mlemd-le-meridien-maldives-resort-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'Lily Beach Resort & Spa',
      address: 'Huvahendhoo Island, 00160, Maldives',
      hotelURL: 'https://www.lilybeachmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'LUX South Ari Atoll',
      address: 'South Atoll, Dhidhoofinolhu, Maldives',
      hotelURL: 'https://www.luxresorts.com/en/maldives/hotel/luxsouthariatoll',
    },
  },
  {
    hotelName: {
      name: 'Madifushi Private Island',
      address: 'Madifushi Private Island, 11020, Maldives',
      hotelURL: 'https://madifushiprivateisland.com/',
    },
  },
  {
    hotelName: {
      name: 'Milaidhoo Maldives',
      address: '',
      hotelURL: 'https://www.milaidhoo.com/',
    },
  },
  {
    hotelName: {
      name: 'Mirihi Island Resort',
      address: 'Mirihi Island Resort, Maldives',
      hotelURL: 'http://www.mirihi.com/',
    },
  },
  {
    hotelName: {
      name: 'Mövenpick Resort Kuredhivaru Maldives',
      address: 'Kuredhivaru Island, 20026, Maldives',
      hotelURL:
        'https://movenpick.accor.com/en/asia/maldives/kuredhivaru/resort-kuredhivaru.html?merchantid=seo-maps-MV-B4P5&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Kuredhivaru-Maldives&y_source=1_MTUzNjI4NjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Naladhu Private Island Maldives',
      address: 'Veligandu Huraa, South Male Atoll 20109, Maldives',
      hotelURL:
        'https://www.naladhu.com/?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Naladhu&utm_content=Home&utm_campaign=Google_GMB',
    },
  },
  {
    hotelName: {
      name: 'NH Collection Maldives Havodda Resort',
      address: '17100, Maldives',
      hotelURL:
        'https://world.nh-hotels.com/en/nh-collection-maldives-havodda?utm_source=GoogleMyBusiness&utm_medium=GMB&utm_term=Havodda&utm_content=Home&utm_campaign=Google_GMB',
    },
  },
  {
    hotelName: {
      name: 'Nika Island Resort & Spa',
      address: 'Nika Island Resort, Medhu-Uthuru Province, 20123, Maldives',
      hotelURL: 'http://www.nikaisland.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Niyama Private Islands Maldives',
      address: 'Olhuveli, Kudahuvadhoo Dhaalu Atoll, 13080, Maldives',
      hotelURL: 'https://www.niyama.com/en',
    },
  },
  {
    hotelName: {
      name: 'Noku Maldives',
      address: 'Kuda-Funafaru, Maldives',
      hotelURL: 'https://www.nokuhotels.com/maldives',
    },
  },
  {
    hotelName: {
      name: 'Nova Maldives',
      address: 'Kaneeru Villa 3rd Floor, Male, Maldives',
      hotelURL: 'https://nova-maldives.com/?utm_source=google&utm_medium=gmb&utm_campaign=novamaldives',
    },
  },
  {
    hotelName: {
      name: 'Oaga Art Resort Maldives',
      address: 'K.Maaranfushi, North, Maldives',
      hotelURL: 'http://oagaresorts.com/',
    },
  },
  {
    hotelName: {
      name: 'OBLU SELECT Lobigili',
      address: 'OBLU SELECT Lobigili, Malé, Maldives',
      hotelURL: 'https://coloursofoblu.com/oblu-select-lobigili',
    },
  },
  {
    hotelName: {
      name: 'Oblu Select Sangeli',
      address: 'OBLU SELECT Sangeli North Male, 20094, Maldives',
      hotelURL: 'https://www.oblu-sangeli.com/',
    },
  },
  {
    hotelName: {
      name: 'One&Only Reethi Rah',
      address: 'Reethi Rah, North Malé Atoll, Malé 08440, Maldives',
      hotelURL:
        'https://www.oneandonlyresorts.com/reethi-rah?utm_source=GMBlisting&utm_medium=organic&utm_campaign=oorr-reethi-rah-gmb',
    },
  },
  {
    hotelName: {
      name: 'Outrigger Konotta Maldives Resort',
      address: 'Dhevvadhoo, Maldives',
      hotelURL: 'https://www.outrigger.com/hotels-resorts/maldives/konotta-island/outrigger-konotta-maldives-resort',
    },
  },
  {
    hotelName: {
      name: 'Outrigger Maldives Maafushivaru',
      address: 'Maafushivaru, Atoll 00240, Maldives',
      hotelURL: 'http://www.maafushivaru.com/',
    },
  },
  {
    hotelName: {
      name: 'Ozen Life Maadhoo, South Male Atoll',
      address: 'Ozen Life Maadhoo, Maadhoo Island South Malé Atoll Maadhoo Island, 20094, Maldives',
      hotelURL:
        'https://theozencollection.com/ozenlife-maadhoo/?utm_source=google&utm_medium=organic&utm_campaign=ozenlifemaadhoo&utm_term=gbp',
    },
  },
  {
    hotelName: {
      name: 'Ozen Reserve Bolifushi, South Male Atoll',
      address: 'Bolifushi Island Kaafu Atoll, 20222, Maldives',
      hotelURL:
        'https://theozencollection.com/ozenreserve-bolifushi/?utm_source=google&utm_medium=organic&utm_campaign=ozenreservebolifushi&utm_term=gbp',
    },
  },
  {
    hotelName: {
      name: 'Patina Maldives',
      address: 'North Malé Atoll, 20026, Maldives',
      hotelURL: 'https://patinahotels.com/maldives-fari-islands/',
    },
  },
  {
    hotelName: {
      name: 'Park Hyatt Maldives Hadahaa',
      address: 'Gaafu Alifu Atoll, Hadahaa, North Huvadhoo 20054, Maldives',
      hotelURL:
        'https://www.hyatt.com/en-US/hotel/maldives/park-hyatt-maldives-hadahaa/mldph?src=corp_lclb_gmb_seo_mldph',
    },
  },
  {
    hotelName: {
      name: 'Pullman Maldives Resort',
      address: 'Maamutaa, Island 20219, Maldives',
      hotelURL:
        'https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9924&merchantid=seo-maps-MV-9924&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTUzNjE1ODMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'Radisson Blu Resort Maldives',
      address: 'Huruelhi Island Male, 20026, Maldives',
      hotelURL:
        'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-maldives?cid=a:se+b:gmb+c:apac+i:local+e:rdb+d:seap+h:MVHURRST',
    },
  },
  {
    hotelName: {
      name: 'Raffles Maldives Meradhoo Resort',
      address: 'Meradhoo Island, 17100, Maldives',
      hotelURL: 'https://www.raffles.com/maldives/',
    },
  },
  {
    hotelName: {
      name: 'Riu Palace Maldives',
      address: '',
      hotelURL:
        'https://www.riu.com/de/hotel/maldivas/dhaalu-atoll/hotel-riu-palace-maldivas/?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWO2GtkiZn7-lWuYsk_pxaJ4xHiOc9LLiI9xwIP2g7WYPIR3P68sYfthoCCI0QAvD_BwE&gclsrc=aw.ds',
    },
  },
  {
    hotelName: {
      name: 'Robinson Club Noonu',
      address: 'Orivaru Noonu Atoll Orivaru, 20293, Maldive',
      hotelURL:
        'https://www.robinson.com/de/de/cluburlaub/malediven/noonu/club-details/?utm_campaign=googlemybusiness&utm_medium=organic&utm_source=google',
    },
  },
  {
    hotelName: {
      name: 'Royal Island Resort & Spa',
      address: 'Horubadhoo, Maldives',
      hotelURL: 'https://www.villaresorts.com/royal-island/',
    },
  },
  {
    hotelName: {
      name: 'SAii Lagoon Maldives, Curio Collection by Hilton',
      address: 'Eh`mafushi South, Malé, Maldives',
      hotelURL: 'https://www.hilton.com/en/hotels/mlegsqq-saii-lagoon-maldives/?SEO_id=GMB-APAC-QQ-MLEGSQQ',
    },
  },
  {
    hotelName: {
      name: 'Seaside Finolhu Baa Atoll Maldives',
      address: 'Kanufushi Island, Hithaadhoo, Maldives',
      hotelURL: 'http://www.finolhu.com/',
    },
  },
  {
    hotelName: {
      name: 'Sheraton Maldives Full Moon Resort & Spa',
      address: 'Furanafushi Island North Malé Atol, 08240, Maldives',
      hotelURL:
        'https://www.marriott.com/en-us/hotels/mlesi-sheraton-maldives-full-moon-resort-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'Six Senses Kanuhura',
      address: 'Kanuhura, 07060, Maldives',
      hotelURL: 'https://www.sixsenses.com/en/resorts/kanuhura',
    },
  },
  {
    hotelName: {
      name: 'Six Senses Laamu',
      address: 'Laamu Atoll 15090, Maldives',
      hotelURL: 'https://www.sixsenses.com/en/resorts/laamu/',
    },
  },
  {
    hotelName: {
      name: 'Siyam World Maldives',
      address: 'Maadhoo, Dhigurah, 20066, Maldives',
      hotelURL: 'https://www.sunsiyam.com/siyam-world/',
    },
  },
  {
    hotelName: {
      name: 'SO/ Maldives',
      address: 'Malé, Maldives',
      hotelURL: 'https://all.accor.com/hotel/B986/index.en.shtml',
    },
  },
  {
    hotelName: {
      name: 'Soneva Fushi',
      address: 'Kunfunadhoo Island, Eydhafushi, Maldives',
      hotelURL: 'https://soneva.com/resorts/soneva-fushi/',
    },
  },
  {
    hotelName: {
      name: 'Soneva Jani',
      address: 'Medhufaru Island, Manadhoo, Maldives',
      hotelURL: 'https://soneva.com/resorts/soneva-jani/',
    },
  },
  {
    hotelName: {
      name: 'Sun Siyam Iru Fushi',
      address: 'Medhafushi, Maldives',
      hotelURL: 'https://www.sunsiyam.com/sun-siyam-iru-fushi/',
    },
  },
  {
    hotelName: {
      name: 'Sun Siyam Iru Veli',
      address: '',
      hotelURL: 'https://www.sunsiyam.com/sun-siyam-iru-veli/',
    },
  },
  {
    hotelName: {
      name: 'Sun Siyam Vilu Reef',
      address: 'Dh. Meedhuffushi, South Nilandhe Atoll 13100, Maldives',
      hotelURL: 'https://www.sunsiyam.com/sun-siyam-vilu-reef/',
    },
  },
  {
    hotelName: {
      name: 'Taj Coral Reef Resort & Spa',
      address: 'North Male, Atoll 20195, Maldives',
      hotelURL:
        'https://www.tajhotels.com/en-in/taj/taj-coral-reef-maldives/?utm_source=Google&utm_medium=Local&utm_campaign=taj-coral-reef-maldives',
    },
  },
  {
    hotelName: {
      name: 'Taj Exotica Resort & Spa',
      address: 'Emboodhu Finolhu, South Male Atoll 02117, Maldives',
      hotelURL:
        'https://www.tajhotels.com/en-in/taj/taj-exotica-maldives/?utm_source=Google&utm_medium=Local&utm_campaign=Taj-Exotica-Maldives',
    },
  },
  {
    hotelName: {
      name: 'The Nautilus Maldives',
      address: 'Thiladhoo, Baa atoll 20066, Maldives',
      hotelURL: 'https://www.thenautilusmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'The Residence Maldives at Dhigurah',
      address: 'Dhigurah, Maldives',
      hotelURL:
        'https://www.cenizaro.com/theresidence/maldives-dg?utm_source=google&utm_medium=organic&utm_campaign=dhigurah',
    },
  },
  {
    hotelName: {
      name: 'The Residence Maldives at Falhumaafushi',
      address: 'Falhumaafushi, Maldives',
      hotelURL:
        'https://www.cenizaro.com/theresidence/maldives-fm?utm_source=google&utm_medium=organic&utm_campaign=falhumaafushi',
    },
  },
  {
    hotelName: {
      name: 'The Ritz-Carlton Maldives, Fari Islands',
      address: 'Fari Islands North, Male 20013, Maldives',
      hotelURL:
        'https://www.ritzcarlton.com/en/hotels/mlera-the-ritz-carlton-maldives-fari-islands/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'The St. Regis Maldives Vommuli Resort',
      address: 'Vommuli Island Dhaalu Atoll, 13080, Maldives',
      hotelURL:
        'https://www.marriott.com/en-us/hotels/mlexr-the-st-regis-maldives-vommuli-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'The Standard, Huruvalhi Maldives',
      address: 'Huruvalhi Island, Maldives',
      hotelURL: 'https://www.standardhotels.com/maldives/properties/huruvalhi',
    },
  },
  {
    hotelName: {
      name: 'The Westin Maldives Miriandhoo Resort',
      address: 'Miriandhoo Island, 06060, Maldives',
      hotelURL:
        'https://www.marriott.com/en-us/hotels/mlewi-the-westin-maldives-miriandhoo-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'VARU by Atmosphere',
      address: 'Varu by Atmosphere Madivaru, 20050, Maldives',
      hotelURL: 'https://www.varu-atmosphere.com/',
    },
  },
  {
    hotelName: {
      name: 'Velaa Private Island Maldives',
      address: '',
      hotelURL: 'http://www.velaaprivateisland.com/',
    },
  },
  {
    hotelName: {
      name: 'Velassaru Maldives',
      address: '39 Orchid Magu, Malé 08350, Maldives',
      hotelURL: 'https://www.velassaru.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp',
    },
  },
  {
    hotelName: {
      name: 'Villa Nautica Maldives',
      address: 'Paradise Island Resort & Spa, Lankanfinolhu, Maldives',
      hotelURL: 'https://villaresorts.com/villa-nautica',
    },
  },
  {
    hotelName: {
      name: 'Villa Park Maldives',
      address: 'Nalaguraidhoo, Maldives',
      hotelURL: 'https://www.villaresorts.com/villa-park',
    },
  },
  {
    hotelName: {
      name: 'W Maldives',
      address: 'Fesdu Island North Ari Atoll, 09110, Maldives',
      hotelURL:
        'https://www.marriott.com/en-us/hotels/mlewh-w-maldives/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    },
  },
  {
    hotelName: {
      name: 'Waldorf Astoria Maldives Ithaafushi',
      address: 'Ithaafushi Island South Malé Atoll Male, 20009, Maldives',
      hotelURL:
        'https://www.hilton.com/en/hotels/mleonwa-waldorf-astoria-maldives-ithaafushi/?SEO_id=GMB-APAC-WA-MLEONWA',
    },
  },
  {
    hotelName: {
      name: 'You & Me Maldives',
      address: 'Uthurumaafaru, Ungoofaaru 05060, Maldives',
      hotelURL: 'http://www.youandmemaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Adaaran Club Rannalhi',
      address: 'Rannalhi Island, Kaafu Atoll, SOUTH MALE ATOLL South Male, Maldives',
      hotelURL: 'http://www.adaaran.com/clubrannalhi/',
    },
  },
  {
    hotelName: {
      name: 'Adaaran Select Hudhuran Fushi',
      address: 'North Male Atoll, Republic Of Maldives, North Male Atoll 20334, Maldives',
      hotelURL: 'http://www.adaaran.com/selecthudhuranfushi/',
    },
  },
  {
    hotelName: {
      name: 'Adaaran Select Meedhupparu',
      address: 'Meedhupaaru, 05160, Maldives',
      hotelURL: 'http://www.adaaran.com/selectmeedhupparu/',
    },
  },
  {
    hotelName: {
      name: 'Angaga Island Resort & Spa',
      address: 'Mandhoo, Maldives',
      hotelURL: 'https://angaga.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Bandos Maldives',
      address: 'North Male atoll, 08480, Maldives',
      hotelURL: 'https://bandosmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Canareef Resort Maldives',
      address: 'Addu City, Maldives',
      hotelURL: 'https://canareef.com/',
    },
  },
  {
    hotelName: {
      name: 'Centara Ras Fushi Resort',
      address: 'Male North Harbour, Boduthakurufaanu Magu, Maldives',
      hotelURL: 'http://www.centarahotelsresorts.com/centara/crf/',
    },
  },
  {
    hotelName: {
      name: 'Cinnamon Dhonveli Maldives',
      address: 'Dhonveli Island North Male Atoll, 20252, Maldives',
      hotelURL: 'https://www.cinnamonhotels.com/cinnamondhonvelimaldives',
    },
  },
  {
    hotelName: {
      name: 'Cinnamon Hakuraa Huraa Maldives',
      address: 'Meemu Atoll, Huraa 20252, Maldives',
      hotelURL: 'https://www.cinnamonhotels.com/cinnamonhakuraahuraamaldives',
    },
  },
  {
    hotelName: {
      name: 'Club Med Kani - Maldives',
      address: 'North male atoll Kani Kanifinolhu, 20000, Maldives',
      hotelURL: 'https://www.clubmed.ch/r/kani/y?locale=de-CH',
    },
  },
  {
    hotelName: {
      name: 'Dreamland Maldives',
      address: 'Dreamland Maldives Baa Atoll, 06080, Maldives',
      hotelURL: 'http://www.dreamland.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Drift Thelu Veliga Retreat',
      address: 'Thelu Veliga Island, South Ari Atoll, Maldives',
      hotelURL: 'http://www.driftretreat.com/',
    },
  },
  {
    hotelName: {
      name: 'Ellaidhoo Maldives by Cinnamon',
      address: 'Ellaidhoo Alifu Atoll, 20252, Maldives',
      hotelURL:
        'https://www.cinnamonhotels.com/ellaidhoomaldivescinnamon?utm_source=google&utm_medium=organic&utm_campaign=ellaidhoomaldivesbycinnamon&utm_term=gbp',
    },
  },
  {
    hotelName: {
      name: 'Embudu Village',
      address: 'Embudu Village South Male atoll, 20012, Maldives',
      hotelURL: 'https://www.embuduvillage.com/',
    },
  },
  {
    hotelName: {
      name: 'Eriyadu Island Resort ',
      address: "North Male' Atoll Kaafu Atoll, 08210, Maldives",
      hotelURL: 'https://www.eriyadumaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Fihalhohi Maldives',
      address: '',
      hotelURL: 'https://www.fihalhohimaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Filitheyo Island Resort',
      address: "1st Floor G.Neem Majeedhee Magu Male' 20119, Feeali, Maldives",
      hotelURL: 'https://filitheyoresort.com/',
    },
  },
  {
    hotelName: {
      name: 'Fiyavalhu Resort Maldives',
      address: 'Fiyavalhu Resort Maldives, Rahdhebai Magu, Mandhoo 00050, Maldives',
      hotelURL: 'http://www.fiyavalhumaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Holiday Inn Resort Kandooma Maldives',
      address: 'Kandooma Fushi, 08310, Maldives',
      hotelURL:
        'https://www.ihg.com/holidayinnresorts/hotels/us/en/south-male-atoll/mlekf/hoteldetail?cm_mmc=GoogleMaps-_-RS-_-MV-_-MLEKF',
    },
  },
  {
    hotelName: {
      name: 'Hotel Riu Atoll',
      address: 'Gadifuri-Maafushi Island, Maldives',
      hotelURL: 'https://www.riu.com/en/hotel/maldivas/dhaalu-atoll/hotel-riu-atoll/',
    },
  },
  {
    hotelName: {
      name: 'Hulhule Island Hotel',
      address: 'Airport Main Road Male City, 22000, Maldives',
      hotelURL: 'https://hih.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Innahura Maldives Resort',
      address: 'Innahura Lhaviyani Atoll, 75006, Maldives',
      hotelURL: 'https://www.innahura.com/',
    },
  },
  {
    hotelName: {
      name: 'Jawakara Islands Maldives ',
      address: 'Maabinhura Island, 20187, Maldives',
      hotelURL: 'https://jawakara.com/',
    },
  },
  {
    hotelName: {
      name: 'Jen Maldives Male',
      address: 'Ameer Ahmed Magu, Malé 20096, Maldives',
      hotelURL: 'https://www.shangri-la.com/en/hotels/jen/male/maldives/',
    },
  },
  {
    hotelName: {
      name: 'Kaani Beach Hotel',
      address: 'Aabaadhee Hingun Road, Maafushi, Maldives',
      hotelURL: 'http://www.kaanibeach.com/',
    },
  },
  {
    hotelName: {
      name: 'Kaani Palm Beach',
      address: 'Ziyaaraiy Magu Road, Maafushi 08090, Maldives',
      hotelURL: 'http://www.kaanipalm.com/',
    },
  },
  {
    hotelName: {
      name: 'Kaania Village & Spa',
      address: 'Mirihi Magu, Maafushi, Maldives',
      hotelURL: 'https://kaanitour.com/hotels/kaani-village-spa/',
    },
  },
  {
    hotelName: {
      name: 'Kiha Beach',
      address: 'Kiha Beach, Dharavandhoo 06060, Maldives',
      hotelURL: 'http://www.kihabeach.com/',
    },
  },
  {
    hotelName: {
      name: 'Komandoo Island Resort & Spa',
      address: 'Lhaviyani Atoll, Maldives Islands, Maldives',
      hotelURL: 'https://www.komandoo.com/',
    },
  },
  {
    hotelName: {
      name: 'Kuramathi Maldives',
      address: 'Kuramathi, Ari Atoll, Maldives',
      hotelURL: 'https://www.kuramathi.com/',
    },
  },
  {
    hotelName: {
      name: 'Kuredu Island Resort & Spa',
      address: 'Kuredu Island Resort & Spa, Maldives',
      hotelURL: 'https://www.kuredu.com/',
    },
  },
  {
    hotelName: {
      name: 'Maagiri Hotel',
      address: '20012 Malé, Boduthakurufaanu Magu, Malé, Maldives',
      hotelURL: 'https://maagirihotel.com/',
    },
  },
  {
    hotelName: {
      name: 'Makunudu Island',
      address: '',
      hotelURL: 'http://www.makunudu.com/',
    },
  },
  {
    hotelName: {
      name: 'Malahini Kuda Bandos Resort',
      address: '',
      hotelURL: 'http://www.malahini.mv/',
    },
  },
  {
    hotelName: {
      name: 'Medhufushi Island Resort',
      address: 'Medhufushi, 20188, Maldives',
      hotelURL: 'https://medhufushiisland.com/',
    },
  },
  {
    hotelName: {
      name: 'Meeru Maldives Resort Island',
      address: 'Meerufenfushi Island North, Maldives',
      hotelURL: 'https://www.meeru.com/',
    },
  },
  {
    hotelName: {
      name: 'Mercure Maldives Kooddoo Resort',
      address: 'Kooddoo Island, 20219, Maldives',
      hotelURL:
        'https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9923&merchantid=seo-maps-MV-9923&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTUzNjE1ODItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    },
  },
  {
    hotelName: {
      name: 'NAKAI Dhiggiri Resort',
      address: 'Fulidhoo, Maldives•+960 670-0593',
      hotelURL: 'https://dhiggiri.nakairesorts.com/en/',
    },
  },
  {
    hotelName: {
      name: 'Nooe Maldives Kunaavashi',
      address: 'Vaavu Kunaavashi Island, NOOE Maldives Kunaavashi, 10010, Maldives',
      hotelURL: 'https://nooe.com/nooe-maldives-kunaavashi/',
    },
  },
  {
    hotelName: {
      name: 'OBLU NATURE Helengeli by SENTIDO',
      address: 'OBLU NATURE Helengeli, Helengeli 08280, Maldives',
      hotelURL: 'https://coloursofoblu.com/oblu-nature-helengeli',
    },
  },
  {
    hotelName: {
      name: 'OBLU XPERIENCE Ailafushi',
      address: 'North Male Ailafushi Maldives, Malé, Maldives',
      hotelURL: 'https://coloursofoblu.com/oblu-xperience-ailafushi',
    },
  },
  {
    hotelName: {
      name: 'Pearl Sands of Maldives',
      address: 'K. Huraa, Kaafu 08050, Maldives',
      hotelURL: 'https://psh.mv/',
    },
  },
  {
    hotelName: {
      name: 'Rahaa Resort Maldives',
      address: 'Rahaa Resort Laamu Atoll, 15062, Maldives',
      hotelURL: 'http://rahaaresort.com/',
    },
  },
  {
    hotelName: {
      name: 'Reethi Beach Resort Maldives',
      address: 'Fonimagoodhoo, Maldives',
      hotelURL: 'http://www.reethibeach.com/',
    },
  },
  {
    hotelName: {
      name: 'Reethi Faru Resort',
      address: 'Filaidhoo, Maldives',
      hotelURL: 'http://www.reethifaru.com/',
    },
  },
  {
    hotelName: {
      name: 'Rihiveli Maldives Resort',
      address: 'Mahaanaelhihuraa Rihiveli Maldives, Maldives',
      hotelURL: 'http://www.rihiveliresort.com/',
    },
  },
  {
    hotelName: {
      name: 'Riu Atoll Hotel',
      address: 'Gadifuri-Maafushi Island, Maldives',
      hotelURL: 'https://www.riu.com/de/hotel/maldivas/dhaalu-atoll/hotel-riu-atoll/',
    },
  },
  {
    hotelName: {
      name: 'Robinson Maldives',
      address: 'Funamadua, Kaadedhdhoo, Maldives',
      hotelURL: 'https://www.robinson.com/de/de/cluburlaub/malediven/maldives/club-details/',
    },
  },
  {
    hotelName: {
      name: 'Safari Island Resort',
      address: 'Mushimas Migili Alif Alif Mushimas Migili, 20119, Maldives',
      hotelURL: 'https://safariisland.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Sandies Bathla ',
      address: 'Bathalaa, Maldives',
      hotelURL: 'https://bathalamaldives.sandies-resorts.com/',
    },
  },
  {
    hotelName: {
      name: 'Season Paradise',
      address: 'Aria, Thundee Magu, Thulusdhoo 08040, Maldives',
      hotelURL: 'http://seasonparadise.mv/',
    },
  },
  {
    hotelName: {
      name: 'South Palm Resort',
      address: 'Ismehela Hera, Addu City, Maldives',
      hotelURL: 'http://www.southpalmresort.com/',
    },
  },
  {
    hotelName: {
      name: 'Summer Island Maldives',
      address: 'North Male Atoll, 20012, Maldives',
      hotelURL: 'https://www.summerislandmaldives.com/',
    },
  },
  {
    hotelName: {
      name: 'Sun Siyam Olhuveli',
      address: 'South Male Atoll, Olhuveli Male, 08400, Maldives',
      hotelURL: 'https://www.sunsiyam.com/sun-siyam-olhuveli/',
    },
  },
  {
    hotelName: {
      name: 'The Barefoot Eco Hotel',
      address: 'Hanimaadhoo, Maldives',
      hotelURL: 'http://www.thebarefoot.com/',
    },
  },
  {
    hotelName: {
      name: 'Thulhagiri Island Resort',
      address: 'Thulhaagiri North, Himmafushi, Maldives',
      hotelURL: 'http://www.thulhagiri.com.mv/',
    },
  },
  {
    hotelName: {
      name: 'Unima Grand',
      address: 'Roashanee Magu, Malé 20002, Maldives',
      hotelURL: 'https://unimagrand.com/',
    },
  },
  {
    hotelName: {
      name: 'Velana Beach Hotel Maldives',
      address: 'Miskiy Magu Road, Maafushi 08090, Maldives',
      hotelURL: 'http://visitvelana.com/',
    },
  },
  {
    hotelName: {
      name: 'Vilamendhoo Island Resort & Spa',
      address: 'Vilamendhoo Island, Maldives',
      hotelURL: 'https://www.vilamendhoo.com/',
    },
  },
];

module.exports = hotels;
