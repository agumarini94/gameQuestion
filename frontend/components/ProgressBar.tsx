import React from 'react';

const ProgressBar = ({ level, maxLevel }) => {
  const progress = (level / maxLevel) * 100;
  return (
    <div style={{ border: '1px solid black', width: '100%' }}>
      <div style={{ width: `${progress}%`, background: 'green', height: '10px' }}></div>
    </div>
  );
};

export default ProgressBar;
