import React, { useState } from 'react';
import { getCachedData, getFreshData } from './utils/request';

const renderSkater = ({ name, stance }) => (
  <div key={name}>
    <p>
      {name} - {stance}
    </p>
  </div>
);

const Skaters = ({ useCache }) => {
  const [skaters, setSkaters] = useState([]);
  const [displayState, setDisplayState] = useState('');

  const getSkaters = async () => {
    setSkaters([]);
    setDisplayState('Loading from API');

    const url = 'https://thps.now.sh/api/skaters';

    if (useCache) {
      const cachedSkaters = getCachedData(url);
      if (cachedSkaters) {
        setSkaters(cachedSkaters);
        setDisplayState('From cache');
      }
    }

    const freshSkaters = await getFreshData(url, useCache);
    setSkaters(freshSkaters);

    setDisplayState('Fresh content');
  };

  return (
    <div className="container">
      <div className="panel">{skaters.map(renderSkater)}</div>
      {displayState && <p>{displayState}</p>}
      <button className="button" onClick={getSkaters}>
        Load
      </button>
    </div>
  );
};

export default Skaters;
