import { useState } from 'react';
import InputText from './InputText.jsx';
    
function SelectField({ label, value, onChange, id, options, ...rest}) {
    return (
        <>
            <label htmlFor={id}>
                {label} 
            </label>
            {' '}
            <select 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id={id}
                {...rest}
            >
            {
                options.map((option) => {
                    return <option key={option.value} value={option.value}>
                             {option.label}
                            </option>
                })
            }
            </select>
        </>
    )
}

export default function Education () {
    const [university, setUniversity] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [graduationStatus, setGraduationStatus] = useState('graduated');
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
            <SelectField
                label="Graduation Status"
                value={graduationStatus}
                onChange={setGraduationStatus}
                options = {[
                            { value: "graduated", label: "Graduated" },
                            { value: "expected", label: "Expected Graduation" }
                ]}
                name="graduationStatus" 
                id="graduationStatus"
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