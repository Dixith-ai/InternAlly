import { Button } from '@/components/ui/button';
import { BriefcaseIcon, GraduationCapIcon, MenuIcon, Users2Icon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">InternAlly</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/internships" className="text-gray-600 hover:text-gray-900">Internships</Link>
            <Link to="/mentorship" className="text-gray-600 hover:text-gray-900">Mentorship</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Student Dashboard</Link>
            <Link to="/company" className="text-gray-600 hover:text-gray-900">Company Portal</Link>
            <Link to="/login">
              <Button variant="primary" size="sm">Login</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/internships"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Internships
            </Link>
            <Link
              to="/mentorship"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Mentorship
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Student Dashboard
            </Link>
            <Link
              to="/company"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Company Portal
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}