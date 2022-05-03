import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';

function App() {
  return (
    <div>
      <HashRouter>
        <AppHeader />
      </HashRouter>
    </div>
  );
}

export default App;
