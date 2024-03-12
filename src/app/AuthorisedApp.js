import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/common/layout/Header';

const DashBoard = lazy(() => import('../pages/DashBoard'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

function AuthorisedApp() {
  return (
    <div className="layout">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
        <Routes>
          <Route exact path="/" component={DashBoard} />
          <Route path="*" component={NoMatch} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AuthorisedApp;
