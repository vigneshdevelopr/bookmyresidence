import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import Lists from './Pages/Lists/Lists';

function App() {
  return (
    <div className="App">
 <Switch>
  <Route exact path='/'>
<Home />
  </Route>
  <Route path='/hotels'>
<Hotel />
  </Route>
  <Route path='/hotels/:id'>
<Lists />
  </Route>
 </Switch>
    </div>
  );
}

export default App;
