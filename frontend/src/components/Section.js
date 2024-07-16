//section.js
import React from 'react';
import './Section.css';

function Section({ title, text }) {
  return (
    <div className="section">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Section;
