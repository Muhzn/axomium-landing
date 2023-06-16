import React, { useState, useRef } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import { useMediaQuery } from 'react-responsive';

import Drawer from 'react-modern-drawer';
import Landing from './pages/landing';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer';
import SideDrawer from './components/Body/sideDrawer';
import BlogsPage from './pages/blogs';

import './App.css';




function App() {

  const [allRefs, setAllRefs] = useState([]);
  const isTab = useMediaQuery({ minWidth: 601, maxWidth: 1200 });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const descriptionRef = useRef(null);
  const ourOfferingRef = useRef(null);
  const blogRef = useRef(null);
  const contactUsRef = useRef(null);


  const toggleSideBar = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Drawer open={isDrawerOpen}
        onClose={toggleSideBar}
        direction='right'
        size={isTab === false ? ('100vw') : ('80vw')}
      >
        <div><SideDrawer targetRef={allRefs} closeSideBar={toggleSideBar} /></div>
      </Drawer>
      <Navbar targetRef={allRefs} openSideDrawer={toggleSideBar} />
      <Routes>

        <Route path="/" element={<Landing setAllRefs={setAllRefs} />} />
        <Route path="blogs" element={<BlogsPage />} />

      </Routes>
      <Footer targetRef={allRefs} />
    </div>
  );
}

export default App;
