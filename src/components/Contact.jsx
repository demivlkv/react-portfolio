import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { FiGithub, FiAtSign, FiMapPin, FiChevronsRight } from 'react-icons/fi';
import { IoMdGlobe } from 'react-icons/io';

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
    <div name="contact" className="w-full md:h-screen flex justify-center items-center mx-auto p-4">
        <div className="max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        
            <div>
                <h2 className="text-4xl font-medium inline border-b-4 border-[#6fffe9]">
                    Contact Me
                </h2>
            </div>
            <div></div>

            <div>
                <p className="py-4">Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!</p>

                <div className="max-w-[75%] w-full mx-auto grid grid-cols-2 gap-2">
                    <div className="mt-4 mb-2 inline-flex items-center">
                        <FiMapPin className="w-[30px]" style={{ color: '#6fffe9' }} /> Location
                    </div>
                    <div className="mt-4 mb-2 inline-flex justify-end items-center">
                        : Los Angeles, CA
                    </div>
                    <div className="mb-2 inline-flex items-center">
                        <FiAtSign className="w-[30px]" style={{ color: '#6fffe9' }} /> E-mail
                    </div>
                    <div className="mb-2 inline-flex justify-end items-center">
                        :&nbsp;<a href="mailto:hayashi.demi@gmail.com">hayashidemi@gmail.com</a>
                    </div>
                    <div className="mb-2 inline-flex items-center">
                        <FiGithub className="w-[30px]" style={{ color: '#6fffe9' }} /> GitHub
                    </div>
                    <div className="mb-3 inline-flex justify-end items-center">
                        :&nbsp;<a href="https://github.com/demivlkv" target="_blank">@demivlkv</a>
                    </div>
                    <div className="mb-3 inline-flex items-center">
                        <IoMdGlobe className="w-[30px]" style={{ color: '#6fffe9' }} /> Languages
                    </div>
                    <div className="mb-3 inline-flex justify-end items-center">
                        : English, Japanese
                    </div>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div>
                <form action="" id="contact-form" onSubmit={handleSubmit} className="flex flex-col justify-center max-w-[600px] w-full">
                    <div class="w-[75%] mx-auto">
                        <label className="block font-medium uppercase text-[#6fffe9]">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="w-full my-3 p-2 rounded bg-slate-600" />

                        <label className="block font-medium uppercase text-[#6fffe9]">Email:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-full my-3 p-2 rounded bg-slate-600" />

                        <label className="block font-medium uppercase text-[#6fffe9]">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className="w-full my-3 p-2 rounded bg-slate-600" />

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

                        <button type="submit" className="text-[white] group w-[120px] border-2 rounded mx-auto my-2 pl-6 py-3 flex items-center hover:bg-[#6fffe92b] hover:text-[#6fffe9] hover:border-[#bbf7ee] hover:transition-all">
                            Submit
                            <span className="group-hover:ml-1 duration-300">
                                <FiChevronsRight className="ml-2" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  );
};

export default Contact;