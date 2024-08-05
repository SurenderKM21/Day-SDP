import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '../ui/sheet';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminCourseCard from './AdminCourseCards';

const courses = [
  {
    name: 'Introduction to Programming',
    title: 'Basics of Programming',
    duration: '6 weeks',
    instructor: 'Instructor 1',
    category: 'Programming',
    difficultyLevel: 'Beginner',
    syllabus: 'Intro, Variables, Loops, Functions',
    schedule: 'Monday and Wednesday',
    prerequisites: 'None',
  },
  {
    name: 'Introduction to Programming',
    title: 'Basics of Programming',
    duration: '6 weeks',
    instructor: 'Instructor 1',
    category: 'Programming',
    difficultyLevel: 'Beginner',
    syllabus: 'Intro, Variables, Loops, Functions',
    schedule: 'Monday and Wednesday',
    prerequisites: 'None',
  },
  {
    name: 'Introduction to Programming',
    title: 'Basics of Programming',
    duration: '6 weeks',
    instructor: 'Instructor 1',
    category: 'Programming',
    difficultyLevel: 'Beginner',
    syllabus: 'Intro, Variables, Loops, Functions',
    schedule: 'Monday and Wednesday',
    prerequisites: 'None',
  },
  {
    name: 'Introduction to Programming',
    title: 'Basics of Programming',
    duration: '6 weeks',
    instructor: 'Instructor 1',
    category: 'Programming',
    difficultyLevel: 'Beginner',
    syllabus: 'Intro, Variables, Loops, Functions',
    schedule: 'Monday and Wednesday',
    prerequisites: 'None',
  },
  {
    name: 'Introduction to Programming',
    title: 'Basics of Programming',
    duration: '6 weeks',
    ratings: '4.5/5',
    instructor: 'Instructor 1',
    category: 'Programming',
    difficultyLevel: 'Beginner',
    syllabus: 'Intro, Variables, Loops, Functions',
    schedule: 'Monday and Wednesday',
    prerequisites: 'None',
  }
  // Add other courses with similar structure
];

const AdminCourses = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    duration: '',
    category: '',
    difficultyLevel: '',
    syllabus: '',
    schedule: '',
    prerequisites: '',
    instructor: ''
  });

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, including file uploads
    console.log('Form data:', formData);
    console.log('Selected files:', selectedFiles);
    setOpen(false); // Close the sheet after submission
  };

  return (
    <div className="py-1 px-20 overflow-y-auto overflow-x-hidden w-full mt-[8vh] ml-[16.66%]">
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600 p-6 text-base"
        onClick={() => setOpen(true)}
      >
        Add Course
      </Button>
      <div className="flex justify-between items-center mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <AdminCourseCard
            key={index}
            name={course.name}
            title={course.title}
            duration={course.duration}
            ratings={course.ratings}
            instructor={course.instructor}
            category={course.category}
            difficultyLevel={course.difficultyLevel}
            syllabus={course.syllabus}
            schedule={course.schedule}
            prerequisites={course.prerequisites}
          />
        ))}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-6 max-h-[100vh] overflow-y-auto w-full md:w-[600px] lg:w-[800px] bg-white rounded-lg shadow-lg">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold mb-4">Add Course</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="title" className="text-sm font-semibold">Title</Label>
                <Input
                  id="title"
                  name="title"
                  className="text-sm"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="name" className="text-sm font-semibold">Course Name</Label>
                <Input
                  id="name"
                  name="name"
                  className="text-sm"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="duration" className="text-sm font-semibold">Duration</Label>
                <Input
                  id="duration"
                  name="duration"
                  className="text-sm"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="category" className="text-sm font-semibold">Category</Label>
                <select
                  id="category"
                  name="category"
                  className="text-sm border border-gray-300 rounded-md p-2 w-full"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="Programming">Programming</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="difficultyLevel" className="text-sm font-semibold">Difficulty Level</Label>
                <select
                  id="difficultyLevel"
                  name="difficultyLevel"
                  className="text-sm border border-gray-300 rounded-md p-2 w-full"
                  value={formData.difficultyLevel}
                  onChange={handleInputChange}
                >
                  <option value="">Select Difficulty</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="syllabus" className="text-sm font-semibold">Syllabus</Label>
                <textarea
                  id="syllabus"
                  name="syllabus"
                  className="text-sm border border-gray-300 rounded-md p-2 w-full"
                  value={formData.syllabus}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="schedule" className="text-sm font-semibold">Schedule</Label>
                <textarea
                  id="schedule"
                  name="schedule"
                  className="text-sm border border-gray-300 rounded-md p-2 w-full"
                  value={formData.schedule}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="prerequisites" className="text-sm font-semibold">Prerequisites</Label>
                <textarea
                  id="prerequisites"
                  name="prerequisites"
                  className="text-sm border border-gray-300 rounded-md p-2 w-full"
                  value={formData.prerequisites}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="instructor" className="text-sm font-semibold">Instructor</Label>
                <Input
                  id="instructor"
                  name="instructor"
                  className="text-sm"
                  value={formData.instructor}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="files" className="text-sm font-semibold">Upload PPT/PDF</Label>
                <Input
                  id="files"
                  type="file"
                  className="text-sm"
                  multiple
                  accept=".ppt,.pptx,.pdf"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <SheetFooter className="flex justify-end gap-2">
              <Button type="button" className="bg-red-500 text-white hover:bg-red-400 px-4 py-2 rounded-md text-sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md text-sm">Add Course</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminCourses;
