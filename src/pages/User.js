export const User = (props) => {
  const users = [
    { name: 'Pedro', age: 21 },
    { name: 'Jake', age: 25 },
    { name: 'Jessica', age: 45 },
  ];
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <h1 key={idx}>
            {user.name} is {user.age}!!!
          </h1>
        );
      })}
    </div>
  );
};
