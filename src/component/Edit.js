import { useState, useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StudentContext } from './StudentContext'



const Edit = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [course, setCourse] = useState('')
    const [batch, setBatch] = useState('')
    const [student, setStudent] = useContext(StudentContext)
    const { ID } = useParams();

    useEffect(() => {
        student.forEach(data => {
            if (data.ID === ID) {
                setName(data.name);
                setAge(data.age);
                setCourse(data.course);
                setBatch(data.batch);
            }
        })
    }, [ID, student])

    function Update() {
        setStudent(prevStudent => prevStudent.map(
            data => data.ID === ID ? {
                ID, name, age, batch, course
            } : data)
        )
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
                <Link to="/student" className="btn" onClick={Update}>Update</Link>
            </div>
        </>
    )
}

export default Edit