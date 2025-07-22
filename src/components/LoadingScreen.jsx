import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, rotate: 0 },
    show: {
      scale: [0, 1.2, 0],
      rotate: [0, 360, 720],
      transition: {
        repeat: Infinity,
        duration: 1.5,
      },
    },
  };

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const letter = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #a6c1ee, #fbc2eb)',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #a6c1ee, #fbc2eb)',
            'linear-gradient(225deg, #a6c1ee, #fbc2eb)',
            'linear-gradient(45deg, #a6c1ee, #fbc2eb)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />

      {/* Loading Dots */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          gap: '1.5rem'
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={item}
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(255,255,255,0.5)'
            }}
          />
        ))}
      </motion.div>

      {/* Welcome Text */}
      <motion.div
        variants={letterContainer}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          gap: '0.5rem',
          position: 'relative'
        }}
      >
        {"WELCOME".split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            whileHover={{ scale: 1.2, color: '#fbc2eb' }}
            style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
              textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
              cursor: 'default'
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;