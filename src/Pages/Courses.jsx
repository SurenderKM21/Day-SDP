// src/components/TopCourses.jsx
import React from 'react';
import CourseCard from '../components/CourseCards';
import OpaqueCircle from './round';
const courses = [
  {
    name: 'Introduction to Programming',
    duration: '6 weeks',
    ratings: '4.5/5',
    features: ['Beginner-friendly', 'Interactive exercises', 'Certification available']
  },
  {
    name: 'Web Development Bootcamp',
    duration: '12 weeks',
    ratings: '4.8/5',
    features: ['Full-stack development', 'Project-based learning', 'Career support']
  },
  {
    name: 'Data Science with R',
    duration: '8 weeks',
    ratings: '4.7/5',
    features: ['Data analysis techniques', 'Hands-on projects', 'Expert instructors']
  },
  {
    name: 'Cloud Computing',
    duration: '8 weeks',
    ratings: '4.7/5',
    features: ['Computing techniques', 'Hands-on projects', 'Expert instructors']
  }
];

const TopCourses = () => {
  return (
    <>
    <div className="py-2 px-72">
      <h1 className="text-3xl font-bold mb-4 text-center">Top Courses</h1>
      <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            name={course.name}
            duration={course.duration}
            ratings={course.ratings}
            features={course.features}
          />
        ))}
      </div>
    </div>
    <OpaqueCircle top={110} left={83} />
    <OpaqueCircle top={219} left={5} />
    </>
 
  );
};

export default TopCourses;
