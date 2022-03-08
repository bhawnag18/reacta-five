import React, { useState, createContext } from 'react'

export const StudentContext = createContext();

export const StudentAPI = props => {

    const [student, setStudent] = useState([
        {
            "ID": "1",
            "name": "abc",
            "age": "11",
            "course": "MERN",
            "batch": "October",
        },
        {
            "ID": "2",
            "name": "bcd",
            "age": "12",
            "course": "MERN",
            "batch": "November"
        },
        {
            "ID": "3",
            "name": "cde",
            "age": "13",
            "course": "MERN",
            "batch": "December"
        },
        {
            "ID": "4",
            "name": "efg",
            "age": "14",
            "course": "MERN",
            "batch": "January"
        }
    ])
    return (
        <div>
            <StudentContext.Provider value={[student, setStudent]}>
                {props.children}
            </StudentContext.Provider>
        </div>
    )
}