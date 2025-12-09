// --- MOCK DATA ---
const navLinks = [
  { name: "Home", view: "home" },
  { name: "About Us", view: "about" },

  { name: "Test Menu", view: "tests" },
  { name: "Home Visit", view: "home-collection" },
  { name: "Contact & Locations", view: "contact" },
];

const locations = [
  "Bank More",
  "Hirapur",
  "Saraidhela",
  "Jharia",
  "Govindpur",
  "City Center",
];

const testDirectory = [
  {
    id: "t1",
    code: "GLU-F",
    name: "Glucose - Fasting",
    category: "Diabetes",
    price: 200,
    tat: "6 Hours",
    isFastingRequired: true,
    sampleType: "Blood",
    description: "Measures blood sugar levels after an overnight fast.",
  },
  {
    id: "t2",
    code: "GLU-PP",
    name: "Glucose - Post Prandial",
    category: "Diabetes",
    price: 200,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Measures blood sugar levels 2 hours after a meal.",
  },
  {
    id: "t3",
    code: "HBA1C",
    name: "HbA1c",
    category: "Diabetes",
    price: 600,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Average blood sugar level over the past 2-3 months.",
  },
  {
    id: "t4",
    code: "LIPID",
    name: "Lipid Profile",
    category: "Heart",
    price: 1100,
    tat: "24 Hours",
    isFastingRequired: true,
    sampleType: "Blood",
    description:
      "Complete cholesterol test including HDL, LDL, and Triglycerides.",
  },
  {
    id: "t5",
    code: "CBC",
    name: "Complete Blood Count (CBC)",
    category: "Hematology",
    price: 400,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description:
      "Evaluates overall health and detects disorders like anemia and infection.",
  },
  {
    id: "t6",
    code: "TSH",
    name: "Thyroid Stimulating Hormone (TSH)",
    category: "Thyroid",
    price: 500,
    tat: "12 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Screening test for thyroid function.",
  },
  {
    id: "t7",
    code: "T3T4",
    name: "Total T3 & T4",
    category: "Thyroid",
    price: 800,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Detailed thyroid hormone analysis.",
  },
  {
    id: "t8",
    code: "LFT",
    name: "Liver Function Test (LFT)",
    category: "Liver",
    price: 900,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Checks how well the liver is working.",
  },
  {
    id: "t9",
    code: "KFT",
    name: "Kidney Function Test (KFT)",
    category: "Kidney",
    price: 900,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Tests for Urea, Creatinine and Electrolytes.",
  },
  {
    id: "t10",
    code: "VIT-D",
    name: "Vitamin D (25-OH)",
    category: "Vitamins",
    price: 1500,
    tat: "48 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Checks for Vitamin D deficiency.",
  },
  {
    id: "t11",
    code: "VIT-B12",
    name: "Vitamin B12",
    category: "Vitamins",
    price: 1200,
    tat: "48 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Essential for nerve tissue health and brain function.",
  },
  {
    id: "t12",
    code: "URINE-R",
    name: "Urine Routine & Microscopy",
    category: "Pathology",
    price: 200,
    tat: "4 Hours",
    isFastingRequired: false,
    sampleType: "Urine",
    description: "Screening test for UTI, kidney disease, and diabetes.",
  },
  {
    id: "t13",
    code: "CRP",
    name: "C-Reactive Protein (CRP)",
    category: "Heart",
    price: 600,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Marker for inflammation in the body.",
  },
  {
    id: "t14",
    code: "IRON",
    name: "Iron Studies",
    category: "Hematology",
    price: 1000,
    tat: "24 Hours",
    isFastingRequired: true,
    sampleType: "Blood",
    description: "Checks iron levels to diagnose anemia.",
  },
  {
    id: "t15",
    code: "CALCIUM",
    name: "Calcium - Total",
    category: "Bone",
    price: 300,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Measures calcium levels in blood.",
  },
  {
    id: "t16",
    code: "ELECT",
    name: "Electrolytes (Na, K, Cl)",
    category: "Kidney",
    price: 500,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Essential for heart and nerve function.",
  },
  {
    id: "t17",
    code: "PSA",
    name: "Prostate Specific Antigen (PSA)",
    category: "Cancer Marker",
    price: 1200,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Screening for prostate cancer.",
  },
  {
    id: "t18",
    code: "FERR",
    name: "Ferritin",
    category: "Hematology",
    price: 800,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Measures iron storage.",
  },
  {
    id: "t19",
    code: "URIC",
    name: "Uric Acid",
    category: "Kidney",
    price: 300,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "High levels can cause gout or kidney stones.",
  },
  {
    id: "t20",
    code: "AMYL",
    name: "Amylase",
    category: "Pancreas",
    price: 600,
    tat: "12 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Diagnoses pancreas problems.",
  },
  {
    id: "t21",
    code: "COVID",
    name: "COVID-19 RT-PCR",
    category: "Infection",
    price: 800,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Swab",
    description: "Gold standard test for COVID-19 infection.",
  },
  {
    id: "t22",
    code: "FEVER",
    name: "Fever Panel Basic",
    category: "Infection",
    price: 1500,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Includes CBC, MP, Widal (Typhoid), and Urine Routine.",
  },
  {
    id: "t23",
    code: "PREG",
    name: "Beta HCG (Pregnancy)",
    category: "Hormones",
    price: 600,
    tat: "24 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Confirms pregnancy by measuring HCG hormone.",
  },
  {
    id: "t24",
    code: "DENGUE",
    name: "Dengue NS1 Antigen",
    category: "Infection",
    price: 1000,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Early detection of Dengue virus.",
  },
  {
    id: "t25",
    code: "TYPHOID",
    name: "Typhoid (Widal)",
    category: "Infection",
    price: 300,
    tat: "6 Hours",
    isFastingRequired: false,
    sampleType: "Blood",
    description: "Screening for Typhoid fever.",
  },
];

const popularPackages = [
  {
    id: 1,
    title: "Full Body Checkup Basic",
    price: 2000,
    discountedPrice: 1500,
    testCount: 45,
    isBestSeller: true,
    category: "Full Body",
    description: "Essential screening for liver, kidney, and blood sugar.",
  },
  {
    id: 2,
    title: "Advanced Heart Care",
    price: 3500,
    discountedPrice: 2500,
    testCount: 62,
    isBestSeller: true,
    category: "Specialized",
    description:
      "Comprehensive cardiac risk assessment including Lipid Profile & ECG.",
  },
  {
    id: 3,
    title: "Diabetes Screening Pack",
    price: 1500,
    discountedPrice: 1000,
    testCount: 18,
    isBestSeller: false,
    category: "Chronic",
    description: "Monitor your blood sugar levels effectively.",
  },
  {
    id: 4,
    title: "Women Wellness Plus",
    price: 4000,
    discountedPrice: 3000,
    testCount: 55,
    isBestSeller: false,
    category: "Women",
    description:
      "Tailored for women including Thyroid, Iron, and Hormone study.",
  },
  {
    id: 5,
    title: "Senior Citizen Care Premium",
    price: 5000,
    discountedPrice: 3500,
    testCount: 85,
    isBestSeller: true,
    category: "Senior",
    description:
      "Complete geriatric profile covering bone health, heart, and vital organs.",
  },
  {
    id: 6,
    title: "Executive Health Check",
    price: 6000,
    discountedPrice: 4500,
    testCount: 90,
    isBestSeller: false,
    category: "Full Body",
    description: "For working professionals leading a high-stress lifestyle.",
  },
];

const locationDetails = [
  {
    id: 1,
    name: "Avishkar Diagnostic - Bank More",
    address: "Bank More, Dhanbad, Jharkhand 826001",
    phone: "+91 326 230 XXXX",
    availableServices: [
      "Radiology",
      "Pathology",
      "Cardiology",
      "24/7 Open",
      "Home Collection",
    ],
  },
  {
    id: 2,
    name: "Hirapur Collection Center",
    address: "Hirapur, Dhanbad, Jharkhand 826001",
    phone: "+91 999 999 XXXX",
    availableServices: ["Pathology", "Home Collection"],
  },
  {
    id: 3,
    name: "Saraidhela Branch",
    address: "Steel Gate, Saraidhela, Dhanbad 828127",
    phone: "+91 888 888 XXXX",
    availableServices: ["Radiology", "Pathology", "Cardiology"],
  },
  {
    id: 4,
    name: "Jharia City Lab",
    address: "Main Road, Jharia, Dhanbad 828111",
    phone: "+91 777 777 XXXX",
    availableServices: ["Pathology", "Biochemistry"],
  },
  {
    id: 5,
    name: "Govindpur Center",
    address: "GT Road, Govindpur, Dhanbad 828109",
    phone: "+91 666 666 XXXX",
    availableServices: ["Radiology", "MRI", "CT Scan"],
  },
  {
    id: 6,
    name: "Dhanbad City Center",
    address: "City Center, Dhanbad, Jharkhand 826001",
    phone: "+91 555 555 XXXX",
    availableServices: ["Radiology", "Pathology", "24/7 Open"],
  },
];

const healthConcerns = [
  { id: "fever", title: "Fever", iconName: "Thermometer" },
  { id: "diabetes", title: "Diabetes", iconName: "Droplet" },
  { id: "kidney", title: "Kidneys", iconName: "Filter" },
  { id: "liver", title: "Liver", iconName: "FlaskConical" },
  { id: "thyroid", title: "Thyroid", iconName: "Activity" },
  { id: "heart", title: "Heart", iconName: "Heart" },
  { id: "vitamin", title: "Vitamins", iconName: "Sun" },
  { id: "allergy", title: "Allergy", iconName: "Flower" },
  { id: "infertility", title: "Infertility", iconName: "Baby" },
  { id: "cancer", title: "Cancer Screening", iconName: "Search" },
  { id: "gut", title: "Gut Health", iconName: "Stethoscope" },
  { id: "lungs", title: "Lungs", iconName: "Wind" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bank More, Dhanbad",
    rating: 5,
    text: "The home collection service was incredibly punctual. The phlebotomist was professional and painless. Got reports on email same day!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Rahul Verma",
    location: "Jharia",
    rating: 5,
    text: "Avishkar is the only place I trust for my parents' diabetes monitoring. Accurate reports and very helpful staff.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Anjali Gupta",
    location: "Hirapur",
    rating: 4,
    text: "Very clean and hygienic lab. The wait time was minimal and the staff guided me well for my MRI scan.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Vikram Singh",
    location: "Saraidhela",
    rating: 5,
    text: "Excellent service! The reports were accurate and timely, which helped in my quick diagnosis. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sita Devi",
    location: "Govindpur",
    rating: 5,
    text: "I booked a home collection for my mother. The team arrived on time and was very polite. Great experience.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Amit Kumar",
    location: "City Center",
    rating: 4,
    text: "Good facility with modern equipment. The staff at the reception was very helpful in guiding me through the process.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
];

// --- STATE ---
let isLoggedIn = false;
let selectedLocation = "Bank More";

// --- NAVIGATION ---
function navigateTo(viewId) {
  document
    .querySelectorAll(".view-section")
    .forEach((el) => el.classList.add("hidden"));
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.remove("hidden");
    window.scrollTo(0, 0);

    // Update Navbar Active State (Desktop)
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.dataset.view === viewId) {
        link.classList.add("text-primary", "bg-green-50");
        link.classList.remove(
          "text-gray-600",
          "hover:text-gray-900",
          "hover:bg-gray-50"
        );
      } else {
        link.classList.remove("text-primary", "bg-green-50");
        link.classList.add(
          "text-gray-600",
          "hover:text-gray-900",
          "hover:bg-gray-50"
        );
      }
    });

    // Update Bottom Nav Active State (Mobile)
    document.querySelectorAll(".bottom-nav-btn").forEach((btn) => {
      const icon = btn.querySelector("i");
      const text = btn.querySelector("span");
      if (btn.dataset.view === viewId) {
        btn.classList.add("text-primary");
        btn.classList.remove("text-gray-400");
        if (icon) icon.setAttribute("stroke-width", "2.5");
      } else {
        btn.classList.remove("text-primary");
        btn.classList.add("text-gray-400");
        if (icon) icon.setAttribute("stroke-width", "2");
      }
    });
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

function toggleLocationMenu() {
  const menu = document.getElementById("location-menu");
  menu.classList.toggle("hidden");
}

function toggleHeroLocationMenu() {
  const menu = document.getElementById("hero-location-menu");
  if (menu) menu.classList.toggle("hidden");
}

function openPackageDetails(packageId) {
  const pkg = popularPackages.find((p) => p.id == packageId);
  if (!pkg) return;

  document.getElementById("drawer-package-title").innerText = pkg.title;
  document.getElementById("drawer-package-subtitle").innerText =
    pkg.category + " Package";

  const discount = Math.round(
    ((pkg.price - pkg.discountedPrice) / pkg.price) * 100
  );

  const content = document.getElementById("drawer-content");
  content.innerHTML = `
      <div class="flex items-center justify-between bg-green-50 p-4 rounded-xl border border-green-100">
          <div>
              <p class="text-xs text-gray-500 uppercase font-bold">Package Price</p> 
              <div class="flex items-end gap-2">
                  <span class="text-2xl font-bold text-primary">₹${
                    pkg.discountedPrice
                  }</span>
                  <span class="text-sm text-gray-400 line-through mb-1">₹${
                    pkg.price
                  }</span>
              </div>
          </div>
          <span class="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm">
            ${discount}% OFF
          </span>
      </div>

      <div>
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <i data-lucide="info" class="h-4 w-4 text-primary"></i> Description
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">${
            pkg.description
          }</p>
      </div>

      <div>
          <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
             <i data-lucide="list-checks" class="h-4 w-4 text-primary"></i> Included Tests (${
               pkg.testCount
             })
          </h3>
          <div class="space-y-2">
             <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                <div class="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-xs">1</div>
                <div>
                    <p class="font-bold text-gray-800 text-sm">Complete Blood Count</p>
                    <p class="text-xs text-gray-500">Hemoglobin, RBC, WBC, Platelets...</p>
                </div>
             </div>
             <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                <div class="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-xs">2</div>
                <div>
                    <p class="font-bold text-gray-800 text-sm">Diabetes Screen</p>
                    <p class="text-xs text-gray-500">Fasting Blood Sugar, HbA1c...</p>
                </div>
             </div>
             <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                <div class="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 font-bold text-xs">3</div>
                <div>
                    <p class="font-bold text-gray-800 text-sm">Lipid Profile</p>
                    <p class="text-xs text-gray-500">Cholesterol, Triglycerides, HDL, LDL...</p>
                </div>
             </div>
             <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                <div class="h-8 w-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 font-bold text-xs">4</div>
                <div>
                    <p class="font-bold text-gray-800 text-sm">Liver Function Test</p>
                    <p class="text-xs text-gray-500">Bilirubin, SGOT, SGPT, Alkaline Lab...</p>
                </div>
             </div>
             <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                <div class="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 font-bold text-xs">5</div>
                <div>
                    <p class="font-bold text-gray-800 text-sm">Kidney Function Test</p>
                    <p class="text-xs text-gray-500">Urea, Creatinine, Uric Acid...</p>
                </div>
             </div>
             <p class="text-center text-xs text-gray-400 italic mt-2">+ ${
               pkg.testCount - 5
             } more parameters included</p>
          </div>
      </div>
  `;

  const drawer = document.getElementById("package-details-drawer");
  drawer.classList.remove("hidden");
  lucide.createIcons();
}

function closePackageDetails() {
  const drawer = document.getElementById("package-details-drawer");
  drawer.classList.add("hidden");
}

function scrollContainer(containerId, direction) {
  const container = document.getElementById(containerId);
  if (container) {
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

function selectLocation(loc) {
  selectedLocation = loc;
  document.getElementById("selected-location-text").innerText = loc;
  document.getElementById("mobile-location-text").innerText = loc;

  const heroText = document.getElementById("hero-selected-location");
  if (heroText) heroText.innerText = loc;

  toggleLocationMenu();
}

function selectHeroLocation(loc) {
  selectLocation(loc);
  const heroMenu = document.getElementById("hero-location-menu");
  if (heroMenu) heroMenu.classList.add("hidden");
}

function toggleUserMenu() {
  const menu = document.getElementById("user-menu");
  if (menu) menu.classList.toggle("hidden");
}

function login() {
  isLoggedIn = true;
  updateAuthUI();
  navigateTo("home");
}

function logout() {
  isLoggedIn = false;
  updateAuthUI();
  navigateTo("home");
}

function updateAuthUI() {
  const loginBtn = document.getElementById("nav-login-btn");
  const userMenuBtn = document.getElementById("nav-user-menu-btn");

  if (isLoggedIn) {
    if (loginBtn) loginBtn.classList.add("hidden");
    if (userMenuBtn) userMenuBtn.classList.remove("hidden");
  } else {
    if (loginBtn) loginBtn.classList.remove("hidden");
    if (userMenuBtn) userMenuBtn.classList.add("hidden");
  }
}

// --- RENDER FUNCTIONS ---

function renderPackages(containerId, filterCategory = "All") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered =
    filterCategory === "All"
      ? popularPackages
      : popularPackages.filter(
          (p) =>
            p.category === filterCategory ||
            (filterCategory === "full" && p.category === "Full Body") ||
            (filterCategory === "women" && p.category === "Women") ||
            (filterCategory === "senior" && p.category === "Senior") ||
            (filterCategory === "chronic" && p.category === "Chronic")
        );

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">No packages found.</div>`;
    return;
  }

  container.innerHTML = filtered
    .map((pkg) => {
      const discount = Math.round(
        ((pkg.price - pkg.discountedPrice) / pkg.price) * 100
      );
      return `
        <div class="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-premium hover:border-gray-200 transition-all duration-300 flex flex-col h-full relative group snap-start">
            <div class="p-6 flex flex-col h-full">
                <!-- Badge & Info -->
                <div class="flex justify-between items-start mb-4">
                     ${
                       pkg.isBestSeller
                         ? `<span class="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1"><i data-lucide="sparkles" class="h-3 w-3"></i> Best Seller</span>`
                         : `<span class="bg-gray-50 text-gray-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Popular</span>`
                     }
                     <button onclick="openPackageDetails('${
                       pkg.id
                     }')" class="text-gray-400 hover:text-primary transition-colors"><i data-lucide="info" class="h-5 w-5"></i></button>
                </div>

                <!-- Title & Desc -->
                <div class="mb-6">
                    <h3 class="text-xl font-heading font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">${
                      pkg.title
                    }</h3>
                    <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">${
                      pkg.description
                    }</p>
                </div>

                <!-- Specs -->
                <div class="grid grid-cols-2 gap-3 mb-8">
                    <div class="bg-soft-blue rounded-xl p-3">
                        <span class="block text-xl font-bold text-gray-900">${
                          pkg.testCount
                        }</span>
                        <span class="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Tests</span>
                    </div>
                     <div class="bg-green-50 rounded-xl p-3">
                        <span class="block text-xl font-bold text-primary">NABL</span>
                        <span class="text-[10px] uppercase font-bold text-green-700/60 tracking-wider">Certified</span>
                    </div>
                </div>

                <!-- Price & CTA -->
                <div class="mt-auto">
                    <div class="flex items-end gap-2 mb-4">
                         <span class="text-2xl font-bold text-gray-900">₹${
                           pkg.discountedPrice
                         }</span>
                         <span class="text-sm text-gray-400 line-through mb-1">₹${
                           pkg.price
                         }</span>
                         <span class="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded mb-1.5 ml-auto">${discount}% OFF</span>
                    </div>
                    <button onclick="navigateTo('appointment')" class="w-full bg-primary hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                        Book Package <i data-lucide="arrow-right" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>
        </div>`;
    })
    .join("");
  lucide.createIcons();
}

function renderTestDirectory(
  searchTerm = "",
  category = "All",
  fastingOnly = false,
  reportTime = "All",
  sortBy = "popular"
) {
  const container = document.getElementById("test-directory-grid");
  const emptyState = document.getElementById("test-empty-state");
  const countLabel = document.getElementById("test-count");

  if (!container) return;

  // 1. Filter
  let filtered = testDirectory.filter((test) => {
    const matchesSearch =
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "All" || test.category === category;

    const matchesFasting = fastingOnly ? test.isFastingRequired === true : true;

    let matchesTime = true;
    if (reportTime !== "All") {
      const testHours = parseInt(test.tat);
      const limitHours = parseInt(reportTime);
      if (!isNaN(testHours) && !isNaN(limitHours)) {
        matchesTime = testHours <= limitHours;
      }
    }

    return matchesSearch && matchesCategory && matchesFasting && matchesTime;
  });

  // 2. Sort
  if (sortBy === "price_low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "time_fast") {
    filtered.sort((a, b) => parseInt(a.tat) - parseInt(b.tat));
  } else {
    // popular - keep original order
  }

  // 3. UI Updates
  if (countLabel) countLabel.innerText = `${filtered.length} Tests Available`;

  if (filtered.length === 0) {
    container.innerHTML = "";
    container.classList.add("hidden");
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  container.classList.remove("hidden");
  if (emptyState) emptyState.classList.add("hidden");

  container.innerHTML = filtered
    .map((test) => {
      const isBlood = test.sampleType === "Blood";
      const sampleBadge = isBlood
        ? `<span class="inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border border-red-100"><i data-lucide="droplet" class="h-3 w-3"></i> Blood</span>`
        : `<span class="inline-flex items-center gap-1.5 bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border border-yellow-100"><i data-lucide="flask-conical" class="h-3 w-3"></i> ${test.sampleType}</span>`;

      const fastingBadge = test.isFastingRequired
        ? `<span class="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border border-purple-100"><i data-lucide="coffee-off" class="h-3 w-3"></i> Fasting</span>`
        : `<span class="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border border-green-100"><i data-lucide="check-circle-2" class="h-3 w-3"></i> No Fasting</span>`;

      return `
        <div class="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col relative overflow-hidden h-full">
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-[100px] -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
            
            <div class="relative z-10 flex flex-col h-full">
                <!-- Header -->
                <div class="flex justify-between items-start gap-4 mb-3">
                    <div>
                        <span class="inline-block text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-2 uppercase tracking-wider">${test.category}</span>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-1">${test.name}</h3>
                        <p class="text-xs text-gray-400 font-mono">${test.code}</p>
                    </div>
                    <div class="text-right">
                        <span class="block text-xl md:text-2xl font-bold text-primary tracking-tight">₹${test.price}</span>
                    </div>
                </div>

                <!-- Description -->
                <p class="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-2">${test.description}</p>

                <!-- Badges -->
                <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                    ${sampleBadge}
                    <span class="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border border-indigo-100">
                        <i data-lucide="clock" class="h-3 w-3"></i> ${test.tat}
                    </span>
                    ${fastingBadge}
                </div>

                <!-- Button -->
                <button onclick="navigateTo('appointment')" class="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gray-200 hover:bg-primary hover:shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn border border-transparent">
                    Book This Test <i data-lucide="arrow-right" class="h-4 w-4 text-gray-400 group-hover/btn:text-white transition-colors"></i>
                </button>
            </div>
        </div>
      `;
    })
    .join("");

  lucide.createIcons();
}

function initTestMenu() {
  const searchInput = document.getElementById("test-search-input");
  const categorySelect = document.getElementById("test-category-select");
  const fastingCheck = document.getElementById("test-fasting-check");
  const reportTimeSelect = document.getElementById("test-report-time-select");
  const sortSelect = document.getElementById("test-sort-select");

  const update = () => {
    renderTestDirectory(
      searchInput?.value || "",
      categorySelect?.value || "All",
      fastingCheck?.checked || false,
      reportTimeSelect?.value || "All",
      sortSelect?.value || "popular"
    );
  };

  if (searchInput) searchInput.addEventListener("input", update);
  if (categorySelect) categorySelect.addEventListener("change", update);
  if (fastingCheck) fastingCheck.addEventListener("change", update);
  if (reportTimeSelect) reportTimeSelect.addEventListener("change", update);
  if (sortSelect) sortSelect.addEventListener("change", update);

  update();
}

function resetFilters() {
  const search = document.getElementById("test-search-input");
  const cat = document.getElementById("test-category-select");
  const time = document.getElementById("test-report-time-select");
  const fast = document.getElementById("test-fasting-check");
  const sort = document.getElementById("test-sort-select");

  if (search) search.value = "";
  if (cat) cat.value = "All";
  if (time) time.value = "All";
  if (fast) fast.checked = false;
  if (sort) sort.value = "popular";

  renderTestDirectory();
}

function renderHealthConcerns() {
  const container = document.getElementById("concerns-container");
  if (!container) return;

  // Responsive Grid Logic: Flex Scroll on Mobile, Grid on Desktop
  container.className =
    "flex gap-3 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:pb-0 md:justify-items-center";

  container.innerHTML = healthConcerns
    .map((concern) => {
      // Simple conversion: CamelCase to kebab-case for Lucide
      const icon = concern.iconName
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();

      // Map ids to colors - using hover: classes ensures they are only visible on hover
      const colorMap = {
        fever: {
          bg: "bg-red-50",
          text: "text-red-700",
          icon: "text-red-500",
          border: "hover:border-red-200",
        },
        diabetes: {
          bg: "bg-blue-50",
          text: "text-blue-700",
          icon: "text-blue-500",
          border: "hover:border-blue-200",
        },
        kidney: {
          bg: "bg-indigo-50",
          text: "text-indigo-700",
          icon: "text-indigo-500",
          border: "hover:border-indigo-200",
        },
        liver: {
          bg: "bg-yellow-50",
          text: "text-yellow-700",
          icon: "text-yellow-600",
          border: "hover:border-yellow-200",
        },
        thyroid: {
          bg: "bg-purple-50",
          text: "text-purple-700",
          icon: "text-purple-500",
          border: "hover:border-purple-200",
        },
        heart: {
          bg: "bg-pink-50",
          text: "text-pink-700",
          icon: "text-pink-500",
          border: "hover:border-pink-200",
        },
        vitamin: {
          bg: "bg-orange-50",
          text: "text-orange-700",
          icon: "text-orange-500",
          border: "hover:border-orange-200",
        },
        allergy: {
          bg: "bg-rose-50",
          text: "text-rose-700",
          icon: "text-rose-500",
          border: "hover:border-rose-200",
        },
        infertility: {
          bg: "bg-teal-50",
          text: "text-teal-700",
          icon: "text-teal-500",
          border: "hover:border-teal-200",
        },
        cancer: {
          bg: "bg-gray-100",
          text: "text-gray-700",
          icon: "text-gray-600",
          border: "hover:border-gray-300",
        },
        gut: {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          icon: "text-emerald-600",
          border: "hover:border-emerald-200",
        },
        lungs: {
          bg: "bg-cyan-50",
          text: "text-cyan-700",
          icon: "text-cyan-500",
          border: "hover:border-cyan-200",
        },
      };

      const colors = colorMap[concern.id] || {
        bg: "bg-green-50",
        text: "text-primary",
        icon: "text-primary",
        border: "hover:border-green-200",
      };

      return `
        <div onclick="navigateTo('tests', '${concern.title}')" class="min-w-[140px] md:min-w-0 md:w-full bg-white border border-gray-100 px-4 py-4 rounded-2xl flex items-center justify-start md:justify-center gap-3 hover:shadow-lg transition-all cursor-pointer group snap-center ${colors.border} hover:bg-white">
            <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${colors.bg} group-hover:scale-110">
                <i data-lucide="${icon}" class="h-5 w-5 ${colors.icon}"></i>
            </div>
            <span class="font-bold text-gray-700 text-sm group-hover:text-gray-900 whitespace-nowrap">${concern.title}</span>
        </div>
        `;
    })
    .join("");
  lucide.createIcons();
}
// --- APPOINTMENT FORM LOGIC ---
let appointmentStep = 1;
const appointmentData = {
  serviceType: "home",
  date: "",
  timeSlot: "",
  name: "",
  phone: "",
  address: "",
  selectedTests: [],
};

function updateAppointmentStep() {
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`apt-step-${i}`);
    if (el) el.classList.add("hidden");
  }
  document
    .getElementById(`apt-step-${appointmentStep}`)
    .classList.remove("hidden");

  // Update Progress Bar
  document.getElementById("apt-progress").style.width = `${
    (appointmentStep / 5) * 100
  }%`;

  // Update Buttons
  document
    .getElementById("apt-back-btn")
    .classList.toggle("hidden", appointmentStep === 1);
  document
    .getElementById("apt-next-btn")
    .classList.toggle("hidden", appointmentStep === 5);
  document
    .getElementById("apt-submit-btn")
    .classList.toggle("hidden", appointmentStep !== 5);
}

function nextAptStep() {
  if (appointmentStep < 5) {
    appointmentStep++;
    updateAppointmentStep();
  }
}
function prevAptStep() {
  if (appointmentStep > 1) {
    appointmentStep--;
    updateAppointmentStep();
  }
}

function toggleAptTest(testId) {
  const index = appointmentData.selectedTests.indexOf(testId);
  if (index > -1) appointmentData.selectedTests.splice(index, 1);
  else appointmentData.selectedTests.push(testId);
  renderAptSelectedTests();
}

function renderAptSelectedTests() {
  const container = document.getElementById("apt-selected-tests");
  if (!container) return;

  if (appointmentData.selectedTests.length === 0) {
    container.innerHTML =
      '<p class="text-sm text-gray-400 italic">No tests selected yet.</p>';
    document.getElementById("apt-total").innerText = "₹0";
    return;
  }

  let total = 0;
  container.innerHTML = appointmentData.selectedTests
    .map((id) => {
      const t = testDirectory.find((x) => x.id === id);
      total += t.price;
      return `<span class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold">${t.name} <i data-lucide="x" class="h-3 w-3 cursor-pointer hover:text-red-500" onclick="toggleAptTest('${id}')"></i></span>`;
    })
    .join("");
  document.getElementById("apt-total").innerText = `₹${total}`;
  lucide.createIcons();
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  const visibleTestimonials = testimonials.slice(0, 4);

  container.innerHTML = visibleTestimonials
    .map(
      (t) => `
        <div class="min-w-[300px] md:min-w-[350px] bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col snap-center relative group">
            <div class="flex items-center gap-4 mb-6">
                <img src="${t.image}" alt="${
        t.name
      }" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
                <div>
                    <!-- Name shown once here -->
                    <h4 class="font-bold text-gray-900 text-base">${t.name}</h4>
                    <p class="text-xs text-gray-500 font-medium">${
                      t.location
                    }</p>
                </div>
            </div>
            <div class="flex mb-4">
                ${[...Array(5)]
                  .map(
                    (_, i) =>
                      `<i data-lucide="star" class="h-4 w-4 ${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }"></i>`
                  )
                  .join("")}
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-grow italic">"${
              t.text
            }"</p>
        </div>
    `
    )
    .join("");

  // Append View More Card
  container.innerHTML += `
        <div onclick="navigateTo('about')" class="min-w-[200px] md:min-w-[250px] bg-white p-8 rounded-3xl border border-dashed border-gray-300 hover:border-primary hover:bg-green-50 transition-all h-full flex flex-col items-center justify-center cursor-pointer group snap-center">
             <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i data-lucide="arrow-right" class="h-8 w-8 text-primary"></i>
             </div>
             <p class="font-bold text-gray-900 mb-1 group-hover:text-primary">View More Stories</p>
             <p class="text-xs text-gray-500">Read what our patients say</p>
        </div>
    `;

  lucide.createIcons();
}

// --- HERO SEARCH ---
function initializeHeroSearch() {
  const input = document.getElementById("hero-search-input");
  const resultsContainer = document.getElementById("hero-search-results");

  if (!input || !resultsContainer) return;

  // Hide results on click outside
  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add("hidden");
    }
  });

  input.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();

    if (term.length === 0) {
      resultsContainer.classList.add("hidden");
      resultsContainer.innerHTML = "";
      return;
    }

    const filteredTests = testDirectory.filter(
      (test) =>
        test.name.toLowerCase().includes(term) ||
        test.code.toLowerCase().includes(term)
    );

    if (filteredTests.length === 0) {
      resultsContainer.classList.remove("hidden");
      resultsContainer.innerHTML = `
        <div class="p-4 text-center text-gray-500 text-sm">
          No tests found.
        </div>
      `;
      return;
    }

    resultsContainer.classList.remove("hidden");
    resultsContainer.innerHTML = filteredTests
      .slice(0, 6) // Limit to 6 results
      .map(
        (test) => `
        <div 
          onclick="
            navigateTo('tests');
            const searchInput = document.getElementById('test-search-input');
            if(searchInput) {
                searchInput.value = '${test.code}';
                renderTestDirectory('${test.code}');
            }
          "
          class="p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer flex justify-between items-center group transition-colors"
        >
          <div class="flex items-center gap-3">
             <div class="bg-green-100 p-1.5 rounded-lg text-primary">
                <i data-lucide="test-tube" class="h-4 w-4"></i>
             </div>
             <div>
                <p class="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">${test.name}</p>
                <p class="text-xs text-gray-500">${test.category}</p>
             </div>
          </div>
          <span class="text-xs font-bold text-primary bg-green-50 px-2 py-1 rounded-md">₹${test.price}</span>
        </div>
      `
      )
      .join("");
    lucide.createIcons();
  });

  input.addEventListener("focus", () => {
    if (input.value.trim().length > 0) {
      input.dispatchEvent(new Event("input"));
    }
  });
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // Home Page Renders
  renderPackages("packages-container");
  renderTestimonials();
  renderHealthConcerns();
  initializeHeroSearch();

  // Wellness Page
  renderPackages("wellness-packages-grid");
  document.querySelectorAll(".wellness-filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".wellness-filter-btn").forEach((b) => {
        b.classList.remove("bg-primary", "text-white", "shadow-lg");
        b.classList.add(
          "bg-white",
          "text-gray-600",
          "border",
          "border-gray-200"
        );
      });
      e.target.classList.remove(
        "bg-white",
        "text-gray-600",
        "border",
        "border-gray-200"
      );
      e.target.classList.add("bg-primary", "text-white", "shadow-lg");
      renderPackages("wellness-packages-grid", e.target.dataset.category);
    });
  });

  // Test Directory
  // Test Directory
  if (typeof initTestMenu === "function") {
    initTestMenu();
  } else {
    renderTestDirectory(); // Fallback
  }

  // Contact Page
  renderLocations();
  document
    .getElementById("location-search")
    ?.addEventListener("input", (e) => renderLocations(e.target.value));

  // Appointment Page
  const aptSearchInput = document.getElementById("apt-test-search");
  if (aptSearchInput) {
    aptSearchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = testDirectory.filter((t) =>
        t.name.toLowerCase().includes(term)
      );
      document.getElementById("apt-test-list").innerHTML = filtered
        .map((test) => {
          const isSelected = appointmentData.selectedTests.includes(test.id);
          return `
                    <div onclick="toggleAptTest('${
                      test.id
                    }')" class="p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
            isSelected
              ? "bg-primary text-white shadow-md"
              : "bg-white hover:bg-gray-100 text-gray-700"
          }">
                        <div class="flex-1"><p class="font-bold text-sm">${
                          test.name
                        }</p><p class="text-xs ${
            isSelected ? "text-green-100" : "text-gray-500"
          }">₹${test.price}</p></div>
                        ${
                          isSelected
                            ? '<i data-lucide="check-circle" class="h-5 w-5"></i>'
                            : ""
                        }
                    </div>`;
        })
        .join("");
      lucide.createIcons();
    });
  }

  // Default View
  navigateTo("home");
  updateAuthUI();

  // Initialize Promo Slider
  initPromoSlider();
});

/* --- LOCATIONS Logic --- */
function renderLocations(filter = "") {
  const container = document.getElementById("locations-grid"); // Assuming ID based on context
  if (!container) return;

  const term = filter.toLowerCase();
  const filtered = locations.filter(
    (l) =>
      l.area.toLowerCase().includes(term) || l.type.toLowerCase().includes(term)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center text-gray-500">No locations found.</div>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (l) => `
        <div class="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
            <div class="flex justify-between items-start mb-4">
                <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                    ${l.id}
                </div>
                <span class="text-[10px] font-bold uppercase tracking-wider bg-gray-50 py-1 px-2 rounded text-gray-500">${l.type}</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-1">${l.area}</h4>
            <p class="text-sm text-gray-500 mb-4">Monday - Saturday, 7AM - 8PM</p>
            <button class="w-full py-2 rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">View Details</button>
        </div>
    `
    )
    .join("");
}

/* --- PROMO SLIDER --- */
let currentPromoSlide = 0;
let promoAutoSlideInterval;

function initPromoSlider() {
  const track = document.getElementById("promo-slider-track");
  if (!track) return;

  const slides = track.children;
  const dotsContainer = document.getElementById("promo-slider-dots");

  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("button");
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${
        i === 0 ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
      }`;
      dot.onclick = () => goToPromoSlide(i);
      dotsContainer.appendChild(dot);
    }
  }

  // Touch Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(promoAutoSlideInterval);
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) movePromoSlide(1);
      if (touchEndX > touchStartX + 50) movePromoSlide(-1);
      startPromoAutoSlide();
    },
    { passive: true }
  );

  startPromoAutoSlide();
}

function movePromoSlide(direction) {
  const track = document.getElementById("promo-slider-track");
  if (!track) return;
  const totalSlides = track.children.length;
  let next = currentPromoSlide + direction;

  if (next < 0) next = totalSlides - 1;
  if (next >= totalSlides) next = 0;

  goToPromoSlide(next);
}

function goToPromoSlide(index) {
  const track = document.getElementById("promo-slider-track");
  const dots = document.getElementById("promo-slider-dots")?.children;

  if (!track) return;

  currentPromoSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  // Update dots
  if (dots) {
    for (let i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = `w-2 h-2 rounded-full transition-all duration-300 ${
          i === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
        }`;
      }
    }
  }

  resetPromoAutoSlide();
}

function startPromoAutoSlide() {
  clearInterval(promoAutoSlideInterval);
  promoAutoSlideInterval = setInterval(() => {
    movePromoSlide(1);
  }, 5000);
}

function resetPromoAutoSlide() {
  clearInterval(promoAutoSlideInterval);
  startPromoAutoSlide();
}
