import AuthNav from './authNav';
import UserNav from './userNav';
import useAuth from '../hooks/useAuth';

const RootNavigation = () => {
  const { user } = useAuth();

  return user ? <UserNav /> : <AuthNav />;
};

export default RootNavigation;
