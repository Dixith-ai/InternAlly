import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find your perfect</span>
                  <span className="block text-blue-600">internship match</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Connect with top companies, get mentored by industry experts, and kickstart your career journey with InternAlly.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/internships">
                      <Button size="lg">
                        Browse Internships
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/mentorship">
                      <Button variant="outline" size="lg">
                        Find a Mentor
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        { <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Students collaborating"
          />
        </div> }
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center border-2 border-gray-200 rounded-lg">
              <div className="px-4">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for internships by title, company, or location..."
                className="w-full py-3 px-4 text-gray-700 focus:outline-none"
              />
              <div className="px-4">
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What our users say
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Hear from students who found their dream internships through InternAlly
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <div className="mt-6 flex items-center">
                  { <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  /> }
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote: "InternAlly helped me land my dream internship at a top tech company. The platform's mentorship feature was invaluable!",
    name: "osama bin laden",
    role: "Software Engineering Intern",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/120523040531-osama-bin-laden.jpg?q=x_2,y_55,h_1130,w_2009,c_crop/h_653,w_1160/f_webp"
  },
  {
    quote: "The platform's user-friendly interface and comprehensive internship listings made my job search so much easier.",
    name: "rahul gandhi",
    role: "Marketing Intern",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97bfwEYb0qBT0-2rKCNrjdzB0Pm5O1wSgog&s"
  },
  {
    quote: "The mentorship I received through InternAlly was game-changing. My mentor helped me prepare for interviews and succeed.",
    name: "biden",
    role: "Data Science Intern",
    image: "data:image/jpeg;base64,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"
  }
];