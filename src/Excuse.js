import axios from 'axios';
import { useState } from 'react';

export const Excuse = () => {
  // Testing
  const [excuse, setExcuse] = useState('');

  const fetchExcuse = (excuse) => {
    axios
      .get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
      .then((res) => {
        console.log(res.data[0].excuse);
        setExcuse(res.data[0].excuse);
      });
  };
  return (
    <div>
      <h1>Generate An Excuse</h1>

      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>
      <h1>Excuse: {excuse}</h1>
    </div>
  );
};
