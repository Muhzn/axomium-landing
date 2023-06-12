import React, { forwardRef } from 'react';


const ContactUs = forwardRef((props, ref) => {
    return (
        <div className='general-container' ref={ref}>
            <div className='general-title'>CONTACT US</div>
            <div className='general-titile-description'>
                Let's Start a  <span style={{ fontWeight: 700 }}>Conversation</span> and Bring Your Vision to Life!
            </div>
            <div className='contact-form'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter your email' />
                </div>
                <div>
                    <label htmlFor="message">Your Message(Optional)</label>
                    <textarea type="text" id='contactMessage' name='message' placeholder='Write your message...' />
                </div>
                <div><button className='red-button'>Submit</button></div>
            </div>
        </div>
    );
});
export default ContactUs;