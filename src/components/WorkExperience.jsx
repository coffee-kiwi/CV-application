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
    const [isCurrent, setIsCurrent] = useState(false);

    if (isFinalized) {
        return (
            <div className="card workExp">
                <h1>Work Experience</h1>
                <h2>Company: {companyName}</h2>
                <h2>Position: {positionTitle}</h2>
                <h2>Position Details:</h2> 
                <p>{positionDetails}</p>
                <h2>{isCurrent ? startDate + " -- Current" : startDate + " -- " + endDate}</h2>
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
            <div className="card workExp">
                <h1>Work Experience</h1>
                <InputText 
                    label="Company Name"
                    value={companyName}
                    onChange={setCompanyName}
                    placeholder="XYZ Ltd."
                    name="companyName"
                    id="companyName"
                    className="inputField" 
                />
                <br/>
                <InputText 
                    label="Position Title"
                    value={positionTitle}
                    onChange={setPositionTitle}
                    placeholder="Engineer"
                    name="positionTitle"
                    id="positionTitle"
                    className="inputField" 
                />
                <br/>
                <TextArea
                    label="Position Details"
                    value={positionDetails}
                    onChange={(e) => setPositionDetails(e.target.value)}
                    placeholder="Designed project with reference to stakeholder needs"
                    name="positionDetails"
                    id="positionDetails"
                    className="inputField textArea" 
                />
                <br/>
                <InputText 
                    label="Start Date"
                    value={startDate}
                    onChange={setStartDate}
                    type="month"
                    name="startDate"
                    id="startDate"
                    className="inputField" 
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        checked={isCurrent}
                        onChange={(e) => setIsCurrent(e.target.checked)}
                        className="check"
                    />
                    {' '}
                    Current
                </label>
                
                <br/>
                { !isCurrent && 
                    <InputText 
                        label="Until"
                        value={endDate}
                        onChange={setEndDate}
                        type="month"
                        name="endDate"
                        id="endDate"
                        className="inputField" 
                    />
                }
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