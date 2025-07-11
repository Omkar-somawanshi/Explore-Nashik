const dummySpots = [
  {
    id: "1",
    name: "Trimbakeshwar Temple",
    category: "Religious",
    location: "Trimbak",
    latitude: 19.939142,
    longitude: 73.536819,
    image: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-trimbakeshwar-nashik-maharashtra-attr-hero?qlt=82&ts=1726669890287",
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/28/97fc24ac4f64a27452860115788d6037_1000x1000.jpg",
      "https://map.sahapedia.org/admin/assets/images/202205191646364Tryambakeshvara1_DK.jpg?__imr__=bannerArticle",
    ],
    videoUrl: "https://youtu.be/mn2tD2p-D1s?si=TtDTd1VJl3FYFr2U",
    description:
      "One of the twelve Jyotirlingas of Lord Shiva. A major religious site surrounded by the Brahmagiri Hills.",
    mapLink: "https://goo.gl/maps/123TrimbakLink",
    rating: 4.8,
    history: `The Trimbakeshwar Temple is an ancient Hindu temple, believed to have been constructed by Peshwa Balaji Baji Rao in the 18th century. It is dedicated to Lord Shiva and is one of the twelve Jyotirlinga shrines, where Lord Shiva is worshipped in the form of a Jyotirlingam or 'lingam of light'. The uniqueness of the Lingam here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra (Shiva). The temple is also significant as it is near the origin of the Godavari River, India's second-longest river.`,
    bestTime: `The best time to visit Trimbakeshwar Temple is during the winter months (October to March) when the weather is pleasant and ideal for sightseeing and pilgrimages. Shivaratri and the Simhastha Kumbh Mela (held every 12 years) are peak times for devotees. Avoid the monsoon season (June-September) if you prefer less rain, but the surrounding hills are lush and green during this period.`,
    localTips: `Dress modestly as it's a religious site. Be prepared for crowds, especially during festivals. Consider hiring a local guide for deeper insights. Footwear needs to be removed before entering the temple. Photography inside the sanctum is generally restricted.`,
    nearbyAttractionsIds: ["4", "8"], // Anjneri Hill, Saptashrungi Temple (nearby by location/category)
  },
  {
    id: "2",
    name: "Sula Vineyards",
    category: "Nature",
    location: "Gangapur Road",
    latitude: 20.0053,
    longitude: 73.6884,
    image: [
      "https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-07-29T02%3A31%3A31.382Zaa.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=g0jwF7HzLDoHxWZuIlQFtvraYxpqMWPi8daNFUBKFWSr4tJWZ8auNhP2%2FsOPsBoo2YMQCAHkWndgLVQe6KzR8upHjnFye9sKKauSq2mXyhuxmJ6hF5fHh2Hs%2BFO7QUzD0TBJXbRLshAulLQp4iZsg6OtCginPE3OfrX08UjKwae3%2FjRORVlc3tOel3R%2FtANkP%2FmT4XlVgKQSMr1IeDwxUBWEg3uNhxzFRuUBVIuEuxF9Iww2voQBpbVu5gpWhP9FzIB57RbPep7REGaIQ%2F%2Bdj1ogIfFMoDlLBCNEXfnkFWcW4QjlU2wnf%2F9ZG2rz68qOdR08Dv%2F7M4SABawQHdlWQ%3D%3D",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3f/8e/3d/a-view-from-the-vineyards.jpg?w=1200&h=700&s=1",
      "https://www.sommelierindia.com/wp-content/uploads/2021/08/sula_most_visited-678x381.jpg",
    ],
    videoUrl: "https://youtu.be/ockuAAMLq8A?si=Piopg2V5X-XqGQxU",
    description:
      "India’s leading vineyard and wine-tasting destination with stunning views and winery tours.",
    mapLink: "https://goo.gl/maps/456SulaLink",
    rating: 4.5,
    history: `Sula Vineyards was founded in 1999 by Rajeev Samant, who returned to India after working in Silicon Valley. Inspired by a visit to his family's land in Nashik and recognizing the region's suitability for grape cultivation, he decided to venture into winemaking. Sula launched its first wines in 2000 and quickly gained recognition for its pioneering efforts and quality. It played a crucial role in putting Indian wine on the global map and fostering a wine culture in the country. Over the years, Sula has expanded its operations, introduced new varietals, and established itself as the market leader.`,
    bestTime: `The best time to visit Sula Vineyards is during the harvesting season, which runs from January to March. During this period, you can participate in grape stomping, witness the wine-making process firsthand, and enjoy the pleasant weather. The Nashik Wine Festival (Sulafest) usually happens in February. Avoid visiting during the monsoon (June-September) due to heavy rains, although the lush greenery can be appealing.`,
    localTips: `Book wine tours and tastings in advance, especially on weekends. Try the gourmet restaurants on-site. Don't forget to visit the gift shop for Sula merchandise. Consider staying at the resort for a full experience.`,
    nearbyAttractionsIds: ["9"], // Grape County Resort (nearby by location/category)
  },
  {
    id: "3",
    name: "Pandav Leni Caves",
    category: "Historical",
    location: "Mumbai-Agra Road",
    latitude: 19.9412,
    longitude: 73.7486,
    image: [
      "https://revolvingcompass.com/wp/wp-content/uploads/2024/03/Pandavleni_11-1.jpg",
      "https://media.assettype.com/esakal%2F2024-04%2F671c35e1-6eca-4b16-974b-a07243c0a80d%2Frushi__57_.jpg",
      "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Pandav-Leni-Caves-Cover-Image-840x425.jpg",
    ],
    videoUrl: "https://youtu.be/XiOq8_qi5uY?si=YwMelokzjmGZet6P",
    description:
      "Ancient Buddhist caves carved into rock, offering beautiful sculptures and a view of the city.",
    mapLink: "https://goo.gl/maps/789PandavLink",
    rating: 4.6,
    history: `The Pandav Leni Caves are a group of 24 ancient rock-cut Buddhist caves dating back to the 1st century BCE to the 3rd century CE. They showcase exquisite carvings, sculptures, and inscriptions, providing insights into the Hinayana Buddhist period. These caves served as monasteries and prayer halls for Buddhist monks. The name "Pandav Leni" is a local misnomer, as they have no connection to the Mahabharata's Pandavas.`,
    bestTime: `The ideal time to visit Pandav Leni Caves is during the post-monsoon and winter months (October to March). The weather is pleasant for exploring the caves and the surrounding area. The lush greenery after the monsoon adds to the scenic beauty.`,
    localTips: `Wear comfortable shoes as there's a bit of a climb. Carry water. Best to visit in the morning or late afternoon to avoid the midday sun.`,
    nearbyAttractionsIds: [], // Add relevant IDs if any
  },
  {
    id: "4",
    name: "Anjneri Hill",
    category: "Adventure",
    location: "Trimbakeshwar Road",
    latitude: 19.916667,
    longitude: 73.566667,
    image: [
      "https://static.toiimg.com/thumb/112990339/Anjaneri-Waterfall-in-Nashik.jpg?width=1200&height=900",
      "https://bookmetickets.com/static/falcon/img/stock/page/kritikaraina/259223_Anjaneri-fort-trek-stairs-to-final-climb-Indiahikes-Yugant-Gurav.jpg",
      "https://resources.thomascook.in/images/holidays/sightSeeing/bannerimg.jpg",
    ],
    videoUrl: "https://youtu.be/UDnUE6X6Qbo?si=bMhTHZfy09WFxW5o",
    description:
      "Believed to be the birthplace of Lord Hanuman, Anjneri is a popular trekking spot with scenic views.",
    mapLink: "https://goo.gl/maps/anjneriLink",
    rating: 4.4,
    history: `Anjneri Hill is revered as the birthplace of Lord Hanuman, a central figure in the Hindu epic Ramayana. The hill features an ancient fort and a temple dedicated to Anjani, Lord Hanuman's mother. The fort has historical significance, though its exact origins are debated. It has been a strategic point due to its elevation and offers panoramic views of the surrounding landscape.`,
    bestTime: `The best time for trekking and visiting Anjneri Hill is during the post-monsoon (September to November) and winter (December to February) months. The weather is cool and comfortable, and the landscape is vibrant green. Avoid the peak monsoon season due to slippery trails and heavy rains.`,
    localTips: `Carry sufficient water and snacks for the trek. Wear sturdy trekking shoes. Start early in the morning to beat the heat and enjoy the sunrise. Be mindful of monkeys near the temple.`,
    nearbyAttractionsIds: ["1"], // Trimbakeshwar Temple
  },
  {
    id: "6",
    name: "Dudhsagar Falls",
    category: "Adventure",
    location: "Saptashrungi", // Assuming this is the Nashik Dudhsagar Falls, not the Goa one
    latitude: 15.31277,
    longitude: 74.31416,
    image: [
      "https://www.maharashtratourism.net/images/water-falls/dudhsagar-waterfall-nashik.jpg",
      "https://www.trawell.in/admin/images/upload/122546792DudhsagarFalls_Main.jpg",
      "https://www.holidify.com/images/cmsuploads/compressed/800px-Dudhsagar_falls_in_Nashik_20190203161203.jpg",
    ],
    videoUrl: "https://youtu.be/xyzDudhsagarNashik",
    description:
      "A lesser-known but stunning waterfall near Nashik, best visited during monsoon.",
    mapLink: "https://goo.gl/maps/dudhsagarNashik",
    rating: 4.3,
    history: `While the famous Dudhsagar Falls is in Goa, Nashik also has its own Dudhsagar Falls, located near Saptashrungi. This lesser-known waterfall is a natural formation, fed by seasonal rains. Its history is primarily geological and related to the region's natural water flow, rather than ancient human construction. It serves as a beautiful natural attraction, especially during the rainy season.`,
    bestTime: `Dudhsagar Falls in Nashik is a seasonal waterfall and is at its majestic best during the monsoon season (July to September). The heavy rainfall makes the falls gush with milky white water, living up to its name ("Sea of Milk"). Visiting outside of monsoon might result in a dry or significantly reduced flow.`,
    localTips: `Visit only during monsoon for the best experience. Be cautious of slippery rocks and strong currents. It's advisable to go with a local who knows the terrain.`,
    nearbyAttractionsIds: ["8"], // Saptashrungi Temple
  },
  {
    id: "7",
    name: "Coin Museum",
    category: "Historical",
    location: "Nashik Road",
    latitude: 19.957703,
    longitude: 73.610941,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsse_Oabh6XXHJNdMbHpb6E9iAldpGGsgqVw&s",
      "https://s7ap1.scene7.com/is/image/incredibleindia/coin-museum-nashik-maharashtra-1-attr-hero?qlt=82&ts=1726669993240",
      "https://www.trawell.in/admin/images/upload/130704205Nashik_Coin_Museum_Main.jpg",
    ],
    videoUrl: "https://youtu.be/abcCoinMuseum",
    description:
      "A unique museum showcasing rare coins from ancient and medieval India.",
    mapLink: "https://goo.gl/maps/coinMuseumNashik",
    rating: 4.0,
    history: `The Indian Institute of Research in Numismatic Studies (IIRNS) established the Coin Museum in Nashik in 1980. It is the only museum of its kind in Asia dedicated to numismatics (the study or collection of coins, paper money, and medals). The museum houses a vast collection of coins, artifacts, and historical documents, tracing the history of Indian coinage from ancient times to the present day.`,
    bestTime: `The Coin Museum can be visited year-round. However, the most comfortable time is during the winter months (October to March) when the weather is pleasant for general sightseeing in Nashik. It's an indoor attraction, so it's also a good option during the monsoon or hot summer days. Check their operating hours before visiting.`,
    localTips: `Allocate at least 1-2 hours for a thorough visit. Photography might be restricted in some areas. Best combined with a visit to nearby local markets.`,
    nearbyAttractionsIds: [], // Add relevant IDs if any
  },
  {
    id: "8",
    name: "Saptashrungi Temple",
    category: "Religious",
    location: "Vani",
    latitude: 20.390278,
    longitude: 73.908611,
    image: [
      "https://c8.alamy.com/comp/CE6CB9/goddess-saptashrungi-devi-temple-on-mountain-vani-nasik-maharashtra-CE6CB9.jpg",
      "https://content.jdmagicbox.com/comp/nashik/b4/0253px253.x253.181204074305.i1b4/catalogue/vani-saptashrungi-devi-temple-nashik-bpt45et48q.jpg",
      "https://static.toiimg.com/thumb/msid-104483230,width-1280,height-720,imgsize-639388,resizemode-72,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    ],
    videoUrl: "https://youtu.be/defSaptashrungi",
    description:
      "One of the 51 Shakti Peethas, this hilltop temple offers breathtaking views.",
    mapLink: "https://goo.gl/maps/saptashrungi",
    rating: 4.5,
    history: `Saptashrungi Devi Temple is one of the 51 Shakti Peethas, significant pilgrimage sites in Shaktism. Legend has it that a part of Sati's body fell here. The temple is nestled on a hill with seven peaks (Sapta means seven, Shrung means peak), giving it its name. It's an ancient site, and the idol of the goddess is believed to be self-manifested. The temple has been a center of worship for centuries, attracting devotees from all over India.`,
    bestTime: `The best time to visit Saptashrungi Temple is during the winter months (October to March) when the weather is cool and pleasant for the climb or ropeway ride. Navratri is a particularly auspicious time, attracting a large number of devotees, though it can be very crowded. Avoid the peak monsoon season if you prefer to avoid heavy rains, although the surrounding hills are very green.`,
    localTips: `Consider using the ropeway for convenience. Dress modestly. Be prepared for a walk or climb, even with the ropeway. Weekends and festival days can be very crowded.`,
    nearbyAttractionsIds: ["6"], // Dudhsagar Falls (Nashik)
  },
  {
    id: "9",
    name: "Grape County Resort",
    category: "Nature",
    location: "Gangapur",
    latitude: 20.0053,
    longitude: 73.6884,
    image: [
      "https://grapecounty.in/wp-content/uploads/2025/03/LuxeRetreat.jpg",
      "https://cdn0.weddingwire.in/vendor/7361/3_2/960/jpg/grape-county-28_15_247361-1566543610.jpeg",
      "https://grapecounty.in/wp-content/uploads/2025/04/Grape-County-eco-resort-home-swimming-pool.jpg",
    ],
    videoUrl: "https://youtu.be/mnoGrapeCounty",
    description:
      "A serene vineyard resort offering wine tours, spa treatments, and lakeside stays.",
    mapLink: "https://goo.gl/maps/grapeCounty",
    rating: 4.7,
    history: `Grape County Resort is a relatively modern eco-resort developed in response to Nashik's growing popularity as a wine and tourism destination. It was conceived to offer a luxurious and sustainable retreat amidst nature, providing an alternative to traditional hotel stays. Its design integrates with the natural landscape, emphasizing eco-friendly practices and offering a blend of modern amenities with a rustic charm.`,
    bestTime: `Grape County Resort is a year-round destination. However, the most pleasant time to visit is during the winter months (October to March) when the weather is cool and ideal for outdoor activities, vineyard tours, and enjoying the resort's facilities. The monsoon season (June-September) also offers a unique charm with lush green surroundings, though outdoor activities might be limited by rain.`,
    localTips: `Book well in advance, especially during peak season. Explore their eco-friendly initiatives. Enjoy the peaceful lakeside views. Consider their spa services for relaxation.`,
    nearbyAttractionsIds: ["2"], // Sula Vineyards
  },
  {
    id: "10",
    name: "Nashik Kumbh Mela Ground",
    category: "Cultural",
    location: "Godavari River",
    latitude: 20.003805,
    longitude: 73.760559,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B0dZTr2D_H8pzZl_0GPsRZ4FBkvUKGD3uw&s",
      "https://www.prasthanamindia.com/wp-content/uploads/2025/01/kumbh-mela-nashik_650x400_61436983307.webp",
      "https://map.sahapedia.org/admin/assets/images/20220562128499Goda_ghat_nasik.jpg",
    ],
    videoUrl: "https://youtu.be/pqrKumbhMela",
    description:
      "The sacred site where the Kumbh Mela is held every 12 years, attracting millions.",
    mapLink: "https://goo.gl/maps/kumbhMelaNashik",
    rating: 4.9,
    history: `The Kumbh Mela is one of the largest peaceful gatherings in the world, a Hindu pilgrimage held every 12 years at four different locations, one of which is Nashik (on the banks of the Godavari River). The tradition dates back thousands of years, rooted in Hindu mythology about the Samudra Manthan (churning of the cosmic ocean) and the drops of Amrita (nectar of immortality) falling on these four sites. Nashik's Kumbh Mela is specifically known as the Simhastha Kumbh Mela.`,
    bestTime: `The Nashik Kumbh Mela occurs once every 12 years, typically in the Hindu month of Simha (July-August). The next major Kumbh Mela in Nashik is expected in 2027. If you wish to experience this grand spiritual event, you must plan your visit during the specific dates of the Mela. Otherwise, the Godavari River banks and ghats are accessible year-round for regular prayers and rituals.`,
    localTips: `If visiting during Kumbh Mela, expect massive crowds and plan logistics well in advance. For regular visits, the Godavari Ghats are beautiful at sunrise and sunset. Be respectful of religious practices.`,
    nearbyAttractionsIds: ["7", "11"], // Coin Museum, Nashik Street Food Tour
  },
  {
    id: "11",
    name: "Nashik Street Food Tour",
    category: "Food & Drink",
    location: "Old Nashik",
    latitude: 20.003805,
    longitude: 73.760559,
    image: [
      "https://content.jdmagicbox.com/comp/nashik/w2/0253px253.x253.191115202532.t7w2/catalogue/shree-krushna-vada-pav-nashik-road-nashik-street-food-qcrcim67dc.jpg",
      "https://www.treebo.com/blog/wp-content/uploads/2018/07/feature-22.jpg",
      "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/untitled-11600937987884.jpg",
    ],
    videoUrl: "https://youtu.be/stuStreetFood",
    description:
      "Explore Nashik’s famous Misal Pav, Vada Pav, and Khandeshi cuisine.",
    mapLink: "https://goo.gl/maps/nashikFoodTour",
    rating: 4.8,
    history: `Nashik's street food culture has evolved over centuries, influenced by its agricultural bounty, diverse communities, and status as a pilgrimage and trade center. Dishes like Misal Pav have become iconic, rooted in local ingredients and culinary traditions. The street food scene reflects the city's vibrant daily life and its fusion of Maharashtrian flavors with influences from other regions.`,
    bestTime: `A street food tour in Nashik can be enjoyed year-round. However, the cooler months from October to March are most comfortable for walking and exploring the food stalls. Evenings are generally the best time for street food, as stalls are fully operational and the atmosphere is lively.`,
    localTips: `Must try Misal Pav, Vada Pav, and local sweets. Don't be afraid to try different stalls. Carry cash. Be open to spicy flavors.`,
    nearbyAttractionsIds: ["10"], // Nashik Kumbh Mela Ground
  },
  {
    id: "12",
    name: "Nandur Madhmeshwar Bird Sanctuary",
    category: "Nature",
    location: "Niphad",
    latitude: 19.9833,
    longitude: 74.0305,
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/9d/60/5e/birds-resting-on-island.jpg?w=900&h=500&s=1",
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/01/21/540894-rare-birds.jpg",
      "https://thatsinindia.com/wp-content/uploads/2024/08/Nandur-Madhmeshwar-Bird.webp",
    ],
    videoUrl: "https://youtu.be/vwxBirdSanctuary",
    description:
      "A paradise for birdwatchers with migratory birds like flamingos and pelicans.",
    mapLink: "https://goo.gl/maps/nandurBirds",
    rating: 4.4,
    history: `Nandur Madhmeshwar Bird Sanctuary was established around the Nandur Madhmeshwar Dam, built on the Godavari River in the early 20th century. The reservoir created by the dam, along with its surrounding wetlands, developed into a crucial habitat for various bird species, especially migratory ones. It was declared a bird sanctuary in 1986 and later recognized as a Ramsar site (wetland of international importance) in 2019, highlighting its ecological significance.`,
    bestTime: `The best time to visit Nandur Madhmeshwar Bird Sanctuary for birdwatching is from October to March. During these winter months, a large number of migratory birds from various parts of the world flock to the sanctuary, making it a vibrant spectacle. Early mornings are ideal for spotting birds.`,
    localTips: `Carry binoculars and a camera with a good zoom lens. Wear muted colors to avoid disturbing birds. Maintain silence. Best to hire a local guide for spotting rare species.`,
    nearbyAttractionsIds: [], // Add relevant IDs if any
  },
  {
    id: "15",
    name: "Someshwar Waterfall",
    category: "Nature",
    location: "Someshwar",
    latitude: 19.9882,
    longitude: 73.7667,
    image: [
      "https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-08-01T15%3A31%3A59.010ZSomeshwar-Waterfalls3.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=I%2FFfSL1RB1WNadfNsfnKt1JarB8IGMpM8jwRpRXjZRhl18qG%2F7xNo739XWa9%2FU%2Bv8NoGZ1GM0Pr4AfCqtb8Jrb91YdPrF%2FZwJj%2BdLLOBwADQbe9DlEVT4zTZINpUbBURQBli%2BFr5dA7TCuUdugFaIBbLBJqJXeoApfPc2px%2F5W3I2lFD4gDt8Bl9D1wNJEOM1VWKm%2FcxVT2%2FiFCaOb4zu8ImIhSyCMTSsCz0VFDMsrKKjcjH2MeiQDca5cEzb1TccfFJCWnG%2FRQTB77NW0%2Fxa8HqUoNpifEJXEa1%2BsqjdvjFhDJ7t0q3OPhSymIRcIr3%2F%2F2TooagalUMn8PmTA7WhQ%3D%3D",
      "https://cdn-ildbjfd.nitrocdn.com/vVCNYhmdUcYijOaDMpkUIexKnrKJBWpA/assets/images/optimized/rev-ea23e7d/i0.wp.com/theunstumbled.com/wp-content/uploads/2025/05/aafeb3a08746f36451794ec156842a19.someshwar-water-fall.jpg",
      "https://visitplacesindia.com/wp-content/uploads/2025/02/someshwar-waterfall-nashik.jpg",
    ],
    videoUrl: "https://youtu.be/yzaSomeshwarFalls",
    description:
      "A scenic waterfall surrounded by lush greenery, ideal for picnics.",
    mapLink: "https://goo.gl/maps/someshwarFalls",
    rating: 4.3,
    history: `Someshwar Waterfall is a natural cascade formed by the Darna River, a tributary of the Godavari. Its history is primarily geological, shaped by the flow of water over rock formations. While not associated with ancient historical events or constructions, it has long been a popular local spot for recreation and enjoying nature, especially during the monsoon season when it's in full flow.`,
    bestTime: `Someshwar Waterfall is best visited during the monsoon season (July to September) when the waterfall is at its fullest and most spectacular. The surrounding area is also lush and green during this time, making it ideal for nature lovers and picnics. During other seasons, the waterfall might have reduced flow or be completely dry.`,
    localTips: `Wear waterproof footwear during monsoon. Be careful on slippery paths. It's a great spot for photography, especially after heavy rains.`,
    nearbyAttractionsIds: [], // Add relevant IDs if any
  },
];

export default dummySpots;