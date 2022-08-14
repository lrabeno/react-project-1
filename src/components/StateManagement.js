import { useState } from 'react';

export const StateManagement = () => {
  return <h1>state manage</h1>;
};

// This is an example of prop drilling which you don't want to do.
// The MiddleComponents only purpose is to pass the state down to
// the bottom component. UseContext hook will help with this.
const TopComponent = () => {
  const [state, setState] = useState();
  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  );
};
const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state={state} />
    </div>
  );
};
const BottomComponent = (state) => {
  return <div>{state}</div>;
};
