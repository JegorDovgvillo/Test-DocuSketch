import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './index.css';

library.add(fas);

const RandomIconComponent = () => {
  const icons = Object.keys(fas);

  const [iconName, setIconName] = useState('fa-spaghetti-monster-flying');

  const formatIconName = (icon) => {
    const formattedIconName = icon
      .replace(/([A-Z])|(\d)/g, (p1, p2) => {
        if (p1) {
          return `-${p1.toLowerCase()}`;
        } else if (p2) {
          return `-${p2}`;
        }
      })
      .replace(/^-/, '');

    return formattedIconName;
  };

  const getRandomIcon = () => {
    const random = icons[Math.floor(Math.random() * icons.length)];
    const formatedIcon = formatIconName(random);

    setIconName(formatedIcon);
  };

  return (
    <div className="wrapp">
      <h3>Click the button to generate a random icon</h3>
      <div className="wrapp-content">
        <button onClick={getRandomIcon}>Generate Random Icon</button>
        <FontAwesomeIcon icon={`fa-solid ${iconName}`} size="3x" />
      </div>
    </div>
  );
};

export default RandomIconComponent;
