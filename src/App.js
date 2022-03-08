import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Student from './component/Student'
import Contact from './component/Contact'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AddStudent from './component/AddStudent'
import { StudentAPI } from './component/StudentContext'
import Edit from './component/Edit'

function App() {
  return (
    <StudentAPI>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route exact path='/student' element={<Student />} />
            <Route path='/student/addStudent' element={<AddStudent />} />
            <Route path='/student/edit/:ID' element={<Edit />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Navigate to='/home' />} />
          </Routes>
        </Router>
      </div>
    </StudentAPI>
  );
}

export default App;