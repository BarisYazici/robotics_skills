import React, { useState, useEffect } from 'react';
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

const DemonstratePage = () => {
  const [recording, setRecording] = useState(false);
  const [calibrating, setCalibrating] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [datasetName, setDatasetName] = useState('');
  const [recordedSamples, setRecordedSamples] = useState(0);
  const [robotStatus, setRobotStatus] = useState('ready'); // 'ready', 'calibrating', 'recording'

  const handleCalibrate = () => {
    setCalibrating(true);
    setRobotStatus('calibrating');
    setTimeout(() => {
      setCalibrating(false);
      setRobotStatus('ready');
    }, 2000);
  };

  const handleStartRecording = () => {
    setRecording(true);
    setRobotStatus('recording');
    setRecordedSamples(0);
    const interval = setInterval(() => {
      setRecordedSamples(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
  };

  const handleStopRecording = () => {
    setRecording(false);
    setRobotStatus('ready');
  };

  return (
    <div className="demo-page">
      <div className="demo-header">
        <h1 className="page-title">Demonstrate New Skills</h1>
        <div className={`status-badge ${robotStatus}`}>
          Status: {robotStatus.charAt(0).toUpperCase() + robotStatus.slice(1)}
        </div>
      </div>

      <div className="demo-layout">
        {/* Recording Controls */}
        <div className="demo-card">
          <h2 className="card-title">Record New Skill</h2>
          <div className="card-content">
            <div className="input-group">
              <label className="input-label">Skill Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter new skill name"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                disabled={recording}
              />
            </div>

            <div className="input-group">
              <label className="input-label">Dataset Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter dataset name"
                value={datasetName}
                onChange={(e) => setDatasetName(e.target.value)}
                disabled={recording}
              />
            </div>

            <div className="button-group">
              <button
                className={`apple-button secondary ${calibrating ? 'loading' : ''}`}
                onClick={handleCalibrate}
                disabled={recording || calibrating}
              >
                {calibrating ? 'Calibrating...' : 'Calibrate Robot'}
              </button>

              <button
                className={`apple-button primary ${recording ? 'recording' : ''}`}
                onClick={recording ? handleStopRecording : handleStartRecording}
                disabled={!newSkillName || !datasetName || calibrating}
              >
                {recording ? 'Stop Recording' : 'Start Recording'}
              </button>
            </div>
          </div>
        </div>

        {/* Recording Status */}
        <div className="demo-card">
          <h2 className="card-title">Recording Status</h2>
          <div className="card-content">
            {recording ? (
              <div className="recording-status">
                <div className="status-indicator">
                  <div className="recording-dot"></div>
                  Recording in progress
                </div>
                <div className="samples-counter">
                  <span className="counter-label">Samples Recorded</span>
                  <span className="counter-value">{recordedSamples}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${recordedSamples}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="status-message">
                Ready to record new demonstrations
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Recordings */}
      <div className="demo-card recordings-section">
        <h2 className="card-title">Recent Recordings</h2>
        <div className="card-content">
          <div className="no-recordings">
            No recordings yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemonstratePage;