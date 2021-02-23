import React from 'react'
import StudentCard from './StudentCard'

export default function StudentList(props) {
    // state component 
    const allStudents = props.students.map(ele=> {
        return <StudentCard name={ele}/>
    })

    return (
        <div className="container"> 
            {allStudents}
        </div>
    )
}
