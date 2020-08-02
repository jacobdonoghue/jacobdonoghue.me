import React from 'react';
import ReactDOM from 'react-dom';
import '../style.scss';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  console.log('welcome called');
  return (
    <div>
      <div>Welcome</div>
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/count">count</NavLink></li>
        <li><NavLink to="/controls">controls</NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Count = (props) => {
  return (
    <Counter />
  );
};

const Control = (props) => {
  return (
    <Controls />
  );
};

const App = (props) => {
  console.log('App called');
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/count" component={Count} />
          <Route exact path="/controls" component={Control} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
export default App;
