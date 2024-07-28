import React from 'react';
import OpaqueCircle from '@/components/round';

const About = () => {
  return (
    <>
      <div className="h-screen flex flex-row-reverse">
        <div className="w-1/2 h-full bg-no-repeat bg-contain" style={{ backgroundImage: `url('/src/assets/images/about.png')` }}>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <div className="text-center">
          <h1 className="text-4xl font-bold mb-20 dark:text-white">Why SKCT E-Learn ?</h1>
            <p className="text-lg dark:text-white mb-40 leading-10 font-semibold">
              We are committed to delivering cutting-edge educational experiences through our comprehensive e-learning platform. Designed to support and enhance the learning journey of our students, our platform offers a range of digital resources and interactive tools that bring the classroom to your fingertips.
            </p>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default About;
