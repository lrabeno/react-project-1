import axios from 'axios';
import { useState } from 'react';

export const Excuse = () => {
  const [name, setName] = useState('');
  const [familyExcuse, setFamilyExcuse] = useState(null);

  const fetchFamilyExcuse = () => {
    axios.get('https://excuser.herokuapp.com/v1/excuse/family/').then((res) => {
      console.log(res.data[0].excuse);
      setFamilyExcuse(res.data[0].excuse);
    });
  };
  return (
    <div>
      <h1>Generate An Excuse</h1>

      <button>Party</button>
      <button onClick={fetchFamilyExcuse}>Family</button>
      <button>Office</button>
      <h1>Excuse: {familyExcuse}</h1>
    </div>
  );
};
