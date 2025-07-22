
import React from 'react';
import AboutCard from './AboutCard';
import './About.css';
import { FaMapMarkerAlt, FaUniversity, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
};

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <div className="about-cards-grid">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <AboutCard
            title="Lufkin"
            imgSrc="https://img.texasmonthly.com/2025/04/3.jpg?auto=compress&crop=faces&fit=scale&fm=pjpg&h=683&ixlib=php-3.3.1&q=45&w=1024&wpsize=large"
            alt="Lufkin"
            icon={<FaMapMarkerAlt />}
          >
            <p>Growing up in Lufkin, Texas, I was surrounded by the familiar rhythms of a small East Texas town—quiet streets, 
              local diners, and a sense of community where it felt like everyone knew each other. The towering pine trees of 
              the Piney Woods were always in sight, and weekends usually meant being outside, whether it was fishing at Lake 
              Sam Rayburn or sitting under the Friday night lights at Abe Martin Stadium. Life moved a little slower there, 
              but I came to appreciate that pace. It gave me time to build strong family connections, hold onto traditions, 
              and develop a real sense of hometown pride.</p>
          </AboutCard>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <AboutCard
            title="UT Dallas"
            imgSrc="https://www.utdallas.edu/files/2024/04/campus-mall-drone-shot-spring-2023-f9da6375e486abef.jpg"
            alt="UT Dallas"
            icon={<FaUniversity />}
          >
            <p>Going to UT Dallas is a unique experience for me. The campus has this mix of sleek, modern buildings and open green 
              spaces that make it feel both cutting-edge and welcoming. It’s not a traditional college town, but that brings the 
              students closer together — everyone here is focused, ambitious, and driven to succeed. The diversity on campus is 
              incredible, and I’m constantly meeting people from all kinds of backgrounds, which broadens how I see the world. Whether 
              I’m studying late in the library, working on group projects, or just hanging out at the Plinth, I feel like I’m growing 
              — not just academically, but personally too.</p>
          </AboutCard>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <AboutCard
            title="Pi Kappa Phi"
            imgSrc="https://pikapp.org/wp-content/uploads/2025/06/PKP-NameStarShield-Centered-Logo-RGB.png"
            alt="Pi Kappa Phi"
            icon={<FaUsers />}
            logo={true}
          >
            <p>Being part of Pi Kappa Phi is one of the most meaningful parts of my college experience. It’s more than just a fraternity 
              — it’s a brotherhood built on shared values, accountability, and genuine support. We push each other to be better, whether 
              that’s through leadership opportunities, service projects, or just showing up for one another when life gets tough. The 
              friendships I’ve made here feel solid and real, and I know they’ll last well beyond college. Plus, being involved in 
              philanthropy through The Ability Experience gives everything we do a deeper purpose. It’s not just about having fun — it’s 
              about growing as a person and making a positive impact.</p>
          </AboutCard>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <AboutCard
            title="Active Cyber"
            imgSrc="https://www.activecyber.com/hubfs/Active%20Cyber%20logo%20navy%20blue.svg"
            alt="Active Cyber"
            icon={<FaShieldAlt />}
            logo={true}
          >
            <p>Being an IT intern at a cybersecurity firm like Active Cyber is both challenging and rewarding. Every day I get hands-on 
              experience with real security tools and practices, from monitoring network traffic to helping identify potential threats. 
              The fast-paced environment keeps me on my toes, but it also pushes me to learn quickly and think critically. I’m constantly 
              exposed to new concepts in cybersecurity, and the team is always willing to share their knowledge and guide me when I’m stuck. 
              It’s exciting to know that the work I’m doing contributes, even in a small way, to protecting clients from real-world cyber threats.</p>
          </AboutCard>
        </motion.div>
      </div>
    </section>
  );
}

export default About;