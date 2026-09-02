/* =====================================================
   DHARA SAMRIDHI
   JAVASCRIPT
===================================================== */


/* =====================================================
   CROP DATA
===================================================== */

const crops = {

    vegetables: [

        {
            name: "Tomato",
            emoji: "🍅",
            price: 18,
            unit: "kg"
        },

        {
            name: "Green Chilli",
            emoji: "🌶️",
            price: 52,
            unit: "kg"
        },

        {
            name: "Brinjal",
            emoji: "🍆",
            price: 25,
            unit: "kg"
        },

        {
            name: "Potato",
            emoji: "🥔",
            price: 30,
            unit: "kg"
        },

        {
            name: "Onion",
            emoji: "🧅",
            price: 32,
            unit: "kg"
        },

        {
            name: "Carrot",
            emoji: "🥕",
            price: 38,
            unit: "kg"
        },

        {
            name: "Cabbage",
            emoji: "🥬",
            price: 24,
            unit: "kg"
        },

        {
            name: "Lady Finger",
            emoji: "🥒",
            price: 42,
            unit: "kg"
        }

    ],


    grains: [

        {
            name: "Rice",
            emoji: "🌾",
            price: 38,
            unit: "kg"
        },

        {
            name: "Wheat",
            emoji: "🌾",
            price: 34,
            unit: "kg"
        },

        {
            name: "Maize",
            emoji: "🌽",
            price: 26,
            unit: "kg"
        },

        {
            name: "Millets",
            emoji: "🌾",
            price: 45,
            unit: "kg"
        },

        {
            name: "Ragi",
            emoji: "🌾",
            price: 48,
            unit: "kg"
        },

        {
            name: "Jowar",
            emoji: "🌾",
            price: 42,
            unit: "kg"
        }

    ],


    fruits: [

        {
            name: "Mango",
            emoji: "🥭",
            price: 65,
            unit: "kg"
        },

        {
            name: "Banana",
            emoji: "🍌",
            price: 42,
            unit: "kg"
        },

        {
            name: "Papaya",
            emoji: "🥭",
            price: 35,
            unit: "kg"
        },

        {
            name: "Guava",
            emoji: "🍐",
            price: 48,
            unit: "kg"
        },

        {
            name: "Pomegranate",
            emoji: "🍎",
            price: 110,
            unit: "kg"
        }

    ]

};


/* =====================================================
   BUYERS
===================================================== */

const buyers = [

    {
        name: "FreshMart Supermarket",
        crop: "Green Chilli",
        price: 52,
        distance: "4 km",
        icon: "🛒"
    },

    {
        name: "Sri Lakshmi Traders",
        crop: "Green Chilli",
        price: 56,
        distance: "8 km",
        icon: "🏪"
    },

    {
        name: "Kurnool Vegetable Market",
        crop: "Tomato",
        price: 18,
        distance: "12 km",
        icon: "🥬"
    },

    {
        name: "Andhra Grain Traders",
        crop: "Rice",
        price: 38,
        distance: "15 km",
        icon: "🌾"
    },

    {
        name: "Rythu Bazaar Buyer",
        crop: "Brinjal",
        price: 27,
        distance: "7 km",
        icon: "👨‍🌾"
    }

];


/* =====================================================
   LANGUAGE DATA
===================================================== */

const translations = {

    en: {

        home: "Home",
        crops: "Crops",
        buyers: "Nearby Buyers",
        prices: "Price Compare",
        sales: "My Sales",

        welcome: "Welcome, Farmer 👨‍🌾",
        sellSmart: "Let's sell smarter today!",
        dashboardText:
            "Find better buyers, compare prices and increase your returns.",

        uploadCrop: "Crop Upload",
        nearbyBuyers: "Nearby Buyers",
        comparePrices: "Price Compare",
        mySales: "My Sales",

        marketToday: "Today's Market",
        marketSubtitle: "Latest sample prices for your crops",
        price: "Price",

        cropMarket: "Crop Market",
        cropMarketText:
            "Choose your crop and check available offers.",

        addCrop: "Add Crop",

        vegetables: "Vegetables",
        grains: "Grains",
        fruits: "Fruits",

        nearbyBuyersTitle: "Nearby Buyers",

        buyersText:
            "Find buyers who are looking for your crops.",

        useLocation: "Use My Location",

        priceComparison: "Compare Prices",

        priceComparisonText:
            "Choose the best offer before selling.",

        selectCrop: "Select Crop",

        mySalesTitle: "My Sales",

        salesText:
            "Track your crop sales and estimated returns.",

        totalEarnings: "Total Earnings",
        cropsSold: "Crops Sold",

        addYourCrop: "Add Your Crop",
        cropName: "Crop Name",
        quantity: "Quantity (kg)",
        saveCrop: "Save Crop",

        voiceAssistant: "Voice Assistant",

        footerText:
            "Empowering farmers with smarter selling decisions."

    },


    te: {

        home: "హోమ్",
        crops: "పంటలు",
        buyers: "సమీప కొనుగోలుదారులు",
        prices: "ధర పోలిక",
        sales: "నా అమ్మకాలు",

        welcome: "స్వాగతం రైతు గారూ 👨‍🌾",
        sellSmart: "ఈరోజు తెలివిగా అమ్ముదాం!",
        dashboardText:
            "మంచి కొనుగోలుదారులను కనుగొని, ధరలను పోల్చి, మీ ఆదాయాన్ని పెంచుకోండి.",

        uploadCrop: "పంట నమోదు",
        nearbyBuyers: "సమీప కొనుగోలుదారులు",
        comparePrices: "ధర పోలిక",
        mySales: "నా అమ్మకాలు",

        marketToday: "ఈరోజు మార్కెట్",
        marketSubtitle: "మీ పంటలకు తాజా నమూనా ధరలు",
        price: "ధర",

        cropMarket: "పంట మార్కెట్",
        cropMarketText:
            "మీ పంటను ఎంచుకుని అందుబాటులో ఉన్న ఆఫర్లను చూడండి.",

        addCrop: "పంట జోడించండి",

        vegetables: "కూరగాయలు",
        grains: "ధాన్యాలు",
        fruits: "పండ్లు",

        nearbyBuyersTitle: "సమీప కొనుగోలుదారులు",

        buyersText:
            "మీ పంటను కొనుగోలు చేయాలనుకునే కొనుగోలుదారులను కనుగొనండి.",

        useLocation: "నా స్థానం ఉపయోగించండి",

        priceComparison: "ధరలను పోల్చండి",

        priceComparisonText:
            "అమ్మకానికి ముందు ఉత్తమ ధరను ఎంచుకోండి.",

        selectCrop: "పంటను ఎంచుకోండి",

        mySalesTitle: "నా అమ్మకాలు",

        salesText:
            "మీ పంట అమ్మకాలు మరియు అంచనా ఆదాయాన్ని చూడండి.",

        totalEarnings: "మొత్తం ఆదాయం",
        cropsSold: "అమ్మిన పంట",

        addYourCrop: "మీ పంటను జోడించండి",
        cropName: "పంట పేరు",
        quantity: "పరిమాణం (కిలోలు)",
        saveCrop: "పంటను సేవ్ చేయండి",

        voiceAssistant: "వాయిస్ సహాయకుడు",

        footerText:
            "తెలివైన అమ్మకాల నిర్ణయాలతో రైతులను శక్తివంతం చేయడం."

    },


    hi: {

        home: "होम",
        crops: "फसलें",
        buyers: "नजदीकी खरीदार",
        prices: "कीमत तुलना",
        sales: "मेरी बिक्री",

        welcome: "स्वागत है किसान भाई 👨‍🌾",
        sellSmart: "आज समझदारी से बेचें!",
        dashboardText:
            "बेहतर खरीदार खोजें, कीमतों की तुलना करें और अपनी आय बढ़ाएं।",

        uploadCrop: "फसल जोड़ें",
        nearbyBuyers: "नजदीकी खरीदार",
        comparePrices: "कीमत तुलना",
        mySales: "मेरी बिक्री",

        marketToday: "आज का बाजार",
        marketSubtitle: "आपकी फसलों की नवीनतम नमूना कीमतें",
        price: "कीमत",

        cropMarket: "फसल बाजार",
        cropMarketText:
            "अपनी फसल चुनें और उपलब्ध ऑफर देखें।",

        addCrop: "फसल जोड़ें",

        vegetables: "सब्जियां",
        grains: "अनाज",
        fruits: "फल",

        nearbyBuyersTitle: "नजदीकी खरीदार",

        buyersText:
            "अपनी फसल खरीदने वाले खरीदार खोजें।",

        useLocation: "मेरी लोकेशन इस्तेमाल करें",

        priceComparison: "कीमतों की तुलना करें",

        priceComparisonText:
            "बेचने से पहले सबसे अच्छा ऑफर चुनें।",

        selectCrop: "फसल चुनें",

        mySalesTitle: "मेरी बिक्री",

        salesText:
            "अपनी फसल की बिक्री और अनुमानित आय देखें।",

        totalEarnings: "कुल कमाई",
        cropsSold: "बेची गई फसल",

        addYourCrop: "अपनी फसल जोड़ें",
        cropName: "फसल का नाम",
        quantity: "मात्रा (किलो)",
        saveCrop: "फसल सेव करें",

        voiceAssistant: "वॉयस असिस्टेंट",

        footerText:
            "स्मार्ट बिक्री निर्णयों के साथ किसानों को सशक्त बनाना।"

    },


    ta: {

        home: "முகப்பு",
        crops: "பயிர்கள்",
        buyers: "அருகிலுள்ள வாங்குபவர்கள்",
        prices: "விலை ஒப்பீடு",
        sales: "என் விற்பனைகள்",

        welcome: "விவசாயிக்கு வரவேற்பு 👨‍🌾",
        sellSmart: "இன்று புத்திசாலித்தனமாக விற்கலாம்!",
        dashboardText:
            "சிறந்த வாங்குபவர்களைக் கண்டறிந்து, விலைகளை ஒப்பிட்டு வருமானத்தை அதிகரிக்கவும்.",

        uploadCrop: "பயிர் பதிவு",
        nearbyBuyers: "அருகிலுள்ள வாங்குபவர்கள்",
        comparePrices: "விலை ஒப்பீடு",
        mySales: "என் விற்பனைகள்",

        marketToday: "இன்றைய சந்தை",
        marketSubtitle: "உங்கள் பயிர்களின் சமீபத்திய மாதிரி விலைகள்",
        price: "விலை",

        cropMarket: "பயிர் சந்தை",
        cropMarketText:
            "உங்கள் பயிரை தேர்ந்தெடுத்து கிடைக்கும் சலுகைகளைப் பார்க்கவும்.",

        addCrop: "பயிரை சேர்க்கவும்",

        vegetables: "காய்கறிகள்",
        grains: "தானியங்கள்",
        fruits: "பழங்கள்",

        nearbyBuyersTitle: "அருகிலுள்ள வாங்குபவர்கள்",

        buyersText:
            "உங்கள் பயிர்களை வாங்க விரும்பும் வாங்குபவர்களை கண்டறியவும்.",

        useLocation: "என் இருப்பிடத்தைப் பயன்படுத்தவும்",

        priceComparison: "விலைகளை ஒப்பிடுங்கள்",

        priceComparisonText:
            "விற்பனைக்கு முன் சிறந்த சலுகையைத் தேர்ந்தெடுக்கவும்.",

        selectCrop: "பயிரைத் தேர்ந்தெடுக்கவும்",

        mySalesTitle: "என் விற்பனைகள்",

        salesText:
            "உங்கள் பயிர் விற்பனை மற்றும் மதிப்பிடப்பட்ட வருமானத்தை கண்காணிக்கவும்.",

        totalEarnings: "மொத்த வருமானம்",
        cropsSold: "விற்கப்பட்ட பயிர்கள்",

        addYourCrop: "உங்கள் பயிரைச் சேர்க்கவும்",
        cropName: "பயிர் பெயர்",
        quantity: "அளவு (கிலோ)",
        saveCrop: "பயிரை சேமிக்கவும்",

        voiceAssistant: "குரல் உதவியாளர்",

        footerText:
            "சிறந்த விற்பனை முடிவுகளுடன் விவசாயிகளுக்கு உதவுதல்."

    },


    kn: {

        home: "ಮುಖಪುಟ",
        crops: "ಬೆಳೆಗಳು",
        buyers: "ಹತ್ತಿರದ ಖರೀದಿದಾರರು",
        prices: "ಬೆಲೆ ಹೋಲಿಕೆ",
        sales: "ನನ್ನ ಮಾರಾಟ",

        welcome: "ರೈತರಿಗೆ ಸ್ವಾಗತ 👨‍🌾",
        sellSmart: "ಇಂದು ಉತ್ತಮವಾಗಿ ಮಾರಾಟ ಮಾಡೋಣ!",
        dashboardText:
            "ಉತ್ತಮ ಖರೀದಿದಾರರನ್ನು ಹುಡುಕಿ, ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಆದಾಯವನ್ನು ಹೆಚ್ಚಿಸಿ.",

        uploadCrop: "ಬೆಳೆ ಸೇರಿಸಿ",
        nearbyBuyers: "ಹತ್ತಿರದ ಖರೀದಿದಾರರು",
        comparePrices: "ಬೆಲೆ ಹೋಲಿಕೆ",
        mySales: "ನನ್ನ ಮಾರಾಟ",

        marketToday: "ಇಂದಿನ ಮಾರುಕಟ್ಟೆ",
        marketSubtitle: "ನಿಮ್ಮ ಬೆಳೆಗಳ ಇತ್ತೀಚಿನ ಮಾದರಿ ಬೆಲೆಗಳು",
        price: "ಬೆಲೆ",

        cropMarket: "ಬೆಳೆ ಮಾರುಕಟ್ಟೆ",
        cropMarketText:
            "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಲಭ್ಯವಿರುವ ಕೊಡುಗೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

        addCrop: "ಬೆಳೆ ಸೇರಿಸಿ",

        vegetables: "ತರಕಾರಿಗಳು",
        grains: "ಧಾನ್ಯಗಳು",
        fruits: "ಹಣ್ಣುಗಳು",

        nearbyBuyersTitle: "ಹತ್ತಿರದ ಖರೀದಿದಾರರು",

        buyersText:
            "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ಖರೀದಿಸಲು ಬಯಸುವ ಖರೀದಿದಾರರನ್ನು ಹುಡುಕಿ.",

        useLocation: "ನನ್ನ ಸ್ಥಳ ಬಳಸಿ",

        priceComparison: "ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ",

        priceComparisonText:
            "ಮಾರಾಟ ಮಾಡುವ ಮೊದಲು ಉತ್ತಮ ಕೊಡುಗೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",

        selectCrop: "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",

        mySalesTitle: "ನನ್ನ ಮಾರಾಟ",

        salesText:
            "ನಿಮ್ಮ ಬೆಳೆ ಮಾರಾಟ ಮತ್ತು ಅಂದಾಜು ಆದಾಯವನ್ನು ಪರಿಶೀಲಿಸಿ.",

        totalEarnings: "ಒಟ್ಟು ಆದಾಯ",
        cropsSold: "ಮಾರಾಟವಾದ ಬೆಳೆಗಳು",

        addYourCrop: "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸೇರಿಸಿ",
        cropName: "ಬೆಳೆಯ ಹೆಸರು",
        quantity: "ಪ್ರಮಾಣ (ಕೆಜಿ)",
        saveCrop: "ಬೆಳೆ ಉಳಿಸಿ",

        voiceAssistant: "ಧ್ವನಿ ಸಹಾಯಕ",

        footerText:
            "ಉತ್ತಮ ಮಾರಾಟ ನಿರ್ಧಾರಗಳ ಮೂಲಕ ರೈತರನ್ನು ಸಬಲಗೊಳಿಸುವುದು."

    }

};


/* =====================================================
   SHOW SECTION
===================================================== */

function showSection(sectionId, button = null) {

    document.querySelectorAll(".section").forEach(section => {

        section.classList.remove("active");

    });

    const section = document.getElementById(sectionId);

    if (section) {

        section.classList.add("active");

    }


    document.querySelectorAll(".nav-btn").forEach(btn => {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


/* =====================================================
   DISPLAY CROPS
===================================================== */

function filterCrops(category, button = null) {

    if (button) {

        document.querySelectorAll(".category-btn").forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    }


    const container =
        document.getElementById("cropContainer");

    container.innerHTML = "";


    crops[category].forEach(crop => {

        const card = document.createElement("div");

        card.className = "crop-item";

        card.innerHTML = `

            <div class="emoji">${crop.emoji}</div>

            <h3>${crop.name}</h3>

            <p>Available market price</p>

            <div class="crop-price">
                ₹${crop.price} / ${crop.unit}
            </div>

        `;

        container.appendChild(card);

    });

}


/* =====================================================
   DISPLAY BUYERS
===================================================== */

function displayBuyers() {

    const container =
        document.getElementById("buyerContainer");

    container.innerHTML = "";


    buyers.forEach(buyer => {

        const card = document.createElement("div");

        card.className = "buyer-card";


        card.innerHTML = `

            <div class="buyer-logo">
                ${buyer.icon}
            </div>

            <div>

                <h3>${buyer.name}</h3>

                <p>
                    Wants: ${buyer.crop}
                    &nbsp; • &nbsp;
                    📍 ${buyer.distance}
                </p>

            </div>

            <div>

                <strong style="color:var(--green);font-size:18px;">
                    ₹${buyer.price}/kg
                </strong>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =====================================================
   PRICE COMPARISON
===================================================== */

function comparePrices() {

    const crop =
        document.getElementById("compareCrop").value;


    const result =
        document.getElementById("comparisonResult");


    const offers = buyers.filter(buyer => {

        return buyer.crop === crop;

    });


    let html = "";


    if (offers.length === 0) {

        html = `

            <div class="offer">

                <div>
                    No sample buyer offers available for ${crop}.
                </div>

            </div>

        `;

    } else {

        const highest =
            Math.max(...offers.map(o => o.price));


        offers.forEach(offer => {

            const best =
                offer.price === highest;


            html += `

                <div class="offer ${best ? "best-offer" : ""}">

                    <div>

                        <strong>${offer.name}</strong>

                        <p>
                            📍 ${offer.distance}
                        </p>

                    </div>

                    <div class="offer-price">

                        ₹${offer.price}/kg

                    </div>

                    <div>

                        ${
                            best
                            ? "🏆 Best Offer"
                            : "Available"
                        }

                    </div>

                </div>

            `;

        });

    }


    result.innerHTML = html;

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(

        "dharaDarkMode",

        isDark ? "true" : "false"

    );

}


/* =====================================================
   LOAD DARK MODE
===================================================== */

function loadDarkMode() {

    const saved =
        localStorage.getItem("dharaDarkMode");


    if (saved === "true") {

        document.body.classList.add("dark");

    }

}


/* =====================================================
   LANGUAGE TRANSLATION
===================================================== */

function changeLanguage() {

    const language =
        document.getElementById("languageSelect").value;


    const selected =
        translations[language];


    document.querySelectorAll("[data-key]").forEach(element => {

        const key =
            element.getAttribute("data-key");


        if (selected[key]) {

            element.textContent =
                selected[key];

        }

    });


    document.documentElement.lang =
        language;


    localStorage.setItem(

        "dharaLanguage",

        language

    );

}


/* =====================================================
   LOAD LANGUAGE
===================================================== */

function loadLanguage() {

    const saved =
        localStorage.getItem("dharaLanguage") || "en";


    document.getElementById("languageSelect").value =
        saved;


    changeLanguage();

}


/* =====================================================
   CROP MODAL
===================================================== */

function openCropForm() {

    document
        .getElementById("cropModal")
        .classList.add("show");

}


function closeCropForm() {

    document
        .getElementById("cropModal")
        .classList.remove("show");

}


/* =====================================================
   ADD CROP
===================================================== */

function addCrop() {

    const crop =
        document.getElementById("newCrop").value;


    const quantity =
        document.getElementById("quantity").value;


    if (!quantity || quantity <= 0) {

        alert("Please enter a valid quantity.");

        return;

    }


    alert(

        `${crop} (${quantity} kg) has been added successfully!`

    );


    document.getElementById("quantity").value = "";

    closeCropForm();

}


/* =====================================================
   LOCATION
===================================================== */

function findLocation() {

    if (!navigator.geolocation) {

        alert("Location is not supported by your browser.");

        return;

    }


    navigator.geolocation.getCurrentPosition(

        position => {

            const lat =
                position.coords.latitude;

            const lon =
                position.coords.longitude;


            alert(

                `Location detected!\nLatitude: ${lat.toFixed(4)}\nLongitude: ${lon.toFixed(4)}`

            );

        },

        () => {

            alert(
                "Unable to get your location. Please allow location access."
            );

        }

    );

}


/* =====================================================
   VOICE ASSISTANT
===================================================== */

let recognition = null;


function startVoiceAssistant() {

    const voiceBox =
        document.getElementById("voiceBox");


    const voiceStatus =
        document.getElementById("voiceStatus");


    voiceBox.classList.add("show");


    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        voiceStatus.textContent =
            "Voice recognition is not supported in this browser.";

        return;

    }


    recognition =
        new SpeechRecognition();


    const language =
        document.getElementById("languageSelect").value;


    const speechLanguages = {

        en: "en-IN",
        te: "te-IN",
        hi: "hi-IN",
        ta: "ta-IN",
        kn: "kn-IN"

    };


    recognition.lang =
        speechLanguages[language] || "en-IN";


    recognition.continuous = false;

    recognition.interimResults = false;


    voiceStatus.textContent =
        "🎙️ Listening... Speak now";


    recognition.start();


    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;


        voiceStatus.textContent =
            `You said: "${text}"`;


        processVoiceCommand(text);

    };


    recognition.onerror = function() {

        voiceStatus.textContent =
            "Could not hear you. Please try again.";

    };

}


/* =====================================================
   VOICE COMMANDS
===================================================== */

function processVoiceCommand(command) {

    const text =
        command.toLowerCase();


    if (
        text.includes("crop") ||
        text.includes("పంట") ||
        text.includes("फसल")
    ) {

        showSection("crops");

        speakText(
            "Opening crop market"
        );

        return;

    }


    if (
        text.includes("buyer") ||
        text.includes("खरीदार") ||
        text.includes("కొనుగోలు")
    ) {

        showSection("buyers");

        speakText(
            "Opening nearby buyers"
        );

        return;

    }


    if (
        text.includes("price") ||
        text.includes("कीमत") ||
        text.includes("ధర")
    ) {

        showSection("prices");

        speakText(
            "Opening price comparison"
        );

        return;

    }


    if (
        text.includes("sale") ||
        text.includes("बिक्री") ||
        text.includes("అమ్మకం")
    ) {

        showSection("sales");

        speakText(
            "Opening your sales"
        );

        return;

    }


    speakText(
        "I can help you open crops, buyers, price comparison or your sales."
    );

}


/* =====================================================
   TEXT TO SPEECH
===================================================== */

function speakText(text) {

    if (!("speechSynthesis" in window)) {

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    const language =
        document.getElementById("languageSelect").value;


    const speechLanguages = {

        en: "en-IN",
        te: "te-IN",
        hi: "hi-IN",
        ta: "ta-IN",
        kn: "kn-IN"

    };


    speech.lang =
        speechLanguages[language] || "en-IN";


    window.speechSynthesis.speak(speech);

}


/* =====================================================
   CLOSE VOICE
===================================================== */

function closeVoiceAssistant() {

    document
        .getElementById("voiceBox")
        .classList.remove("show");


    if (recognition) {

        recognition.stop();

    }

}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    loadDarkMode();

    loadLanguage();

    filterCrops("vegetables");

    displayBuyers();

    comparePrices();

});