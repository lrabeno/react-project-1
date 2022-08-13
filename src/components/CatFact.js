import axios from 'axios';
import { useEffect, useState } from 'react';

export const CatFact = () => {
  //   fetch('https://catfact.ninja/fact')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () => {
    axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
};
