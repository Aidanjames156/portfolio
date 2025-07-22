import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import SpinningCube from './SpinningCube';
import './Header.css';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="header-content">
        <AiFillStar className="header-icon" />
        <h1>Aidan James</h1>
      </div>
      <p className="header-subtitle">
        <Typewriter
          words={[
            'Building beautiful, modern web experiences.',
            'Clould and AI enthusiast.',
            "Let's create something amazing together!"
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1800}
        />
      </p>
      <div style={{ marginTop: '2rem' }}>
        <SpinningCube />
      </div>
    </motion.header>
  );
}

export default Header;