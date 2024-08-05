import CourseCard from '@/components/CourseCards';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const AvailableCourses = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  // Sample course data
  const courses = [
    {
      id: 1, name: "Introduction to React", duration: "3 months", ratings: "4.5/5",
      instructor: "Instructor 1", progress: 50, title: "React Basics", category: "Web Development",
      difficultyLevel: "Beginner", syllabus: "Basic concepts, components, state management", schedule: "Weekly",
      prerequisites: "Basic HTML/CSS", seatsAvailable: 20
    },
    {
      id: 2, name: "Advanced JavaScript", duration: "2 months", ratings: "4.8/5",
      instructor: "Instructor 2", progress: 30, title: "JavaScript Mastery", category: "Programming",
      difficultyLevel: "Advanced", syllabus: "ES6 features, async programming, design patterns", schedule: "Bi-weekly",
      prerequisites: "Intermediate JavaScript", seatsAvailable: 15
    },
    {
      id: 3, name: "Advanced JavaScript", duration: "2 months", ratings: "4.8/5",
      instructor: "Instructor 2", progress: 30, title: "JavaScript Mastery", category: "Programming",
      difficultyLevel: "Intermediate", syllabus: "ES6 features, async programming, design patterns", schedule: "Bi-weekly",
      prerequisites: "Intermediate JavaScript", seatsAvailable: 15
    },
    // Add more course objects with the new fields here...
  ];

  const filteredCourses = courses.filter(course =>
    (selectedDifficulty === '' || course.difficultyLevel === selectedDifficulty) &&
    (selectedCategory === '' || course.category === selectedCategory) &&
    (selectedTitle === '' || course.title === selectedTitle)
  );

  const difficultyLevels = [...new Set(courses.map(course => course.difficultyLevel))];
  const categories = [...new Set(courses.map(course => course.category))];
  const titles = [...new Set(courses.map(course => course.title))];

  return (
    <div className="flex justify-center items-center min-h-screen p-8">
      <div className="p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold dark:text-white mb-4 text-center">Filter Courses</h2>
        <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
        
        <div className="mb-16">
          <div className="flex flex-wrap gap-16  justify-between mb-4">
            <div className="flex-1">
              <label htmlFor="difficulty" className="font-semibold">Difficulty Level</label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={handleDifficultyChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Difficulty Levels</option>
                {difficultyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="category" className="font-semibold">Category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="title" className="font-semibold">Title</label>
              <select
                id="title"
                value={selectedTitle}
                onChange={handleTitleChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Titles</option>
                {titles.map(title => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-32 justify-center">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                name={course.name}
                duration={course.duration}
                ratings={course.ratings}
                instructor={course.instructor}
                seatsAvailable={course.seatsAvailable}
                title={course.title}
                category={course.category}
                difficultyLevel={course.difficultyLevel}
                syllabus={course.syllabus}
                schedule={course.schedule}
                prerequisites={course.prerequisites}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;
