import React from 'react';

const CourseCard = ({
  title,
  category,
  difficultyLevel,
  syllabus,
  schedule,
  prerequisites,
}) => {
  
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px] bg-white">
      <p className="dark:text-white mb-2">Title: {title}</p>
      <p className="dark:text-white mb-2">Category: {category}</p>
      <p className="dark:text-white mb-2">Difficulty Level: {difficultyLevel}</p>
      <p className="dark:text-white mb-2">Syllabus: {syllabus}</p>
      <p className="dark:text-white mb-2">Schedule: {schedule}</p>
      <p className="dark:text-white mb-4">Prerequisites: {prerequisites}</p>
      
     
      
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
