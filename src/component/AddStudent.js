import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useState, useContext } from 'react';
import { StudentContext } from './StudentContext'

const AddStudent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [course, setCourse] = useState('')
    const [batch, setBatch] = useState('')

    const [student, setStudent] = useContext(StudentContext)

    const Submit = () => {
        if (name && age && course && batch) {
            setStudent([
                ...student, {
                    ID: new Date().getTime().toString(), name, age, course, batch
                }
            ]);
        }
        else {
            alert('All Fields are required.');
        }
    }

    return (
        <>
            

                    <div class='form'>  
                    Name:<br></br> 
                    <input type='text'
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br></br>

                    Age:<br></br>
                    <input type='text'
                        label="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        
                    /><br></br>
                
                
                    Course:<br></br>
                    <input type='text'
                        label="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    /><br></br>

                    Batch:<br></br>
                    <input type='text'
                        label="Batch"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        
                    /><br></br>
                    </div>
               
           
            <div className="form2">
                <Link to="/student" className="btn">Cancel</Link>
                <Link to="/student" className="btn" onClick={Submit}>Submit</Link>
                <Outlet/>
            </div>
        </>
    )
}

export default AddStudent;