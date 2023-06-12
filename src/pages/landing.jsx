import React, { createRef, useRef } from 'react';
import Navbar from '../components/Navbar/navbar';
import Title from '../components/Body/title';
import Description from '../components/Body/description';
import OurOfferings from '../components/Body/ourOfferings';
import Faq from '../components/Body/faq';
import Footer from '../components/Body/footer';
import ContactUs from '../components/Body/contactUs';
import Blogs from '../components/Body/blogs';

function Landing() {
    const homeRef = useRef(null);
    const descriptionRef = useRef(null);
    const ourOfferingRef = useRef(null);
    const blogRef = useRef(null);
    const contactUsRef = useRef(null);

    const allRefs = {
        title: homeRef,
        description: descriptionRef,
        ourOfferings: ourOfferingRef,
        blogs: blogRef,
        contactUs: contactUsRef
    };
    return (
        <div className="App">
            <Navbar targetRef={allRefs} />
            <Title learnMoreRef={ourOfferingRef} ref={homeRef} />
            <Description ref={descriptionRef} />
            <OurOfferings ref={ourOfferingRef} />
            <Faq />
            <Blogs ref={blogRef} />
            <ContactUs ref={contactUsRef} />
            <Footer targetRef={allRefs} />
        </div>
    );
}

export default Landing;
