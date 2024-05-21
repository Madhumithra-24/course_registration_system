// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './components/Dashboard'
import Student_Master from './components/Student_Master'
import Course_Master from './pages/coursemaster'
import Faculty_Master from './pages/facultymaster'
import Assigned_Course from './pages/assignedcourse'
import Course_Registration from './pages/courseregistration'
import Honoursregistration from './pages/honourminorregistration'
import Login from './pages/login'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/layout" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="Student_Master" element={<Student_Master />} />
                    <Route path="Course_Master" element={<Course_Master />} />
                    <Route path="Faculty_Master" element={<Faculty_Master />} />
                    <Route path="Assigned_Course" element={<Assigned_Course />} />
                    <Route path="Course_Registration" element={<Course_Registration />} />
                    <Route path="Honours_Minors_Registration" element={<Honoursregistration />} />
                </Route>
                <Route path="login" element={<div>this is login page</div>} />
            </Routes>
        </Router>
    )
}

export default App
