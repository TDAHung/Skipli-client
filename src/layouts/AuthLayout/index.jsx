import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='w-screen h-screen mx-auto flex justify-center items-center'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
