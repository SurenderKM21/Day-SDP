import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminManageTutors = () => {
  const [open, setOpen] = useState(false);
  const users = [
    { id: "USER001", username: "alice123", email: "alice@example.com", password: "Alice@123" },
    { id: "USER002", username: "bob456", email: "bob@example.com", password: "Bob@456" },
    { id: "USER003", username: "carol789", email: "carol@example.com", password: "Carol@789" },
    { id: "USER004", username: "dave101", email: "dave@example.com", password: "Dave@101" },
    { id: "USER005", username: "eve202", email: "eve@example.com", password: "Eve@202" },
    { id: "USER006", username: "frank303", email: "frank@example.com", password: "Frank@303" },
    { id: "USER007", username: "grace404", email: "grace@example.com", password: "Grace@404" },
  ];

  return (
    <div className='ml-64 mt-16 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center p-3'>
          <CardTitle className='text-lg'>Users</CardTitle>
          <Button onClick={() => setOpen(!open)} size="sm">
            <Plus className='h-5 w-5 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent className='p-3'>
          <div className='overflow-x-auto'>
            <Table className="min-w-[100px] text-base">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] p-3">ID</TableHead>
                  <TableHead className="w-[100px] p-3">Username</TableHead>
                  <TableHead className="w-[140px] p-3">Email</TableHead>
                  <TableHead className="w-[120px] p-3">Password</TableHead>
                  <TableHead className="w-[130px] p-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} >
                    <TableCell className="font-medium p-3">{user.id}</TableCell>
                    <TableCell className="p-3">{user.username}</TableCell>
                    <TableCell className="p-3">{user.email}</TableCell>
                    <TableCell className="p-3">{user.password}</TableCell>
                    <TableCell className="p-3">
                      <span className='flex gap-3'>
                        <Edit className='h-7 w-7 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-sm' />
                        <TrashIcon className='h-7 w-7 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-sm' />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className='p-4'>
          <SheetHeader>
            <SheetTitle className='text-sm'>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="name" className="text-right text-sm">Id</Label>
              <Input id="name" className="text-sm" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="username" className="text-right text-sm">Username</Label>
              <Input id="username" className="text-sm" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="email" className="text-right text-sm">Email</Label>
              <Input id="email" className="text-sm" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="password" className="text-right text-sm">Password</Label>
              <Input id="password" className="text-sm" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400 text-sm' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2 text-sm'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminManageTutors;
