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
import { skillsData, datasetsData } from '../components/mock_data';

const FineTunePage = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedDataset, setSelectedDataset] = useState('');
  const [parameters, setParameters] = useState({
    epochs: 50,
    learningRate: 0.001,
    batchSize: 32,
    optimizer: 'adam'
  });
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStartTraining = () => {
    setIsTraining(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsTraining(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <div className="fine-tune-page">
      <div className="page-header">
        <h1 className="page-title">Fine-tune Skills</h1>
        {isTraining && (
          <div className="training-badge">Training in Progress</div>
        )}
      </div>

      <div className="fine-tune-layout">
        <div className="fine-tune-card">
          <h2 className="card-title">Select Skill and Dataset</h2>
          <div className="card-content">
            <div className="input-group">
              <label className="input-label">Skill to Fine-tune</label>
              <select
                className="select-field"
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                disabled={isTraining}
              >
                <option value="">Select a skill</option>
                {skillsData.map(skill => (
                  <option key={skill.id} value={skill.id}>{skill.name}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Training Dataset</label>
              <select
                className="select-field"
                value={selectedDataset}
                onChange={(e) => setSelectedDataset(e.target.value)}
                disabled={isTraining}
              >
                <option value="">Select a dataset</option>
                {datasetsData.map(dataset => (
                  <option key={dataset.id} value={dataset.id}>{dataset.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="fine-tune-card">
          <h2 className="card-title">Training Parameters</h2>
          <div className="card-content">
            <div className="parameter-group">
              <div className="parameter-header">
                <label className="input-label">Epochs</label>
                <span className="parameter-value">{parameters.epochs}</span>
              </div>
              <input
                type="range"
                className="range-slider"
                min="1"
                max="100"
                value={parameters.epochs}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  epochs: parseInt(e.target.value)
                }))}
                disabled={isTraining}
              />
            </div>

            <div className="parameter-group">
              <div className="parameter-header">
                <label className="input-label">Learning Rate</label>
                <span className="parameter-value">{parameters.learningRate.toFixed(4)}</span>
              </div>
              <input
                type="range"
                className="range-slider"
                min="0"
                max="1000"
                value={parameters.learningRate * 10000}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  learningRate: parseFloat(e.target.value) / 10000
                }))}
                disabled={isTraining}
              />
            </div>

            <div className="parameter-group">
              <label className="input-label">Batch Size</label>
              <select
                className="select-field"
                value={parameters.batchSize}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  batchSize: parseInt(e.target.value)
                }))}
                disabled={isTraining}
              >
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option>
              </select>
            </div>

            <div className="parameter-group">
              <label className="input-label">Optimizer</label>
              <select
                className="select-field"
                value={parameters.optimizer}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  optimizer: e.target.value
                }))}
                disabled={isTraining}
              >
                <option value="adam">Adam</option>
                <option value="sgd">SGD</option>
                <option value="rmsprop">RMSprop</option>
              </select>
            </div>

            <button
              className={`apple-button primary ${isTraining ? 'training' : ''}`}
              onClick={handleStartTraining}
              disabled={!selectedSkill || !selectedDataset || isTraining}
            >
              {isTraining ? 'Training in Progress' : 'Start Fine-tuning'}
            </button>
          </div>
        </div>
      </div>

      {isTraining && (
        <div className="fine-tune-card training-status">
          <h2 className="card-title">Training Progress</h2>
          <div className="card-content">
            <div className="progress-info">
              <div className="progress-details">
                <span>Progress: {progress}%</span>
                <span>Epoch: {Math.floor((progress / 100) * parameters.epochs)}/{parameters.epochs}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FineTunePage;