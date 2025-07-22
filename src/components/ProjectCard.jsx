import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ title, imgSrc, alt, description, icon, link }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      <div className="project-card-header">
        {icon && <span className={`project-card-icon${hovered ? ' project-card-icon-animate' : ''}`}>{icon}</span>}
        <h2>{title}</h2>
      </div>
      <div className="project-card-img-container">
        <img src={imgSrc} alt={alt} />
        {hovered && (
          <div className="project-card-overlay">
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">View Project</a>}
          </div>
        )}
      </div>
      <div className="project-card-content">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  link: PropTypes.string,
};

export default ProjectCard; 