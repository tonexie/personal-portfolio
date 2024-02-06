import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../GlobalContext";
import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Experience from "../components/Skills";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import LoadingScreen from "../components/LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const { gV } = useGlobalContext();

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, gV.loadingDuration);

    return () => clearTimeout(delay);
  }, [gV.loadingDuration]);

  return (
    <div className={`HomePage`}>
      <LoadingScreen display={loading} />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default HomePage;
