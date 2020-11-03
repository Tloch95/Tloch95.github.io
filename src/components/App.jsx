import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from '../context/context';

import About from "./About/About"
import Burger from "./Navigation/Burger/Burger"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Menu from "./Navigation/Menu/Menu"
import MenuMask from './Navigation/Menu/MenuMask';
import Projects from "./Projects/Projects"

import MediaQuery from 'react-responsive'

import { heroData, aboutData, projectsData, contactData, footerData, headData } from '../data/data';

function App() {
  const [head, setHead] =  useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHead({...headData});
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  let maxMobileWidth = 700;

  return (
    <PortfolioProvider value={{ head, hero, about, projects, contact, footer }}>
      <MediaQuery minDeviceWidth={maxMobileWidth+1}>
        <Header siteTitle="TL" />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={maxMobileWidth}>
        <MenuMask showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Burger showMenu={showMenu} setShowMenu={setShowMenu}/>
      </MediaQuery>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </PortfolioProvider>
  );
}

export default App;
