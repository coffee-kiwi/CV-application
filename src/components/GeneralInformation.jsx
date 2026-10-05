import { useState } from 'react';
import InputText from './InputText.jsx';

export default function GeneralInformation () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
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

        </div>   
    );
}