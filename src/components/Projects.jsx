import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { FaCarSide, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
            imgSrc="/Screenshot 2025-07-21 133748.png"
            alt="Fleet Manager Screenshot"
            description="A modern fleet management tool for tracking Laptops, maintenance, and assignments. Built with Python and PySide."
            icon={<FaCarSide />}
            link={null}
          />
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <ProjectCard
            title="JukeBox"
            imgSrc="/Screenshot 2025-07-21 132418.png"
            alt="JukeBox Screenshot"
            description="A web-based music album search and review app using the Spotify API and Node.js."
            icon={<FaMusic />}
            link={null}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;