import { ChangeProfile } from '../components/ChangeProfile';

export const Profile = (props) => {
  const { username } = props;
  return (
    <div>
      PROFILE PAGEEEE: {username} <ChangeProfile />
    </div>
  );
};
