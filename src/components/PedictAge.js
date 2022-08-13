import axios from 'axios';
import { useState } from 'react';

export const PredictAge = () => {
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchAgeData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <input
        placeholder="Type name here!"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchAgeData}>Predict Age</button>
      <h1>Predicted Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  );
};
