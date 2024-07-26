import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import { ConfirmOtp, IdeaInspirePage, InspirePage, Login, ScratchDetailPage, ScratchPage } from './routes';
import ProtectedRoute from './routes/ProtectedRoute';
import { NotFound, Profile, Service } from './routes';

function App() {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={'/login'} element={<Login />}></Route>
            <Route path={'/confirm-otp'} element={<ConfirmOtp />}></Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path={'/services'}>
                <Route index element={<Service />}></Route>
                <Route path='scratch'>
                  <Route index element={<ScratchPage />}></Route>
                  <Route path=':detail' element={<ScratchDetailPage />}></Route>
                </Route>
                <Route path='inspire'>
                  <Route index element={<InspirePage />}></Route>
                  <Route path='idea' element={<IdeaInspirePage />}></Route>
                </Route>
              </Route>
              <Route path={'/profile'}>
                <Route index element={<Profile />}></Route>
              </Route>
            </Route>
          </Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
