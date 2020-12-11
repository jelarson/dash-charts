import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import CitySelect from './components/city-select/city-select'
import MainPage from './components/main-dash/main-page';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Global/> */}
        <div className='app-wrapper'>
          <Switch>
            <Route exact path='/' component={CitySelect}/>
            <Route exact path='/dash' component={MainPage}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
