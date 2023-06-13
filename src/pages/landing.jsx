import React, { useState, useRef } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Navbar from '../components/Navbar/navbar';
import Title from '../components/Body/title';
import Description from '../components/Body/description';
import OurOfferings from '../components/Body/ourOfferings';
import Faq from '../components/Body/faq';
import Footer from '../components/Body/footer';
import ContactUs from '../components/Body/contactUs';
import Blogs from '../components/Body/blogs';
import SideDrawer from '../components/Body/sideDrawer';

function Landing() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleSideBar = () => {
        setIsDrawerOpen((prevState) => !prevState);
    };

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
            <Drawer open={isDrawerOpen}
                onClose={toggleSideBar}
                direction='right'
                size={'100vw'}
            >
                <div><SideDrawer targetRef={allRefs} closeSideBar={toggleSideBar} /></div>
            </Drawer>
            <Navbar targetRef={allRefs} openSideDrawer={toggleSideBar} />
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
