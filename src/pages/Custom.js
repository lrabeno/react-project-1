// import { useState } from 'react';
import { useToggle } from '../useToggle';

export const Custom = () => {
  const [isVisible, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible ? <h1>secret text!</h1> : ''}
    </div>
  );
};
