// src/components/TopCourses.jsx
import CourseCard from '@/components/CourseCards';
import OpaqueCircle from '@/components/round';
import React from 'react';

const courses = [
  { name: "Introduction to React", duration: "3 months", ratings: "4.5/5", instructor: "Instructor 1" },
    { name: "Advanced JavaScript", duration: "2 months", ratings: "4.8/5", instructor: "Instructor 2" },
    { name: "Data Science with Python", duration: "6 months", ratings: "4.7/5", instructor: "Instructor 3" },
    { name: "Web Development Basics", duration: "4 months", ratings: "4.6/5", instructor: "Instructor 4" },
    { name: "Machine Learning Essentials", duration: "5 months", ratings: "4.9/5", instructor: "Instructor 5" },
    { name: "Introduction to Algorithms", duration: "3 months", ratings: "4.4/5", instructor: "Instructor 6" },
];

const TopCourses = () => {
  return (
    <div className="py-2 px-4 lg:px-24">
      <h1 className="text-3xl font-bold mb-4 text-center">Top Courses</h1>
      <div className="border-b-4 border-blue-600 mb-8 mx-auto w-32"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            name={course.name}
            duration={course.duration}
            ratings={course.ratings}
            instructor={course.instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
