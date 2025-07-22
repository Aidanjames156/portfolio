import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import FloatingButton from './components/FloatingButton';
import LoadingScreen from './components/LoadingScreen';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ScrollProgress />
          <ParticlesBackground />
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header />
            <ScrollReveal>
              <About />
            </ScrollReveal>
            <ScrollReveal>
              <Projects />
            </ScrollReveal>
            <ScrollReveal>
              <Certifications />
            </ScrollReveal>
          </motion.div>
          <FloatingButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;