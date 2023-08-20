import logo from './logo.svg';
import './App.css';
import ContainWrapper from './Component/ContainWrapper';
import Home from './Component/HomePage';
import { Route } from 'react-router-dom';
import Coffee from './Component/Coffee';

function App() {
  return (
    < >
      <Route path="Home" Component={<Home />} />
      <Route path="coffee" Component={<Coffee />} />
   </>
  )
}

export default App;
