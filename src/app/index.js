import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import '../font/open-sans-v34-latin-700.woff2';
import '../font/open-sans-v34-latin-regular.woff2';
import '../font/poppins-v20-latin-500.woff2';

const AuthenticatedApp = React.lazy(() => import('./AuthorisedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnAuthorisedApp'));
/* eslint-disable */

const App = () => {
  const user = useAuth();
  return (
    <Suspense fallback={<h2>loading....</h2>}>
      {user?.isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

const AppWithProvider = () => {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
};

export default AppWithProvider;
