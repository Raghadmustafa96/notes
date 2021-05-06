import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Help from './Help.js';
import History2 from './History2.js'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route  path = '/history' component = {History2} />
        <Route  path = '/help' component = {Help} />
      </Switch>
    </main>
  )
}

export default Main;