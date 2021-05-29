import React from 'react';
import Login from './components/auth/Login';
import store from './store';
import { Provider } from 'react-redux';
import Profile from './components/profile/Profile';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
          <Login/>
          <Profile/>
      </div>
    </Provider>
  );
}

export default App;
