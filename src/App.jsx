import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from './components/mode-toggle'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Contact } from './Pages/Feedback'
import { BrowserRouter } from 'react-router-dom'
import Homelayout from './components/Layouts/Homelayout'
 import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Homelayout/>}>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}