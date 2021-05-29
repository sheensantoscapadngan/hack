import React from 'react';
import Login from './components/Login';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Login/>
      </div>
    </Provider>
  );
}

export default App;
