
import React from 'react';

function StudentInformation({studentID, studentName, college}) {
    return (
        <div>
            <h1>Welcome to Fullstack Development -1</h1>
            <h2>React JS Programming Week09 Lab Exercise</h2>
            <h3>{studentID}</h3>
            <h3>{studentName}</h3>
            <h3>{college}</h3>
        </div>
    );
}
export default StudentInformation;