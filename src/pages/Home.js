export const Home = (props) => {
  const { username } = props;
  return (
    <div>
      <h1>This is the home page and the user is: {username}</h1>
    </div>
  );
};
