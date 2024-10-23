import React, { useState, useEffect } from 'react';

const DemonstratePage = () => {
  const [recording, setRecording] = useState(false);
  const [calibrating, setCalibrating] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [datasetName, setDatasetName] = useState('');
  const [recordedSamples, setRecordedSamples] = useState(0);
  const [robotStatus, setRobotStatus] = useState('ready');
  const [recordings, setRecordings] = useState([]);

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

    // Add the new recording to the recordings list
    const newRecording = {
      id: Date.now(),
      skillName: newSkillName,
      datasetName: datasetName,
      samples: recordedSamples,
      date: new Date().toISOString(),
      size: `${(recordedSamples * 0.5).toFixed(1)} MB`
    };

    setRecordings(prev => [newRecording, ...prev]);
    setNewSkillName('');
    setDatasetName('');
    setRecordedSamples(0);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Demonstrate New Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="fine-tune-card">
          <h2 className="card-title">Record New Skill</h2>
          <div className="card-content">
            <div className="input-group">
              <label className="input-label">Skill Name</label>
              <input
                type="text"
                placeholder="Enter new skill name"
                className="input-field"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                disabled={recording}
              />
            </div>

            <div className="input-group">
              <label className="input-label">Dataset Name</label>
              <input
                type="text"
                placeholder="Enter dataset name"
                className="input-field"
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
                className={`apple-button ${recording ? 'recording' : 'primary'}`}
                onClick={recording ? handleStopRecording : handleStartRecording}
                disabled={!newSkillName || !datasetName || calibrating}
              >
                {recording ? 'Stop Recording' : 'Start Recording'}
              </button>
            </div>
          </div>
        </div>

        <div className="fine-tune-card">
          <h2 className="card-title">Recording Status</h2>
          <div className="card-content">
            {recording ? (
              <div className="recording-status">
                <div className="status-indicator">
                  <div className="recording-dot"></div>
                  Recording in progress
                </div>
                <div className="samples-counter">
                  <div className="counter-label">Samples Recorded</div>
                  <div className="counter-value">{recordedSamples}</div>
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

      <div className="fine-tune-card">
        <h2 className="card-title">Recent Recordings</h2>
        <div className="card-content">
          {recordings.length > 0 ? (
            <div className="recordings-list">
              {recordings.map((recording) => (
                <div key={recording.id} className="recording-item">
                  <div className="recording-info">
                    <h3 className="recording-title">{recording.skillName}</h3>
                    <p className="recording-dataset">Dataset: {recording.datasetName}</p>
                    <p className="recording-details">
                      {new Date(recording.date).toLocaleDateString()} • {recording.samples} samples • {recording.size}
                    </p>
                  </div>
                  <button className="apple-button secondary">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-recordings">
              No recordings yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemonstratePage;