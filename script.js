/**
 * Rohith Groceries - Complete Application Engine
 * Features:
 * - Bilingual Product Catalog (English + Tamil)
 * - Complete Product CRUD (Add, Edit, Delete, Stock Adjustment)
 * - Editable Store & Contact Details
 * - Scheduled Delivery Dates & Time Slots
 * - Smart Automation (Auto-Timer Progression, Auto-Stock Deduction, 4-digit OTP)
 * - Order Management (Edit, Delete, Clear History)
 * - Persistent Storage in localStorage
 */

// ==========================================================================
// 1. DATA: BILINGUAL GROCERY PRODUCTS (ENGLISH + TAMIL)
// ==========================================================================
const DEFAULT_BILINGUAL_PRODUCTS = [
  // --- Category 1: Dals & Pulses (பருப்பு வகைகள்) ---
  { id: 1, nameEn: "Premium Toor Dal (Arhar)", nameTa: "துவரம் பருப்பு", category: "dals", price: 165, mrp: 190, unit: "1 kg", icon: "🌾", rating: 4.8, stock: 45, isDeal: true },
  { id: 2, nameEn: "Yellow Moong Dal Split", nameTa: "பாசிப் பருப்பு", category: "dals", price: 140, mrp: 160, unit: "1 kg", icon: "🥣", rating: 4.7, stock: 50 },
  { id: 3, nameEn: "Green Moong Whole (Sabut)", nameTa: "பச்சை பயறு", category: "dals", price: 150, mrp: 175, unit: "1 kg", icon: "🌱", rating: 4.6, stock: 35 },
  { id: 4, nameEn: "Chana Dal (Bengal Gram)", nameTa: "கடலைப் பருப்பு", category: "dals", price: 110, mrp: 130, unit: "1 kg", icon: "🍲", rating: 4.9, stock: 60, isDeal: true },
  { id: 5, nameEn: "Urad Dal White Whole (Gota)", nameTa: "உளுத்தம் பருப்பு (முழு)", category: "dals", price: 155, mrp: 180, unit: "1 kg", icon: "🥣", rating: 4.8, stock: 40 },
  { id: 6, nameEn: "Urad Dal Split (Chilka)", nameTa: "உளுத்தம் பருப்பு (உடைத்தது)", category: "dals", price: 145, mrp: 170, unit: "1 kg", icon: "🥣", rating: 4.5, stock: 25 },
  { id: 7, nameEn: "Masoor Dal (Red Lentils)", nameTa: "மசூர் பருப்பு", category: "dals", price: 125, mrp: 145, unit: "1 kg", icon: "🍛", rating: 4.7, stock: 45 },
  { id: 8, nameEn: "Kabuli Chana (White Chickpeas)", nameTa: "வெள்ளை கொண்டைக்கடலை", category: "dals", price: 170, mrp: 200, unit: "1 kg", icon: "🥘", rating: 4.9, stock: 30 },
  { id: 9, nameEn: "Kala Chana (Brown Chickpeas)", nameTa: "கருப்பு கொண்டைக்கடலை", category: "dals", price: 95, mrp: 115, unit: "1 kg", icon: "🥣", rating: 4.6, stock: 55 },
  { id: 10, nameEn: "Rajma Kashmiri (Kidney Beans)", nameTa: "காஷ்மீரி ராஜ்மா", category: "dals", price: 185, mrp: 215, unit: "1 kg", icon: "🫘", rating: 4.9, stock: 28 },
  { id: 11, nameEn: "Black Eyed Peas (Lobia / Karamani)", nameTa: "காராமணி பயறு", category: "dals", price: 130, mrp: 150, unit: "1 kg", icon: "🌱", rating: 4.5, stock: 20 },
  { id: 12, nameEn: "Roasted Gram (Pottukadlai)", nameTa: "பொட்டுக் கடலை", category: "dals", price: 70, mrp: 85, unit: "500 g", icon: "🥣", rating: 4.7, stock: 65 },

  // --- Category 2: Spices & Masalas (மசாலா மற்றும் மளிகை) ---
  { id: 13, nameEn: "Everest Garam Masala Powder", nameTa: "கரம் மசாலா தூள்", category: "spices", price: 78, mrp: 88, unit: "100 g", icon: "🌶️", rating: 4.9, stock: 80, isDeal: true },
  { id: 14, nameEn: "MDH Sambar Masala Powder", nameTa: "சாம்பார் பொடி", category: "spices", price: 82, mrp: 95, unit: "100 g", icon: "🍲", rating: 4.8, stock: 70 },
  { id: 15, nameEn: "Catch Pure Red Chilli Powder", nameTa: "தனி மிளகாய் தூள்", category: "spices", price: 195, mrp: 230, unit: "500 g", icon: "🌶️", rating: 4.8, stock: 50 },
  { id: 16, nameEn: "Everest Pure Turmeric Powder", nameTa: "தூய மஞ்சள் தூள்", category: "spices", price: 140, mrp: 165, unit: "500 g", icon: "✨", rating: 4.9, stock: 75, isDeal: true },
  { id: 17, nameEn: "Catch Coriander Powder (Dhania)", nameTa: "மல்லித் தூள் (தனியா)", category: "spices", price: 135, mrp: 160, unit: "500 g", icon: "🌿", rating: 4.7, stock: 60 },
  { id: 18, nameEn: "Whole Cumin Seeds (Jeera)", nameTa: "சீரகம் (நற்சீரகம்)", category: "spices", price: 160, mrp: 190, unit: "250 g", icon: "🌾", rating: 4.8, stock: 45 },
  { id: 19, nameEn: "Mustard Seeds (Rai / Kadugu)", nameTa: "கடுகு", category: "spices", price: 55, mrp: 70, unit: "250 g", icon: "✨", rating: 4.7, stock: 90 },
  { id: 20, nameEn: "Green Cardamom (Elaichi Pods)", nameTa: "ஏலக்காய்", category: "spices", price: 190, mrp: 230, unit: "50 g", icon: "🍃", rating: 4.9, stock: 35 },
  { id: 21, nameEn: "Aromatic Whole Cloves (Laung)", nameTa: "கிராம்பு (லவங்கம்)", category: "spices", price: 85, mrp: 105, unit: "50 g", icon: "🌰", rating: 4.8, stock: 40 },
  { id: 22, nameEn: "Black Pepper Whole (Milagu)", nameTa: "கருப்பு மிளகு", category: "spices", price: 110, mrp: 130, unit: "100 g", icon: "⚫", rating: 4.8, stock: 50 },
  { id: 23, nameEn: "Cinnamon Sticks (Pattai)", nameTa: "இலவங்கப்பட்டை", category: "spices", price: 75, mrp: 95, unit: "100 g", icon: "🪵", rating: 4.7, stock: 45 },
  { id: 24, nameEn: "Fenugreek Seeds (Vendhayam)", nameTa: "வெந்தயம்", category: "spices", price: 45, mrp: 60, unit: "200 g", icon: "🌾", rating: 4.6, stock: 60 },
  { id: 25, nameEn: "Everest Chicken Curry Masala", nameTa: "சிக்கன் மசாலா தூள்", category: "spices", price: 85, mrp: 98, unit: "100 g", icon: "🍗", rating: 4.9, stock: 65 },
  { id: 26, nameEn: "Everest Royal Biryani Masala", nameTa: "பிரியாணி மசாலா தூள்", category: "spices", price: 92, mrp: 110, unit: "100 g", icon: "🍚", rating: 4.9, stock: 55 },
  { id: 27, nameEn: "MDH Pav Bhaji Special Masala", nameTa: "பாவ் பாஜி மசாலா", category: "spices", price: 80, mrp: 92, unit: "100 g", icon: "🧈", rating: 4.8, stock: 40 },
  { id: 28, nameEn: "Kasuri Methi (Dried Leaves)", nameTa: "கசூரி மேத்தி", category: "spices", price: 40, mrp: 50, unit: "50 g", icon: "🌿", rating: 4.7, stock: 70 },

  // --- Category 3: Rice & Flours (அரிசி மற்றும் மாவு வகைகள்) ---
  { id: 29, nameEn: "India Gate Classic Basmati Rice", nameTa: "பாசுமதி அரிசி", category: "rice-flour", price: 180, mrp: 215, unit: "1 kg", icon: "🍚", rating: 4.9, stock: 40, isDeal: true },
  { id: 30, nameEn: "Royal Sona Masoori Rice (Aged)", nameTa: "சோனா மசூரி அரிசி", category: "rice-flour", price: 320, mrp: 360, unit: "5 kg", icon: "🍚", rating: 4.8, stock: 35, isDeal: true },
  { id: 31, nameEn: "Premium Soft Idli Rice (Gundu Arisi)", nameTa: "இட்லி அரிசி (குண்டு)", category: "rice-flour", price: 280, mrp: 320, unit: "5 kg", icon: "🥣", rating: 4.8, stock: 30 },
  { id: 32, nameEn: "Aashirvaad Sharbati Whole Wheat Atta", nameTa: "ஆசீர்வாத் கோதுமை மாவு", category: "rice-flour", price: 245, mrp: 280, unit: "5 kg", icon: "🌾", rating: 4.9, stock: 50, isDeal: true },
  { id: 33, nameEn: "Pure White Maida Flour", nameTa: "மைதா மாவு", category: "rice-flour", price: 50, mrp: 62, unit: "1 kg", icon: "🥟", rating: 4.6, stock: 65 },
  { id: 34, nameEn: "Roasted Sooji / Rava (Semolina)", nameTa: "வறுத்த ரவை", category: "rice-flour", price: 65, mrp: 78, unit: "1 kg", icon: "🥣", rating: 4.7, stock: 55 },
  { id: 35, nameEn: "Fortune Pure Besan (Gram Flour)", nameTa: "கடலை மாவு", category: "rice-flour", price: 110, mrp: 130, unit: "1 kg", icon: "🍲", rating: 4.8, stock: 45 },
  { id: 36, nameEn: "Thick Poha (Flattened Rice / Aval)", nameTa: "கெட்டி அவல்", category: "rice-flour", price: 60, mrp: 75, unit: "1 kg", icon: "🥣", rating: 4.7, stock: 50 },
  { id: 37, nameEn: "Organic Pure Ragi Flour (Kelvaragu)", nameTa: "கேழ்வரகு மாவு (ராகி)", category: "rice-flour", price: 75, mrp: 90, unit: "1 kg", icon: "🌱", rating: 4.8, stock: 35 },
  { id: 38, nameEn: "Organic High-Fiber Brown Rice", nameTa: "கைக்குத்தல் சிவப்பு/பழுப்பு அரிசி", category: "rice-flour", price: 130, mrp: 155, unit: "1 kg", icon: "🍚", rating: 4.6, stock: 25 },

  // --- Category 4: Oils, Salt & Sugar (எண்ணெய், உப்பு & சர்க்கரை) ---
  { id: 39, nameEn: "Tata Salt Vacuum Evaporated", nameTa: "டாடா உப்பு", category: "oils-sugar-salt", price: 28, mrp: 30, unit: "1 kg", icon: "🧂", rating: 4.9, stock: 120, isDeal: true },
  { id: 40, nameEn: "Natural Crystal Sea Salt (Kallu Uppu)", nameTa: "கல் உப்பு", category: "oils-sugar-salt", price: 20, mrp: 25, unit: "1 kg", icon: "🧂", rating: 4.7, stock: 80 },
  { id: 41, nameEn: "Pure Himalayan Pink Rock Salt", nameTa: "இந்துப்பு (பிங்க் சால்ட்)", category: "oils-sugar-salt", price: 90, mrp: 120, unit: "1 kg", icon: "🧂", rating: 4.8, stock: 40 },
  { id: 42, nameEn: "Madhur Pure & Hygienic Sugar", nameTa: "சுத்தமான சர்க்கரை", category: "oils-sugar-salt", price: 52, mrp: 60, unit: "1 kg", icon: "🍬", rating: 4.9, stock: 110, isDeal: true },
  { id: 43, nameEn: "Organic Jaggery Powder (Nattu Sarkarai)", nameTa: "நாட்டு வெல்லம் / சர்க்கரை", category: "oils-sugar-salt", price: 85, mrp: 105, unit: "1 kg", icon: "🍯", rating: 4.8, stock: 50 },
  { id: 44, nameEn: "Fortune Sunlite Refined Sunflower Oil", nameTa: "சூரியகாந்தி எண்ணெய்", category: "oils-sugar-salt", price: 145, mrp: 170, unit: "1 L Pouch", icon: "🌻", rating: 4.8, stock: 70, isDeal: true },
  { id: 45, nameEn: "Cold Pressed Pure Groundnut Oil", nameTa: "மரச்செக்கு கடலை எண்ணெய்", category: "oils-sugar-salt", price: 230, mrp: 265, unit: "1 L Bottle", icon: "🥜", rating: 4.9, stock: 30 },
  { id: 46, nameEn: "Parachute 100% Pure Coconut Oil", nameTa: "தூய தேங்காய் எண்ணெய்", category: "oils-sugar-salt", price: 280, mrp: 320, unit: "1 L Bottle", icon: "🥥", rating: 4.9, stock: 35 },
  { id: 47, nameEn: "Amul / Nandini Pure Cow Desi Ghee", nameTa: "தூய பசும் நெய்", category: "oils-sugar-salt", price: 325, mrp: 360, unit: "500 ml Jar", icon: "🧈", rating: 4.9, stock: 40, isDeal: true },

  // --- Category 5: Soaps & Personal Hygiene (சோப் மற்றும் சுகாதாரம்) ---
  { id: 48, nameEn: "Dettol Original Germ Protection Soap", nameTa: "டெட்டால் சோப் (4 பேக்)", category: "soaps", price: 180, mrp: 215, unit: "4 x 125 g", icon: "🧼", rating: 4.9, stock: 50, isDeal: true },
  { id: 49, nameEn: "Dove Cream Beauty Bathing Bar", nameTa: "டோவ் குளியல் சோப்", category: "soaps", price: 210, mrp: 245, unit: "3 x 100 g", icon: "🕊️", rating: 4.8, stock: 45 },
  { id: 50, nameEn: "Lifebuoy Total 10 Germ Protection", nameTa: "லைஃப்பாய் சோப்", category: "soaps", price: 140, mrp: 165, unit: "4 x 125 g", icon: "🧼", rating: 4.7, stock: 60 },
  { id: 51, nameEn: "Santoor Sandal & Turmeric Soap", nameTa: "சந்தூர் சந்தன சோப்", category: "soaps", price: 150, mrp: 175, unit: "4 x 100 g", icon: "✨", rating: 4.8, stock: 55 },
  { id: 52, nameEn: "Medimix 18 Herbs Classic Ayurvedic", nameTa: "மெடிமிக்ஸ் மூலிகை சோப்", category: "soaps", price: 145, mrp: 170, unit: "3 x 125 g", icon: "🌿", rating: 4.9, stock: 50 },
  { id: 53, nameEn: "Mysore Sandal Pure Sandalwood Soap", nameTa: "மைசூர் சாண்டல் சோப்", category: "soaps", price: 95, mrp: 110, unit: "150 g", icon: "🪵", rating: 4.9, stock: 65, isDeal: true },
  { id: 54, nameEn: "Dettol Liquid Handwash Refill", nameTa: "டெட்டால் ஹேண்ட்வாஷ் ரீஃபில்", category: "soaps", price: 115, mrp: 140, unit: "750 ml", icon: "🧴", rating: 4.8, stock: 60 },
  { id: 55, nameEn: "Colgate Strong Teeth Calcium Paste", nameTa: "கோல்கேட் டூத்பேஸ்ட்", category: "soaps", price: 120, mrp: 145, unit: "200 g Tube", icon: "🪥", rating: 4.9, stock: 80 },

  // --- Category 6: Shampoos & Hair Care (ஷாம்பு & தலைமுடி பராமரிப்பு) ---
  { id: 56, nameEn: "Clinic Plus Strong & Long Shampoo", nameTa: "கிளினிக் பிளஸ் ஷாம்பு", category: "shampoos", price: 190, mrp: 225, unit: "340 ml Bottle", icon: "🧴", rating: 4.8, stock: 65, isDeal: true },
  { id: 57, nameEn: "Head & Shoulders Cool Menthol Shampoo", nameTa: "ஹெட் & ஷோல்டர்ஸ் ஷாம்பு", category: "shampoos", price: 295, mrp: 350, unit: "340 ml Bottle", icon: "❄️", rating: 4.9, stock: 45 },
  { id: 58, nameEn: "Sunsilk Black Shine Amla Pearl Shampoo", nameTa: "சன்சில்க் பிளாக் ஷைன் ஷாம்பு", category: "shampoos", price: 220, mrp: 260, unit: "370 ml Bottle", icon: "✨", rating: 4.7, stock: 50 },
  { id: 59, nameEn: "Dove Intense Repair Hair Fall Shampoo", nameTa: "டோவ் ஹேர் ஃபால் ஷாம்பு", category: "shampoos", price: 285, mrp: 335, unit: "340 ml Bottle", icon: "🕊️", rating: 4.8, stock: 40 },
  { id: 60, nameEn: "Tresemme Keratin Smooth Shampoo", nameTa: "ட்ரிசெம்மி கெரட்டின் ஷாம்பு", category: "shampoos", price: 320, mrp: 380, unit: "340 ml Bottle", icon: "💆", rating: 4.9, stock: 30 },
  { id: 61, nameEn: "Parachute Advansed Aloe Vera Hair Oil", nameTa: "பாராசூட் கற்றாழை தேங்காய் எண்ணெய்", category: "shampoos", price: 140, mrp: 165, unit: "250 ml Bottle", icon: "🥥", rating: 4.8, stock: 55 },
  { id: 62, nameEn: "Dabur Amla Ayurvedic Thick Hair Oil", nameTa: "டாபர் ஆம்லா தலைமுடி எண்ணெய்", category: "shampoos", price: 130, mrp: 155, unit: "275 ml Bottle", icon: "🌿", rating: 4.7, stock: 50 },

  // --- Category 7: Tea, Coffee & Snacks (டீ, காபி & தின்பண்டங்கள்) ---
  { id: 63, nameEn: "Tata Tea Gold Rich Taste & Aroma", nameTa: "டாடா டீ கோல்ட்", category: "snacks-beverages", price: 310, mrp: 360, unit: "500 g Pack", icon: "🍵", rating: 4.9, stock: 60, isDeal: true },
  { id: 64, nameEn: "Red Label Natural Care Ayurvedic Tea", nameTa: "ரெட் லேபிள் டீ", category: "snacks-beverages", price: 290, mrp: 335, unit: "500 g Pack", icon: "☕", rating: 4.8, stock: 55 },
  { id: 65, nameEn: "Nescafe Classic 100% Pure Coffee", nameTa: "நெஸ்கஃபே கிளாசிக் காபி தூள்", category: "snacks-beverages", price: 225, mrp: 260, unit: "100 g Glass Jar", icon: "☕", rating: 4.9, stock: 50, isDeal: true },
  { id: 66, nameEn: "BRU Instant Coffee Chicory Blend", nameTa: "புரூ இன்ஸ்டன்ட் காபி தூள்", category: "snacks-beverages", price: 185, mrp: 215, unit: "100 g Jar", icon: "☕", rating: 4.7, stock: 45 },
  { id: 67, nameEn: "Cadbury Bournvita Nutrition Drink", nameTa: "போர்ன்விட்டா ஹெல்த் டிரிங்க்", category: "snacks-beverages", price: 240, mrp: 275, unit: "500 g Jar", icon: "🍫", rating: 4.8, stock: 40 },
  { id: 68, nameEn: "Maggi 2-Minute Masala Noodles", nameTa: "மேகி மசாலா நூடுல்ஸ்", category: "snacks-beverages", price: 56, mrp: 60, unit: "Pack of 4 (280g)", icon: "🍜", rating: 4.9, stock: 100, isDeal: true },
  { id: 69, nameEn: "Britannia Good Day Butter Cookies", nameTa: "குட் டே பட்டர் பிஸ்கட்", category: "snacks-beverages", price: 120, mrp: 140, unit: "600 g Family Pack", icon: "🍪", rating: 4.8, stock: 75 },
  { id: 70, nameEn: "Parle-G Original Glucose Biscuits", nameTa: "பார்லே-ஜி குளுக்கோஸ் பிஸ்கட்", category: "snacks-beverages", price: 75, mrp: 85, unit: "800 g Mega Pack", icon: "🍪", rating: 4.9, stock: 90 },
  { id: 71, nameEn: "Lay's India's Magic Masala Potato Chips", nameTa: "லேஸ் உருளைக்கிழங்கு சிப்ஸ்", category: "snacks-beverages", price: 40, mrp: 45, unit: "90 g Pack", icon: "🥔", rating: 4.8, stock: 70 },

  // --- Category 8: Cleaning & Household (சுத்தம் & வீட்டு உபயோகம்) ---
  { id: 72, nameEn: "Surf Excel Easy Wash Detergent Powder", nameTa: "சர்ஃப் எக்செல் வாஷிங் பவுடர்", category: "cleaning", price: 145, mrp: 170, unit: "1 kg Bag", icon: "🫧", rating: 4.9, stock: 70, isDeal: true },
  { id: 73, nameEn: "Ariel Matic Top Load Liquid Detergent", nameTa: "ஏரியல் மேட்டிக் திரவம்", category: "cleaning", price: 230, mrp: 275, unit: "1 L Bottle", icon: "🧴", rating: 4.8, stock: 45 },
  { id: 74, nameEn: "Rin Advanced Detergent Soap Bar", nameTa: "ரின் வாஷிங் சோப் (4 பேக்)", category: "cleaning", price: 80, mrp: 95, unit: "Pack of 4 (1kg)", icon: "🧼", rating: 4.7, stock: 60 },
  { id: 75, nameEn: "Vim Dishwash Gel Lemon Anti-Smell", nameTa: "விம் பாத்திரம் கழுவும் ஜெல்", category: "cleaning", price: 155, mrp: 180, unit: "750 ml Bottle", icon: "🍋", rating: 4.9, stock: 75, isDeal: true },
  { id: 76, nameEn: "Harpic Power Plus 10X Max Cleaner", nameTa: "ஹார்பிக் டாய்லெட் கிளீனர்", category: "cleaning", price: 195, mrp: 225, unit: "1 L Bottle", icon: "🚽", rating: 4.9, stock: 65 },
  { id: 77, nameEn: "Lizol Citrus Surface & Floor Disinfectant", nameTa: "லைசால் தரை சுத்திகரிப்பான்", category: "cleaning", price: 210, mrp: 245, unit: "1 L Bottle", icon: "🧹", rating: 4.8, stock: 55 },
  { id: 78, nameEn: "Good Knight Gold Flash Vaporizer Refill", nameTa: "குட் நைட் கொசு மருந்து ரீஃபில்", category: "cleaning", price: 140, mrp: 165, unit: "Twin Pack (90ml)", icon: "🦟", rating: 4.8, stock: 60 },
  { id: 79, nameEn: "Odonil Room Air Freshener Blocks", nameTa: "ஓடோனில் ரூம் பிரெஷ்னர்", category: "cleaning", price: 180, mrp: 210, unit: "Pack of 4", icon: "🌺", rating: 4.8, stock: 55 }
];

// Default Store Contact Info
const DEFAULT_STORE_INFO = {
  name: "Rohith Groceries",
  proprietor: "Rohith Kumar",
  hours: "Mon - Sun (6:30 AM – 10:30 PM)",
  address: "#42, Market Main Road, Near Clock Tower, Gandhi Bazaar, Bengaluru - 560004",
  phone: "8940826965",
  whatsapp: "8940826965",  // Shop owner WhatsApp — orders will be sent here
  email: "orders@rohithgroceries.com"
};

// ==========================================================================
// 2. APPLICATION STATE STORE
// ==========================================================================
class AppStore {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("rg_user")) || null;
    this.storeInfo = JSON.parse(localStorage.getItem("rg_store_info")) || DEFAULT_STORE_INFO;
    this.products = JSON.parse(localStorage.getItem("rg_products")) || DEFAULT_BILINGUAL_PRODUCTS;
    this.cart = JSON.parse(localStorage.getItem("rg_cart")) || {};
    this.orders = JSON.parse(localStorage.getItem("rg_orders")) || [];
    this.transactions = JSON.parse(localStorage.getItem("rg_transactions")) || [];

    // UI State
    this.isManagerMode = false;
    this.currentCategory = "all";
    this.searchQuery = "";
    this.sortOption = "featured";

    // Pending order (built on checkout, saved only when WhatsApp is clicked)
    this.pendingOrder = null;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === "admin";
  }

  loginAsCustomer() {
    this.currentUser = { role: "customer", loginTime: new Date().toISOString() };
    localStorage.setItem("rg_user", JSON.stringify(this.currentUser));
  }

  loginAsAdmin() {
    this.currentUser = { username: "admin", role: "admin", loginTime: new Date().toISOString() };
    localStorage.setItem("rg_user", JSON.stringify(this.currentUser));
  }

  logout() {
    this.currentUser = null;
    this.pendingOrder = null;
    localStorage.removeItem("rg_user");
  }

  saveProducts() {
    localStorage.setItem("rg_products", JSON.stringify(this.products));
  }

  saveStoreInfo() {
    localStorage.setItem("rg_store_info", JSON.stringify(this.storeInfo));
  }

  saveCart() {
    localStorage.setItem("rg_cart", JSON.stringify(this.cart));
  }

  saveOrdersAndTransactions() {
    localStorage.setItem("rg_orders", JSON.stringify(this.orders));
    localStorage.setItem("rg_transactions", JSON.stringify(this.transactions));
  }

  // --- Product Management (Admin Only) ---
  addProduct(newProd) {
    newProd.id = Date.now();
    this.products.unshift(newProd);
    this.saveProducts();
  }

  updateProduct(updatedProd) {
    const idx = this.products.findIndex(p => p.id === updatedProd.id);
    if (idx !== -1) {
      this.products[idx] = { ...this.products[idx], ...updatedProd };
      this.saveProducts();
    }
  }

  deleteProduct(productId) {
    this.products = this.products.filter(p => p.id !== productId);
    delete this.cart[productId];
    this.saveProducts();
    this.saveCart();
  }

  toggleProductStock(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      if (prod.stock > 0) {
        prod.prevStock = prod.stock;
        prod.stock = 0;
      } else {
        prod.stock = prod.prevStock || 50;
      }
      this.saveProducts();
    }
  }

  // --- Cart Management ---
  addToCart(productId, qty = 1) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod || prod.stock <= 0) return;
    if (!this.cart[productId]) this.cart[productId] = 0;
    this.cart[productId] += qty;
    if (this.cart[productId] > prod.stock) this.cart[productId] = prod.stock;
    if (this.cart[productId] <= 0) delete this.cart[productId];
    this.saveCart();
  }

  getCartCount() {
    return Object.values(this.cart).reduce((sum, q) => sum + q, 0);
  }

  getCartSubtotal() {
    return Object.entries(this.cart).reduce((sum, [pId, qty]) => {
      const prod = this.products.find(p => p.id === parseInt(pId));
      return sum + (prod ? prod.price * qty : 0);
    }, 0);
  }

  // --- Build pending order (NOT saved yet — saved only when WhatsApp is clicked) ---
  buildPendingOrder(customerData, deliveryDateSlot) {
    const cartItems = Object.entries(this.cart).map(([pId, qty]) => {
      const prod = this.products.find(p => p.id === parseInt(pId));
      return {
        id: prod.id,
        nameEn: prod.nameEn,
        nameTa: prod.nameTa,
        unit: prod.unit,
        price: prod.price,
        quantity: qty
      };
    });

    const subtotal = this.getCartSubtotal();
    const deliveryFee = subtotal >= 300 ? 0 : 30;
    const finalAmount = subtotal + deliveryFee;
    const orderNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `RG-${orderNum}`;
    const txnId = `TXN-${orderNum + 500}`;
    const now = new Date();
    const timestamp = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ", " +
                      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.pendingOrder = {
      orderId,
      txnId,
      timestamp,
      deliveryDate: deliveryDateSlot,
      customer: customerData,
      items: cartItems,
      totalAmount: finalAmount,
      paymentMethod: "Cash on Delivery (COD)",
      paymentStatus: "Pending COD",
      orderStatus: "Placed",
      placedTime: Date.now()
    };

    return this.pendingOrder;
  }

  // --- Confirm order ONLY when WhatsApp is clicked ---
  confirmAndSavePendingOrder() {
    if (!this.pendingOrder) return null;
    const order = this.pendingOrder;

    // Auto-deduct stock now that order is confirmed
    order.items.forEach(item => {
      const prod = this.products.find(p => p.id === item.id);
      if (prod) prod.stock = Math.max(0, prod.stock - item.quantity);
    });
    this.saveProducts();

    const newTxn = {
      txnId: order.txnId,
      orderId: order.orderId,
      date: order.timestamp,
      customerName: order.customer.name,
      phone: order.customer.phone,
      itemCount: order.items.reduce((acc, i) => acc + i.quantity, 0),
      amount: order.totalAmount,
      paymentMode: "Cash on Delivery",
      status: "Pending Delivery"
    };

    this.orders.unshift(order);
    this.transactions.unshift(newTxn);
    this.saveOrdersAndTransactions();

    // Clear cart after confirmed
    this.cart = {};
    this.saveCart();
    this.pendingOrder = null;

    return order;
  }

  // --- Delete orders (Admin Only) ---
  deleteOrder(orderId) {
    this.orders = this.orders.filter(o => o.orderId !== orderId);
    this.transactions = this.transactions.filter(t => t.orderId !== orderId);
    this.saveOrdersAndTransactions();
  }

  clearAllOrders() {
    this.orders = [];
    this.transactions = [];
    this.saveOrdersAndTransactions();
  }
}

// Global store instance
const store = new AppStore();

// ==========================================================================
// 3. UI CONTROLLER & APP INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();
  initNavigation();
  updateStoreContactDisplay();
  updateCartBadge();
  setupEventListeners();

  if (store.currentUser) {
    showAppScreen();
  } else {
    showLoginScreen();
  }
});

// --- Auth Handling ---
function initAuthUI() {
  // Customer "Enter Store" button — direct entry without credentials
  const customerEnterBtn = document.getElementById("customerEnterBtn");
  if (customerEnterBtn) {
    customerEnterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      store.loginAsCustomer();
      showAppScreen();
    });
  }

  // Admin login form — requires admin / admin
  const loginForm = document.getElementById("loginForm");
  const authError = document.getElementById("authError");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById("usernameInput");
      const passwordInput = document.getElementById("passwordInput");
      const username = usernameInput ? usernameInput.value.trim() : "";
      const password = passwordInput ? passwordInput.value.trim() : "";

      if (username === "admin" && password === "admin") {
        if (authError) authError.classList.add("hidden");
        store.loginAsAdmin();
        showToast("Admin logged in successfully!");
        showAppScreen();
      } else {
        if (authError) {
          authError.textContent = "Incorrect admin credentials. Please enter valid admin username and password.";
          authError.classList.remove("hidden");
        }
      }
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      store.logout();
      showLoginScreen();
    });
  }
}

function showLoginScreen() {
  document.getElementById("loginScreen")?.classList.remove("hidden");
  document.getElementById("appScreen")?.classList.add("hidden");
}

function showAppScreen() {
  document.getElementById("loginScreen")?.classList.add("hidden");
  document.getElementById("appScreen")?.classList.remove("hidden");

  applyRoleVisibility();
  switchTab("home");
  renderProductsCatalog();
  updateCartBadge();
}

// Show/hide elements based on user role (Admin vs Customer)
function applyRoleVisibility() {
  const isAdmin = store.isAdmin();

  // Admin-only nav tabs (Order Placed, Transaction History)
  document.querySelectorAll(".admin-only-nav").forEach(el => {
    el.style.display = isAdmin ? "" : "none";
  });

  // Admin-only product toolbar buttons (Add New, Manage Stock)
  document.querySelectorAll(".admin-only-btn").forEach(el => {
    el.style.display = isAdmin ? "" : "none";
  });

  // Admin badge in nav
  const adminBadge = document.getElementById("adminRoleBadge");
  if (adminBadge) adminBadge.style.display = isAdmin ? "inline-flex" : "none";

  // Edit Store details button
  document.querySelectorAll(".btn-edit-contact").forEach(el => {
    el.style.display = isAdmin ? "" : "none";
  });

  // Turn off manager mode if not admin
  if (!isAdmin) {
    store.isManagerMode = false;
  }
}

// --- Navigation Handling ---
function initNavigation() {
  document.querySelectorAll("[data-nav-target]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-nav-target");
      if (target) switchTab(target);
      document.getElementById("navMenuStraight")?.classList.remove("mobile-open");
    });
  });

  document.getElementById("mobileNavToggle")?.addEventListener("click", () => {
    document.getElementById("navMenuStraight")?.classList.toggle("mobile-open");
  });
}

window.switchTab = function(sectionName) {
  // Guard: Customers cannot access orders or transactions
  if (!store.isAdmin() && (sectionName === "orders" || sectionName === "transactions")) {
    showToast("Please log in as admin to access this section.");
    return;
  }

  ["home", "about", "products", "orders", "transactions"].forEach(sec => {
    document.getElementById(`section-${sec}`)?.classList.add("hidden");
  });
  document.getElementById(`section-${sectionName}`)?.classList.remove("hidden");

  document.querySelectorAll(".nav-link-item").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-nav-target") === sectionName);
  });

  if (sectionName === "products") renderProductsCatalog();
  else if (sectionName === "orders") renderOrdersDashboard();
  else if (sectionName === "transactions") renderTransactionHistory();

  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ==========================================================================
// 4. BILINGUAL PRODUCTS CATALOG
// ==========================================================================
function renderProductsCatalog() {
  const grid = document.getElementById("productsGrid");
  const countLabel = document.getElementById("productsCountLabel");
  const allCountBadge = document.getElementById("catCountAll");
  const outCountBadge = document.getElementById("outOfStockCount");
  if (!grid) return;

  const totalCount = store.products.length;
  const outCount = store.products.filter(p => p.stock <= 0).length;
  if (allCountBadge) allCountBadge.textContent = totalCount;
  if (outCountBadge) outCountBadge.textContent = outCount;

  let filtered = store.products.filter(item => {
    if (store.currentCategory === "out-of-stock") return item.stock <= 0;
    const matchCat = store.currentCategory === "all" || item.category === store.currentCategory;
    const matchSearch = store.searchQuery === "" ||
      item.nameEn.toLowerCase().includes(store.searchQuery.toLowerCase()) ||
      item.nameTa.toLowerCase().includes(store.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (store.sortOption === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (store.sortOption === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (store.sortOption === "name-az") filtered.sort((a, b) => a.nameEn.localeCompare(b.nameEn));

  if (countLabel) countLabel.textContent = `Showing ${filtered.length} of ${store.products.length} grocery items`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:4rem 1rem; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🔍</div>
        <h3 style="color:var(--text-main); font-weight:800;">No items found</h3>
        <p>Try searching for salt, sugar, dal, masala, soap, or shampoo</p>
        <button class="btn-hero-primary" style="margin-top:1rem;" onclick="resetProductFilters()">View All Products</button>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isOut = product.stock <= 0;
    const cartQty = store.cart[product.id] || 0;
    const catLabel = getCategoryLabel(product.category);
    const showManagerTools = store.isAdmin() && store.isManagerMode;

    return `
      <div class="product-card ${isOut ? 'is-out-of-stock' : ''}">
        <span class="product-badge-cat">${catLabel}</span>
        <div class="product-img-box">
          <div class="product-icon-art">${product.icon}</div>
        </div>
        <div class="product-info-wrap">
          <div class="product-unit">${product.unit}</div>
          <h4 class="product-name-en">${product.nameEn}</h4>
          <div class="product-name-ta">${product.nameTa}</div>
          <div class="product-stock-tag ${isOut ? 'out' : ''}">
            <span class="product-stock-dot"></span>
            ${isOut ? '❌ Out of Stock' : `In Stock (${product.stock})`}
          </div>
        </div>
        <div class="product-bottom-row">
          <div>
            <span class="product-price">₹${product.price}</span>
            <span class="product-mrp">MRP ₹${product.mrp}</span>
          </div>
          <div>
            ${isOut ? `
              <span class="btn-out-of-stock">Out of Stock</span>
            ` : cartQty > 0 ? `
              <div class="cart-stepper-btn">
                <button class="btn-step" onclick="handleStepQty(${product.id}, -1)">−</button>
                <span class="step-qty">${cartQty}</span>
                <button class="btn-step" onclick="handleStepQty(${product.id}, 1)">+</button>
              </div>
            ` : `
              <button class="btn-add-cart" onclick="handleAddToCart(${product.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add
              </button>
            `}
          </div>
        </div>
        ${showManagerTools ? `
          <div class="card-manager-tools">
            <button class="btn-tool-pill edit" onclick="openEditProductModal(${product.id})">✏️ Edit</button>
            <button class="btn-tool-pill stock-toggle ${isOut ? 'is-out' : ''}" onclick="handleToggleProductStock(${product.id})">
              ${isOut ? '🟢 Restock' : '🔴 Out of Stock'}
            </button>
            <button class="btn-tool-pill delete" onclick="handleDeleteProduct(${product.id})">🗑️ Delete</button>
          </div>
        ` : ''}
      </div>`;
  }).join("");
}

function getCategoryLabel(catKey) {
  const map = {
    "dals": "Dal & Pulses", "spices": "Spices", "rice-flour": "Rice & Atta",
    "oils-sugar-salt": "Oils & Sugar", "soaps": "Soaps", "shampoos": "Hair Care",
    "snacks-beverages": "Tea & Snacks", "cleaning": "Cleaning"
  };
  return map[catKey] || catKey;
}

window.filterCategory = function(category) {
  store.currentCategory = category;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-category") === category);
  });
  renderProductsCatalog();
};

window.resetProductFilters = function() {
  store.currentCategory = "all";
  store.searchQuery = "";
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";
  filterCategory("all");
};

// Admin-only: Toggle Manager Mode
window.toggleStoreManagerMode = function() {
  if (!store.isAdmin()) return;
  store.isManagerMode = !store.isManagerMode;
  const btn = document.getElementById("toggleManagerModeBtn");
  if (btn) {
    btn.classList.toggle("active", store.isManagerMode);
    btn.innerHTML = store.isManagerMode ? "<span>✅ Manager Mode ON</span>" : "<span>⚙️ Manage Stock</span>";
  }
  renderProductsCatalog();
  showToast(store.isManagerMode ? "Edit/Delete controls are now visible on each product." : "Manager Mode exited.");
};

// ==========================================================================
// 5. ADMIN: PRODUCT CRUD
// ==========================================================================
window.openAddProductModal = function() {
  if (!store.isAdmin()) return;
  document.getElementById("addProductForm")?.reset();
  const emojiInput = document.getElementById("selectedNewEmoji");
  if (emojiInput) emojiInput.value = "🌾";
  document.getElementById("addProductModal")?.classList.add("open");
};

window.closeAddProductModal = function() {
  document.getElementById("addProductModal")?.classList.remove("open");
};

window.selectNewProdEmoji = function(emoji, btnEl) {
  const emojiInput = document.getElementById("selectedNewEmoji");
  if (emojiInput) emojiInput.value = emoji;
  document.querySelectorAll(".emoji-option-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
};

window.handleSaveNewProduct = function(event) {
  event.preventDefault();
  if (!store.isAdmin()) return;
  const nameEn = document.getElementById("newProdName")?.value.trim() || "";
  const nameTa = document.getElementById("newProdNameTa")?.value.trim() || nameEn;
  const category = document.getElementById("newProdCategory")?.value || "dals";
  const unit = document.getElementById("newProdUnit")?.value.trim() || "1 kg";
  const price = parseFloat(document.getElementById("newProdPrice")?.value) || 0;
  const mrp = parseFloat(document.getElementById("newProdMrp")?.value) || price;
  const stock = parseInt(document.getElementById("newProdStock")?.value) || 0;
  const emoji = document.getElementById("selectedNewEmoji")?.value || "🌾";
  const isOut = document.querySelector('input[name="newProdStatus"]:checked')?.value === "out-of-stock";

  store.addProduct({ nameEn, nameTa, category, unit, price, mrp, stock: isOut ? 0 : stock, icon: emoji, rating: 5.0 });
  closeAddProductModal();
  renderProductsCatalog();
  showToast(`"${nameEn}" added to store!`);
};

window.handleToggleProductStock = function(productId) {
  if (!store.isAdmin()) return;
  store.toggleProductStock(productId);
  renderProductsCatalog();
  showToast("Stock status updated!");
};

window.handleDeleteProduct = function(productId) {
  if (!store.isAdmin()) return;
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;
  if (confirm(`Delete "${prod.nameEn}" from your store?`)) {
    store.deleteProduct(productId);
    renderProductsCatalog();
    updateCartBadge();
    showToast(`"${prod.nameEn}" deleted.`);
  }
};

window.openEditProductModal = function(productId) {
  if (!store.isAdmin()) return;
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;
  const newPrice = prompt(`Edit selling price for "${prod.nameEn}" (current: ₹${prod.price}):`, prod.price);
  if (newPrice !== null && !isNaN(parseFloat(newPrice))) {
    prod.price = parseFloat(newPrice);
    const newStock = prompt(`Edit stock quantity (current: ${prod.stock}):`, prod.stock);
    if (newStock !== null && !isNaN(parseInt(newStock))) {
      prod.stock = parseInt(newStock);
    }
    store.saveProducts();
    renderProductsCatalog();
    showToast(`"${prod.nameEn}" updated!`);
  }
};

// ==========================================================================
// 6. ADMIN: STORE CONTACT DETAILS
// ==========================================================================
function updateStoreContactDisplay() {
  const info = store.storeInfo;
  document.querySelectorAll(".store-proprietor-val").forEach(el => el.textContent = info.proprietor);
  document.querySelectorAll(".store-hours-val").forEach(el => el.textContent = info.hours);
  document.querySelectorAll(".store-address-val").forEach(el => el.textContent = info.address);
  document.querySelectorAll(".store-phone-val").forEach(el => el.textContent = `+91 ${info.phone}`);
  document.querySelectorAll(".store-whatsapp-val").forEach(el => el.textContent = `+91 ${info.whatsapp}`);
  document.querySelectorAll(".store-email-val").forEach(el => el.textContent = info.email);
}

window.openEditContactModal = function() {
  if (!store.isAdmin()) return;
  const info = store.storeInfo;
  const propEl = document.getElementById("editStoreProprietor");
  const hoursEl = document.getElementById("editStoreHours");
  const addrEl = document.getElementById("editStoreAddress");
  const phoneEl = document.getElementById("editStorePhone");
  const waEl = document.getElementById("editStoreWhatsApp");
  const emailEl = document.getElementById("editStoreEmail");

  if (propEl) propEl.value = info.proprietor;
  if (hoursEl) hoursEl.value = info.hours;
  if (addrEl) addrEl.value = info.address;
  if (phoneEl) phoneEl.value = info.phone;
  if (waEl) waEl.value = info.whatsapp;
  if (emailEl) emailEl.value = info.email;

  document.getElementById("editContactModal")?.classList.add("open");
};

window.closeEditContactModal = function() {
  document.getElementById("editContactModal")?.classList.remove("open");
};

window.handleSaveStoreDetails = function(event) {
  event.preventDefault();
  if (!store.isAdmin()) return;
  store.storeInfo = {
    name: "Rohith Groceries",
    proprietor: document.getElementById("editStoreProprietor")?.value.trim() || store.storeInfo.proprietor,
    hours: document.getElementById("editStoreHours")?.value.trim() || store.storeInfo.hours,
    address: document.getElementById("editStoreAddress")?.value.trim() || store.storeInfo.address,
    phone: document.getElementById("editStorePhone")?.value.trim() || store.storeInfo.phone,
    whatsapp: document.getElementById("editStoreWhatsApp")?.value.trim() || store.storeInfo.whatsapp,
    email: document.getElementById("editStoreEmail")?.value.trim() || store.storeInfo.email
  };
  store.saveStoreInfo();
  updateStoreContactDisplay();
  closeEditContactModal();
  showToast("Store details saved!");
};

// ==========================================================================
// 7. CART & CHECKOUT FLOW
// ==========================================================================
window.handleAddToCart = function(productId) {
  store.addToCart(productId, 1);
  updateCartBadge();
  renderProductsCatalog();
  showToast("Item added to cart!");
};

window.handleStepQty = function(productId, delta) {
  store.addToCart(productId, delta);
  updateCartBadge();
  renderProductsCatalog();
  renderCartDrawer();
};

function updateCartBadge() {
  const count = store.getCartCount();
  document.querySelectorAll(".cart-count-display").forEach(b => b.textContent = count);
  const badge = document.getElementById("orderPlacedNavBadge");
  if (badge) badge.textContent = store.orders.length;
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawerBackdrop")?.classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawerBackdrop")?.classList.remove("open");
}

function renderCartDrawer() {
  const body = document.getElementById("cartItemsBody");
  const subtotalEl = document.getElementById("cartSubtotalVal");
  const deliveryEl = document.getElementById("cartDeliveryVal");
  const totalEl = document.getElementById("cartTotalVal");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  if (!body) return;

  const entries = Object.entries(store.cart);
  if (entries.length === 0) {
    body.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; color:var(--text-muted); gap:1rem;">
        <div style="font-size:3.5rem;">🛒</div>
        <p style="font-weight:700; font-size:1rem;">Your grocery basket is empty</p>
        <button class="btn-hero-primary" onclick="closeCartDrawer(); switchTab('products');">Explore Products</button>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (deliveryEl) deliveryEl.textContent = "₹0";
    if (totalEl) totalEl.textContent = "₹0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  body.innerHTML = entries.map(([pId, qty]) => {
    const prod = store.products.find(p => p.id === parseInt(pId));
    if (!prod) return "";
    return `
      <div class="cart-item-row">
        <div style="font-size:1.5rem; background:var(--brand-primary-subtle); padding:0.35rem 0.5rem; border-radius:8px;">${prod.icon}</div>
        <div style="flex:1;">
          <div style="font-size:0.875rem; font-weight:800;">${prod.nameEn}</div>
          <div style="font-size:0.75rem; color:var(--brand-primary-dark); font-family:var(--font-tamil);">${prod.nameTa}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${prod.unit} • ₹${prod.price} each</div>
          <div style="font-size:0.9rem; font-weight:900; color:var(--brand-primary-dark); margin-top:0.2rem;">₹${prod.price * qty}</div>
        </div>
        <div class="cart-stepper-btn">
          <button class="btn-step" onclick="handleStepQty(${prod.id}, -1)">−</button>
          <span class="step-qty">${qty}</span>
          <button class="btn-step" onclick="handleStepQty(${prod.id}, 1)">+</button>
        </div>
      </div>`;
  }).join("");

  const subtotal = store.getCartSubtotal();
  const delivery = subtotal >= 300 ? 0 : 30;
  const total = subtotal + delivery;
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? "FREE (Orders ₹300+)" : `₹${delivery}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

function openCheckoutModal() {
  closeCartDrawer();
  const entries = Object.entries(store.cart);
  if (entries.length === 0) {
    showToast("Please add items to your cart first!");
    return;
  }

  const itemsMini = document.getElementById("checkoutItemsMini");
  if (itemsMini) {
    itemsMini.innerHTML = entries.map(([pId, qty]) => {
      const prod = store.products.find(p => p.id === parseInt(pId));
      if (!prod) return "";
      return `<div style="display:flex; justify-content:space-between; padding:0.35rem 0; border-bottom:1px dashed #cbd5e1; font-size:0.85rem;">
        <span>${prod.icon} ${prod.nameEn} (${prod.nameTa}) × ${qty}</span>
        <strong>₹${prod.price * qty}</strong>
      </div>`;
    }).join("");
  }

  const subtotal = store.getCartSubtotal();
  const delivery = subtotal >= 300 ? 0 : 30;
  const el = document.getElementById("checkoutTotalDisplay");
  if (el) el.textContent = `₹${subtotal + delivery}`;

  document.getElementById("checkoutModal")?.classList.add("open");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("open");
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custNameInput")?.value.trim();
    const phone = document.getElementById("custPhoneInput")?.value.trim();
    const address = document.getElementById("custAddressInput")?.value.trim();
    const landmark = document.getElementById("custLandmarkInput")?.value.trim() || "";
    const dateSlot = document.getElementById("custDeliveryDateSlot")?.value || "Today (Within 30-45 Mins Express)";

    if (!name || !phone || !address) {
      showToast("Please fill your name, phone, and address!");
      return;
    }
    if (phone.length < 10) {
      showToast("Please enter a valid 10-digit phone number!");
      return;
    }

    // Build order (NOT saved yet — saved only when WhatsApp is clicked)
    const order = store.buildPendingOrder({ name, phone, address, landmark }, dateSlot);
    closeCheckoutModal();
    showWhatsAppConfirmModal(order);
  });
}

// ==========================================================================
// 8. WHATSAPP CONFIRMATION SCREEN & DISPATCH
// ==========================================================================
function showWhatsAppConfirmModal(order) {
  const modal = document.getElementById("orderConfirmationModal");
  const detailsBox = document.getElementById("orderConfirmationMsgDetails");

  // Clean the number: remove spaces, dashes, +91 or 91 prefix, leading 0
  const rawNumber = String(store.storeInfo.whatsapp || "8940826965");
  const shopNumber = rawNumber.replace(/[\s\-\+]/g, '').replace(/^91/, '').replace(/^0/, '');

  // Pre-filled WhatsApp message to shop owner
  const waMessage =
    `*New Order — Rohith Groceries* 🛒\n\n` +
    `📦 *Order ID:* ${order.orderId}\n` +
    `👤 *Customer:* ${order.customer.name}\n` +
    `📞 *Phone:* +91 ${order.customer.phone}\n` +
    `📍 *Address:* ${order.customer.address}` +
    (order.customer.landmark ? ` (Near ${order.customer.landmark})` : "") + `\n` +
    `📅 *Delivery:* ${order.deliveryDate}\n\n` +
    `*Items Ordered:*\n${order.items.map(i => `• ${i.nameEn} (${i.nameTa}) × ${i.quantity} — ₹${i.price * i.quantity}`).join("\n")}\n\n` +
    `💵 *Total: ₹${order.totalAmount}* (Cash on Delivery)\n\n` +
    `_Please confirm this order and prepare for delivery._`;

  const waUrl = `https://wa.me/91${shopNumber}?text=${encodeURIComponent(waMessage)}`;

  if (detailsBox) {
    detailsBox.innerHTML = `
      <div style="text-align:center; margin-bottom:1.25rem;">
        <div style="font-size:3rem;">🛒</div>
        <h3 style="font-size:1.4rem; font-weight:900; color:#15803d; margin-bottom:0.25rem;">Order Ready — Send to Shop!</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Your order is prepared. Click the button below to send it to Rohith Groceries via WhatsApp. <strong>The order is confirmed only after you send the message.</strong></p>
      </div>

      <!-- Order Summary Box -->
      <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:1.25rem; margin-bottom:1.25rem;">
        <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem; font-weight:800; text-transform:uppercase;">Order Summary</div>
        ${order.items.map(i => `
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; padding:0.3rem 0; border-bottom:1px dashed #bbf7d0;">
            <span>${i.nameEn} (${i.nameTa}) × ${i.quantity}</span>
            <strong>₹${i.price * i.quantity}</strong>
          </div>`).join("")}
        <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:900; color:#15803d; padding-top:0.65rem; margin-top:0.35rem;">
          <span>Total (COD)</span>
          <span>₹${order.totalAmount}</span>
        </div>
        <div style="font-size:0.8rem; color:#1e40af; margin-top:0.35rem; font-weight:700;">
          📅 Delivery: ${order.deliveryDate}
        </div>
      </div>

      <!-- Send WhatsApp Button -->
      <a href="${waUrl}" target="_blank"
         onclick="handleWhatsAppSent()"
         id="sendWhatsAppBtn"
         style="display:flex; align-items:center; justify-content:center; gap:0.65rem; width:100%; padding:1rem; background:#25D366; color:white; font-size:1.05rem; font-weight:800; border-radius:12px; text-decoration:none; margin-bottom:0.75rem; box-shadow:0 4px 12px rgba(37,211,102,0.35);">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Send Order to Shop via WhatsApp
      </a>

      <p style="text-align:center; font-size:0.775rem; color:var(--text-muted);">
        📱 Sending to shop WhatsApp: +91 ${shopNumber} • Your order will be confirmed once the message is sent.
      </p>
    `;
  }

  modal?.classList.add("open");
}

// Called when customer clicks the WhatsApp button — save order now
window.handleWhatsAppSent = function() {
  const savedOrder = store.confirmAndSavePendingOrder();
  if (savedOrder) {
    updateCartBadge();
    renderProductsCatalog();
    showToast("Order sent to shop! Thank you 🎉");
  }

  // After a short delay, close modal and return to products page
  setTimeout(() => {
    closeOrderSuccessModal();
    switchTab("products");
  }, 1500);
};

window.closeOrderSuccessModal = function() {
  document.getElementById("orderConfirmationModal")?.classList.remove("open");
  // If they close without sending WhatsApp — discard pending order
  store.pendingOrder = null;
};

// ==========================================================================
// 9. ADMIN: "ORDER PLACED" DASHBOARD
// ==========================================================================
function renderOrdersDashboard() {
  const container = document.getElementById("ordersListGrid");
  const badge = document.getElementById("orderPlacedNavBadge");
  if (!container) return;
  if (badge) badge.textContent = store.orders.length;

  if (store.orders.length === 0) {
    container.innerHTML = `
      <div style="background:white; border:1px solid var(--border-light); border-radius:var(--radius-lg); padding:4rem 1rem; text-align:center; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:0.5rem;">📦</div>
        <h3 style="color:var(--text-main); font-weight:800;">No orders yet</h3>
        <p>Customer orders sent via WhatsApp will appear here.</p>
      </div>`;
    return;
  }

  container.innerHTML = store.orders.map(order => `
    <div class="order-card-record">
      <div class="order-card-top">
        <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
          <span style="font-weight:900; font-size:1.1rem; color:var(--brand-primary-dark);">Order #${order.orderId}</span>
          <span class="order-delivery-date-pill">📅 ${order.deliveryDate || 'Standard Delivery'}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:0.8rem; color:var(--text-muted);">${order.timestamp}</span>
          <button class="btn-order-action danger" onclick="handleDeleteOrder('${order.orderId}')" title="Delete Order">🗑️ Delete</button>
        </div>
      </div>

      <div class="order-details-columns">
        <div>
          <h5 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Customer Details</h5>
          <div class="customer-info-row"><strong>${order.customer.name}</strong></div>
          <div class="customer-info-row">📞 +91 ${order.customer.phone}</div>
          <div class="customer-info-row">📍 ${order.customer.address}${order.customer.landmark ? ` (Near ${order.customer.landmark})` : ''}</div>
        </div>
        <div>
          <h5 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Ordered Products</h5>
          ${order.items.map(item => `
            <div class="order-product-line">
              <span><strong>${item.quantity}×</strong> ${item.nameEn} <small style="color:var(--brand-primary-dark); font-family:var(--font-tamil);">(${item.nameTa})</small></span>
              <strong>₹${item.price * item.quantity}</strong>
            </div>`).join("")}
        </div>
      </div>

      <div class="order-card-bottom">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Total: </span>
          <span style="font-size:1.25rem; font-weight:900; color:var(--brand-primary-dark);">₹${order.totalAmount}</span>
          <span style="font-size:0.775rem; color:var(--text-muted); margin-left:0.5rem;">• Cash on Delivery</span>
        </div>
        <div class="order-actions-wrap">
          <button class="btn-order-action" onclick="viewOrderInvoice('${order.orderId}')">📄 Invoice</button>
        </div>
      </div>
    </div>`).join("");
}

window.handleDeleteOrder = function(orderId) {
  if (!store.isAdmin()) return;
  if (confirm(`Delete Order #${orderId}? This will also remove it from Transaction History.`)) {
    store.deleteOrder(orderId);
    renderOrdersDashboard();
    renderTransactionHistory();
    updateCartBadge();
    showToast(`Order #${orderId} deleted.`);
  }
};

window.handleClearPastOrders = function() {
  if (!store.isAdmin()) return;
  if (confirm("Clear ALL orders from history? This cannot be undone.")) {
    store.clearAllOrders();
    renderOrdersDashboard();
    renderTransactionHistory();
    updateCartBadge();
    showToast("All orders cleared.");
  }
};

// ==========================================================================
// 10. ADMIN: TRANSACTION HISTORY
// ==========================================================================
function renderTransactionHistory() {
  const tableBody = document.getElementById("transactionLedgerBody");
  const totalRevEl = document.getElementById("statTotalRevenue");
  const totalTxnCountEl = document.getElementById("statTotalTxns");
  const avgOrderEl = document.getElementById("statAvgOrder");
  const pendingOrdersEl = document.getElementById("statPendingCount");
  if (!tableBody) return;

  const totalRev = store.transactions.reduce((sum, t) => sum + t.amount, 0);
  const txnCount = store.transactions.length;
  const avgOrder = txnCount > 0 ? Math.round(totalRev / txnCount) : 0;

  if (totalRevEl) totalRevEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  if (totalTxnCountEl) totalTxnCountEl.textContent = txnCount;
  if (avgOrderEl) avgOrderEl.textContent = `₹${avgOrder}`;
  if (pendingOrdersEl) pendingOrdersEl.textContent = store.orders.length;

  if (store.transactions.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:3rem; color:var(--text-muted);">No transactions yet. Orders appear here after customers send them via WhatsApp.</td></tr>`;
    return;
  }

  tableBody.innerHTML = store.transactions.map(txn => `
    <tr>
      <td><span style="font-family:monospace; font-weight:800; color:var(--brand-primary-dark);">${txn.txnId}</span></td>
      <td><strong>#${txn.orderId}</strong></td>
      <td>${txn.date}</td>
      <td>
        <div style="font-weight:800;">${txn.customerName}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">+91 ${txn.phone}</div>
      </td>
      <td><strong>₹${txn.amount}</strong> (${txn.itemCount} items)</td>
      <td><span class="pay-badge cod">Cash on Delivery</span></td>
      <td><strong style="color:#f59e0b;">● Pending Delivery</strong></td>
    </tr>`).join("");
}

window.exportTransactionsCSV = function() {
  if (store.transactions.length === 0) {
    showToast("No records to export!");
    return;
  }
  let csv = "Transaction ID,Order ID,Date,Customer Name,Phone,Total Amount (INR),Payment Mode,Status\n";
  store.transactions.forEach(t => {
    csv += `"${t.txnId}","${t.orderId}","${t.date}","${t.customerName}","${t.phone}","${t.amount}","${t.paymentMode}","${t.status}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rohith_groceries_ledger_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("CSV downloaded!");
};

// Invoice Modal
window.viewOrderInvoice = function(orderId) {
  const order = store.orders.find(o => o.orderId === orderId);
  if (!order) return;
  const modal = document.getElementById("invoiceModal");
  const content = document.getElementById("invoiceModalContent");
  if (content) {
    content.innerHTML = `
      <div style="padding:1.5rem;">
        <div style="display:flex; justify-content:space-between; border-bottom:2px solid #15803d; padding-bottom:1rem; margin-bottom:1.25rem;">
          <div>
            <img src="./logo.png" alt="Logo" style="height:56px; width:auto; object-fit:contain; margin-bottom:0.5rem;" />
            <h2 style="font-weight:900; color:#15803d; font-size:1.35rem;">Rohith Groceries</h2>
            <p style="font-size:0.8rem; color:var(--text-muted);">${store.storeInfo.address}</p>
            <p style="font-size:0.8rem; color:var(--text-muted);">Phone: +91 ${store.storeInfo.phone}</p>
          </div>
          <div style="text-align:right;">
            <span style="background:#f0fdf4; color:#166534; padding:0.3rem 0.75rem; border-radius:6px; font-weight:800; font-size:0.85rem;">DELIVERY RECEIPT</span>
            <p style="font-weight:800; margin-top:0.5rem;">#${order.orderId}</p>
            <p style="font-size:0.75rem; color:var(--text-muted);">${order.timestamp}</p>
            <p style="font-size:0.75rem; color:#1e40af; font-weight:700; margin-top:0.25rem;">📅 ${order.deliveryDate}</p>
          </div>
        </div>
        <div style="background:#f8fafc; padding:0.85rem; border-radius:8px; margin-bottom:1.25rem; font-size:0.85rem;">
          <strong>Customer:</strong> ${order.customer.name} | +91 ${order.customer.phone}<br/>
          <strong>Address:</strong> ${order.customer.address}
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom:1.25rem;">
          <thead><tr style="background:#f1f5f9;">
            <th style="padding:0.6rem; text-align:left;">Item</th>
            <th style="padding:0.6rem; text-align:center;">Qty</th>
            <th style="padding:0.6rem; text-align:right;">Price</th>
            <th style="padding:0.6rem; text-align:right;">Total</th>
          </tr></thead>
          <tbody>
            ${order.items.map(item => `<tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:0.6rem; font-weight:700;">${item.nameEn} <span style="color:#166534; font-family:var(--font-tamil);">(${item.nameTa})</span> — ${item.unit}</td>
              <td style="padding:0.6rem; text-align:center;">${item.quantity}</td>
              <td style="padding:0.6rem; text-align:right;">₹${item.price}</td>
              <td style="padding:0.6rem; text-align:right; font-weight:800;">₹${item.price * item.quantity}</td>
            </tr>`).join("")}
          </tbody>
        </table>
        <div style="display:flex; justify-content:flex-end;">
          <div style="width:200px; font-size:0.9rem;">
            <div style="display:flex; justify-content:space-between; font-size:1.15rem; font-weight:900; color:#15803d;">
              <span>Total (COD):</span>
              <span>₹${order.totalAmount}</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  modal?.classList.add("open");
};

window.closeInvoiceModal = function() {
  document.getElementById("invoiceModal")?.classList.remove("open");
};

// ==========================================================================
// 11. EVENT LISTENERS & HELPERS
// ==========================================================================
function setupEventListeners() {
  document.getElementById("productSearchInput")?.addEventListener("input", (e) => {
    store.searchQuery = e.target.value;
    renderProductsCatalog();
  });

  document.getElementById("productSortSelect")?.addEventListener("change", (e) => {
    store.sortOption = e.target.value;
    renderProductsCatalog();
  });

  document.getElementById("openCartNavBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("closeCartDrawerBtn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cartCheckoutBtn")?.addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutModalBtn")?.addEventListener("click", closeCheckoutModal);

  setupCheckoutForm();
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast-msg ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

