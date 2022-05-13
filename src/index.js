import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './base.css';
import App from './components/App';

const container = document.querySelector('#root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
