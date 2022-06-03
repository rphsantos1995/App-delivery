import { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';

export default function useTokenUser() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token') || '';
  const { decodedToken } = useJwt(token);
  useEffect(() => {
    if (decodedToken) setUser(decodedToken);
  }, [decodedToken, token]);
  return user;
}
