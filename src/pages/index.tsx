// src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import { FaGlobe } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

export default function HomePage() {
  return (
    <Layout title="Home" description="Your comprehensive guide to mastering SEO strategies">
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to Your SEO Documentation</h1>
        <p>Your comprehensive guide to mastering SEO strategies.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          {/* Universal SEO Recommendations Card */}
          <div style={{ width: '300px', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
            <FaGlobe size={40} style={{ color: '#4CAF50' }} />
            <h2>Universal SEO Recommendations</h2>
            <p>SEO best practices for Condor and beyond.</p>
            <a href="/docs/universal" style={{ color: '#4CAF50', textDecoration: 'none' }}>Learn More</a>
          </div>

          {/* Project SEO Recommendations Card */}
          <div style={{ width: '300px', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
            <FaProjectDiagram size={40} style={{ color: '#2196F3' }} />
            <h2>Condor Product Recommendations</h2>
            <p>SEO Requirements relating to specific Condor Product workstreams.</p>
            <a href="/docs/product" style={{ color: '#2196F3', textDecoration: 'none' }}>Learn More</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
