import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {history} from './routes/history'
import {Upload} from './pages/Upload'
import './App.css';

const App = () => (
  <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Upload} />
      </Switch>
    </Router>
  </>
)

export default App;
