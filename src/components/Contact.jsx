import React, { useState } from 'react';
import Animation from './Animation';
import { validateEmail } from '../utils/helpers';
import { FiGithub, FiAtSign, FiMapPin, FiChevronsRight } from 'react-icons/fi';
import { IoMdGlobe } from 'react-icons/io';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const formId = process.env.REACT_APP_CONTACT_FORM_ID;
    const formUrl = 'https://getform.io/f/' + formId;

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

    return (
        <Animation>
            <div name="contact" className="w-full md:h-screen flex justify-center items-center mx-auto p-4">
                <div className="max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                    <div className="sm:text-right">
                        <h2>Contact</h2>
                    </div>
                    <div></div>

                    <div>
                        <p className="py-4">Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!</p>

                        <div className="max-w-[75%] w-full mx-auto grid grid-cols-2 gap-2">
                            <div className="inline-flex items-center">
                                <FiMapPin style={{ color: '#a6ffdd' }} size={20} />&nbsp;Location
                            </div>
                            <div className="inline-flex justify-end items-center">
                                : Los Angeles, CA
                            </div>
                            <div className="inline-flex items-center">
                                <FiAtSign style={{ color: '#a6ffdd' }} size={20} />&nbsp;E-mail
                            </div>
                            <div className="inline-flex justify-end items-center">
                                :&nbsp;<a href="mailto:hayashi.demi@gmail.com">hayashidemi@gmail.com</a>
                            </div>
                            <div className="inline-flex items-center">
                                <FiGithub style={{ color: '#a6ffdd' }} size={20} />&nbsp;GitHub
                            </div>
                            <div className="inline-flex justify-end items-center">
                                :&nbsp;<a href="https://github.com/demivlkv" target="_blank">@demivlkv</a>
                            </div>
                            <div className="inline-flex items-center">
                                <IoMdGlobe style={{ color: '#a6ffdd' }} size={20} />&nbsp;Languages
                            </div>
                            <div className="inline-flex justify-end items-center">
                                : English, Japanese
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div>
                        <form method="POST" action={formUrl} id="contact-form" className="flex flex-col justify-center max-w-[600px] w-full">
                            <div class="w-[80%] mx-auto">
                                <label className="block text-[#ddd] font-['Source_Code_Pro'] font-medium">Name:</label>
                                <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="w-full my-2 p-2 rounded bg-[#2e405759] border border-[#5e7089c2]" />

                                <label className="block text-[#ddd] font-['Source_Code_Pro'] font-medium">E-mail:</label>
                                <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-full my-2 p-2 rounded bg-[#2e405759] border border-[#5e7089c2]" />

                                <label className="block text-[#ddd] font-['Source_Code_Pro'] font-medium">Message:</label>
                                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="4" className="w-full my-2 p-2 rounded bg-[#2e405759] border border-[#5e7089c2]" />

                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}

                                <button type="submit" className="group w-[130px] mx-auto flex items-center my-2 pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#a6ffdd1e] hover:border-[#a6ffdd]">
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
        </Animation>
    );
};

export default Contact;
