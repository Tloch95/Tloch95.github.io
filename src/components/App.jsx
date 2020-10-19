import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from '../context/context';

import About from "./About/About"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"

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

  return (
    <PortfolioProvider value={{ head, hero, about, projects, contact, footer }}>
      <Header siteTitle="TL" />
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
