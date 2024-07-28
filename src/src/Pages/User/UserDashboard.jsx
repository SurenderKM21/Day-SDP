import React from 'react';
import UserTopbar from './UserTopbar';
import UserLeftbar from './UserLeftbar';
import UserCourseCard from '../../components/UserCourseCard';

const UserDashboard = () => {
  const user = {
    name: 'John Doe',
    rollNumber: '123456',
    email: 'johndoe@example.com',
    branch: 'Computer Science',
    batch: '2020-2024',
};

  const currentCourses = [
    { id: 1, name: 'Machine Learning', duration: '10 weeks', ratings: '4.5', instructor: 'John Doe', progress: 60 },
    { id: 2, name: 'Cloud Computing', duration: '8 weeks', ratings: '4.7', instructor: 'Jane Smith', progress: 80 },
    { id: 2, name: 'Frontend Development', duration: '4 weeks', ratings: '4.4', instructor: 'Jane Smith', progress: 40 },
  ];

  return (
   
        <div className="pt-[2vh] pl-[16.6667%] w-full  min-h-screen">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Welcome back, {user.name}!</h1>

            <div className="mb-8">
              <div className="light:bg-slate-400 p-6 rounded-lg shadow-md mb-8 flex flex-row gap-16">
                <p className="text-gray-700 mb-2"><strong>Roll Number:</strong> {user.rollNumber}</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-700 mb-2"><strong>Branch:</strong> {user.branch}</p>
                <p className="text-gray-700 mb-2"><strong>Batch:</strong> {user.batch}</p>
              </div>

<div>
  <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
  <div className="p-4 light:bg-slate-400 rounded-lg shadow-md">
    <p className="text-sm text-gray-600 mb-2">Overall Progress: 70%</p>
    <div className="relative w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-green-600 h-4 rounded-full"
        style={{ width: '70%' }}
      ></div>
    </div>
  </div>
              <h2 className="text-2xl font-semibold mb-4 pt-10">Your Courses</h2>
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-32">
                {currentCourses.map((course) => (
                  <UserCourseCard
                    key={course.id}
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
