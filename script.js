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
        <div class="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col h-full relative group snap-start">
            <div class="flex justify-between items-start pt-4 px-4">
                <div class="flex gap-2">
                    ${
                      pkg.isBestSeller
                        ? `<span class="bg-[#FFF4E5] text-[#B95000] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 border border-[#FFD8B2]"><i data-lucide="star" class="h-3 w-3 fill-current"></i> Best Seller</span>`
                        : `<span class="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">Popular</span>`
                    }
                </div>
                <button onclick="openPackageDetails('${
                  pkg.id
                }')" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-500 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
                    <i data-lucide="info" class="h-5 w-5"></i>
                </button>
            </div>
            <div class="px-5 pt-3 pb-2 flex-grow">
                <h3 class="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors">${
                  pkg.title
                }</h3>
                <p class="text-xs text-gray-500 mb-4 line-clamp-2 min-h-[32px]">${
                  pkg.description
                }</p>
                <div class="bg-[#F8FAFC] rounded-xl p-3 mb-4 border border-gray-100">
                    <div class="flex justify-between items-center mb-2 border-b border-gray-200 pb-2 border-dashed">
                        <span class="text-xs font-bold text-gray-600">Includes ${
                          pkg.testCount
                        } Tests</span>
                        <span class="text-[10px] font-bold text-primary bg-green-50 px-2 py-0.5 rounded-full">NABL Labs</span>
                    </div>
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-2 text-xs text-gray-500"><i data-lucide="check-circle-2" class="h-3.5 w-3.5 text-green-500"></i><span>Same Day Reporting</span></div>
                        <div class="flex items-center gap-2 text-xs text-gray-500"><i data-lucide="check-circle-2" class="h-3.5 w-3.5 text-green-500"></i><span>Free Home Collection</span></div>
                    </div>
                </div>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 bg-white mt-auto">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="text-xs text-gray-400 line-through decoration-gray-400">₹${
                              pkg.price
                            }</span>
                            <span class="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 rounded">${discount}% OFF</span>
                        </div>
                        <span class="text-xl font-bold text-gray-900 block">₹${
                          pkg.discountedPrice
                        }</span>
                    </div>
                    <button onclick="navigateTo('appointment')" class="bg-primary hover:bg-green-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-green-200 flex items-center gap-2 group/btn">
                        ADD <i data-lucide="arrow-right" class="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform"></i>
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
  fastingOnly = false
) {
  const container = document.getElementById("test-directory-grid");
  if (!container) return;

  const filtered = testDirectory.filter((test) => {
    const matchesSearch =
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || test.category === category;
    const matchesFasting = fastingOnly ? test.isFastingRequired : true;
    return matchesSearch && matchesCategory && matchesFasting;
  });

  document.getElementById(
    "test-count"
  ).innerText = `Found ${filtered.length} tests`;

  if (filtered.length === 0) {
    container.innerHTML = `
        <div class="col-span-full text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <div class="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4"><i data-lucide="search" class="h-8 w-8 text-gray-300"></i></div>
            <h3 class="text-xl font-bold text-gray-700 mb-2">No tests found</h3>
            <p class="text-gray-500">Try adjusting your filters.</p>
        </div>`;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered
    .map(
      (test) => `
        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 group flex flex-col">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <i data-lucide="test-tube" class="h-6 w-6"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 text-lg leading-tight group-hover:text-primary transition-colors">${
                          test.name
                        }</h3>
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wide">${
                          test.category
                        }</span>
                    </div>
                </div>
                <div class="text-right"><span class="block text-xl font-bold text-primary">₹${
                  test.price
                }</span></div>
            </div>
            <p class="text-sm text-gray-600 mb-6 line-clamp-2 min-h-[40px]">${
              test.description
            }</p>
            <div class="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-500 mb-6 bg-gray-50 p-4 rounded-xl">
                <div class="flex items-center gap-2"><i data-lucide="beaker" class="h-4 w-4 text-secondary"></i><span>Sample: <span class="font-semibold text-gray-700">${
                  test.sampleType
                }</span></span></div>
                <div class="flex items-center gap-2"><i data-lucide="clock" class="h-4 w-4 text-secondary"></i><span>Report: <span class="font-semibold text-gray-700">${
                  test.tat
                }</span></span></div>
                <div class="flex items-center gap-2 col-span-2">
                    <i data-lucide="alert-circle" class="h-4 w-4 ${
                      test.isFastingRequired ? "text-red-500" : "text-green-500"
                    }"></i>
                    <span class="${
                      test.isFastingRequired
                        ? "text-red-600 font-semibold"
                        : "text-green-600 font-semibold"
                    }">${
        test.isFastingRequired ? "Fasting Required" : "No Fasting Required"
      }</span>
                </div>
            </div>
            <button onclick="navigateTo('appointment')" class="mt-auto w-full bg-primary hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2">
                <i data-lucide="shopping-cart" class="h-4 w-4"></i> Book This Test
            </button>
        </div>
    `
    )
    .join("");
  lucide.createIcons();
}

function renderLocations(searchTerm = "", service = "All") {
  const container = document.getElementById("locations-grid");
  if (!container) return;

  const filtered = locationDetails.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService =
      service === "All" || loc.availableServices.includes(service);
    return matchesSearch && matchesService;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">No locations found.</div>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (loc) => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">${
                      loc.name
                    }</h3>
                    <p class="text-sm text-gray-500 flex items-center gap-1 mt-1"><i data-lucide="map-pin" class="h-3 w-3"></i> ${
                      loc.address
                    }</p>
                </div>
                <div class="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-primary"><i data-lucide="navigation" class="h-5 w-5"></i></div>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
                ${loc.availableServices
                  .slice(0, 3)
                  .map(
                    (s) =>
                      `<span class="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-bold rounded-md border border-gray-100">${s}</span>`
                  )
                  .join("")}
                ${
                  loc.availableServices.length > 3
                    ? `<span class="px-2 py-1 bg-gray-50 text-gray-400 text-xs font-bold rounded-md border border-gray-100">+${
                        loc.availableServices.length - 3
                      }</span>`
                    : ""
                }
            </div>
            <div class="flex gap-3">
                <a href="tel:${
                  loc.phone
                }" class="flex-1 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all"><i data-lucide="phone" class="h-4 w-4"></i> Call</a>
                <button onclick="navigateTo('appointment')" class="flex-1 bg-primary hover:bg-green-700 text-white font-bold py-2.5 rounded-xl text-sm shadow-lg shadow-green-900/10 transition-all">Book Visit</button>
            </div>
        </div>
    `
    )
    .join("");
  lucide.createIcons();
}

function renderHealthConcerns() {
  const container = document.getElementById("concerns-container");
  if (!container) return;

  container.innerHTML = healthConcerns
    .map((concern) => {
      // Simple conversion: CamelCase to kebab-case for Lucide
      const icon = concern.iconName
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();

      // Map ids to colors - using hover: classes ensures they are only visible on hover
      const colorMap = {
        fever: {
          card: "hover:bg-red-50 hover:border-red-200",
          icon: "text-red-500",
          text: "group-hover:text-red-600",
        },
        diabetes: {
          card: "hover:bg-blue-50 hover:border-blue-200",
          icon: "text-blue-500",
          text: "group-hover:text-blue-600",
        },
        kidney: {
          card: "hover:bg-indigo-50 hover:border-indigo-200",
          icon: "text-indigo-500",
          text: "group-hover:text-indigo-600",
        },
        liver: {
          card: "hover:bg-yellow-50 hover:border-yellow-200",
          icon: "text-yellow-600",
          text: "group-hover:text-yellow-700",
        },
        thyroid: {
          card: "hover:bg-purple-50 hover:border-purple-200",
          icon: "text-purple-500",
          text: "group-hover:text-purple-600",
        },
        heart: {
          card: "hover:bg-pink-50 hover:border-pink-200",
          icon: "text-pink-500",
          text: "group-hover:text-pink-600",
        },
        vitamin: {
          card: "hover:bg-orange-50 hover:border-orange-200",
          icon: "text-orange-500",
          text: "group-hover:text-orange-600",
        },
        allergy: {
          card: "hover:bg-rose-50 hover:border-rose-200",
          icon: "text-rose-500",
          text: "group-hover:text-rose-600",
        },
        infertility: {
          card: "hover:bg-teal-50 hover:border-teal-200",
          icon: "text-teal-500",
          text: "group-hover:text-teal-600",
        },
        cancer: {
          card: "hover:bg-gray-100 hover:border-gray-300",
          icon: "text-gray-600",
          text: "group-hover:text-gray-800",
        },
        gut: {
          card: "hover:bg-emerald-50 hover:border-emerald-200",
          icon: "text-emerald-600",
          text: "group-hover:text-emerald-700",
        },
        lungs: {
          card: "hover:bg-cyan-50 hover:border-cyan-200",
          icon: "text-cyan-500",
          text: "group-hover:text-cyan-600",
        },
      };

      const colors = colorMap[concern.id] || {
        card: "hover:bg-green-50 hover:border-green-200",
        icon: "text-primary",
        text: "group-hover:text-primary",
      };

      return `
        <div onclick="navigateTo('tests', '${concern.title}')" class="min-w-[140px] md:min-w-[180px] bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all cursor-pointer group snap-center ${colors.card}">
            <div class="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white shadow-sm group-hover:scale-110 transition-all ${colors.icon}">
                <i data-lucide="${icon}" class="h-6 w-6"></i>
            </div>
            <span class="font-bold text-gray-700 text-sm transition-colors ${colors.text}">${concern.title}</span>
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

  container.innerHTML = testimonials
    .map(
      (t) => `
        <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
            <div class="flex items-center gap-4 mb-6">
                <img src="${t.image}" alt="${
        t.name
      }" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm">
                <div>
                    <h4 class="font-bold text-gray-900">${t.name}</h4>
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
  renderTestDirectory();
  document
    .getElementById("test-search-input")
    ?.addEventListener("input", (e) =>
      renderTestDirectory(
        e.target.value,
        document.getElementById("test-category-select").value,
        document.getElementById("test-fasting-check").checked
      )
    );
  document
    .getElementById("test-category-select")
    ?.addEventListener("change", (e) =>
      renderTestDirectory(
        document.getElementById("test-search-input").value,
        e.target.value,
        document.getElementById("test-fasting-check").checked
      )
    );
  document
    .getElementById("test-fasting-check")
    ?.addEventListener("change", (e) =>
      renderTestDirectory(
        document.getElementById("test-search-input").value,
        document.getElementById("test-category-select").value,
        e.target.checked
      )
    );

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
});
