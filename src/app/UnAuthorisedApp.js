import React from 'react';
import {
  Routes,
  Route,
  // Navigate,
  // useLocation,
} from 'react-router-dom';
import Signup from '../components/common/Signup';

// const Login = lazy(() => import('../pages/Login'));

function UnAuthorisedApp() {
  // const location = useLocation();
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route
        path="*"
        element={<Navigate to="/" replace state={{ from: location }} />}
      /> */}
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default UnAuthorisedApp;
