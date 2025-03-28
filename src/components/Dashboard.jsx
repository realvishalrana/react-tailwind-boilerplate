// components/Dashboard.jsx
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome, {currentUser.email}</h1>
        <p className="text-gray-600">You're viewing sensitive dashboard content.</p>
      </div>
    </div>
  );
};

export default Dashboard;