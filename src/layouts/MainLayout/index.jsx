import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';

const MainLayout = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='ml-[190px] w-full'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
