let images=[
    "https://images-eu.ssl-images-amazon.com/images/G/31/2026/GW/PC/Unrec/Frame_2147205289._CB786510766_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Mar26/WBLB3000X1200.jpg._CB786181535_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/Unrec/Live_PC_Hero_Lifestyle_3000x1200-m-2x._CB780065834_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2026/GW/PC/Unrec/Frame_2147205288._CB786510766_.jpg"

]
let index=0;
function slideImage(){
    index++;
    if(index>=images.length){
        index=0;
    }
    document.getElementById("banner-imagee").src=images[index];
}
setInterval(slideImage,2000);


let airConditioner = document.querySelector("#air-conditioner");
let refrigrator = document.querySelector("#refrigator");
let radio = document.querySelector("#radio");
let coushin = document.querySelector("#coushin");
let figurines = document.querySelector("#figurines");
let discOne = document.querySelector(
    "#disc-one"
)
let cross=document.querySelector(".cross")
let speaker = document.querySelector("#speaker");
let earbuds = document.querySelector("#earbuds");
let third_image = document.querySelector("#third-image")
let fourth_image = document.querySelector("#fourth-image")
let fifth_image = document.querySelector("#fifth-image");
let sixth_image = document.querySelector("#sixth-image");
let seventh_image = document.querySelector("#seventh-image")
let eighth_image = document.querySelector("#eighth-image");


let cleanSupplies = document.querySelector("#clean-supplies");
let bathroom = document.querySelector("#bathroom");
let homeTools = document.querySelector("#home-tools");
let wallpaper = document.querySelector("#wallpapers");



let discTwo = document.querySelector("#disc-two");
let discThree = document.querySelector("#disc-three");
let discFour = document.querySelector("#disc-four");
let washingMachine = document.querySelector("#washing-machine");
let homeStorage = document.querySelector("#home-storage");
let showItem = document.querySelector(".showitem");
let showImage = document.querySelector("#show-image");
let lightning = document.querySelector("#lightning");
let productName = document.querySelector("#item-name");
let element = document.querySelector(".elements");
let productPrice = document.querySelector("#current-price");
let originalPrice = document.querySelector("#original-price");
let discountPercentage = document.querySelector("#discount-percentage");
let itemWebsite = document.querySelector("#item-website");
let openSection = document.querySelector(".open-section");
let imageSection = document.querySelector(".image-section");



// for air-conditioner



airConditioner.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "lg air-conditioner.jpg"
    productName.innerText = "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1, VIRAAT Mode, Diet Mode+, Faster Cooling & Energy Saving, HD Filter with Anti-Virus Protection, US-Q18JNXE, White)";
    showImage.style.height = "180px"
    productPrice.innerText = "₹44,990"
    originalPrice.innerText = "₹1,20,000"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The L.G Store";
    itemWebsite.href = "https://www.lg.com/in/search/?search=lg%201%205%203%20star%20dual%20inverter%20split%20ac%202025";
    console.log(itemWebsite);
})
console.log(itemWebsite);


// for refrigator


refrigrator.addEventListener("click", function () {
    element.style.display = "none";
    imageSection.style = "border: 3px solid rgb(49, 49, 170)"
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61CdgErETtL._SX679_.jpg";
    productName.innerText = "Haier 190 L, 4 Star, Direct Cool Single Door Refrigerator (HED-204DS-P, Dazzle Steel)";
    showImage.style.height = "360px"
    productPrice.innerText = "₹14,999"
    originalPrice.innerText = "₹20,990"
    discountPercentage.innerText = "29%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit the Haier Store";
    itemWebsite.href = "https://www.amazon.in/stores/Haier/page/8F2F8246-4C38-43D4-8E44-D9B6421822DD?lp_asin=B0BTHLMS39&ref_=ast_bln";
})


// for radio

radio.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61gHu9NWDmL._SX679_.jpg";
    productName.innerText = "Panasonic 23L Convection Microwave Oven(NN-CT353BFDG,Black Mirror, 360° Heat Wrap, Magic Grill)";
    // showImage.style.height = "360px"
    productPrice.innerText = "₹10,590"
    originalPrice.innerText = "₹14,990"
    discountPercentage.innerText = "29%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit the Panasonic Store";
    itemWebsite.href = "https://www.amazon.in/stores/Panasonic/page/BD0A5BF4-BC8C-4F75-87D5-BE6A0E9F4BF3?is_byline_deeplink=true&deeplink=D90C5004-959D-423D-9E5E-9CCB351EA5F3&redirect_store_id=BD0A5BF4-BC8C-4F75-87D5-BE6A0E9F4BF3&lp_asin=B00KPSSPZY&ref_=ast_bln";
})


// for washing Machine

washingMachine.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61wstFqAjyL._SY741_.jpg"
    productName.innerText = "Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹19,490"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "28%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for coushin


coushin.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61wstFqAjyL._SY741_.jpg"
    productName.innerText = "Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹19,490"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "28%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for figurines

coushin.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61wstFqAjyL._SY741_.jpg"
    productName.innerText = "Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹19,490"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "28%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})

// for home storage

homeStorage.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61wstFqAjyL._SY741_.jpg"
    productName.innerText = "Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹19,490"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "28%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for lightning 
lightning.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61wstFqAjyL._SY741_.jpg"
    productName.innerText = "Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹19,490"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "28%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for disc one 

discOne.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/51afJC92cgL._SX522_.jpg"
    productName.innerText = "Sony PlayStation®5 Digital Edition (slim) Console Video Game";
    showImage.style.height = "380px"
    productPrice.innerText = "₹54,590"
    originalPrice.innerText = "₹27,000"
    discountPercentage.innerText = "50%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The sony store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for disc two


discTwo.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61TPQpap71L._SL1000_.jpg"
    productName.innerText = "PlayStation®5 Console STD SLIM (COD Bundle)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹54,990"
    originalPrice.innerText = "₹1,09,980"
    discountPercentage.innerText = "50%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for disc three

discThree.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/51afJC92cgL._SX522_.jpg"
    productName.innerText = "Sony PlayStation®5 Digital Edition (slim) Console Video Game";
    showImage.style.height = "380px"
    productPrice.innerText = "₹54,990"
    originalPrice.innerText = "₹1,09,980"
    discountPercentage.innerText = "50%"
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The  sony store";
    itemWebsite.href = "https://www.amazon.in/stores/SonyIndia/page/9DD1D3D2-F019-4129-A76A-E3F6BE950E01?lp_asin=B0CY5QW186&ref_=ast_bln";
    console.log(itemWebsite);
})

// for disc four


discFour.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/51ljnEaW0pL._SX679_.jpg"
    productName.innerText = "Sony PlayStation5 Gaming Console (Slim)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹54,989"
    originalPrice.innerText = "78,748"
    discountPercentage.remove();
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for cleanSupplies

cleanSupplies.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61aGaJ-+gaL._SX679_.jpg"
    productName.innerText = "Scotch-Brite Plastic Kitchen Wiper,15.7 Cm,Grey";
    showImage.style.height = "380px"
    productPrice.innerText = "₹155"
    originalPrice.innerText = "₹170"
    discountPercentage.innerText = "9%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "Visit the Scotch-Brite Store";
    itemWebsite.href = "https://www.amazon.in/stores/Scotch-Brite/page/A8EE3FBB-92A3-4711-B6AF-09180CAD11A8?lp_asin=B07DWKC8TB&ref_=ast_bln";
    console.log(itemWebsite);
})


// for bathroom

bathroom.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/41ts30ZjzEL._SX300_SY300_QL70_FMwebp_.jpg"
    productName.innerText = "Plantex Bathroom Organiser Without Drill/GI Steel Self Adhesive Bathroom Shelf/Bathroom Stand for Wall/Bathroom Accessories Set Pack of 1(Black, CED Powder Coated)";
    showImage.style.height = "380px"
    productPrice.innerText = "₹294"
    originalPrice.innerText = "₹880"
    discountPercentage.innerText = "67%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The plantext store";
    itemWebsite.href = "https://www.amazon.in/stores/Plantex/page/C66CD4CB-A955-4128-9324-850DFCD64694?lp_asin=B0B3J7Q14R&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})


// for hometools

homeTools.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/715kF0XQMEL._SX679_.jpg"
    productName.innerText = "Bosch 2608590090 Masonry Drill Bit Set (5-Pieces), Alloy Steel, Straight";
    showImage.style.height = "380px"
    productPrice.innerText = "₹267"
    originalPrice.remove();
    discountPercentage.remove();
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visit The samsung store";
    itemWebsite.href = "https://www.amazon.in/stores/SamsungBrandPage/page/7613B800-61FF-4320-8DEF-4A3711D5E41C?lp_asin=B0B8NK5HTH&ref_=ast_bln";
    console.log(itemWebsite);
})

// for wallpaper

wallpaper.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/81eDwoMkV0L._SX679_.jpg"
    productName.innerText = "ANNACREATIONS Self Adhesive Removable Peel and Stick Wallpaper 45 x 305 cm (Green Blooming Flower)";
    showImage.style.height = "100%"
    productPrice.innerText = "₹225"
    originalPrice.innerText = "₹999"
    discountPercentage.innerText = "-77%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "Brand: ANNACREATIONS";
    itemWebsite.href = "https://www.amazon.in/s?srs=83779261031&rh=p_89%3AANNACREATIONS";
    console.log(itemWebsite);
})


// for speaker

speaker.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/71o6CU8MqVL._SX522_.jpg"
    productName.innerText = "boAt Stone 352 Pro/Stone 358 Pro w/ 14W Signature Sound, Up to 12 Hours Playback, RGB LEDs, TWS Feature, Built-in Mic, BTv5.3, Free Music Streaming on JioSaavn Bluetooth Speaker (Raging Black)"
    showImage.style.height = "100%"
    productPrice.innerText = "₹1699"
    originalPrice.innerText = "₹4990"
    discountPercentage.innerText = "-66%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the boat store"
    itemWebsite.href = "https://www.amazon.in/stores/boAt/page/C45AC738-6190-4344-A3E4-CDF7B426BC8C?lp_asin=B0D6W7F7WH&ref_=ast_bln";
    console.log(itemWebsite);
})


// for earbuds

earbuds.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/71coaeiXHfL._SX522_.jpg"
    productName.innerText = "boAt 2025 Launch Airdopes 313, 13mm Drivers, Glide Shell, 75hrs Playback, Signature Sound, 4Mics with ENx Tech, ASAP Charge, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Carbon Black)"
    showImage.style.height = "100%"
    productPrice.innerText = "₹1299"
    originalPrice.innerText = "₹3990"
    discountPercentage.innerText = "-67%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the boat store"
    itemWebsite.href = "https://www.amazon.in/stores/boAt/page/C45AC738-6190-4344-A3E4-CDF7B426BC8C?lp_asin=B0D6W7F7WH&ref_=ast_bln";
    console.log(itemWebsite);
})

// for second speaker

third_image.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/81RQV-Bx6DL._SX522_.jpg"
    productName.innerText = "ZEBRONICS VITA 201, Wireless Bluetooth Soundbar, 16 Watts, Upto 8 Hours Playback, Powerful Dual Drivers, Dual Passive Radiators, Call Function, RGB LED, TWS | BTv5.3 | USB | AUX | mSD"
    showImage.style.height = "100%"
    productPrice.innerText = "₹1499"
    originalPrice.innerText = "₹2499"
    discountPercentage.innerText = "-40%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the ZEBRONICS store"
    itemWebsite.href = "https://www.amazon.in/stores/Zebronics/page/EA68FC27-2135-4626-AF19-8296FA446429?is_byline_deeplink=true&deeplink=EA68FC27-2135-4626-AF19-8296FA446429&redirect_store_id=EA68FC27-2135-4626-AF19-8296FA446429&lp_asin=B0DTJ62ZY8&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})

// for switch

fifth_image.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/51IEZWXSkgL._SX522_.jpg"
    productName.innerText = "GM 3060 Extension Board 10Amp Output 250 Volts with 2 Mtr Extension Cord & Surge Protector | Master Switch, Safety Shutter, 4 International Sockets | Multi Plug Travel Adapter for Home Appliances"
    showImage.style.height = "100%"
    productPrice.innerText = "₹419"
    originalPrice.innerText = "₹650"
    discountPercentage.innerText = "-40%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the ZEBRONICS store"
    itemWebsite.href = "https://www.amazon.in/stores/Zebronics/page/EA68FC27-2135-4626-AF19-8296FA446429?is_byline_deeplink=true&deeplink=EA68FC27-2135-4626-AF19-8296FA446429&redirect_store_id=EA68FC27-2135-4626-AF19-8296FA446429&lp_asin=B0DTJ62ZY8&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})




// for speaker

fourth_image.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/6199hEwNH6L._SX679_.jpg"
    productName.innerText = "Ambrane Magsafe Wireless 10000Mah Fast Charging Power Bank, Strong Magnet, Micro USB Input, 22.5W Output For Iphone 12 Above, Android & Other Qi Enabled Devices + Magnetic Ring (Aerosync Snap, Purple)"
    showImage.style.height = "100%"
    productPrice.innerText = "₹419"
    originalPrice.innerText = "₹650"
    discountPercentage.innerText = "-40%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the Ambrene store"
    itemWebsite.href = "https://www.amazon.in/stores/Ambrane/page/0FBC25DD-7376-4724-A369-0A7DB53DEF05?lp_asin=B0D9S9TV5Q&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})


// for bluetooth

sixth_image.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/61RbNdlNWIL._SX522_.jpg"
    productName.innerText = "boAt Rockerz 411 (2025 Launch), 40Ms Low Latency, 40Hrs Battery, 40Mm Drivers, Enx Tech, Integrated Controls, V5.4 Bluetooth Headphones, Wireless Over Ear Headphone with Mic (Bold Blue)"
    showImage.style.height = "100%"
    productPrice.innerText = "₹1299"
    originalPrice.innerText = "₹2999"
    discountPercentage.innerText = "-57%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the Boat store"
    itemWebsite.href = "https://www.amazon.in/stores/Zebronics/page/EA68FC27-2135-4626-AF19-8296FA446429?is_byline_deeplink=true&deeplink=EA68FC27-2135-4626-AF19-8296FA446429&redirect_store_id=EA68FC27-2135-4626-AF19-8296FA446429&lp_asin=B0DTJ62ZY8&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})


// for phone stand


eighth_image.addEventListener("click", function () {
    element.style.display = "none";
    openSection.style.display = "block";
    showImage.src = "https://m.media-amazon.com/images/I/7192Muh-sAL._SX522_.jpg"
    productName.innerText = "Ambrane Mobile Holding Tabletop Stand, 0-135 Perfect View, Height Adjustment, Wide Compatibility, Multipurpose, Anti-Skid Design (Twistand, Black)"
    showImage.style.height = "100%"
    productPrice.innerText = "₹179"
    originalPrice.innerText = "₹499"
    discountPercentage.innerText = "-64%";
    // Discount Percentage = ((Original Price - Discounted Price) / Original Price) * 100
    itemWebsite.textContent = "visits the Ambrene store"
    itemWebsite.href = "https://www.amazon.in/stores/Zebronics/page/EA68FC27-2135-4626-AF19-8296FA446429?is_byline_deeplink=true&deeplink=EA68FC27-2135-4626-AF19-8296FA446429&redirect_store_id=EA68FC27-2135-4626-AF19-8296FA446429&lp_asin=B0DTJ62ZY8&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";
    console.log(itemWebsite);
})


cross.addEventListener("click",function(){
    openSection.style.display="none";
    element.style.display="block";
})








