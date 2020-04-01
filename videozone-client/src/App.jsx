import React from 'react';
import { Provider } from "react-redux";
import store from "./store/index";


import Header from './common/header';

import MainRoutes from "./routes/index"


import './App.css';
import './assets/styles/main.css';
import './assets/scss/custom.scss';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className="App">
          <div className="mobile-container">
            <Header/>      
            {/* Show main routes */}
            <MainRoutes/>  
            {/* end Show main routes */}
          </div>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
