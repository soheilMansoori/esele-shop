import { useRoutes } from 'react-router-dom'
import routes from './router/router'
import Header from './components/Header/Header';
function App() {
  const route = useRoutes(routes)
  return (
    <>
      <Header />
      {route}
    </>
  );
}

export default App;
