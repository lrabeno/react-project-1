import { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Home = () => {
  const { data } = useQuery(['cat'], () => {
    return axios.get('https://catfact.ninja/fact').then((res) => res.data);
  });

  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the home page and the user is: {username}</h1>

      <h2>Here is the data from react-query...{data?.fact}</h2>
    </div>
  );
};
