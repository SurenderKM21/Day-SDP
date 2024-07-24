// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ name, duration, ratings, features }) => {
  return (
    <div className="dark:bg-slate-700 shadow-md border-4 border-blue-100 rounded-lg overflow-hidden max-w-xs">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 leading-10">{name}</h2>
        <p className="dark:text-white mb-2 leading-7">Duration: {duration}</p>
        <p className="dark:text-white mb-4 leading-7">Ratings: {ratings}</p>
        <div>
          <h3 className="font-semibold text-lg mb-2 leading-7">Important Features:</h3>
          <ul className="list-disc pl-5 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="dark:text-white">{feature}</li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
