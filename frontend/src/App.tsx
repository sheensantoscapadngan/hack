import React from 'react';
import Login from './components/auth/Login';
import store from './store';
import { Provider } from 'react-redux';
import Profile from './components/profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login}/>
          <Route path="/:id" component={Profile}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
