import './App.css';
import ToDoList from './components/ToDoList'
import NotFound from './components/NotFound'
import DoneToDoListContainer from './containers/DoneToDoListContainer'
import LabelManagerContainer from './containers/LabelManagerContainer'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';;

function App() {

  return (
    <div className="App">
        <HashRouter>
          <Navigation />
          <Switch>
            <Route exact path="/done" component={DoneToDoListContainer}></Route>
            <Route exact path="/label" component={LabelManagerContainer}></Route>
            <Route exact path="/" component={ToDoList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
