// DataComponent.js
const DataComponent = () => {
  const sampleData = [
    {
      id: 1,
      name: 'Apple',
      image: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
      price: 1.50,
      category: 'Food',
      about: "Enjoy the freshness of these crisp apples, packed with natural sweetness and nutrients."
    },
    {
      id: 2,
      name: 'Banana',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/640px-Banana-Single.jpg',
      price: 0.75,
      category: 'Food',
      about: "A potassium-rich, energy-boosting fruit with a soft and creamy texture."
    },
    {
      id: 3,
      name: 'Orange',
      image: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
      price: 2.00,
      category: 'Food',
      about: "Juicy and citrusy, these oranges are bursting with Vitamin C for a healthy refreshment."
    },
    {
      id: 4,
      name: 'Pineapple',
      image: 'https://www.bultuhan.com/images/detailed/11/pineapple2_m0qp-9j.',
      price: 3.50,
      category: 'Food',
      about: "Tropical and tangy, this pineapple adds a sweet twist to your culinary creations."
    },
    {
      id: 5,
      name: 'Grapes',
      image: 'https://www.westfaliafruit.com/wp-content/uploads/2019/01/Table-Grapes.jpg',
      price: 5.99,
      category: 'Food',
      about: "Sweet and succulent, these grapes are a perfect, bite-sized treat for any occasion."
    },
    {
      id: 6,
      name: 'Kiwi',
      image: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
      price: 1.99,
      category: 'Food',
      about: "Vibrantly green and deliciously tart, kiwis are a nutrient powerhouse."
    },
    {
      id: 7,
      name: 'Watermelon',
      image: 'https://agroponiente.com/wp-content/uploads/2023/08/sandia-blanca-sin-semillas-Agroponiente.png',
      price: 4.50,
      category: 'Food',
      about: "Refreshingly hydrating, watermelons are the epitome of summer's delight."
    },
    {
      id: 8,
      name: 'Peach',
      image: 'https://cdn.mos.cms.futurecdn.net/2wtUPt2xZ9oeZf6jRFmEzg-415-80.jpg',
      price: 2.25,
      category: 'Food',
      about: "Sweet and fragrant, peaches offer a luscious taste of the orchard's bounty."
    },
    {
      id: 9,
      name: 'Mango',
      image: 'https://www.organics.ph/cdn/shop/products/mango-ripe-250grams-per-piece-fruits-vegetables-fresh-produce-979218_1024x.jpg?v=1601479990',
      price: 3.75,
      category: 'Food',
      about: "Exotic and tropical, these mangoes are a juicy indulgence with a hint of sweetness."
    },
    {
      id: 10,
      name: 'Strawberry',
      image: 'https://stoller.com.au/wp-content/uploads/2021/08/dreamstime_xxl_114284301-scaled-e1630045644758.jpg',
      price: 6.50,
      category: 'Food',
      about: "Bursting with flavor, strawberries are a versatile and tasty addition to any dish."
    },
    {
      id: 11,
      name: 'Yamaha 30122',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
      price: 70000.00,
      category: 'Car',
      about: "A sleek and stylish automobile designed for a smooth and comfortable ride."
    },
    {
      id: 121,
      name: 'Honda Civic',
      image: 'https://www.autodeal.com.ph/custom/car-model-photo/original/honda-type-r-primary-63ce2b4c25e64.jpg',
      price: 35000.00,
      category: 'Car',
      about: "A sleek and stylish automobile designed for a smooth and comfortable ride."
    },
    {
      id: 131,
      name: 'Tesla',
      image: 'https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_1600.jpg',
      price: 40000.00,
      category: 'Car',
      about: "A sleek and stylish automobile designed for a smooth and comfortable ride."
    },
    {
      id: 111,
      name: 'Suzuki',
      image: 'https://media.zigcdn.com/media/model/2022/Sep/grand-1_600x400.jpg',
      price: 20000.99,
      category: 'Car',
      about: "A sleek and stylish automobile designed for a smooth and comfortable ride."
    },
    {
      id: 121,
      name: 'Black Tacker',
      image: 'https://animedevta.com/cdn/shop/files/Screenshot-20230922-095616_2.png?v=1695964579&width=1080',
      price: 2.99,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },
    {
      id: 1213,
      name: 'Penshoppe',
      image: 'https://www.penshoppe.com/cdn/shop/products/974706-Heather_Gray_2.jpg?v=1694404350&width=1080',
      price: 5.99,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },
    {
      id: 124,
      name: 'Levis',
      image: 'https://imageio.forbes.com/specials-images/dam/imageserve/43382149/960x0.jpg?height=474&width=711&fit=bounds',
      price: 12.99,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },
    {
      id: 122,
      name: 'Bench',
      image: 'https://down-ph.img.susercontent.com/file/6b77b34b7b202e1d7d58dc5319f9a10e',
      price: 4.99,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },
    {
      id: 152,
      name: 'Uniqlo',
      image: 'https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/453850/item/phgoods_69_453850.jpg?width=494',
      price: 8.65,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },
    {
      id: 1112,
      name: 'Aero',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/OQ/LW/PH/140142552/whatsappimage2021-10-07at4-47-33pm-2-1024x1024-500x500.jpg',
      price: 8.99,
      category: 'Clothes',
      about: "Comfortable and trendy, this T-shirt is a wardrobe essential for casual style."
    },

    {
      id: 13,
      name: 'Sofa',
      image: 'https://ourhome.ph/cdn/shop/products/seiv-2-seater-sofa_10402171-_7_6d05811f-4f38-4345-9948-206d062f9847_800x.jpg?v=1679984460',
      price: 499.99,
      category: 'House',
      about: "Luxurious and inviting, this sofa is perfect for relaxing and unwinding at home."
    },
    {
      id: 14,
      name: 'Disgrams',
      image: 'https://variety.com/wp-content/uploads/2022/08/StrangerThings_StrangerThings4_9_02_14_28_08.jpg',
      price: 9.99,
      category: 'Things',
      about: "A unique and versatile item that adds a touch of flair to your daily life."
    },
    {
      id: 115,
      name: 'Project House',
      image: 'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-contemporary-house-plans-1.webp',
      price: 1000000.99,
      category: 'House',
      about: "A cozy and stylish home essential that combines comfort and functionality."
    },
    {
      id: 125,
      name: 'Chill lives',
      image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
      price: 500000.99,
      category: 'House',
      about: "A cozy and stylish home essential that combines comfort and functionality."
    },
    {
      id: 135,
      name: 'Simple House',
      image: 'https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg',
      price: 90000.99,
      category: 'House',
      about: "A cozy and stylish home essential that combines comfort and functionality."
    },
    {
      id: 145,
      name: 'Mansion',
      image: 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Modern-House-With-Large-Pool-AdobeStock-127770833-Copy.jpg',
      price: 7000000.99,
      category: 'House',
      about: "A cozy and stylish home essential that combines comfort and functionality."
    },
    {
      id: 155,
      name: 'Dark House',
      image: 'https://cdn.decoist.com/wp-content/uploads/2021/06/Modular-black-house-with-balcony-49706.jpg',
      price: 2000000.99,
      category: 'House',
      about: "A cozy and stylish home essential that combines comfort and functionality."
    },

    {
      id: 16,
      name: 'Red Parot',
      image: 'https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg',
      price: 10.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },
    {
      id: 116,
      name: 'White Parot',
      image: 'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4268/image/s768x1300/WC202209_LAST_006_430968_reduced.jpg',
      price: 15.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },
    {
      id: 126,
      name: 'Tiger',
      image: 'https://i0.wp.com/news.utk.edu/wp-content/uploads/sites/3/2021/11/dominik-luckmann-YpTrZayDb8Q-unsplash.jpg?fit=1500%2C1000&ssl=1',
      price: 200.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },
    {
      id: 136,
      name: 'Dove',
      image: 'https://www.thoughtco.com/thmb/hQELRGZF0QBuK-2ScNLcnxfrZHw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doveGE-57a1097f5f9b589aa90076bf.jpg',
      price: 3.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },
    {
      id: 146,
      name: 'Bald Eagle',
      image: 'https://cdn.britannica.com/96/76096-050-8CF14F84/Bald-eagle-snag-Alaska-Kenai.jpg',
      price: 20.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },
    {
      id: 156,
      name: 'Lion',
      image: 'https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg',
      price: 250.99,
      category: 'Animal',
      about: "Fashionable and comfortable, this T-shirt is a must-have for casual occasions."
    },

    {
      id: 117,
      name: 'Green leaves',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*',
      price: 2.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 127,
      name: 'Red leaves',
      image: 'https://theflowerranch.com/assets/plants/_square800/colleus_alligatoralley.jpg',
      price: 9.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 137,
      name: 'Square Florist',
      image: 'https://www.centralsquareflorist.com/images/itemVariation/v4_SnakePlant-23121330103.jpg',
      price: 4.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 147,
      name: 'Rose',
      image: 'https://www.flowerchimp.com.ph/cdn/shop/products/12RedRosesKoreanStyle_002_1946x.jpg?v=1626848070',
      price: 5.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 157,
      name: 'Gumamela',
      image: 'https://1.bp.blogspot.com/-1aSxJn9tssM/VTYXClgOUtI/AAAAAAAAAZ4/q-4vy4XHhCE/s1600/gumamela.jpg',
      price: 1.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 167,
      name: 'Sun Flower',
      image: 'https://hips.hearstapps.com/hmg-prod/images/types-of-sunflowers-1646756873.jpg?crop=0.752xw:1.00xh;0.165xw,0&resize=1200:*',
      price: 2.99,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 177,
      name: 'Aumann',
      image: 'https://www.aumanns.com.au/wp-content/uploads/2022/12/cottagecore-garden.jpg',
      price: 2.75,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },
    {
      id: 187,
      name: 'Daisy Flower',
      image: 'https://media.jardineriadelvalles.com/product/flor-de-margarita-comestible-800x800.jpg',
      price: 0.75,
      category: 'Plants',
      about: "Plush and comfortable, this sofa is perfect for creating a cozy living space."
    },

    {
      id: 128,
      name: 'Rolex',
      image: 'https://images-cdn.ubuy.co.in/65712429234306247a71274b-lige-watches-mens-fashion-business-black.jpg',
      price: 50000.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 118,
      name: 'Casio',
      image: 'https://www.watchportal.com.ph/cdn/shop/files/casio-mtp-v001l-1b-black-leather-strap-watch-for-men-watchportal-ph_ebf0d6df-40a3-42d0-91a3-790e9eba14f7.jpg?v=1697162378',
      price: 1000.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 148,
      name: 'Olevs',
      image: 'https://m.media-amazon.com/images/I/61ZODWFYwAS._AC_SX522_.jpg',
      price: 2000.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 138,
      name: 'Apple Watch',
      image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/e/0/e0aad59d_7f887146_MY_Apple_Watch_Ultra_2_LTE_49mm_Titanium_Blue_Alpine_Loop_PDP_Image_Position-1.jpg',
      price: 15999.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 158,
      name: 'G-Shock',
      image: 'https://dynamic.zacdn.com/iGzZBl1Qo76kjP9Bsqwz2GLC1uA=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/casio-7747-9504861-1.jpg',
      price: 5000.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 168,
      name: 'Jacob & Co',
      image: 'https://www.jckonline.com/wp-content/uploads/2020/09/JacobandCoAstronomiaCasinoWatch.jpg',
      price: 100000.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },
    {
      id: 178,
      name: 'Carpenter',
      image: 'https://images.squarespace-cdn.com/content/v1/5c78138211f784469d4817df/4962a34f-e9b3-44cb-845d-e6ee8b1ceba6/529029DF-47F5-4664-860F-277EB1F7333A.jpeg',
      price: 9.99,
      category: 'Watch',
      about: "Sleek and stylish, this watch adds a touch of elegance to any ensemble."
    },

  ];
  
      
      

  const activityData = [
    { id: 116, name: 'Morning Jog 🏃‍♂️' },
    { id: 1442, name: 'Team Standup Meeting 🤝' },
    { id: 1323, name: 'Lunch Break 🍱' },
    { id: 14234, name: 'Client Call 📞' },
    { id: 1511, name: 'Coding Session 💻' },
    { id: 1688, name: 'Afternoon Coffee ☕' },
    { id: 174, name: 'Project Review 📊' },
    { id: 182, name: 'UI Design Workshop 🎨' },
    { id: 191, name: 'Feedback Session 🗣️' },
    { id: 192, name: 'Mobile App Testing 📱' },
    { id: 1724, name: 'Evening Walk 🚶‍♀️' },
    { id: 1821, name: 'Dinner Time 🍽️' },
    { id: 1951, name: 'Movie Night 🎬' },
    { id: 1962, name: 'Reading Time 📖' },
    { id: 2000, name: 'Happening Now: Live Coding Session 🚀' }, // Example of a live coding session happening now
    // Add more activities as needed
  ];
  
  return { sampleData, activityData };
};

export default DataComponent;
