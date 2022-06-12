import { Button } from '@mui/material';
import React from 'react';
import { useState } from "react";
import FormCard from '../formCard/FormCard';

import './authForm.scss'
type FormProps = {
    title: string;

    handleClick: (email: string, pass: string) => void;
}
const FormRegin: React.FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <FormCard header="Registararion" >
            <div className="text-field-container">
                <div className="label">
                    <h4 className='Title'>Email</h4>
                </div>
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            </div>
            <div className="text-field-container">
                <div className="label">
                    <h4 className='Title'>Password</h4>
                </div>
                <input
                    className="input"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
            </div>
            <Button className='button'
                variant="contained"
                color="secondary"
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </FormCard>
    );
};

export { FormRegin };