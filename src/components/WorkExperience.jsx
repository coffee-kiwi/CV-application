import { useState } from 'react';
import InputText from './InputText.jsx';

function TextArea({ label, value, onChange, id, ...rest}) {
    return (
        <div className="textArea">
            <label htmlFor={id}>
                {label}
            </label>
            {' '}
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    )
}

export default function WorkExperience () {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [positionDetails, setPositionDetails] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isFinalized, setIsFinalized] = useState(false);

    if (isFinalized) {
        return (
            <div className="card">
                <h2>Company: {companyName}</h2>
                <h2>Position: {positionTitle}</h2>
                <h2>Position Details:</h2> 
                <p>{positionDetails}</p>
                <h2>Start Date: {startDate}</h2>
                <h2>Until: {endDate}</h2>
                <br/>
                <button 
                    type="button"
                    onClick={() => setIsFinalized(false)}
                >   
                    Edit
                </button>
            </div>
        );
    } else {
        return (
            <div className="card">
                <InputText 
                    label="Company Name"
                    value={companyName}
                    onChange={setCompanyName}
                    placeholder="XYZ Ltd."
                    name="companyName"
                    id="companyName"
                />
                <br/>
                <InputText 
                    label="Position Title"
                    value={positionTitle}
                    onChange={setPositionTitle}
                    placeholder="Engineer"
                    name="positionTitle"
                    id="positionTitle"
                />
                <br/>
                <TextArea
                    label="Position Details"
                    value={positionDetails}
                    onChange={(e) => setPositionDetails(e.target.value)}
                    placeholder="Designed project with reference to stakeholder needs"
                    name="positionDetails"
                    id="positionDetails"
                />
                <br/>
                <button 
                    type="button"
                    onClick={() => setIsFinalized(true)}
                >   
                    Finalize
                </button>
            </div>   
        );
    }
}