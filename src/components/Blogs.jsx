import React from 'react';
import blogPost9 from '../assets/blog-post-9.jpg';
import blogPost13 from '../assets/blog-post-13.jpg';

const posts = [
  {
    title: "Demo Blog 2",
    date: "14 Jun 2025",
    category: "Architecture",
    image: blogPost9,
    excerpt: "Design Studio was appointed to complete a full refurbishment of this beautiful property, blending history and modern aesthetics..."
  },
  {
    title: "Demo Blog 1",
    date: "14 Jun 2025",
    category: "Architecture",
    image: blogPost13,
    excerpt: "Design Studio was appointed to complete a full refurbishment of this beautiful property, emphasizing context and natural surroundings..."
  },
  {
    title: "Demo Blog 3",
    date: "03 Jul 2025",
    category: "Architecture, Landscape, Travel",
    image: blogPost9,
    excerpt: "Design Studio was appointed to complete a full refurbishment of this beautiful property, focusing on outdoor spaces and spatial flow..."
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Get Latest News From Our <span>Blog</span></h2>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-card animate-fade-in-up">
              <div className="blog-featured">
                <img className="blog-img" src={post.image} alt={post.title} />
                <div className="blog-featured-overlay">
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span>•</span>
                  <span className="blog-category">{post.category}</span>
                </div>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
