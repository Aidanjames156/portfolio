import React from 'react';
import './Certifications.css';
import { FaCloud } from 'react-icons/fa';

function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certifications-section">
        <div className="cert-card">
          <span className="cert-icon"><FaCloud /></span>
          <div>
            <h3>Microsoft Certified: Azure Administrator Associate <span className="cert-badge">AZ-104</span></h3>
            <p>In Progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications; 