import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useRequireAuth = (requireAdmin: boolean = false) => {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (requireAdmin && isAdmin === false) {
        navigate('/');
      }
    }
  }, [user, loading, isAdmin, requireAdmin, navigate]);

  return { user, loading, isAdmin };
};
