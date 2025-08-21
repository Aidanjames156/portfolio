import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Simple ProjectCard component defined inline
const ProjectCard = ({ title, imgSrc, alt, description }) => {
  const handleImageError = () => {
    console.log(`Failed to load image: ${imgSrc}`);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded image: ${imgSrc}`);
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h2>{title}</h2>
      </div>
      <div className="project-card-img-container">
        <img 
          src={imgSrc} 
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px'
          }}
        />
      </div>
      <div className="project-card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
};

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-section">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <ProjectCard
            title="Fleet Manager"
            imgSrc={`${process.env.PUBLIC_URL}/fleet-manager.png`}
            alt="Fleet Manager Screenshot"
            description="A modern fleet management tool for tracking Laptops, maintenance, and assignments. Built with Python and PySide."
          />
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <ProjectCard
            title="JukeBox"
            imgSrc={`${process.env.PUBLIC_URL}/jukebox.png`}
            alt="JukeBox Screenshot"
            description="A web-based music album search and review app using the Spotify API and Node.js."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;