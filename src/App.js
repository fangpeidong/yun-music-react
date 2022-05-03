import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import AppHeader from '@/components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
      </HashRouter>
    </div>
  );
}

export default App;
