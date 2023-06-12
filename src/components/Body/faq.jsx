import React, { useState } from 'react';
// import { CSSTransition } from "react-transition-group";



const Faq = () => {
    const [openedQuestion, setOpenedQuestion] = useState(0);

    const handleOpenAnswer = (id) => {
        setOpenedQuestion(id);
    };

    return (
        <div className='faq-container'>
            <div className='faq-title'>
                Frequently <span style={{
                    fontWeight: 700, color: '#CC2D2D'
                }}>Asked</span> Questions
            </div>
            <div className='faq-questions-container'>
                <div className='faq-question'>
                    <div className='faq-question-title' onClick={() => handleOpenAnswer(0)}>
                        What is blockchain technology and how can it benefit my business?
                    </div>
                    {openedQuestion === 0 ? <div className='faq-question-answer'>
                        Blockchain technology is a decentralized and secure digital ledger that records transactions
                        across multiple computers. It can benefit your business by increasing transparency, security,
                        and efficiency in various industries such as finance, supply chain, and healthcare.
                    </div> : null}
                </div>
                <hr color='#D3D3D3' />
                <div className='faq-question'>
                    <div className='faq-question-title' onClick={() => handleOpenAnswer(1)}>
                        Why should I hire a blockchain development company?
                    </div>
                    {openedQuestion === 1 ? <div className='faq-question-answer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div> : null}
                </div>
                <hr color='#D3D3D3' />
                <div className='faq-question'>
                    <div className='faq-question-title' onClick={() => handleOpenAnswer(2)}>
                        What services does your blockchain development company provide?
                    </div>
                    {openedQuestion === 2 ? <div className='faq-question-answer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div> : null}
                </div>
                <hr color='#D3D3D3' />
                <div className='faq-question'>
                    <div className='faq-question-title' onClick={() => handleOpenAnswer(3)}>
                        How long does it take to develop a blockchain solution?
                    </div>
                    {openedQuestion === 3 ? <div className='faq-question-answer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div> : null}
                </div>
                <hr color='#D3D3D3' />
                <div className='faq-question'>
                    <div className='faq-question-title' onClick={() => handleOpenAnswer(4)}>
                        How much does blockchain development cost?
                    </div>
                    {openedQuestion === 4 ? <div className='faq-question-answer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div> : null}
                </div>
            </div>
        </div>
    );
};
export default Faq;