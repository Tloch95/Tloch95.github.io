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

import { aboutData, contactData, experienceData, footerData, headData, heroData, projectsData } from '../data/data';

function App() {
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [experience, setExperience] = useState({});
  const [footer, setFooter] = useState({});
  const [head, setHead] =  useState({});
  const [hero, setHero] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setExperience({ ...experienceData });
    setFooter({ ...footerData });
    setHead({...headData});
    setHero({ ...heroData });
    setProjects([...projectsData]);
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  let maxMobileWidth = 700;

  return (
    <PortfolioProvider value={{ about, contact, experience, footer, head, hero, projects }}>
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
