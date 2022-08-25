import { useState } from 'react';

export const Custom = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible ? <h1>secret text!</h1> : ''}
    </div>
  );
};
