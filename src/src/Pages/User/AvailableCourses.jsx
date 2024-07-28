import CourseCard from '@/components/CourseCards';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const AvailableCourses = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const courses = [
    { name: "Introduction to React", duration: "3 months", ratings: "4.5/5", instructor: "John Doe" },
    { name: "Advanced JavaScript", duration: "2 months", ratings: "4.8/5", instructor: "Jane Smith" },
    { name: "Data Science with Python", duration: "6 months", ratings: "4.7/5", instructor: "Emily Johnson" },
    { name: "Web Development Basics", duration: "4 months", ratings: "4.6/5", instructor: "Michael Brown" },
    { name: "Machine Learning Essentials", duration: "5 months", ratings: "4.9/5", instructor: "Sarah Davis" },
    { name: "Introduction to Algorithms", duration: "3 months", ratings: "4.4/5", instructor: "Anna Lee" },
    { name: "Full-Stack Web Development", duration: "6 months", ratings: "4.8/5", instructor: "Chris Johnson" },
    { name: "Cloud Computing with AWS", duration: "4 months", ratings: "4.7/5", instructor: "David White" },
    { name: "Database Management Systems", duration: "5 months", ratings: "4.6/5", instructor: "Linda Brown" },
    { name: "Cybersecurity Fundamentals", duration: "3 months", ratings: "4.5/5", instructor: "James Clark" },
    { name: "Digital Marketing Strategies", duration: "2 months", ratings: "4.7/5", instructor: "Emily Davis" },
    { name: "Mobile App Development", duration: "4 months", ratings: "4.6/5", instructor: "Robert Taylor" },
    { name: "Game Development with Unity", duration: "5 months", ratings: "4.8/5", instructor: "Jessica Miller" },
    { name: "Introduction to SQL", duration: "2 months", ratings: "4.3/5", instructor: "Brian Wilson" },
    { name: "UX/UI Design Principles", duration: "3 months", ratings: "4.9/5", instructor: "Rachel Harris" }
  ];
  

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(query) ||
    course.instructor.toLowerCase().includes(query)
  );

  return (
    <div className="p-32 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold dark:text-white mb-4 text-center">Search for Courses</h2>
      <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-4 mb-16">
        <div className="relative flex-grow">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search courses or instructors..."
            className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap gap-8 justify-center">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              duration={course.duration}
              ratings={course.ratings}
              instructor={course.instructor}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No courses found</p>
        )}
      </div>
    </div>
  );
};

export default AvailableCourses;
