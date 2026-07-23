import React, { useState } from 'react';
import projectTreetops from '../assets/project-treetops.jpg';
import projectArtefino from '../assets/project-artefino.jpg';
import projectAkash from '../assets/project-akash.jpg';
import projectPintu2 from '../assets/project-pintu-2.jpg';
import projectPintu1 from '../assets/project-pintu-1.jpg';
import projectIconic from '../assets/project-iconic.jpg';

const projects = [
  {
    number: "01",
    title: "Tree Tops Office",
    category: "Architecture",
    displayCategory: "Architecture & Landscape",
    image: projectTreetops,
    area: "4,500 SQ.FT",
    location: "Surat, Gujarat",
    year: "2024",
    gridSpan: "span-8",
    aspectRatio: "aspect-landscape"
  },
  {
    number: "02",
    title: "Artefino Design",
    category: "Interior",
    displayCategory: "Interior & Architecture",
    image: projectArtefino,
    area: "3,200 SQ.FT",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    gridSpan: "span-4",
    aspectRatio: "aspect-portrait"
  },
  {
    number: "03",
    title: "Akash Workspace",
    category: "Interior",
    displayCategory: "Interior Design",
    image: projectAkash,
    area: "2,800 SQ.FT",
    location: "Mumbai, Maharashtra",
    year: "2024",
    gridSpan: "span-5",
    aspectRatio: "aspect-square"
  },
  {
    number: "04",
    title: "Pintu Office",
    category: "Landscape",
    displayCategory: "Landscape Architecture",
    image: projectPintu2,
    area: "6,000 SQ.FT",
    location: "Surat, Gujarat",
    year: "2025",
    gridSpan: "span-7",
    aspectRatio: "aspect-landscape"
  },
  {
    number: "05",
    title: "Ramoliya Estate",
    category: "Landscape",
    displayCategory: "Landscape Design",
    image: projectPintu1,
    area: "12,500 SQ.FT",
    location: "Rajkot, Gujarat",
    year: "2024",
    gridSpan: "span-6",
    aspectRatio: "aspect-wide"
  },
  {
    number: "06",
    title: "Iconic Villa",
    category: "Architecture",
    displayCategory: "Luxury Villa Design",
    image: projectIconic,
    area: "8,200 SQ.FT",
    location: "Vadodara, Gujarat",
    year: "2023",
    gridSpan: "span-6",
    aspectRatio: "aspect-wide"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="projects-header reveal-up">
          <div className="section-title-wrap" style={{ textAlign: 'left', marginBottom: '0' }}>
            <span className="subtitle-mono">// SELECTED WORKS</span>
            <h2 className="section-title" style={{ marginTop: '10px' }}>Our Selected <span>Projects</span></h2>
          </div>
          
          <div className="filter-tabs">
            {['All', 'Architecture', 'Interior', 'Landscape'].map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-editorial-grid">
          {filteredProjects.map((project) => (
            <div key={project.number} className={`project-card ${project.gridSpan} reveal-up`}>
              <div className={`project-frame ${project.aspectRatio}`}>
                <div className="frame-border-draw"></div>
                <img 
                  className="project-image" 
                  src={project.image} 
                  alt={project.title} 
                />
                <span className="project-number">{project.number}</span>
                <span className="project-blueprint-tag">SCALE 1:50</span>
              </div>
              
              <div className="project-info-box">
                <div className="project-meta-top">
                  <span className="project-tag">{project.displayCategory}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <h4 className="project-name">
                  {project.title}
                  <span className="project-arrow">↗</span>
                </h4>
                
                <div className="project-details-row">
                  <span className="project-loc">{project.location}</span>
                  <span className="project-divider">|</span>
                  <span className="project-area">{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
