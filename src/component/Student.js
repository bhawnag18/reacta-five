import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StudentContext } from './StudentContext';
import './Student.css';


const Student = () => {
    const [data] = useContext(StudentContext)
    
    return (
        <>
            <div className='head'>
                <h1 className='left'>Student Page</h1>
                <Link to="/student/addStudent" className="btn">Add Student</Link>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell>Batch</TableCell>
                                <TableCell>Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map(student => {
                                    const { ID, name, age, course, batch } = student;
                                    return (
                                        <TableRow key={ID}>
                                            <TableCell component="th" scope="row">{name}</TableCell>
                                            <TableCell>{age}</TableCell>
                                            <TableCell>{course}</TableCell>
                                            <TableCell>{batch}</TableCell>
                                            <TableCell><Link to={`/student/edit/${ID}`}>Edit</Link></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Student;