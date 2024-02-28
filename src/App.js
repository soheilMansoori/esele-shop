import { AuthContextProvider } from './contexts/authContext/authContext';
import Routes from './router/Routes';

const App = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;


