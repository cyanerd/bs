import React from 'react';
import { createRoot } from 'react-dom/client';

import { Page } from './page';

import './styles.css';

const app = document.getElementById('root');
if (!app) {
  throw Error('Undefined App element');
}

const root = createRoot(app);

root.render(<Page />);
