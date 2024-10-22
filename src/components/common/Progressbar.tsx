import React from 'react';

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${percentage}%` }} />
      </div>
      <span style={styles.percentage}>{percentage}%</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  progressBar: {
    width: '300px',
    height: '7px',
    backgroundColor: '#E0F7FA',
    borderRadius: '10px',
    marginRight: '10px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#294A51',
    borderRadius: '10px 0 0 10px',
  },
  percentage: {
    fontSize: '10px',
  },
};

export default ProgressBar;
