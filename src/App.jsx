// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PublicPage from './components/PublicPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <NavBar />
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
};

const NavBar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800">My App</div>
          <div className="space-x-4">
            {currentUser ? (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
              >
                Logout
              </button>
            ) : (
              <a
                href="/login"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;