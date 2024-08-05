import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Enrollment = () => {
  const courses = [
    { id: "COURSE001", name: "Introduction to Programming", students: 120 },
    { id: "COURSE002", name: "Advanced Data Science", students: 95 },
    { id: "COURSE003", name: "UI/UX Design", students: 85 },
    { id: "COURSE004", name: "Digital Marketing", students: 110 },
  ];

  return (
    <div className='ml-64 mt-16 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center p-3'>
        </CardHeader>
        <CardContent className='p-10'>
          <div className='overflow-x-auto'>
            <Table className="min-w-[100px] text-base ">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] p-3">Course Name</TableHead>
                  <TableHead className="w-[200px] p-3">Number of Students</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium p-3">{course.name}</TableCell>
                    <TableCell className="p-3">{course.students}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Enrollment;
