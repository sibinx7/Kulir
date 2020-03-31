import React from 'react';
import { Provider } from "react-redux";


import './App.css';
import './assets/scss/custom.scss'
import Header from './common/header';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className="App">
          <div className="mobile-container">
            <Header/>      
          </div>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
