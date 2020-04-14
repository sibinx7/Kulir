import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it('It should render main App component', () => {
  const div = document.createElement('div');
  render(<App/>)
})