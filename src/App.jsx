import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import FinanceTracking from "./pages/Admin/FinanceTracking";
import ParentDashboard from "./pages/Parent/ParentDashboard";
import ChildRegistration from "./pages/Parent/ChildRegistration";
import MedicalReview from "./pages/Medical/MedicalReview";
import AuthorityOverview from "./pages/Authority/AuthorityOverview";
import SchoolDashboard from "./pages/School/SchoolDashboard";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/finance" element={<FinanceTracking />} />
          </Route>
          {/* Parent Routes */}
          <Route element={<ProtectedRoute allowedRoles={['parent']} />}>
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/parent/register" element={<ChildRegistration />} />
          </Route>
          {/* Medical Routes */}
          <Route element={<ProtectedRoute allowedRoles={['medical']} />}>
            <Route path="/medical" element={<MedicalReview />} />
          </Route>
          {/* Authority Routes */}
          <Route element={<ProtectedRoute allowedRoles={['authority']} />}>
            <Route path="/authority" element={<AuthorityOverview />} />
          </Route>
          {/* School Routes */}
          <Route element={<ProtectedRoute allowedRoles={['school']} />}>
            <Route path="/school" element={<SchoolDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;