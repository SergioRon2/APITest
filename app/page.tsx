'use client'
import React, { useEffect } from 'react';
import StyleMain from '../styles/main.module.css';
import ParticlesBackground from '../components/particles-background'

const Home = () => {
  return (
    <div className={StyleMain.container}>
      <ParticlesBackground />
      <div className={StyleMain.peticionContainer}>
      </div>
      <div className={StyleMain.responseContainer}></div>
    </div>
  );
};

export default Home;
