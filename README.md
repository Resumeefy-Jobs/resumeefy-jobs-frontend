# Resumeefy Job Board

Resumeefy is an innovative web platform that bridges the gap between employers and job seekers through an intelligent, intuitive, and design-driven job management experience. Built to simplify how people find jobs and how companies discover talent, Resumeefy combines modern UI/UX, AI-powered resume tools, and streamlined dashboards for both applicants and employers.

---

## Overview
Resumeefy offers a trio-sided ecosystem:

- **For Applicants:** A personal career dashboard where users can build resumes, find and save jobs, track applications, schedule interviews, and manage professional profiles with smart job recommendations.
- **For Employers:** A workspace to post jobs, manage applications, schedule interviews, and discover qualified talent efficiently.
- **For Admins:** A central administration console to moderate content, manage users (applicants & employers), review platform metrics, handle disputes, and maintain platform health and policies.


---

## Core Features

### Landing Page
- Engaging hero section with clear CTAs
- Dynamic showcase of Applicant and Employer signup modes.
- Minimal, modern, and conversion-optimized UI.

### Applicant Side
- Dashboard Home: Overview of metrics (applications, saved jobs, interviews, etc.).
- Find Jobs: Browse, search, and apply with filters.
- Saved Jobs: Store listings for future applications.
- My Applications: Track application stages.
- Interviews: View and manage scheduled interviews.
- Profile / Resume: Create or upload resumes, manage experience and skills.
- Settings: Manage account, notifications, and theme preferences.

### Employer Side
- Overview dashboard, Post Job, Manage Jobs, View Applicants, Company Profile, and Settings tabs.

### Shared Functionalities
## 🧩 Shared Functionalities

The **Resumeefy Job Board Platform** is built with **modularity, reusability, and responsiveness** at its core. Every component and layout works seamlessly across all device types ensuring consistent design and user experience.

### 🌐 Core Functionalities

#### 1. Fully Responsive Design
- Adaptive layouts for **desktop**, **tablet**, and **mobile** devices.  
- Implemented using Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).  
- Flexible grid and flex-based layouts that auto-adjust to screen size.

#### 2. Reusable UI Components
- All UI elements (buttons, modals, cards, inputs, etc.) are modular and reusable across pages.  
- Styled with **Tailwind CSS utility classes** and extended using component variants.  
- Supports both **light** and **dark mode** using a global theme switcher.  
- Components are accessible and fully keyboard-navigable.

#### 3. Accessible Typography & Color System
- Uses scalable `rem`-based typography and color contrast ratios for readability.  
- Follows **WCAG 2.1 AA accessibility guidelines**.  
- Tailwind theme defines consistent font sizes, spacing, and weights.  
- Dynamic text scaling for smaller screens.

#### 4. Dark Mode Support
- User-preference–based theme switching (`darkMode: 'class'` in Tailwind config).  
- Global context for toggling themes.  
- Auto-detects system color scheme on first load.

#### 5. Global State Management
- Context API for **Auth**, **Jobs**, and **Notifications**.  
- Centralized control ensures data consistency across routes and layouts.  
- Custom hooks like `useAuth()`, `useJobs()`, and `useNotifications()` simplify logic reuse.

#### 6. API & Data Handling
- `services/` folder manages REST API integrations.  
- Centralized `api.js` handles headers, tokens, and error responses.  
- Mock data fallback for offline or development mode.

#### 7. Routing & Access Control
- Role-based routes for **Applicant**, **Employer**, and **Admin** dashboards.  
- PrivateRoute protection for authenticated pages.  
- Guest routes for onboarding and public pages (Landing, Signup, Login).

#### 8. Reusable Layouts
- Common layouts (`ApplicantLayout`, `EmployerLayout`, `AdminLayout`) handle shared UI structure.  
- Each layout includes a persistent **Sidebar**, **Header**, and **Main Content** area.  
- Optimized with Tailwind flexbox/grid for adaptive layouts.

#### 9. Notification & Alerts System
- Context-driven notification handling.  
- Reusable `NotificationCard` component for dashboard and modal pop-ups.  
- Real-time updates supported through event listeners or future WebSocket integration.

#### 10. Form Components & Validation
- Shared form inputs, checkboxes, dropdowns, and buttons.  
- Built-in validation using controlled components or libraries like **React Hook Form**.  
- Accessible feedback states (error, success, disabled).

#### 11. Animations & Transitions
- Smooth transitions using Tailwind’s `transition`, `duration`, and `ease` utilities.  
- Minimalistic hover and active effects for interactive feedback.  
- Page fade-ins or card slide transitions implemented through Tailwind motion classes.

#### 12. Performance & Scalability
- Lazy-loaded routes and images.  
- Tailwind JIT compiler ensures only used classes are included in the final build.  
- Modular structure supports easy feature addition without code duplication.

#### 13. Error Handling & Fallbacks
- Global error boundary for API or routing issues.  
- Friendly error messages and retry options.  
- 404 and maintenance fallback pages.

#### 14. Accessibility & SEO
- Semantic HTML tags for assistive technology.  
- ARIA attributes integrated into navigation and modals.  
- Optimized metadata and titles for **SEO performance**.


---

## Technology Stack

| Layer | Tools / Frameworks |
|-------|---------------------|
| Frontend | React.js / Vite, Tailwind CSS, Framer Motion |
| UI Design | Figma (desktop-first, responsive) |
| State | React Context / Redux |
| Forms | React Hook Form / Yup |
| Auth | Email/Password & Google Sign-in |
| Backend | Node.js / Express |
| Database | MongoDB / PostgreSQL |
| Hosting | Vercel |

---

## Folder Structure

```
src/
├── assets/                            # Static assets (images, logos, icons)
│   └── logo.svg
│
├── components/                        # Reusable UI components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── JobCard.jsx
│   ├── MetricCard.jsx
│   ├── QuickLinkCard.jsx
│   ├── NotificationCard.jsx
│   └── index.js
│
├── context/                           # React Context for shared state
│   ├── AuthContext.jsx
│   ├── JobContext.jsx
│   └── NotificationContext.jsx
│
├── hooks/                             # Custom React hooks
│   ├── useAuth.js
│   ├── useJobs.js
│   ├── useNotifications.js
│   └── useApplicants.js
│
├── layouts/                           # Layouts for different user roles
│   ├── ApplicantLayout.jsx
│   ├── EmployerLayout.jsx
│   └── AdminLayout.jsx
│
├── pages/                             # Page views
│   ├── applicant/
│   │   ├── Dashboard.jsx
│   │   ├── JobSearch.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Applications.jsx
│   │   ├── SavedJobs.jsx
│   │   ├── Interviews.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── employer/
│   │   ├── Dashboard.jsx
│   │   ├── PostJob.jsx
│   │   ├── ApplicantsList.jsx
│   │   ├── ApplicationReview.jsx
│   │   └── CompanyProfile.jsx
│   │
│   └── auth/
│       ├── LandingPage.jsx
│       ├── SignUpApplicant.jsx
│       ├── SignUpEmployer.jsx
│       ├── Login.jsx
│       └── ForgotPassword.jsx
│
├── routes/                            # App routing
│   ├── ApplicantRoutes.jsx
│   ├── EmployerRoutes.jsx
│   ├── AdminRoutes.jsx
│   └── AppRouter.jsx
│
├── services/                          # API calls and backend integrations
│   ├── api.js
│   ├── applicantService.js
│   ├── employerService.js
│   ├── adminService.js
│   └── notificationService.js
│
├── utils/                             # Helper utilities
│   ├── formatDate.js
│   ├── statusColors.js
│   └── constants.js
│
├── App.jsx
├── main.jsx
├── index.css                          # Tailwind’s @tailwind base, components, utilities
├── tailwind.config.js                 # Tailwind config file
├── postcss.config.js                  # PostCSS config
└── vite.config.js

```

---

## Design Philosophy
Clean UI, focused UX, and visual harmony with modular grid layouts, adaptive color palette, and smooth animations.

---

## User Roles
| Role | Description |
|------|--------------|
| Applicant | Job seekers who manage applications and resumes. |
| Employer | Companies or recruiters posting and managing jobs. |
| Admin | Oversees platform usage and moderation. |

---

## Future Roadmap
- AI-powered resume scoring.
- In-app messaging.

---

## License
MIT License

---

## Created By
**Resumeefy Tech Hub**
