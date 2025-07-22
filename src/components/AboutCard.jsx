import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './AboutCard.css';

const AboutCard = ({ title, imgSrc, alt, icon, children, logo }) => (
  <motion.section
    className="about-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="about-card-header">
      {icon && <span className="about-card-icon">{icon}</span>}
      <h1>{title}</h1>
    </div>
    <div className={`about-card-img-container${logo ? ' logo-img' : ''}`}>
      <img
        src={imgSrc}
        alt={alt}
        style={logo ? { objectFit: 'contain' } : { objectFit: 'cover' }}
      />
    </div>
    <div className="about-card-content">{children}</div>
  </motion.section>
);

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  logo: PropTypes.bool,
};

export default AboutCard; 