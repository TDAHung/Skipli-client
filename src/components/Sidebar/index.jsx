import { Link, useLocation } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineUser } from 'react-icons/ai';

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className='bg-[#EFEFEF] h-screen w-[190px] p-2 fixed'>
        <h1 className='text-2xl font-bold mb-10 ml-3'>Skipli AI</h1>
        <ul>
          <li>
            <Link
              to='/services'
              className={`flex gap-2 hover:bg-[#DEDEDE] rounded-md p-2 ${
                pathname.startsWith('/services') && 'bg-[#DEDEDE]'
              }`}
            >
              <RxDashboard size={26} />
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/profile'
              className={`flex gap-2 hover:bg-[#DEDEDE] rounded-md p-2  ${
                pathname.startsWith('/profile') && 'bg-[#DEDEDE]'
              }`}
            >
              <AiOutlineUser size={26} />
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
