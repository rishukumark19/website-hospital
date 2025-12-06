# Avishkar Diagnostic Centre Website

A premium, fully responsive static website for Avishkar Diagnostic Centre, designed to provide a seamless user experience for patients seeking diagnostic services.

## 🚀 Features

- **Responsive Design**: Optimized for all devices, from mobile phones to large desktop screens.
- **Dynamic Navigation**:
  - **Desktop**: Full navbar with dropdowns for locations and user account.
  - **Mobile**: Slide-out menu and a sticky bottom navigation bar for quick access.
- **Interactive Elements**:
  - **Hero Section**: Unified search bar with location selector.
  - **Health Concerns**: Scrollable/Grid view of health concerns (Kidney, Liver, etc.).
  - **Test Directory**: Searchable and filterable list of 500+ tests.
- **Appointment Booking**: A multi-step, user-friendly form for booking home collections or lab visits.
- **Service Showcases**: Detailed sections for Pathology, Radiology, Wellness Packages, and more.
- **User Dashboard**: Simulated dashboard for viewing reports and upcoming appointments.

## 🛠️ Technology Stack

- **HTML5**: Semantic structure.
- **Tailwind CSS**: Utility-first styling (via CDN) for rapid and modern UI development.
- **Vanilla JavaScript**: Handles all interactivity, routing (SPA simulation), and data rendering.
- **Lucide Icons**: Beautiful, consistent icons (via CDN).

## 📂 Project Structure

```
/
├── index.html      # Main entry point containing all views and structure
├── script.js       # Core logic, mock data, and event handlers
├── README.md       # Project documentation
└── .gitignore      # Git configuration
```

## 🏃‍♂️ How to Run

Since this is a static website with no build dependencies:

1.  **Clone the repository** or download the files.
2.  **Open `index.html`** directly in your web browser.
3.  That's it! The site is fully functional.

## 🌐 Deployment

This project is ready for immediate deployment to any static hosting service:

- **GitHub Pages**: Go to Settings > Pages and select the `main` branch.
- **Netlify / Vercel**: Simply drag and drop the folder or connect your Git repository.

## 📝 Customization

- **Content**: Edit the HTML structure in `index.html`.
- **Data**: Modify the mock data arrays (e.g., `packages`, `testDirectory`, `locations`) at the top of `script.js`.
- **Styling**: Update Tailwind classes in `index.html` or the `tailwind.config` script tag within the `<head>`.

---

_Designed for Healthcare Excellence._
