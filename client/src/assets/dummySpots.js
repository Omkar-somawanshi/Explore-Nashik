const dummySpots = [
  {
    id: "1",
    name: "Trimbakeshwar Temple",
    category: "Religious",
    location: "Trimbak",
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
  },
  {
    id: "2",
    name: "Sula Vineyards",
    category: "Nature",
    location: "Gangapur Road",
    image: [
      "https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-07-29T02%3A31%3A31.382Zaa.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=g0jwF7HzLDoHxWZuIlQFtvraYxpqMWPi8daNFUBKFWSr4tJWZ8auNhP2%2FsOPsBoo2YMQCAHkWndgLVQe6KzR8upHjnFye9sKKauSq2mXyhuxmJ6hF5fHh2Hs%2BFO7QUzD0TBJXbRLshAulLQp4iZsg6OtCginPE3OfrX08UjKwae3%2FjRORVlc3tOel3R%2FtANkP%2FmT4XlVgKQSMrv1IeDwxUBWEg3uNhxzFRuUBVIeEuxF9Iww2voQBpbVu5gpWhP9FzIB57RbPep7REGaIQ%2F%2Bdj1ogIfFMoDlLBCNEXfnkFWcW4QjlU2wnf%2F9ZG2rz68qOdR08Dv%2F7M4SABawQHdlWQ%3D%3D",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3f/8e/3d/a-view-from-the-vineyards.jpg?w=1200&h=700&s=1",
      "https://www.sommelierindia.com/wp-content/uploads/2021/08/sula_most_visited-678x381.jpg",
    ],
    videoUrl: "https://youtu.be/ockuAAMLq8A?si=Piopg2V5X-XqGQxU",

    description:
      "India’s leading vineyard and wine-tasting destination with stunning views and winery tours.",
    mapLink: "https://goo.gl/maps/456SulaLink",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Pandav Leni Caves",
    category: "Historical",
    location: "Mumbai-Agra Road",
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
  },
  {
    id: "4",
    name: "Anjneri Hill",
    category: "Adventure",
    location: "Trimbakeshwar Road",
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
  },
 
  {
    id: "6",
    name: "Dudhsagar Falls",
    category: "Adventure",
    

    location: "Saptashrungi",
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
  },
  {
    id: "7",
    name: "Coin Museum",
    category: "Historical",
    location: "Nashik Road",
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
  },
  {
    id: "8",
    name: "Saptashrungi Temple",
    category: "Religious",
    location: "Vani",
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
  },
 
 
  {
    id: "9",
    name: "Grape County Resort",
    category: "Nature",
    location: "Gangapur",
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
  },
  {
    id: "10",
    name: "Nashik Kumbh Mela Ground",
    category: "Cultural",
    location: "Godavari River",
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
  },
  {
    id: "11",
    name: "Nashik Street Food Tour",
    category: "Food & Drink",
    location: "Old Nashik",
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
  },
  {
    id: "12",
    name: "Nandur Madhmeshwar Bird Sanctuary",
    category: "Nature",
    location: "Niphad",
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
  },
  {
    id: "15",
    name: "Someshwar Waterfall",
    category: "Nature",
    location: "Someshwar",
    image: [
      "https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-08-01T15%3A31%3A59.010ZSomeshwar-Waterfalls3.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=I%2FFfSL1RB1WNadfNsfnKt1JarB8IGMpM8jwRpRXjZRhl18qG%2F7xNo739XWa9%2FU%2Bv8NoGZ1GM0Pr4AfCqtb8Jrb91YdPrF%2FZwJj%2BdLLOBwADQbe9DlEVT4zTZINpUbBURQBli%2BFr5dA7TCuUdugFaIBbLBJqJXeoApfPc2px%2F5W3I2lFD4gDt8Bl9D1wNJEOM1VWKm%2FcxVT2%2FiFCaOb4zu9ImIhSyCMTSsCz0VFDMsrKKjcjH2MeiQDca5cEzb1TccfFJCWnG%2FRQTB77NW0%2Fxa8HqUoNpifEJXEa1%2BsqjdvjFhDJ7t0q3OPhSymIRcIr3%2F%2F2TooagalUMn8PmTA7WhQ%3D%3D",
      "https://cdn-ildbjfd.nitrocdn.com/vVCNYhmdUcYijOaDMpkUIexKnrKJBWpA/assets/images/optimized/rev-ea23e7d/i0.wp.com/theunstumbled.com/wp-content/uploads/2025/05/aafeb3a08746f36451794ec156842a19.someshwar-water-fall.jpg",
      "https://visitplacesindia.com/wp-content/uploads/2025/02/someshwar-waterfall-nashik.jpg",
    ],
    videoUrl: "https://youtu.be/yzaSomeshwarFalls",
    description:
      "A scenic waterfall surrounded by lush greenery, ideal for picnics.",
    mapLink: "https://goo.gl/maps/someshwarFalls",
    rating: 4.3,
  },
  
];

export default dummySpots;
