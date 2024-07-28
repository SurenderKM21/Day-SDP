import React from 'react';
import TopCourses from './Courses';
import About from './About';
import CoursesOffered from './CoursesOffered';
import Feedback from './Feedback';

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 h-full bg-no-repeat bg-left bg-contain" style={{ backgroundImage: `url('/src/assets/images/background.png')` }}>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-20 dark:text-white">Welcome to SKCT E-Learn</h1>
            <p className="text-lg dark:text-white mb-40 leading-10 font-semibold">
              Unlock the potential of online education with our cutting-edge e-learning platform, designed to enhance your academic journey and support your pursuit of knowledge anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    
      <About/>
      <CoursesOffered/>
      <TopCourses/>
      <Feedback/>
    
    </>
  );
};

export default HomePage;
