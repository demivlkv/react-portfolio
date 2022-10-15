import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // handles form validation
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            // error message for invalid email
            if (!isValid) {
                setErrorMessage('Your emai is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
    <div name="contact" className="w-full md:h-screen flex justify-center items-center p-4">
        <div className="pb-8">
            <h2 className="text-4xl font-medium inline border-b-4 border-[#6fffe9]">
                Contact Me
            </h2>
            <p className="py-4">Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!</p>
        </div>
        <form action="" id="contact-form" onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full">
            <div>
                <label>Name:</label>
                <input type="text" defaultValue={name} onBlure={handleChange} name="name" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Contact;