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
                setErrorMessage('Your email is invalid.');
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
        
            <div className="sm:text-right">
                <h2>
                    Contact
                </h2>
            </div>
            <div></div>

            <div>
                <p className="py-4">Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!</p>

                <div className="max-w-[75%] w-full mx-auto grid grid-cols-2 gap-2">
                    <div className="inline-flex items-center">
                        <FiMapPin style={{ color: '#f27c61' }} size={20} />&nbsp;Location
                    </div>
                    <div className="inline-flex justify-end items-center">
                        : Los Angeles, CA
                    </div>
                    <div className="inline-flex items-center">
                        <FiAtSign style={{ color: '#f27c61' }} size={20} />&nbsp;E-mail
                    </div>
                    <div className="inline-flex justify-end items-center">
                        :&nbsp;<a href="mailto:hayashi.demi@gmail.com">hayashidemi@gmail.com</a>
                    </div>
                    <div className="inline-flex items-center">
                        <FiGithub style={{ color: '#f27c61' }} size={20} />&nbsp;GitHub
                    </div>
                    <div className="inline-flex justify-end items-center">
                        :&nbsp;<a href="https://github.com/demivlkv" target="_blank">@demivlkv</a>
                    </div>
                    <div className="inline-flex items-center">
                        <IoMdGlobe style={{ color: '#f27c61' }} size={20} />&nbsp;Languages
                    </div>
                    <div className="inline-flex justify-end items-center">
                        : English, Japanese
                    </div>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div>
                <form method="POST" action="https://getform.io/f/334ec745-eba1-4f48-a06a-ba6ee7e3fd13" id="contact-form" onSubmit={handleSubmit} className="flex flex-col justify-center max-w-[600px] w-full">
                    <div class="w-[80%] mx-auto">
                        <label className="block text-[#f27c61] font-['Source_Code_Pro'] font-medium">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="w-full my-2 p-2 rounded bg-[#5e708964] border border-[#5e7089]" />

                        <label className="block text-[#f27c61] font-['Source_Code_Pro'] font-medium">E-mail:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-full my-2 p-2 rounded bg-[#5e708964] border border-[#5e7089]" />

                        <label className="block text-[#f27c61] font-['Source_Code_Pro'] font-medium">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="4" className="w-full my-2 p-2 rounded bg-[#5e708964] border border-[#5e7089]" />

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

                        <button type="submit" className="group w-[130px] mx-auto flex items-center my-2 pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#f27c611e] hover:border-[#eeb1a3]">
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