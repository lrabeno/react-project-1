import { useState } from 'react';
import { ShowText } from './ShowText';

export const Text = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <ShowText />}
    </div>
  );
};
