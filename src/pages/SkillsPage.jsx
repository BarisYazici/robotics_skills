import React, { useState } from 'react';
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

import { ChevronRightIcon } from '../components/icons';
import SkillCard from '../components/skill_card';
import { skillsData } from '../components/mock_data';

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isDeployed, setIsDeployed] = useState(false);

  const handleDragStart = (e, skill) => {
    e.dataTransfer.setData('skillId', skill.id);
  };

  const handleDrop = e => {
    e.preventDefault();
    const skillId = parseInt(e.dataTransfer.getData('skillId'));
    const skill = skillsData.find(s => s.id === skillId);
    setSelectedSkill(skill);
    setIsDeployed(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <div className='skills-page'>
      <h1 className='page-title'>Available Skills</h1>
      <p className='page-subtitle'>
        Browse and deploy pre-defined skills for your robot arm.
      </p>

      <div className='skills-layout'>
        {/* Skills Column */}
        <div className='skills-column'>
          <div className='skills-grid'>
            {skillsData.map(skill => (
              <div
                key={skill.id}
                className='skill-card'
                draggable
                onDragStart={e => handleDragStart(e, skill)}
              >
                <div className='skill-icon'>{skill.icon}</div>
                <div className='skill-content'>
                  <h3 className='skill-title'>{skill.name}</h3>
                  <p className='skill-description'>{skill.description}</p>
                  <div className='skill-requirements'>
                    {Object.entries(skill.requirements).map(
                      ([req, needed]) =>
                        needed && (
                          <span key={req} className='requirement-badge'>
                            {req}
                          </span>
                        )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Zone Column */}
        <div className='deployment-column'>
          <div
            className='deployment-zone'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <h2 className='deployment-title'>Deployment Zone</h2>
            <div className='deployment-content'>
              {selectedSkill ? (
                <div className='deployed-skill'>
                  <div className='skill-icon'>{selectedSkill.icon}</div>
                  <h3 className='skill-title'>{selectedSkill.name}</h3>
                  <p className='skill-description'>
                    {selectedSkill.description}
                  </p>
                  <div className='skill-requirements'>
                    {Object.entries(selectedSkill.requirements).map(
                      ([req, needed]) =>
                        needed && (
                          <span key={req} className='requirement-badge'>
                            {req}
                          </span>
                        )
                    )}
                  </div>
                  <button
                    className={`deploy-button ${isDeployed ? 'deployed' : ''}`}
                    onClick={() => setIsDeployed(true)}
                    disabled={isDeployed}
                  >
                    {isDeployed ? 'Deployed' : 'Deploy Skill'}
                  </button>
                </div>
              ) : (
                <div className='deployment-placeholder'>
                  <div className='placeholder-icon'>↓</div>
                  <p>Drag a skill here to deploy</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
