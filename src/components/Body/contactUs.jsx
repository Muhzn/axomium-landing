import React, { useState, forwardRef } from 'react';
import { postCall } from '../../common/services';


const ContactUs = forwardRef((props, ref) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInput = (field, event) => {
        console.log("file: contactUs.jsx:11 ~ field, event:", field, event.target.value);
        const value = event.target?.value;
        switch (field) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                return null;
        }
    };

    async function handleSubmit() {

        const url = 'contact/user';
        const payload = {
            name: name,
            email: email,
            message: message
        };
        await postCall(url, payload);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='general-container' ref={ref}>
            <div className='general-title'>CONTACT US</div>
            <div className='general-titile-description'>
                Let's Start a  <span style={{ fontWeight: 700 }}>Conversation</span> and Bring Your Vision to Life!
            </div>
            <div className='contact-form'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} placeholder='Enter your name'
                        onChange={(e) => handleInput('name', e)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' value={email} placeholder='Enter your email'
                        onChange={(e) => handleInput('email', e)} />
                </div>
                <div>
                    <label htmlFor="message">Your Message(Optional)</label>
                    <textarea type="text" id='contactMessage' name='message' value={message} placeholder='Write your message...'
                        onChange={(e) => handleInput('message', e)} />
                </div>
                <div><button className='red-button' onClick={handleSubmit}>Submit</button></div>
            </div>
        </div>
    );
});
export default ContactUs;