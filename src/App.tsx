import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/footer';
import { Navbar } from './components/layout/navbar';
import { LoginPage } from './pages/auth/login';
import { StudentDashboard } from './pages/dashboard/student';
import { HomePage } from './pages/home';
import { InternshipsPage } from './pages/internships';
import { MentorshipPage } from './pages/mentorship';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;