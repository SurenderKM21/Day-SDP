import React, { useState } from 'react';
import AdminCourseCard from '../AdminCourseCards';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '../ui/sheet';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const courses = [
    {
      name: 'Introduction to Programming',
      duration: '6 weeks',
      ratings: '4.5/5',
      instructor: 'Instructor 1',
    },
    {
      name: 'Web Development Bootcamp',
      duration: '12 weeks',
      ratings: '4.8/5',
      instructor: 'Instructor 2',
    },
    {
      name: 'Cloud Computing',
      duration: '8 weeks',
      ratings: '4.7/5',
      instructor: 'Instructor 3',
    },
    {
      name: 'Machine Learning',
      duration: '10 weeks',
      ratings: '4.9/5',
      instructor: 'Instructor 4',
    },
    {
      name: 'Cyber Security',
      duration: '9 weeks',
      ratings: '4.6/5',
      instructor: 'Instructor 5',
    },
    {
      name: 'UI/UX Design',
      duration: '7 weeks',
      ratings: '4.5/5',
      instructor: 'Instructor 6',
    },
];

const AdminCourses = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, including file uploads
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
            duration={course.duration}
            ratings={course.ratings}
            instructor={course.instructor}
          />
        ))}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle className="text-2xl">Add Course</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="name" className="text-right text-sm">Course Name</Label>
                <Input id="name" className="text-sm" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="duration" className="text-right text-sm">Duration</Label>
                <Input id="duration" className="text-sm" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="ratings" className="text-right text-sm">Ratings</Label>
                <Input id="ratings" className="text-sm" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="instructor" className="text-right text-sm">Instructor</Label>
                <Input id="instructor" className="text-sm" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="files" className="text-right text-sm">Upload PPT/PDF</Label>
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
            <SheetFooter className="flex flex-col flex-1 gap-2">
              <Button type="button" className="w-1/2 outline bg-red-500 hover:bg-red-400 text-sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="w-1/2 text-sm">Add Course</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminCourses;
