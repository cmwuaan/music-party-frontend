import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollBehavior() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return <></>;
}

export default ScrollBehavior;
