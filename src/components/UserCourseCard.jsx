import React from 'react';
import { Link } from 'react-router-dom';

const UserCourseCard = ({ id, name, duration, ratings, instructor, progress }) => {
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px]">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="dark:text-white mb-2">Duration: {duration}</p>
      <p className="dark:text-white mb-4">Instructor: {instructor}</p>
      <Link to={`/user/syllabus/${id}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">View</button>
      </Link>
      <p className="dark:text-white">Completion Status: {progress}%</p>
      <div className="relative w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default UserCourseCard;
