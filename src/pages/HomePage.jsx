import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Badge,
} from '../components/ui';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Welcome to Robot Arm Skills Training System
        </h1>
        <p className="hero-subtitle">
          Explore, fine-tune, and demonstrate new skills for your robot arm.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-content">
            <h2 className="feature-title">Skill Library</h2>
            <p className="feature-description">
              Browse and deploy pre-defined skills for your robot arm.
            </p>
            <button 
              className="feature-button"
              onClick={() => setCurrentPage('skills')}
            >
              Explore Skills
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <h2 className="feature-title">Fine-tune Skills</h2>
            <p className="feature-description">
              Adjust and optimize existing skills for better performance.
            </p>
            <button 
              className="feature-button"
              onClick={() => setCurrentPage('fine-tune')}
            >
              Fine-tune
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <h2 className="feature-title">Demonstrate New Skills</h2>
            <p className="feature-description">
              Create and record new skills for data generation.
            </p>
            <button 
              className="feature-button"
              onClick={() => setCurrentPage('demonstrate')}
            >
              Demonstrate
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
