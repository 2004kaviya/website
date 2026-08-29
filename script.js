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
  phone: "9876543210",
  whatsapp: "9876543211",
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
    
    // Auto-Timer & Automation Settings
    this.autoTimerEnabled = JSON.parse(localStorage.getItem("rg_auto_timer")) ?? true;
    this.isManagerMode = false;
    this.currentCategory = "all";
    this.searchQuery = "";
    this.sortOption = "featured";
    this.orderFilterStatus = "all";

    // Initialize sample order if brand new
    if (this.orders.length === 0) {
      this.initSeedOrder();
    }
  }

  initSeedOrder() {
    const seedOrder = {
      orderId: "RG-10492",
      txnId: "TXN-10492",
      timestamp: "26 Aug 2026, 11:30 AM",
      deliveryDate: "Today, 26 Aug (Evening 5-8 PM)",
      otp: "4821",
      customer: {
        name: "Suresh Kumar",
        phone: "9845123456",
        address: "#14, 2nd Cross, Gandhi Bazaar, Bengaluru - 560004",
        landmark: "Near National High School"
      },
      items: [
        { id: 1, nameEn: "Premium Toor Dal (Arhar)", nameTa: "துவரம் பருப்பு", unit: "1 kg", price: 165, quantity: 2 },
        { id: 39, nameEn: "Tata Salt Vacuum Evaporated", nameTa: "டாடா உப்பு", unit: "1 kg", price: 28, quantity: 2 },
        { id: 42, nameEn: "Madhur Pure Sugar", nameTa: "சர்க்கரை", unit: "1 kg", price: 52, quantity: 1 }
      ],
      totalAmount: 438,
      paymentMethod: "UPI (GPay / PhonePe)",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      placedTime: Date.now() - 3600000
    };

    const seedTxn = {
      txnId: "TXN-10492",
      orderId: "RG-10492",
      date: "26 Aug 2026, 11:30 AM",
      customerName: "Suresh Kumar",
      phone: "9845123456",
      itemCount: 5,
      amount: 438,
      paymentMode: "UPI",
      status: "Settled / Paid"
    };

    this.orders.push(seedOrder);
    this.transactions.push(seedTxn);
    this.saveOrdersAndTransactions();
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

  login(username) {
    this.currentUser = { username: username, loginTime: new Date().toISOString() };
    localStorage.setItem("rg_user", JSON.stringify(this.currentUser));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("rg_user");
  }

  // --- Product Management (Add, Edit, Delete, Stock Toggle) ---
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
        prod.stock = 0; // Out of stock
      } else {
        prod.stock = prod.prevStock || 50; // Restore in stock
      }
      this.saveProducts();
    }
  }

  // --- Cart Management ---
  addToCart(productId, qty = 1) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod || prod.stock <= 0) return;

    if (!this.cart[productId]) {
      this.cart[productId] = 0;
    }
    this.cart[productId] += qty;
    if (this.cart[productId] > prod.stock) {
      this.cart[productId] = prod.stock;
    }
    if (this.cart[productId] <= 0) {
      delete this.cart[productId];
    }
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

  // --- Place Order with Auto Stock Deduction & OTP ---
  placeOrder(customerData, paymentMethod, deliveryDateSlot) {
    const cartItems = Object.entries(this.cart).map(([pId, qty]) => {
      const prod = this.products.find(p => p.id === parseInt(pId));
      
      // Auto-deduct stock!
      if (prod) {
        prod.stock = Math.max(0, prod.stock - qty);
      }

      return {
        id: prod.id,
        nameEn: prod.nameEn,
        nameTa: prod.nameTa,
        unit: prod.unit,
        price: prod.price,
        quantity: qty
      };
    });

    this.saveProducts(); // Save updated stocks

    const subtotal = this.getCartSubtotal();
    const deliveryFee = subtotal >= 300 ? 0 : 30;
    const finalAmount = subtotal + deliveryFee;
    const orderNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `RG-${orderNum}`;
    const txnId = `TXN-${orderNum + 500}`;
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    const now = new Date();
    const timestamp = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ", " +
                      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create Order Record
    const newOrder = {
      orderId: orderId,
      txnId: txnId,
      timestamp: timestamp,
      deliveryDate: deliveryDateSlot,
      otp: otpCode,
      customer: customerData,
      items: cartItems,
      totalAmount: finalAmount,
      paymentMethod: paymentMethod,
      paymentStatus: paymentMethod.includes("COD") ? "Pending COD" : "Paid",
      orderStatus: "Placed",
      placedTime: Date.now()
    };

    // Create Transaction Record
    const newTxn = {
      txnId: txnId,
      orderId: orderId,
      date: timestamp,
      customerName: customerData.name,
      phone: customerData.phone,
      itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
      amount: finalAmount,
      paymentMode: paymentMethod.includes("COD") ? "Cash on Delivery" : "UPI / Card",
      status: paymentMethod.includes("COD") ? "Pending Delivery" : "Settled / Paid"
    };

    this.orders.unshift(newOrder);
    this.transactions.unshift(newTxn);
    this.saveOrdersAndTransactions();
    this.cart = {};
    this.saveCart();

    return { order: newOrder, txn: newTxn };
  }

  // --- Delete Single Order & Clear Completed Orders ---
  deleteOrder(orderId) {
    this.orders = this.orders.filter(o => o.orderId !== orderId);
    this.transactions = this.transactions.filter(t => t.orderId !== orderId);
    this.saveOrdersAndTransactions();
  }

  clearCompletedOrders() {
    this.orders = this.orders.filter(o => o.orderStatus !== "Delivered" && o.orderStatus !== "Cancelled");
    this.saveOrdersAndTransactions();
  }
}

// Global store instance
const store = new AppStore();

// ==========================================================================
// 3. UI CONTROLLER & EVENT WIRING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();
  initNavigation();
  updateStoreContactDisplay();
  renderProductsCatalog();
  updateCartBadge();
  renderOrdersDashboard();
  renderTransactionHistory();
  setupEventListeners();
  startAutoTimerEngine();

  // Check login state
  if (store.currentUser) {
    showAppScreen();
  } else {
    showLoginScreen();
  }
});

// --- Auth Management ---
function initAuthUI() {
  const loginForm = document.getElementById("loginForm");
  const fillDemoBtn = document.getElementById("fillDemoBtn");
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const authError = document.getElementById("authError");

  if (fillDemoBtn) {
    fillDemoBtn.addEventListener("click", () => {
      usernameInput.value = "rohith";
      passwordInput.value = "grocery123";
      authError.classList.add("hidden");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        authError.textContent = "Please enter both ID/Mobile and Password.";
        authError.classList.remove("hidden");
        return;
      }

      authError.classList.add("hidden");
      store.login(username);
      showToast(`Welcome back, ${username}!`);
      showAppScreen();
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      store.logout();
      showToast("Logged out successfully.");
      showLoginScreen();
    });
  }
}

function showLoginScreen() {
  document.getElementById("loginScreen").classList.remove("hidden");
  document.getElementById("appScreen").classList.add("hidden");
}

function showAppScreen() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  switchTab("home");
  updateCartBadge();
}

// --- Navigation Tabs ---
function initNavigation() {
  const navLinks = document.querySelectorAll("[data-nav-target]");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute("data-nav-target");
      switchTab(targetSection);
      
      const navMenu = document.getElementById("navMenuStraight");
      if (navMenu) navMenu.classList.remove("mobile-open");
    });
  });

  const mobileToggle = document.getElementById("mobileNavToggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const navMenu = document.getElementById("navMenuStraight");
      if (navMenu) navMenu.classList.toggle("mobile-open");
    });
  }
}

window.switchTab = function(sectionName) {
  const sections = ["home", "about", "products", "orders", "transactions"];
  sections.forEach(sec => {
    const el = document.getElementById(`section-${sec}`);
    if (el) el.classList.add("hidden");
  });

  const activeSecEl = document.getElementById(`section-${sectionName}`);
  if (activeSecEl) {
    activeSecEl.classList.remove("hidden");
  }

  document.querySelectorAll(".nav-link-item").forEach(link => {
    if (link.getAttribute("data-nav-target") === sectionName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (sectionName === "products") {
    renderProductsCatalog();
  } else if (sectionName === "orders") {
    renderOrdersDashboard();
  } else if (sectionName === "transactions") {
    renderTransactionHistory();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ==========================================================================
// 4. BILINGUAL PRODUCTS CATALOG RENDERING & FILTERING
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

  // Filter products
  let filtered = store.products.filter(item => {
    if (store.currentCategory === "out-of-stock") {
      return item.stock <= 0;
    }
    const matchCat = store.currentCategory === "all" || item.category === store.currentCategory;
    const matchSearch = store.searchQuery === "" || 
      item.nameEn.toLowerCase().includes(store.searchQuery.toLowerCase()) ||
      item.nameTa.toLowerCase().includes(store.searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(store.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Sort products
  if (store.sortOption === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (store.sortOption === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (store.sortOption === "name-az") {
    filtered.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
  }

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${store.products.length} grocery items`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
        <h3 style="color: var(--text-main); font-weight: 800;">No items found</h3>
        <p>Try searching for salt, sugar, dal, masala, soap, or shampoo</p>
        <button class="btn-hero-primary" style="margin-top: 1rem;" onclick="resetProductFilters()">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isOut = product.stock <= 0;
    const cartQty = store.cart[product.id] || 0;
    const catLabel = getCategoryLabel(product.category);

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

        <!-- Store Manager Bar (Edit / Delete / Toggle Stock) -->
        <div class="card-manager-tools" ${store.isManagerMode ? '' : 'style="display:none;"'}>
          <button class="btn-tool-pill edit" onclick="openEditProductModal(${product.id})">✏️ Edit</button>
          <button class="btn-tool-pill stock-toggle ${isOut ? 'is-out' : ''}" onclick="handleToggleProductStock(${product.id})">
            ${isOut ? '🟢 Restock' : '🔴 Out of Stock'}
          </button>
          <button class="btn-tool-pill delete" onclick="handleDeleteProduct(${product.id})">🗑️ Delete</button>
        </div>
      </div>
    `;
  }).join("");
}

function getCategoryLabel(catKey) {
  const map = {
    "dals": "Dal & Pulses / பருப்பு",
    "spices": "Spices / மசாலா",
    "rice-flour": "Rice & Atta / அரிசி மாவு",
    "oils-sugar-salt": "Oils & Sugar / எண்ணெய்",
    "soaps": "Soaps / சோப்",
    "shampoos": "Hair Care / ஷாம்பு",
    "snacks-beverages": "Snacks & Tea / டீ காபி",
    "cleaning": "Cleaning / சுத்தம்"
  };
  return map[catKey] || catKey;
}

window.filterCategory = function(category) {
  store.currentCategory = category;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.getAttribute("data-category") === category) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
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

window.toggleStoreManagerMode = function() {
  store.isManagerMode = !store.isManagerMode;
  const btn = document.getElementById("toggleManagerModeBtn");
  if (btn) {
    btn.classList.toggle("active", store.isManagerMode);
    btn.innerHTML = store.isManagerMode ? "<span>✅ Manager Mode Active</span>" : "<span>⚙️ Manage Stock</span>";
  }
  renderProductsCatalog();
  showToast(store.isManagerMode ? "Manager Mode: Edit, Delete & Stock controls enabled!" : "Manager Mode exited.");
};

// ==========================================================================
// 5. PRODUCT CRUD MODAL (ADD & EDIT)
// ==========================================================================
window.openAddProductModal = function() {
  document.getElementById("addProductForm").reset();
  document.getElementById("selectedNewEmoji").value = "🌾";
  selectNewProdEmoji('🌾');
  document.getElementById("addProductModal").classList.add("open");
};

window.closeAddProductModal = function() {
  document.getElementById("addProductModal").classList.remove("open");
};

window.selectNewProdEmoji = function(emoji, btnEl) {
  document.getElementById("selectedNewEmoji").value = emoji;
  document.querySelectorAll(".emoji-option-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
};

window.handleSaveNewProduct = function(event) {
  event.preventDefault();
  const nameEn = document.getElementById("newProdName").value.trim();
  const nameTa = document.getElementById("newProdNameTa") ? document.getElementById("newProdNameTa").value.trim() : "";
  const category = document.getElementById("newProdCategory").value;
  const unit = document.getElementById("newProdUnit").value.trim();
  const price = parseFloat(document.getElementById("newProdPrice").value);
  const mrp = parseFloat(document.getElementById("newProdMrp").value) || price;
  const stock = parseInt(document.getElementById("newProdStock").value) || 0;
  const emoji = document.getElementById("selectedNewEmoji").value || "🌾";
  const status = document.querySelector('input[name="newProdStatus"]:checked')?.value;

  const finalStock = status === "out-of-stock" ? 0 : stock;

  const newProd = {
    nameEn: nameEn,
    nameTa: nameTa || nameEn,
    category: category,
    unit: unit,
    price: price,
    mrp: mrp,
    stock: finalStock,
    icon: emoji,
    rating: 5.0
  };

  store.addProduct(newProd);
  closeAddProductModal();
  renderProductsCatalog();
  showToast(`"${nameEn}" added to store!`);
};

window.handleToggleProductStock = function(productId) {
  store.toggleProductStock(productId);
  renderProductsCatalog();
  showToast("Product stock status updated!");
};

window.handleDeleteProduct = function(productId) {
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`Are you sure you want to delete "${prod.nameEn}" from your store?`)) {
    store.deleteProduct(productId);
    renderProductsCatalog();
    updateCartBadge();
    showToast(`"${prod.nameEn}" deleted from store.`);
  }
};

// ==========================================================================
// 6. EDIT STORE & CONTACT DETAILS
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
  const info = store.storeInfo;
  document.getElementById("editStoreProprietor").value = info.proprietor;
  document.getElementById("editStoreHours").value = info.hours;
  document.getElementById("editStoreAddress").value = info.address;
  document.getElementById("editStorePhone").value = info.phone;
  document.getElementById("editStoreWhatsApp").value = info.whatsapp;
  document.getElementById("editStoreEmail").value = info.email;

  document.getElementById("editContactModal").classList.add("open");
};

window.closeEditContactModal = function() {
  document.getElementById("editContactModal").classList.remove("open");
};

window.handleSaveStoreDetails = function(event) {
  event.preventDefault();
  store.storeInfo = {
    name: "Rohith Groceries",
    proprietor: document.getElementById("editStoreProprietor").value.trim(),
    hours: document.getElementById("editStoreHours").value.trim(),
    address: document.getElementById("editStoreAddress").value.trim(),
    phone: document.getElementById("editStorePhone").value.trim(),
    whatsapp: document.getElementById("editStoreWhatsApp").value.trim(),
    email: document.getElementById("editStoreEmail").value.trim()
  };

  store.saveStoreInfo();
  updateStoreContactDisplay();
  closeEditContactModal();
  showToast("Store details saved successfully!");
};

// ==========================================================================
// 7. CART & CHECKOUT WITH DELIVERY DATE SELECTION
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

  const ordersCountBadge = document.getElementById("orderPlacedNavBadge");
  if (ordersCountBadge) {
    ordersCountBadge.textContent = store.orders.length;
  }
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawerBackdrop").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawerBackdrop").classList.remove("open");
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
      </div>
    `;
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
    const itemTotal = prod.price * qty;

    return `
      <div class="cart-item-row">
        <div style="font-size: 1.5rem; background: var(--brand-primary-subtle); padding: 0.35rem 0.5rem; border-radius: 8px;">
          ${prod.icon}
        </div>
        <div style="flex:1;">
          <div style="font-size:0.875rem; font-weight:800;">${prod.nameEn}</div>
          <div style="font-size:0.75rem; color:var(--brand-primary-dark); font-family:var(--font-tamil);">${prod.nameTa}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${prod.unit} • ₹${prod.price} each</div>
          <div style="font-size:0.9rem; font-weight:900; color:var(--brand-primary-dark); margin-top:0.2rem;">₹${itemTotal}</div>
        </div>
        <div class="cart-stepper-btn">
          <button class="btn-step" onclick="handleStepQty(${prod.id}, -1)">−</button>
          <span class="step-qty">${qty}</span>
          <button class="btn-step" onclick="handleStepQty(${prod.id}, 1)">+</button>
        </div>
      </div>
    `;
  }).join("");

  const subtotal = store.getCartSubtotal();
  const delivery = subtotal >= 300 ? 0 : 30;
  const total = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? "FREE (Orders ₹300+)" : `₹${delivery}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

// Checkout Modal & Date Picker
function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  const itemsMini = document.getElementById("checkoutItemsMini");
  const checkoutTotalEl = document.getElementById("checkoutTotalDisplay");

  const entries = Object.entries(store.cart);
  if (entries.length === 0) {
    showToast("Please add items to your cart first!");
    return;
  }

  if (itemsMini) {
    itemsMini.innerHTML = entries.map(([pId, qty]) => {
      const prod = store.products.find(p => p.id === parseInt(pId));
      return `
        <div style="display:flex; justify-content:space-between; padding:0.35rem 0; border-bottom:1px dashed #cbd5e1; font-size:0.85rem;">
          <span>${prod.icon} ${prod.nameEn} (${prod.nameTa}) × ${qty}</span>
          <strong>₹${prod.price * qty}</strong>
        </div>
      `;
    }).join("");
  }

  const subtotal = store.getCartSubtotal();
  const delivery = subtotal >= 300 ? 0 : 30;
  const total = subtotal + delivery;

  if (checkoutTotalEl) checkoutTotalEl.textContent = `₹${total}`;

  modal.classList.add("open");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("open");
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custNameInput").value.trim();
    const phone = document.getElementById("custPhoneInput").value.trim();
    const address = document.getElementById("custAddressInput").value.trim();
    const landmark = document.getElementById("custLandmarkInput").value.trim();
    const dateSlot = document.getElementById("custDeliveryDateSlot").value;
    const payMode = document.querySelector('input[name="payMethod"]:checked')?.value || "UPI (GPay / PhonePe)";

    if (!name || !phone || !address) {
      showToast("Please fill all required customer fields!");
      return;
    }

    if (phone.length < 10) {
      showToast("Please enter a valid 10-digit phone number!");
      return;
    }

    const customerData = {
      name: name,
      phone: phone,
      address: address,
      landmark: landmark
    };

    const result = store.placeOrder(customerData, payMode, dateSlot);
    closeCheckoutModal();
    updateCartBadge();
    renderProductsCatalog();

    showOrderSuccessMessageModal(result.order);
  });
}

function showOrderSuccessMessageModal(order) {
  const modal = document.getElementById("orderConfirmationModal");
  const detailsBox = document.getElementById("orderConfirmationMsgDetails");

  const itemsText = order.items.map(i => `${i.nameEn} (${i.nameTa}) x${i.quantity}`).join(", ");
  const waUrl = `https://wa.me/91${order.customer.phone}?text=${encodeURIComponent(
    `*Rohith Groceries Order #${order.orderId}*\n\n` +
    `👤 Customer: ${order.customer.name}\n` +
    `📦 Products: ${itemsText}\n` +
    `💰 Total: Rs. ${order.totalAmount}\n` +
    `📅 Delivery: ${order.deliveryDate}\n` +
    `📍 Address: ${order.customer.address}\n` +
    `🔑 Delivery OTP: ${order.otp}\n\n` +
    `Thank you for shopping with Rohith Groceries!`
  )}`;

  if (detailsBox) {
    detailsBox.innerHTML = `
      <div style="text-align:center; margin-bottom: 1.25rem;">
        <div style="font-size: 3.5rem;">🎉</div>
        <h3 style="font-size: 1.5rem; font-weight: 900; color: #166534;">Order #${order.orderId} Placed!</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem;">Saved to Order Placed & Transaction History</p>
      </div>

      <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:#166534; font-size:0.85rem;">📅 Scheduled Delivery:</strong>
          <span style="background:#dbeafe; color:#1e40af; font-weight:800; font-size:0.8rem; padding:0.25rem 0.6rem; border-radius:6px;">${order.deliveryDate}</span>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:#166534; font-size:0.85rem;">🔑 Customer Delivery OTP:</strong>
          <span style="background:#fef3c7; color:#92400e; font-weight:900; font-size:1.1rem; padding:0.2rem 0.6rem; border-radius:6px; font-family:monospace;">${order.otp}</span>
        </div>

        <div style="background:white; border:1px solid #bbf7d0; border-radius:8px; padding:0.85rem; font-size:0.8rem; font-family:monospace; color:#14532d; line-height:1.5; white-space:pre-wrap;">
📱 Message Dispatched to Customer (+91 ${order.customer.phone}):
"Dear ${order.customer.name}, your Rohith Groceries order #${order.orderId} for ₹${order.totalAmount} is confirmed!
📅 Delivery: ${order.deliveryDate}
🔑 Delivery OTP: ${order.otp}
📦 Products: ${itemsText}"
        </div>

        <div style="display:flex; justify-content:flex-end;">
          <a href="${waUrl}" target="_blank" class="btn-fill-demo" style="background:#25D366; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem; padding:0.5rem 1rem;">
            <span>💬 Send via WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
}

window.closeOrderSuccessModal = function() {
  document.getElementById("orderConfirmationModal").classList.remove("open");
};

// ==========================================================================
// 8. "ORDER PLACED" DASHBOARD & AUTOMATIC TIMER ENGINE
// ==========================================================================
function renderOrdersDashboard() {
  const container = document.getElementById("ordersListGrid");
  const badgeNav = document.getElementById("orderPlacedNavBadge");
  if (!container) return;

  if (badgeNav) badgeNav.textContent = store.orders.length;

  let filtered = store.orders;
  if (store.orderFilterStatus !== "all") {
    filtered = filtered.filter(o => o.orderStatus.toLowerCase() === store.orderFilterStatus.toLowerCase());
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background: white; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 4rem 1rem; text-align: center; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📦</div>
        <h3 style="color: var(--text-main); font-weight: 800;">No customer orders found</h3>
        <p>Placed orders will automatically appear here with full customer details.</p>
        <button class="btn-hero-primary" style="margin-top: 1rem;" onclick="switchTab('products')">Place an Order</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(order => {
    let statusClass = "status-placed";
    if (order.orderStatus === "Packed") statusClass = "status-packed";
    if (order.orderStatus === "Out for Delivery") statusClass = "status-out";
    if (order.orderStatus === "Delivered") statusClass = "status-delivered";
    if (order.orderStatus === "Cancelled") statusClass = "status-cancelled";

    return `
      <div class="order-card-record">
        <div class="order-card-top">
          <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
            <span style="font-weight:900; font-size:1.1rem; color:var(--brand-primary-dark);">Order #${order.orderId}</span>
            <span class="order-delivery-date-pill">📅 ${order.deliveryDate || 'Standard Delivery'}</span>
            <span class="order-otp-box">🔑 OTP: ${order.otp}</span>
          </div>

          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="order-status-badge ${statusClass}">● ${order.orderStatus}</span>
            <button class="btn-order-action danger" onclick="handleDeleteOrder('${order.orderId}')" title="Delete Order">🗑️</button>
          </div>
        </div>

        <div class="order-details-columns">
          <!-- Customer Info -->
          <div>
            <h5 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Customer Delivery Contact</h5>
            <div class="customer-info-row">
              <strong>${order.customer.name}</strong>
            </div>
            <div class="customer-info-row">
              <span>📞 +91 ${order.customer.phone}</span>
            </div>
            <div class="customer-info-row">
              <span>📍 ${order.customer.address} ${order.customer.landmark ? `(Near ${order.customer.landmark})` : ''}</span>
            </div>
          </div>

          <!-- Products list with Tamil names -->
          <div>
            <h5 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Ordered Products (${order.items.length} items)</h5>
            ${order.items.map(item => `
              <div class="order-product-line">
                <span>
                  <strong>${item.quantity}×</strong> ${item.nameEn} 
                  <small style="color:var(--brand-primary-dark); font-family:var(--font-tamil);">(${item.nameTa})</small>
                </span>
                <strong>₹${item.price * item.quantity}</strong>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="order-card-bottom">
          <div>
            <span style="font-size:0.8rem; color:var(--text-muted);">Total Bill: </span>
            <span style="font-size:1.25rem; font-weight:900; color:var(--brand-primary-dark);">₹${order.totalAmount}</span>
            <span style="font-size:0.775rem; color:var(--text-muted); margin-left:0.5rem;">• ${order.paymentMethod}</span>
          </div>

          <div class="order-actions-wrap">
            <select class="btn-order-action" onchange="updateOrderStatus('${order.orderId}', this.value)">
              <option value="Placed" ${order.orderStatus === "Placed" ? "selected" : ""}>Status: Placed</option>
              <option value="Packed" ${order.orderStatus === "Packed" ? "selected" : ""}>Status: Packed</option>
              <option value="Out for Delivery" ${order.orderStatus === "Out for Delivery" ? "selected" : ""}>Status: Out for Delivery</option>
              <option value="Delivered" ${order.orderStatus === "Delivered" ? "selected" : ""}>Status: Delivered</option>
              <option value="Cancelled" ${order.orderStatus === "Cancelled" ? "selected" : ""}>Status: Cancelled</option>
            </select>

            <button class="btn-order-action" onclick="verifyOrderOtpPrompt('${order.orderId}', '${order.otp}')">
              🔑 Verify OTP
            </button>

            <button class="btn-order-action" onclick="viewOrderInvoice('${order.orderId}')">
              📄 Invoice
            </button>

            <button class="btn-order-action primary" onclick="resendCustomerAlert('${order.orderId}')">
              📱 Resend SMS
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.filterOrdersByStatus = function(status) {
  store.orderFilterStatus = status;
  document.querySelectorAll(".orders-chip").forEach(c => {
    if (c.getAttribute("data-order-status") === status) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  renderOrdersDashboard();
};

window.updateOrderStatus = function(orderId, newStatus) {
  const order = store.orders.find(o => o.orderId === orderId);
  if (order) {
    order.orderStatus = newStatus;
    if (newStatus === "Delivered") {
      order.paymentStatus = "Paid";
      const txn = store.transactions.find(t => t.orderId === orderId);
      if (txn) txn.status = "Settled / Paid";
    }
    if (newStatus === "Cancelled") {
      const txn = store.transactions.find(t => t.orderId === orderId);
      if (txn) txn.status = "Cancelled";
    }
    store.saveOrdersAndTransactions();
    renderOrdersDashboard();
    renderTransactionHistory();
    showToast(`Order #${orderId} status changed to ${newStatus}`);
  }
};

window.verifyOrderOtpPrompt = function(orderId, expectedOtp) {
  const userOtp = prompt(`Enter customer 4-digit Delivery OTP (Expected: ${expectedOtp}):`);
  if (userOtp === expectedOtp) {
    updateOrderStatus(orderId, "Delivered");
    showToast(`OTP Verified! Order #${orderId} marked as Delivered 🟢`);
  } else if (userOtp) {
    alert("Incorrect OTP entered. Please verify with customer.");
  }
};

window.handleDeleteOrder = function(orderId) {
  if (confirm(`Delete Order #${orderId}? This will remove it from Order Placed and Transaction History.`)) {
    store.deleteOrder(orderId);
    renderOrdersDashboard();
    renderTransactionHistory();
    updateCartBadge();
    showToast(`Order #${orderId} deleted.`);
  }
};

window.handleClearPastOrders = function() {
  if (confirm("Clear all completed and cancelled orders from history? Active orders will remain.")) {
    store.clearCompletedOrders();
    renderOrdersDashboard();
    renderTransactionHistory();
    updateCartBadge();
    showToast("Completed orders history cleared.");
  }
};

window.resendCustomerAlert = function(orderId) {
  const order = store.orders.find(o => o.orderId === orderId);
  if (order) showOrderSuccessMessageModal(order);
};

// --- Automatic Progression Timer Engine ---
function startAutoTimerEngine() {
  setInterval(() => {
    if (!store.autoTimerEnabled) return;

    let hasChanges = false;
    const now = Date.now();

    store.orders.forEach(order => {
      if (!order.placedTime || order.orderStatus === "Delivered" || order.orderStatus === "Cancelled") return;

      const elapsedSec = (now - order.placedTime) / 1000;

      // Progression Schedule:
      // 0 - 60s: Placed
      // 60s - 180s (1-3 min): Packed
      // 180s - 360s (3-6 min): Out for Delivery
      // > 360s (6 min): Delivered
      if (elapsedSec > 360 && order.orderStatus !== "Delivered") {
        order.orderStatus = "Delivered";
        order.paymentStatus = "Paid";
        const txn = store.transactions.find(t => t.orderId === order.orderId);
        if (txn) txn.status = "Settled / Paid";
        hasChanges = true;
      } else if (elapsedSec > 180 && order.orderStatus === "Packed") {
        order.orderStatus = "Out for Delivery";
        hasChanges = true;
      } else if (elapsedSec > 60 && order.orderStatus === "Placed") {
        order.orderStatus = "Packed";
        hasChanges = true;
      }
    });

    if (hasChanges) {
      store.saveOrdersAndTransactions();
      renderOrdersDashboard();
      renderTransactionHistory();
    }
  }, 10000);
}

window.toggleAutoTimerMode = function() {
  store.autoTimerEnabled = !store.autoTimerEnabled;
  localStorage.setItem("rg_auto_timer", JSON.stringify(store.autoTimerEnabled));
  
  const badge = document.getElementById("autoTimerStatusPill");
  if (badge) {
    badge.textContent = store.autoTimerEnabled ? "🟢 Auto Timer: ON" : "⚙️ Manual Mode";
  }
  showToast(store.autoTimerEnabled ? "Automatic Timer enabled (Orders auto-progress)" : "Switched to Manual Mode");
};

window.fastForwardOrderTimer = function() {
  const activeOrder = store.orders.find(o => o.orderStatus !== "Delivered" && o.orderStatus !== "Cancelled");
  if (activeOrder) {
    if (activeOrder.orderStatus === "Placed") activeOrder.orderStatus = "Packed";
    else if (activeOrder.orderStatus === "Packed") activeOrder.orderStatus = "Out for Delivery";
    else if (activeOrder.orderStatus === "Out for Delivery") {
      activeOrder.orderStatus = "Delivered";
      activeOrder.paymentStatus = "Paid";
      const txn = store.transactions.find(t => t.orderId === activeOrder.orderId);
      if (txn) txn.status = "Settled / Paid";
    }
    store.saveOrdersAndTransactions();
    renderOrdersDashboard();
    renderTransactionHistory();
    showToast(`⚡ Fast-forwarded #${activeOrder.orderId} to: ${activeOrder.orderStatus}`);
  } else {
    showToast("No active pending orders to fast-forward. Place a new order to test!");
  }
};

// ==========================================================================
// 9. TRANSACTION HISTORY LEDGER
// ==========================================================================
function renderTransactionHistory() {
  const tableBody = document.getElementById("transactionLedgerBody");
  const totalRevEl = document.getElementById("statTotalRevenue");
  const totalTxnCountEl = document.getElementById("statTotalTxns");
  const avgOrderEl = document.getElementById("statAvgOrder");
  const pendingOrdersEl = document.getElementById("statPendingCount");
  if (!tableBody) return;

  const totalRev = store.transactions.reduce((sum, t) => sum + (t.status !== "Cancelled" ? t.amount : 0), 0);
  const txnCount = store.transactions.filter(t => t.status !== "Cancelled").length;
  const avgOrder = txnCount > 0 ? Math.round(totalRev / txnCount) : 0;
  const pendingCount = store.orders.filter(o => o.orderStatus !== "Delivered" && o.orderStatus !== "Cancelled").length;

  if (totalRevEl) totalRevEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  if (totalTxnCountEl) totalTxnCountEl.textContent = txnCount;
  if (avgOrderEl) avgOrderEl.textContent = `₹${avgOrder}`;
  if (pendingOrdersEl) pendingOrdersEl.textContent = pendingCount;

  if (store.transactions.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          No transactions recorded yet.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = store.transactions.map(txn => {
    let payClass = "upi";
    if (txn.paymentMode.includes("Cash")) payClass = "cod";

    return `
      <tr>
        <td><span style="font-family:monospace; font-weight:800; color:var(--brand-primary-dark);">${txn.txnId}</span></td>
        <td><strong>#${txn.orderId}</strong></td>
        <td>${txn.date}</td>
        <td>
          <div style="font-weight: 800;">${txn.customerName}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">+91 ${txn.phone}</div>
        </td>
        <td><strong>₹${txn.amount}</strong> (${txn.itemCount} items)</td>
        <td><span class="pay-badge ${payClass}">${txn.paymentMode}</span></td>
        <td>
          <strong style="color:${txn.status.includes('Paid') ? '#16a34a' : txn.status.includes('Cancelled') ? '#ef4444' : '#f59e0b'};">
            ● ${txn.status}
          </strong>
        </td>
      </tr>
    `;
  }).join("");
}

window.exportTransactionsCSV = function() {
  if (store.transactions.length === 0) {
    showToast("No transaction records to export!");
    return;
  }

  let csv = "Transaction ID,Order ID,Date & Time,Customer Name,Phone Number,Total Amount (INR),Payment Mode,Status\n";
  store.transactions.forEach(t => {
    csv += `"${t.txnId}","${t.orderId}","${t.date}","${t.customerName}","${t.phone}","${t.amount}","${t.paymentMode}","${t.status}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `rohith_groceries_ledger_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("CSV Ledger Downloaded!");
};

// Invoice Viewer Modal
window.viewOrderInvoice = function(orderId) {
  const order = store.orders.find(o => o.orderId === orderId);
  if (!order) return;

  const modal = document.getElementById("invoiceModal");
  const content = document.getElementById("invoiceModalContent");

  if (content) {
    content.innerHTML = `
      <div style="padding: 1.5rem; background: #ffffff; border-radius: 12px;">
        <div style="display: flex; justify-content: space-between; border-bottom: 2px solid var(--brand-primary); padding-bottom: 1rem; margin-bottom: 1.25rem;">
          <div>
            <img src="./logo.png" alt="Rohith Groceries Logo" style="height: 64px; width: auto; object-fit: contain; margin-bottom: 0.5rem;" />
            <h2 style="font-weight: 900; color: #15803d; font-size: 1.5rem;">Rohith Groceries</h2>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${store.storeInfo.address}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Phone: +91 ${store.storeInfo.phone} • WhatsApp: +91 ${store.storeInfo.whatsapp}</p>
          </div>
          <div style="text-align: right;">
            <span style="background: var(--brand-primary-subtle); color: #166534; padding: 0.3rem 0.75rem; border-radius: 6px; font-weight: 800; font-size: 0.85rem;">TAX INVOICE</span>
            <p style="font-weight: 800; margin-top: 0.5rem;">Order #${order.orderId}</p>
            <p style="font-size: 0.75rem; color: var(--text-muted);">${order.timestamp}</p>
            <p style="font-size: 0.75rem; color: #1e40af; font-weight:700; margin-top:0.25rem;">📅 ${order.deliveryDate || 'Scheduled Delivery'}</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 1.25rem; font-size: 0.85rem; background: #f8fafc; padding: 0.85rem; border-radius: 8px;">
          <div>
            <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Customer Information:</strong>
            <div style="font-weight: 800; font-size: 1rem; color: var(--text-main);">${order.customer.name}</div>
            <div>Phone: +91 ${order.customer.phone}</div>
            <div>Address: ${order.customer.address}</div>
          </div>
          <div style="text-align: right;">
            <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Payment Details:</strong>
            <div style="font-weight: 800; color: #16a34a;">${order.paymentStatus}</div>
            <div>Mode: ${order.paymentMethod}</div>
            <div style="margin-top:0.35rem; font-family:monospace; background:#fef3c7; color:#92400e; padding:0.15rem 0.4rem; border-radius:4px; font-weight:800;">Delivery OTP: ${order.otp}</div>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 1.25rem;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left;">
              <th style="padding: 0.6rem;">Item Description</th>
              <th style="padding: 0.6rem; text-align: center;">Unit</th>
              <th style="padding: 0.6rem; text-align: center;">Qty</th>
              <th style="padding: 0.6rem; text-align: right;">Price</th>
              <th style="padding: 0.6rem; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map(item => `
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.6rem; font-weight: 700;">
                  ${item.nameEn} <span style="color:var(--brand-primary-dark); font-family:var(--font-tamil);">(${item.nameTa})</span>
                </td>
                <td style="padding: 0.6rem; text-align: center; color: var(--text-muted);">${item.unit}</td>
                <td style="padding: 0.6rem; text-align: center;">${item.quantity}</td>
                <td style="padding: 0.6rem; text-align: right;">₹${item.price}</td>
                <td style="padding: 0.6rem; text-align: right; font-weight: 800;">₹${item.price * item.quantity}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; border-top: 1px dashed #cbd5e1; padding-top: 0.75rem;">
          <div style="width: 220px; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
              <span>Subtotal:</span>
              <span>₹${order.totalAmount}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; color: #16a34a;">
              <span>Delivery:</span>
              <span>FREE</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 900; color: #15803d; border-top: 2px solid #e2e8f0; padding-top: 0.5rem;">
              <span>Final Total:</span>
              <span>₹${order.totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
};

window.closeInvoiceModal = function() {
  document.getElementById("invoiceModal").classList.remove("open");
};

// ==========================================================================
// 10. EVENT LISTENERS & HELPERS
// ==========================================================================
function setupEventListeners() {
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      store.searchQuery = e.target.value;
      renderProductsCatalog();
    });
  }

  const sortSelect = document.getElementById("productSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      store.sortOption = e.target.value;
      renderProductsCatalog();
    });
  }

  const openCartBtn = document.getElementById("openCartNavBtn");
  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);

  const closeCartBtn = document.getElementById("closeCartDrawerBtn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

  const proceedCheckoutBtn = document.getElementById("cartCheckoutBtn");
  if (proceedCheckoutBtn) proceedCheckoutBtn.addEventListener("click", openCheckoutModal);

  const closeCheckoutBtn = document.getElementById("closeCheckoutModalBtn");
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

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
