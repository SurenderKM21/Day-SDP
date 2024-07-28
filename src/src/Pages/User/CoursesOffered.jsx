import React from 'react';
import OpaqueCircle from '@/components/round';

const CoursesOffered = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 h-full bg-no-repeat bg-left bg-contain" style={{ backgroundImage: `url('/src/assets/images/coursesoffered.png')` }}>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-20 dark:text-white">Diverse Course offerings</h1>
            <p className="text-lg dark:text-white mb-40 leading-10 font-semibold">
            Explore our educational offerings in areas such as data science, web development, cybersecurity, artificial intelligence, and more. With practical, hands-on learning experiences and industry-relevant training, our courses are tailored to help you achieve your academic and professional goals.
            Whether you're looking to advance your career or embark on a new path, our extensive selection of courses provides the flexibility and depth to support your journey.            </p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default CoursesOffered;
