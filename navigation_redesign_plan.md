# Navigation Redesign Plan for Avishkar Diagnostics

## 1. Objective

Transform the navigation experience to be **premium, calm, and efficient**, matching industry leaders like Redcliffe Labs and Tata 1mg. The goal is to reduce cognitive load, unified entry points, and clarify the user journey.

## 2. Desktop Navigation Strategy

**Concept:** "Single Strip of Clarity"
We eliminated the split top-bar/navbar structure in favor of a single, powerful, and slim navigation bar.

### Layout (Left to Right)

1.  **Identity & Context**:
    - **Logo**: Clear brand identity.
    - **Location Selector**: A compact capsule (Pill) immediately next to the logo. This sets the context ("Service available in [Location]") right at the start.
2.  **Primary Menu (Center)**:
    - Centered links provide balance.
    - **Items**: Home, About, Test Menu, Home Visit, Contact & Locations.
    - **Interaction**: Subtle background wash (`bg-gray-50`) on hover, creating a tactile feel.
3.  **Actions (Right)**:
    - **Cart**: Icon-only with a notification badge.
    - **Login / User**: High-contrast button (Dark Grey/Black) for "Login", switching to a "My Account" pill when logged in.

### Visual specs

- **Height**: 3rem (approx 48-52px) for a focused look.
- **Spacing**: `gap-6` between major sections, `gap-1` between links.
- **Shadow**: `shadow-soft` (custom light shadow) to lift it gently off the content.
- **Typography**: Inter (Sans), Font Weight 600 for links.

## 3. Mobile Navigation Strategy

**Concept:** "Thumb-Zone Efficiency"

### Sticky Top Bar

- **Left**: Logo (Brand recognition).
- **Center**: Location Pill. It scrolls with the user, ensuring they always know/can change their service location.
- **Right**: Hamburger Menu (Clear entry to full site map).

### Hamburger Menu (Overlay)

- **Animation**: `slide-in-from-right`. Smooth 0.3s transition.
- **Content**:
  - **List**: Home, Test Menu, My Reports, Home Visit, Contact.
  - **Visuals**: high-quality Lucide icons (colored backgrounds) for each item to aid quick visual scanning.
  - **Footer**: Quick access to "Cart" and "Login" at the very bottom, easily reachable.

### Sticky Bottom Bar

- **Grid**: 3 Columns (Simplified from 5).
- **Items**:
  1.  **Home**: Anchoring the left.
  2.  **Book Test (Center)**: A floating, emphasized Action Button (`bg-primary`) that breaks the boundary. This is the primary conversion driver.
  3.  **Account**: Anchoring the right for patient access.

## 4. Interaction Design

- **Hover States**: Links do not just change color; they get a subtle background (`bg-gray-50`) and text darken.
- **Active States**: High-contrast primary color (`text-primary`, `bg-green-50`) clearly indicating "You are here".
- **Transitions**: All interactive elements have `transition-all duration-200` for a silky feel.
- **Feedback**: Active scale (`active:scale-95`) on buttons gives click feedback.

## 5. Technical Implementation Details

- **Framework**: HTML5 + Tailwind CSS (CDN).
- **Icons**: Lucide Icons (Script initialized).
- **Responsiveness**:
  - `md:hidden` / `md:block` purely controls the view switch.
  - Flexbox used extensively for alignment.
