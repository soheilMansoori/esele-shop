import { useEffect } from 'react';
import { AuthContextProvider } from './contexts/authContext/authContext';
import Routes from './router/Routes';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  // scroll to top when route change
  useEffect(() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }), [location])


  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;


