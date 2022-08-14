export const Planets = () => {
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map((planet, idx) => {
        return planet.isGasPlanet ? <h1 key={idx}>{planet.name}</h1> : '';
      })}
    </div>
  );
};
