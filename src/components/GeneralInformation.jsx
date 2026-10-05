import { useState } from 'react';
import InputText from './InputText.jsx';

export default function GeneralInformation () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isFinalized, setIsFinalized] = useState(false);
    
    if (isFinalized) {
        return (
            <div className="card">
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
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
                    label="Name"
                    value={name}
                    onChange={setName}
                    placeholder="John Paul"
                    name="name"
                    id="name"
                    autoComplete="name"
                />
                <br/>
                <InputText 
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    type="email"
                    placeholder="myemail@example.com"
                    name="email"
                    id="email"
                    autoComplete="email"
                />
                <br/>
                <InputText 
                    label="Phone"
                    value={phone}
                    onChange={setPhone}
                    type="tel"
                    placeholder="123-4566-7899"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
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