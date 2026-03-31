# PN Benevolent Association System

## Setup Instructions

1. Clone repo

````bash
git clone https://github.com/YOUR_USERNAME/pn-benevolent-system.git
````
2. Install dependencies
````bash
npm install
````

3. Run project
````bash
npm run dev
````

App runs at http://localhost:5173


# PN Benevolent Association - Developer Documentation
## 🗂️ Complete File Structure
````bash
pn-benevolent-system/
├── public/                          # Static assets
│   ├── index.html                   # Entry HTML file
│   └── favicon.ico                  # Site icon
│
├── src/                             # Main source code
│   ├── assets/                      # Images, fonts, static files
│   │   └── images/
│   │
│   ├── components/                  # 🔁 Reusable UI components (Shared across all roles)
│   │   ├── Sidebar.jsx             # Desktop navigation sidebar
│   │   ├── MobileNav.jsx           # Bottom navigation for mobile
│   │   ├── TopHeader.jsx           # Page header with search & profile
│   │   ├── StatCard.jsx            # Reusable statistics card
│   │   ├── DataTable.jsx           # Reusable table component
│   │   └── Button.jsx              # Custom button variants
│   │
│   ├── context/                     # 🔄 Global state management
│   │   └── AuthContext.jsx         # Authentication state & user role management
│   │
│   ├── hooks/                       # 🎣 Custom React hooks
│   │   ├── useAuth.js              # Authentication hook
│   │   └── useLocalStorage.js      # Local storage persistence
│   │
│   ├── pages/                       # 📄 Page components (by user role)
│   │   ├── Admin/                  # 👔 Admin/Finance role
│   │   │   ├── AdminDashboard.jsx  # Overview stats & activity
│   │   │   └── FinanceTracking.jsx # Grants, payments, gadget costs
│   │   │
│   │   ├── Authority/               # 🏛️ NH1, NH2, NH3 Authorities
│   │   │   └── AuthorityOverview.jsx # Regional stats & enrollment mgmt
│   │   │
│   │   ├── Medical/                 # 🏥 Medical professionals
│   │   │   └── MedicalReview.jsx   # Disability assessment & grading
│   │   │
│   │   ├── Parent/                  # 👨‍👩‍👧 Parents/Guardians
│   │   │   ├── ParentDashboard.jsx # Children's status & grants
│   │   │   └── ChildRegistration.jsx # New child registration flow
│   │   │
│   │   ├── School/                  # 🏫 ISB1, KHI1, KHI2 Schools
│   │   │   └── SchoolDashboard.jsx # Admissions & class management
│   │   │
│   │   └── Login.jsx                # 🔐 Unified login portal
│   │
│   ├── routes/                      # 🛡️ Route protection
│   │   └── ProtectedRoute.jsx      # Role-based access control
│   │
│   ├── services/                    # 🔌 API calls & external services
│   │   ├── api.js                  # Axios/fetch configurations
│   │   ├── auth.service.js         # Login/logout API
│   │   ├── child.service.js        # Child registration APIs
│   │   └── payment.service.js      # Grant payment APIs
│   │
│   ├── utils/                       # 🛠️ Helper functions
│   │   ├── constants.js            # App constants (grades, amounts)
│   │   ├── formatters.js           # Currency/date formatters
│   │   └── validators.js           # Form validation rules
│   │
│   ├── App.jsx                      # 🚀 Main app component with routing
│   ├── main.jsx                     # ⚛️ React entry point
│   ├── index.css                    # 🎨 Global Tailwind + custom styles
│   └── App.css                      # Component-specific styles
│
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # Code linting rules
├── index.html                       # Vite entry point
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Locked dependency versions
├── README.md                        # Basic project info
└── vite.config.js                   # Vite build configuration
````

## 🏗️ Architecture Overview
1. Component Architecture
We follow a feature-based folder structure where components are organized by user role:
````bash
Rule: If a component is used by MULTIPLE roles → put in /components
Rule: If a component is used by ONLY ONE role → put in /pages/RoleName
````
| Component           | Location         | Reused In                |
| ------------------- | ---------------- | ------------------------ |
| `Sidebar`           | `/components`    | All dashboards           |
| `StatCard`          | `/components`    | Admin, Authority, Parent |
| `MedicalReview`     | `/pages/Medical` | Only Medical role        |
| `ChildRegistration` | `/pages/Parent`  | Only Parent role         |

2. State Management Flow
````bash
Login.jsx → AuthContext → ProtectedRoute → Role Dashboard
     ↓           ↓              ↓
  Credentials  User State    Route Guard
  (email,      {role,        (redirects
   role,        name,         if no auth)
   pass}       permissions}
````
3. Data Flow
````bash
Parent Registration          Medical Review
     ↓                            ↓
[Form Data] → [Validation] → [API POST]
     ↓                            ↓
[AuthContext:  [Medical Queue:  [Grade Assignment]
 pendingList]  fetchCases()]    ↓
     ↓                            ↓
[Authority:    [Parent:         [Finance:
 view stats]    status update]   calculate grant]
````
## Module Documentation
## 🔐 Authentication System
Files: context/AuthContext.jsx, routes/ProtectedRoute.jsx, pages/Login.jsx
How it works:
- User selects role on login → stored in AuthContext
- ProtectedRoute checks role against allowedRoles array
- Unauthorized access redirects to /
To add a new role:
````bash
// 1. Add to Login.jsx dropdown
<option value="newrole">New Role Name</option>

// 2. Add route in App.jsx
<Route element={<ProtectedRoute allowedRoles={['newrole']} />}>
  <Route path="/newrole" element={<NewRoleDashboard />} />
</Route>

// 3. Add navigation items in Sidebar.jsx & MobileNav.jsx
````
## 👨‍👩‍👧 Parent Module
Files: pages/Parent/ParentDashboard.jsx, pages/Parent/ChildRegistration.jsx
Features:
- View registered children with status badges
- Multi-step child registration (3 steps)
- Apply for gadgets & school enrollment
Child Status Flow:
````bash
Registered → Pending Verification → Verified → Enrolled
                ↓                      ↓
           [Medical Review]      [Can apply for
           [Grade Assigned]        gadgets/school]
````
To modify registration fields:
````bash
// In ChildRegistration.jsx, Step 1 (lines ~45-75)
// Add new input field:
<div>
  <label>New Field Name</label>
  <input 
    value={formData.newField}
    onChange={(e) => setFormData({...formData, newField: e.target.value})}
  />
</div>
````
## 🏥 Medical Module
Files: pages/Medical/MedicalReview.jsx
Grading System:
| Grade      | Severity   | Monthly Grant | Yearly Total |
| ---------- | ---------- | ------------- | ------------ |
| **A**      | Mild       | 10,000 PKR    | 40,000 PKR   |
| **B**      | Moderate   | 15,000 PKR    | 60,000 PKR   |
| **C**      | Severe     | 20,000 PKR    | 80,000 PKR   |
| **Reject** | Ineligible | 0 PKR         | 0 PKR        |

To change grant amounts:
````bash
// In MedicalReview.jsx & constants.js
const GRANT_AMOUNTS = {
  'A': 10000,  // Modify these values
  'B': 15000,
  'C': 20000
};
````
## 🏛️ Authority Module (NH1[COMQAR]/NH2[COMPAK]/NH3)
Files: pages/Authority/AuthorityOverview.jsx
Data Displayed:
- Total children under jurisdiction
- PWD (Persons with Disabilities) breakdown
- Pending school enrollments (approve/reject)
- Gadget coverage statistics
- Age distribution chart
To add new authority:
- Database: Add authority record with region code
- Frontend: No changes needed (data-driven from API)
- Login: Already available in dropdown as "Regional Authority"

## 🏫 School Module (ISB1/KHI1/KHI2)
Files: pages/School/SchoolDashboard.jsx
Features:
- View admission applications
- Enroll/Reject students
- Class distribution overview
- Resource tracking (teachers, therapists, devices)
Enrollment Decision Flow:
````bash
Application Received → Review Details → [Enroll] or [Reject]
                              ↓
                    [Updates child status]
                    [Notifies parent]
````
## 💰 Finance Module
Files: pages/Admin/FinanceTracking.jsx
Key Calculations:
````bash
// Quarterly payments (4 times per year)
const quarterlyAmount = monthlyGrant * 3;

// Gadget cost tracking
const totalGadgetSpend = gadgets.reduce((sum, g) => sum + g.cost, 0);

// Budget utilization
const utilizationRate = (disbursed / totalBudget) * 100;
````
To add new gadget type:
````bash
// In FinanceTracking.jsx gadgetCosts array
{ 
  item: "New Gadget Name", 
  cost: 250000,        // Total spent
  distributed: 15      // Units given out
}
````
## 🎨 Styling System
Color Palette 
````bash
Primary (Navy):    #003358  /* Headers, primary buttons */
Secondary (Teal):  #14696d  /* Secondary actions */
Accent (Sky):      #004a7c  /* Links, active states */
Background:        #f3faff  /* Page background */
Surface:           #ffffff  /* Cards, containers */
````

### Tailwind Classes Pattern:
````bash
// Card container
className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"

// Primary button
className="bg-[#003358] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#004a7c]"

// Status badge (paid)
className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold"
````

## 🔌 API Integration Guide
Base Setup: services/api.js
````bash
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-url.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
````

Example Service: services/child.service.js
````bash
import api from './api';

export const ChildService = {
  // Parent registers new child
  register: (data) => api.post('/children', data),
  
  // Get parent's children
  getMyChildren: () => api.get('/children/parent'),
  
  // Medical: Get queue
  getPendingReviews: () => api.get('/medical/queue'),
  
  // Medical: Submit grade
  assignGrade: (childId, grade) => api.post(`/medical/grade`, { childId, grade })
};
````

## 🧪 Common Development Tasks
### Adding a New Page
````bash
# 1. Create file
touch src/pages/Admin/NewFeature.jsx

# 2. Add route in App.jsx
<Route path="/admin/new-feature" element={<NewFeature />} />

# 3. Add to Sidebar.jsx navigation
{ path: "/admin/new-feature", label: "New Feature", icon: "star" }
````
### Adding a Reusable Component
````bash
// src/components/Alert.jsx
export const Alert = ({ type, message, onClose }) => {
  const colors = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700'
  };
  
  return (
    <div className={`p-4 rounded-xl ${colors[type]} flex justify-between`}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

// Usage in any page:
import { Alert } from '../components/Alert';
<Alert type="success" message="Child registered!" onClose={() => {}} />
````
### Modifying Grant Calculation
````bash
// In constants.js
export const GRANT_RULES = {
  QUARTERLY_MULTIPLIER: 3,  // 3 months per quarter
  
  // Change amounts here
  AMOUNTS: {
    A: 10000,  // Mild: 10K/month = 30K/quarter
    B: 15000,  // Moderate: 15K/month = 45K/quarter  
    C: 20000   // Severe: 20K/month = 60K/quarter
  },
  
  calculateQuarterly: (grade) => {
    return GRANT_RULES.AMOUNTS[grade] * GRANT_RULES.QUARTERLY_MULTIPLIER;
  }
};
````
## 🐛 Debugging Guide
| Issue                    | Likely Cause          | Fix                                        |
| ------------------------ | --------------------- | ------------------------------------------ |
| Blank screen after login | Route not in App.jsx  | Check route path matches navigation        |
| Sidebar not showing      | Missing role check    | Verify `allowedRoles` includes user's role |
| Data not loading         | API not connected     | Check `services/api.js` baseURL            |
| Mobile nav broken        | Missing icon name     | Use valid Material Symbols name            |
| Styles not applying      | Tailwind not building | Run `npm run dev` to restart               |

## 📋 Quick Reference: User Workflows
````bash
PARENT WORKFLOW:
Login → Dashboard → Register Child → Upload Docs → Wait for Medical → 
Receive Grade → Apply for Gadget/School → Receive Grant Quarterly

MEDICAL WORKFLOW:
Login → Review Queue → Select Case → View Documents → Assign Grade (A/B/C/Reject) → 
Next Case

AUTHORITY WORKFLOW:
Login → View Regional Stats → Review School Applications → Approve/Reject → 
View Gadget Requests

SCHOOL WORKFLOW:
Login → View Admissions → Review Applications → Enroll/Reject → 
View Class Distribution

ADMIN WORKFLOW:
Login → Dashboard → View Finance → Manage Grants → View All Stats
````

## 🚀 Deployment Checklist
[ ] Update api.js baseURL to production server
[ ] Set up environment variables (.env)
[ ] Configure build output in vite.config.js
[ ] Test all 5 login roles
[ ] Verify mobile responsiveness
[ ] Check Material Symbols font loads
[ ] Test file upload functionality
[ ] Validate all calculations (grants, totals)
