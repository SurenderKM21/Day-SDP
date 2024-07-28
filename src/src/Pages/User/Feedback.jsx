import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Student 1',
    date: 'July 20, 2024',
    rev: 'The course content was comprehensive and easy to follow. The instructor was fantastic!',
    rating: 5,
    avatar: 'https://avatars.dicebear.com/api/avataaars/student1.svg',
  },
  {
    name: 'Student 2',
    date: 'July 18, 2024',
    rev: 'Great value for the money. The assignments were challenging and insightful.',
    rating: 4,
    avatar: 'https://avatars.dicebear.com/api/avataaars/student2.svg',
  },
  {
    name: 'Student 3',
    date: 'July 18, 2024',
    rev: 'The interactive sessions were very helpful. Will enroll in more courses.',
    rating: 4,
    avatar: 'https://avatars.dicebear.com/api/avataaars/student3.svg',
  },
  {
    name: 'Student 4',
    date: 'July 17, 2024',
    rev: 'Amazing learning platform. The support team was very responsive.',
    rating: 5,
    avatar: 'https://avatars.dicebear.com/api/avataaars/student4.svg',
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndi, setCurrentIndi] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndi((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(intervals);
  }, []);

  const review = reviews[currentIndex];
  const reviee = reviews[currentIndi];

  const cardClassNames = "max-w-sm w-full rounded overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800";

  return (
    <div className="flex flex-col items-center pb-20">
      <h1 className="text-2xl font-bold p-20 mb-8 text-gray-900 dark:text-gray-100">Student Reviews</h1>
      <div className="flex flex-row items-center gap-8">
        <div className={cardClassNames}>
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src={review.avatar} alt="Avatar" />
            <div className="text-sm">
              <p className="text-gray-900 dark:text-gray-100 leading-none">{review.name}</p>
              <p className="text-gray-600 dark:text-gray-400">{review.date}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{review.rev}</p>
          <div className="mt-4">
            {Array(review.rating).fill().map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.09 2.67L6.18 11 2 7.24l6.91-.64L10 2l1.09 4.6L18 7.24 13.82 11l1.27 6.67z"/>
              </svg>
            ))}
          </div>
        </div>
        <div className={cardClassNames}>
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src={reviee.avatar} alt="Avatar" />
            <div className="text-sm">
              <p className="text-gray-900 dark:text-gray-100 leading-none">{reviee.name}</p>
              <p className="text-gray-600 dark:text-gray-400">{reviee.date}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{reviee.rev}</p>
          <div className="mt-4">
            {Array(reviee.rating).fill().map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.09 2.67L6.18 11 2 7.24l6.91-.64L10 2l1.09 4.6L18 7.24 13.82 11l1.27 6.67z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
