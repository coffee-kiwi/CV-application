import { useState } from 'react';
import InputText from './InputText.jsx';

export default function Education () {
    const [university, setUniversity] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [graduationDate, setGraduationDate] = useState('');
    
    return (
        <div className="card">
            <InputText 
                label="University"
                value={university}
                onChange={setUniversity}
                placeholder="The University of Auckland"
                name="university"
                id="university"
            />
            <br/>
            <InputText 
                label="Field Of Study"
                value={fieldOfStudy}
                onChange={setFieldOfStudy}
                placeholder="Engineering"
                name="fieldOfStudy"
                id="fieldOfStudy"
            />
            <br/>
            <InputText 
                label="Graduation Date"
                value={graduationDate}
                onChange={setGraduationDate}
                type="month"
                placeholder="2016-05"
                name="graduationDate"
                id="graduationDate"
            />

        </div>   
    );
}