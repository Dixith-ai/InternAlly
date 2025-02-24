import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, GraduationCapIcon, MessageCircleIcon, SearchIcon, StarIcon, UsersIcon } from 'lucide-react';
import { useState } from 'react';

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  experience: string;
  availability: string;
  rating: number;
  bio: string;
  avatar: string;
}

const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Senior Software Engineer',
    company: 'Google',
    expertise: ['Web Development', 'System Design', 'Machine Learning'],
    experience: '10+ years',
    availability: 'Weekends',
    rating: 4.9,
    bio: 'Passionate about helping students break into tech. Specialized in web technologies and system design.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Product Manager',
    company: 'Microsoft',
    expertise: ['Product Strategy', 'UX Design', 'Agile'],
    experience: '8 years',
    availability: 'Evenings',
    rating: 4.8,
    bio: 'Former startup founder turned PM. Love mentoring aspiring product managers and entrepreneurs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Emily Johnson',
    title: 'Data Scientist',
    company: 'Netflix',
    expertise: ['Data Analysis', 'Python', 'Machine Learning'],
    experience: '6 years',
    availability: 'Flexible',
    rating: 4.7,
    bio: 'Helping students navigate the exciting world of data science and analytics.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

export function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Mentor</h1>
          <p className="mt-4 text-xl text-gray-600">
            Connect with industry experts who can guide you through your career journey
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-center border-2 border-gray-200 rounded-lg bg-white">
            <div className="px-4">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or expertise..."
              className="w-full py-3 px-4 text-gray-700 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} variant="hover">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">{mentor.name}</CardTitle>
                    <CardDescription>{mentor.title} at {mentor.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{mentor.bio}</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <GraduationCapIcon className="h-4 w-4 mr-2" />
                    {mentor.expertise.join(', ')}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <UsersIcon className="h-4 w-4 mr-2" />
                    {mentor.experience} experience
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Available: {mentor.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <StarIcon className="h-4 w-4 mr-2 text-yellow-400" />
                    {mentor.rating} rating
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="flex-1 mr-2">
                  <MessageCircleIcon className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button className="flex-1">
                  Request Mentorship
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}