import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Dashboard } from './pages/dashboard';
import 'semantic-ui-css/semantic.min.css'
const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
      <Router>
        <div className="">
          {/* <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
            </li>
          </ul>
        </nav> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
