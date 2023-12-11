import AuthNav from './authNav';
import UserNav from './userNav';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

const RootNavigation = () => {
  const { currentUser } = useAuth();

  return currentUser ? <UserNav /> : <AuthNav />;
};

export default RootNavigation;
