const cars=[
    { 
    name:'2023 e-tron®',
    price:70800,
    engine:'Dual electric motors ',
    horsepower:402 ,
    Acceleration:5.5 ,
    img:'https://www.motortrend.com/uploads/2022/07/2023-Audi-E-tron-56-exterior-front-three-quarter-view.jpg?fit=around%7C770:481.25',
    id:1
    },
    { 
    name:'2023 e-tron® S',
    price: 88200,
    engine:'Dual electric motors ',
    horsepower:402 ,
    Acceleration:5.5,
    img:'https://www.ccarprice.com/products/Audi_e_tron_S_Premium_Plus_2023.jpg ',
    id:2
    },
    { 
    name:'2023 Audi e-tron® GT',
    price: 104900,
    engine:'Dual synchronous electric motors with 93 kWh Li-ion battery ',
    horsepower:522 ,
    Acceleration:3.9 ,
    img:'https://www.motortrend.com/uploads/sites/10/2022/03/2022-audi-e-tron-gt-premium-plus-4wd-sedan-angular-front.png?fit=around%7C875:492.1875 ',
    id:3
    },
    { 
    name:'2023 Audi RS e-tron® GT',
    price: 143900,
    engine:'Dual synchronous electric motors with 93 kWh Li-ion battery ',
    horsepower:637 ,
    Acceleration:3.1,
    img:'https://mysterio.yahoo.com/mysterio/api/79E0561EB0EE7ACFDF057BCA370E96238F4C0A2D4D04279D1A698CAE73B729C3/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD30AUC411A021001.jpg',
    id:4
    },
    { 
    name:'2023  Audi Q3',
    price: 38700,
    engine:'2.0-liter four-cylinder ',
    horsepower:228,
    Acceleration:7.0 ,
    img:'https://www.motortrend.com/uploads/2022/07/2023-Audi-Q3-94.jpg?fit=around%7C875:492.1875',
    id:5
    },
    { 
    name:'2023 Q4  e-tron®',
    price: 48800,
    engine:'2.0-liter four-cylinder ',
    horsepower:295 ,
    Acceleration:5.8 ,
    img:'https://aglomerado.digital/wp-content/uploads/2022/09/Audi-Q4-e-tron-1.jpg ',
    id:6
    },
    { 
    name:'2023 Audi Q4 Sportback e-tron®',
    price: 56800,
    engine:'Rear permanently excited synchronous motor and front asynchronous motor',
    horsepower:295 ,
    Acceleration:5.8 ,
    img:'https://cdn.motor1.com/images/mgl/Mk33Op/s3/2022-audi-q4-e-tron.webp ',
    id:7
    },
    { 
    name:'2023 Audi Q5 ',
    price: 43500,
    engine:'2.0-liter four-cylinder',
    horsepower:362 ,
    Acceleration:5.0 ,
    img:'https://topelectricsuv.com/wp-content/uploads/2022/04/Next-generation-Audi-Q5-PHEV-render-by-TES.jpg ',
    id:8
    },
    { 
    name:'2023 Audi Q5  Sportback',
    price: 50300,
    engine:'2.0-liter four-cylinder',
    horsepower:261 ,
    Acceleration:5.7 ,
    img:'https://images.dealer.com/ddc/vehicles/2023/Audi/Q5/SUV/trim_45_S_line_Premium_5fcb23/color/Brilliant%20Black-A2A2-12,12,12-640-en_US.jpg ',
    id:9
    },
    { 
    name:'2023 Audi SQ5 ',
    price: 55800,
    engine:'2.0-liter four-cylinder',
    horsepower:349,
    Acceleration:4.7 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-sq5-carbuzz-837531.jpg ',
    id:10
    },
    { 
    name:'2023 Audi SQ5 Sportback ',
    price: 59200,
    engine:'3.0-liter six-cylinder',
    horsepower:349 ,
    Acceleration:4.7,
    img:'https://www.ccarprice.com/products/Audi_SQ5_Sportback_2023.jpg',
    id:11
    },
    { 
    name:'2023 Audi Q7 ',
    price: 58200,
    engine:'2.0-liter four-cylinder',
    horsepower:335 ,
    Acceleration:'5.6 ',
    img:'https://pictures.dealer.com/a/audiontarioaoa/1308/f4dbeb1388964f9b53adb37d8c1b3929x.jpg ',
    id:12
    },
    { 
    name:'2023 Audi SQ7 ',
    price: 89200,
    engine:'V8',
    horsepower:500 ,
    Acceleration:4.3 ,
    img:'https://hips.hearstapps.com/hmg-prod/images/2023-audi-sq7-front-exterior-1657131083.jpg?crop=0.785xw:0.663xh;0.215xw,0.220xh&resize=2048:* ',
    id:13
    },
    { 
    name:'2023 Audi Q8 ',
    price: 71800,
    engine:'3.0-liter six-cylinder',
    horsepower:335,
    Acceleration:5.6,
    img:'https://hips.hearstapps.com/hmg-prod/images/2019-audi-q8-151-1544802617.jpg?crop=0.758xw:0.639xh;0.0737xw,0.361xh&resize=2048:* ',
    id:14
    },
    { 
    name:'2023 Audi SQ8 ',
    price: 94500,
    engine:'V8',
    horsepower:500,
    Acceleration:4.3 ,
    img:'https://img.autobytel.com/2023/audi/sq8/2-800-oem-exterior-front1300-100628.jpg ',
    id:15
    },
    { 
    name:'2023 Audi RS Q8 ',
    price: 122800,
    engine:'V8',
    horsepower:591,
    Acceleration:3.7 ,
    img:'https://media.ed.edmunds-media.com/audi/rs-q8/2020/oem/2020_audi_rs-q8_4dr-suv_base_fq_oem_3_815.jpg ',
    id:16
    },
    { 
    name:'2023 Audi A3 ',
    price: 34900,
    engine:'Inline 4-cylinder',
    horsepower:201,
    Acceleration:6.3 ,
    img:'https://www.ccarprice.com/products/Audi_A3_2023.jpg',
    id:17
    },
    { 
    name:'2023 Audi S3 ',
    price: 45900,
    engine:'Inline 4-cylinder',
    horsepower:306,
    Acceleration:4.5 ,
    img:'https://hips.hearstapps.com/hmg-prod/images/2022-audi-s3-premium-plus-667-1644201407.jpg?crop=0.767xw:0.646xh;0.233xw,0.354xh&resize=2048:* ',
    id:18
    },
    { 
    name:'2023 Audi RS 3 ',
    price: 58900,
    engine:'Inline 5-cylinder',
    horsepower:401,
    Acceleration:3.6 ,
    img:'https://www.netcarshow.com/Audi-RS3_Sedan_performance-2023-wallpaper.jpg ',
    id:19
    },
    { 
    name:'2023 Audi A4 Sedan ',
    price: 39900,
    engine:'2.0-liter four-cylinder',
    horsepower:261,
    Acceleration:5.2 ,
    img:'https://www.ccarprice.com/products/Audi_A4_Sedan_S_line_Premium_Plus_45_TFSI_Quattro_2023.jpg ',
    id:20
    },
    { 
    name:'2023 A4 allroad®',
    price: 45500,
    engine:'2.0-liter four-cylinder',
    horsepower:261,
    Acceleration:5.5 ,
    img:'https://www.ccarprice.com/products/Audi_A4_allroad_Premium_2023.jpg ',
    id:21
    },
    { 
    name:'2023 S4 Sedan',
    price: 52400,
    engine:'V6',
    horsepower:349,
    Acceleration:4.4 ,
    img:'https://inv.assets.sincrod.com/6/3/6/30762497636x640.jpg ',
    id:22
    },
    { 
    name:'2023 Audi A5 Coupe',
    price: 46200,
    engine:'2.0-liter four-cylinder',
    horsepower:261,
    Acceleration:5.3 ,
    img:'https://www.ccarprice.com/products/Audi_A5_Coupe_2023.jpg ',
    Id:23
    },
    { 
    name:'2023 Audi S5 Coupe',
    price: 55300,
    engine:'V6',
    horsepower:349,
    Acceleration:4.4 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-s5-coupe-carbuzz-680448.jpg ',
    id:24
    },
    { 
    name:'2023 Audi R S 5 Coupe',
    price: 75900,
    engine:'V6',
    horsepower:444,
    Acceleration:3.7 ,
    img:'https://cdn.carbuzz.com/gallery-images/1600/892000/700/892758.jpg ',
    id:25
    },
    { 
    name:'2023 Audi A5 Sportback',
    price: 44100,
    engine:'2.0-liter four-cylinder',
    horsepower:261,
    Acceleration:5.4 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-a5-sportback-side-view-carbuzz-676633-1600.jpg ',
    id:26
    },
    { 
    name:'2023 Audi S5 Sportback',
    price: 55300,
    engine:'V6',
    horsepower:349,
    Acceleration:4.5 ,
    img:'https://www.ccarprice.com/products/Audi_S5_Sportback_3.0T_Premium_Plus_Quattro_2023.jpg ',
    id:27
    },
    { 
    name:'2023 Audi RS 5 Sportback',
    price: 76200,
    engine:'V6',
    horsepower:444,
    Acceleration:3.8 ,
    img:'https://hips.hearstapps.com/hmg-prod/images/audi-rs5-competition-package-15-1652285177.jpg?crop=0.645xw:0.484xh;0.0928xw,0.318xh&resize=1200:* ',
    id:28
    },
    { 
    name:'2023 Audi A5 Cabriolet',
    price: 52900,
    engine:'2.0-liter four-cylinder',
    horsepower:261,
    Acceleration:5.6 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-a5-convertible-front-angle-view-carbuzz-677831.jpg ',
    id:29
    },
    { 
    name:'2023 Audi S5 Cabriolet',
    price: 63400,
    engine:'V6',
    horsepower:349,
    Acceleration:4.7 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-s5-convertible-front-angle-view-carbuzz-838851.jpg ',
    id:30
    },
    { 
    name:'2023 Audi A6 Sedan',
    price: 55900,
    engine:'Inline 4-cylinder',
    horsepower:335,
    Acceleration:5.1 ,
    img:'https://cdn.motor1.com/images/mgl/9mZ4Nv/s3/2023-audi-a6-sedan-unofficial-renderings.webp ',
    id:31
    },
    { 
    name:'2023 S6 Sedan',
    price: 72700,
    engine:'V6',
    horsepower:444,
    Acceleration:4.4 ,
    img:'https://www.audi.ca/content/dam/nemo/ca/Models/s6/MY23/1920x1920_MY20-S6-Prestige-quattro-S-Sport-package,-21-Wheel-package-Tango-Red-metallic_13-(TIF).jpg?imwidth=1920 ',
    id:32
    },
    { 
    name:'2023 Audi A6 allroad®',
    price: 66900,
    engine:'V6',
    horsepower:335,
    Acceleration:5.1 ,
    img:'https://www.velocityjournal.com/images/stk/2020/791/ad2020a6allroadquattro79188266_600.jpg',
    id:33
    },
    { 
    name:'2023 Audi RS 6 Avant',
    price: 118900,
    engine:'V8',
    horsepower:591,
    Acceleration:3.5 ,
    img:'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/Audi_RS6_Avant_2020_silver_1.jpg',
    id:34
    },
    { 
    name:'2023 Audi A7',
    price: 69200,
    engine:'V6',
    horsepower:335,
    Acceleration:5.2 ,
    img:'https://www.ccarprice.com/products/Audi_A7_Sportback_Premium_Plus_2023.jpg',
    id:35
    },
    { 
    name:'2023 Audi S7',
    price: 82500,
    engine:'V6',
    horsepower:444,
    Acceleration:4.5 ,
    img:'https://hips.hearstapps.com/hmg-prod/images/2023-audi-s7-design-edition-102-1652282686.jpg?crop=0.692xw:0.584xh;0.0375xw,0.259xh&resize=2048:*',
    id:36
    },
    { 
    name:'2023 Audi RS 7',
    price: 120900,
    engine:'V8',
    horsepower:591,
    Acceleration:3.5 ,
    img:'https://www.ccarprice.com/products/Audi_RS7_2023.jpg',
    id:37
    },
    { 
    name:'2023 Audi A8',
    price: 86500,
    engine:'3.0-liter six-cylinder',
    horsepower:335,
    Acceleration:5.6 ,
    img:'https://www.motortrend.com/uploads/2022/07/2023-Audi-A8-42-front-three-quarter-view.jpg?fit=around%7C875:492.1875',
    id:38
    },
    { 
    name:'2023 Audi S8',
    price: 117500,
    engine:'V8',
    horsepower:563,
    Acceleration:3.5 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-s8-carbuzz-913936.jpg',
    id:39
    },
    { 
    name:'2023 Audi TT Coupe',
    price: 53200,
    engine:'2.0-liter four-cylinder',
    horsepower:235,
    Acceleration:5.8 ,
    img:'https://www.ccarprice.com/products/Audi_TT_Coupe_2023_1.jpg',
    id:40
    },
    { 
    name:'2023 Audi TTS Coupe',
    price: 60900,
    engine:'2.0-liter four-cylinder',
    horsepower:228,
    Acceleration:4.4 ,
    img:'https://www.ccarprice.com/products/Audi_TTS_Coupe_2_0T_2023.jpg',
    id:41
    },
    { 
    name:'2023 Audi TTS Roadstar',
    price: 55300,
    engine:'2.0-liter four-cylinder',
    horsepower:228,
    Acceleration:5.5 ,
    img:'https://cdn.jdpower.com/Models/640x480/2023-Audi-TTCoupe-Base.jpg',
    id:42
    },
    { 
    name:'2023 Audi R8 Coupe',
    price: 158600,
    engine:'V10',
    horsepower:602,
    Acceleration:3.1 ,
    img:'https://www.ccarprice.com/products/Audi_R8_Coupe_V10_2023.jpg',
    id:43
    },
    { 
    name:'2023 Audi R8 Spyder',
    price: 171100,
    engine:'V10',
    horsepower:602,
    Acceleration:3.2 ,
    img:'https://cdn.carbuzz.com/gallery-images/2023-audi-r8-spyder-carbuzz-497934.jpg',
    id:44
    },
    
    
    ]
    