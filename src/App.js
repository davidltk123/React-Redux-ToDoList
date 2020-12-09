import './App.css';
import ToDoList from './components/ToDoList'
import NotFound from './components/NotFound'
import DoneToDoListContainer from './containers/DoneToDoListContainer'
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <ul>
            <li><NavLink to="/">go to list page</NavLink></li>
            <li><NavLink to="/done">go to done page</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/done" component={DoneToDoListContainer}></Route>
            <Route exact path="/" component={ToDoList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
