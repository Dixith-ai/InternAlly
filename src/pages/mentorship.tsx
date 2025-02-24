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
    name: 'samay raina',
    title: 'Senior Software Engineer',
    company: 'Google',
    expertise: ['Web Development', 'System Design', 'Machine Learning'],
    experience: '10+ years',
    availability: 'Weekends',
    rating: 4.9,
    bio: 'Passionate about helping students break into tech. Specialized in web technologies and system design.',
    avatar: 'data:image/jpeg;base64,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'
  },
  {
    id: '2',
    name: 'ranveer',
    title: 'Product Manager',
    company: 'Microsoft',
    expertise: ['Product Strategy', 'UX Design', 'Agile'],
    experience: '8 years',
    availability: 'Evenings',
    rating: 4.8,
    bio: 'Former startup founder turned PM. Love mentoring aspiring product managers and entrepreneurs.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYlw9Iw1J-ImPT3Y4ESARwXZEyjRK-DOzTw&s'
  },
  {
    id: '3',
    name: 'fisherman',
    title: 'Data Scientist',
    company: 'Netflix',
    expertise: ['Data Analysis', 'Python', 'Machine Learning'],
    experience: '6 years',
    availability: 'Flexible',
    rating: 4.7,
    bio: 'Helping students navigate the exciting world of data science and analytics.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGm58AZitC0DVmG9GRL44jlE6YLxYegzhWOg&s'
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