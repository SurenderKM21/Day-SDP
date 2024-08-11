import React from 'react';
import UserCourseCard from '../../components/UserCourseCard';

const UserDashboard = () => {
  const user = {
    name: 'Sangamithra',
    rollNumber: '123456',
    email: 'mithra@example.com',
    branch: 'Computer Science',
    batch: '2020-2024',
  };

  const currentCourses = [
    {
      id: 1,
      name: 'Machine Learning',
      duration: '10 weeks',
      ratings: '4.5',
      instructor: 'Yashashwini',
      progress: 60,
      description: 'This is a sample course description for Machine Learning.',
      samplePdf: 'machine_learning_sample.pdf',
      samplePpt: 'machine_learning_sample.pptx',
    },
    {
      id: 2,
      name: 'Cloud Computing',
      duration: '8 weeks',
      ratings: '4.7',
      instructor: 'Mithra',
      progress: 80,
      description: 'This is a sample course description for Cloud Computing.',
      samplePdf: 'cloud_computing_sample.pdf',
      samplePpt: 'cloud_computing_sample.pptx',
    },
    {
      id: 3,
      name: 'Frontend Development',
      duration: '4 weeks',
      ratings: '4.4',
      instructor: 'Sonali',
      progress: 40,
      description: 'This is a sample course description for Frontend Development.',
      samplePdf: 'frontend_development_sample.pdf',
      samplePpt: 'frontend_development_sample.pptx',
    },
  ];

  return (
    <div className="pt-[2vh] pl-[16.6667%] w-full min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
        <div className="mb-8">
          <div className="light:bg-slate-400 p-6 rounded-lg shadow-md mb-8 flex flex-row gap-16">
            <p className="light:text-gray-700 mb-2"><strong>Roll Number:</strong> {user.rollNumber}</p>
            <p className="light:text-gray-700 mb-2"><strong>Username:</strong> {user.name}</p>
            <p className="light:text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
            <div className="p-4 light:bg-slate-400 rounded-lg shadow-md">
              <p className="text-sm light:text-gray-600 mb-2 ">Overall Progress: 70%</p>
              <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 pt-10">My Courses</h2>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-32">
              {currentCourses.map((course) => (
                <UserCourseCard
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  duration={course.duration}
                  ratings={course.ratings}
                  instructor={course.instructor}
                  progress={course.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
