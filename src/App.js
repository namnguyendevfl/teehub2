import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom"
import Layout from './Layout';
function App() {
  /**
 * App is a wrapper for <Layout>, you should not need to change this file.
*/
  return (
    <Switch>
      <Route path = "/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
