import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
  name,
  duration,
  ratings,
  instructor,
  seatsAvailable,
  title,
  category,
  difficultyLevel,
  syllabus,
  schedule,
  prerequisites,
  onEdit,
  onDelete
}) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/user/enrollment');
  };

  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px] bg-white">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="dark:text-white mb-2">Title: {title}</p>
      <p className="dark:text-white mb-2">Category: {category}</p>
      <p className="dark:text-white mb-2">Difficulty Level: {difficultyLevel}</p>
      <p className="dark:text-white mb-2">Duration: {duration}</p>
      <p className="dark:text-white mb-2">Instructor: {instructor}</p>
      <p className="dark:text-white mb-2">Syllabus: {syllabus}</p>
      <p className="dark:text-white mb-2">Schedule: {schedule}</p>
      <p className="dark:text-white mb-4">Prerequisites: {prerequisites}</p>
      
     
      
      {/* Enroll Button (for admin view, might be optional) */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleEnrollClick}
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
