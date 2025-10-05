
import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [defaultTime, setdefaultTime] = useState(new Date());

  useEffect(() => {
    
    const timer = setInterval(() => {
      setdefaultTime(new Date());
    },1000);

    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); 
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(); 
  };

  return (
    <div style={{ fontFamily: 'sans-serif', fontSize: '1.5rem' }}>
      <div>Time: {formatTime(defaultTime)}</div>
      <div>Date: {formatDate(defaultTime)}</div>
    </div>
  );
}

export default LiveClock;
