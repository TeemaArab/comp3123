
import React from 'react';

function StudentInformation({studentID, studentName, college}) {
    return (
        <div>
            <h1>Welcome to Fullstack Development -1</h1>
            <h2>React JS Programming Week09 Lab Exercise</h2>
            <p>{studentID}</p>
            <p>{studentName}</p>
            <p>{college}</p>
        </div>
    );
}
export default StudentInformation;