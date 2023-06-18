import React, { useState, useRef, useEffect } from 'react';
import 'react-modern-drawer/dist/index.css';
import Title from '../components/Body/title';
import Description from '../components/Body/description';
import OurOfferings from '../components/Body/ourOfferings';
import Faq from '../components/Body/faq';
import ContactUs from '../components/Body/contactUs';
import Blogs from '../components/Body/blogs';

function Landing({ setAllRefs }) {

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

    useEffect(() => {
        setAllRefs(allRefs);
        const scrollTo = window.location.hash.substr(1);
        switch (scrollTo) {
            case 'title':
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'description':
                descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'ourOfferings':
                ourOfferingRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'blogs':
                blogRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contactUs':
                contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                console.log('NoTabSpecified');
        }
    }, []);

    return (
        <div className="App">

            <Title learnMoreRef={ourOfferingRef} ref={homeRef} />
            <Description ref={descriptionRef} />
            <OurOfferings ref={ourOfferingRef} />
            <Faq />
            <Blogs ref={blogRef} />
            <ContactUs ref={contactUsRef} />
        </div>
    );
}

export default Landing;
