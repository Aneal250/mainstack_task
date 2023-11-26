import {
  analyticsIcon,
  appsIcon,
  chatIcon,
  crmIcon,
  home,
  logo,
  menu,
  notificationIcon,
  revenueIcon,
} from '@images/index';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-[64px] rounded-[100px] shadow px-[24px]">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-x-5 text-[16px] text-grey-400">
        <Link to="/" className="flex items-center justify-center gap-x-2 px-4">
          <img src={home} alt="" className="w-[12px]" />
          <p>Home</p>
        </Link>
        <Link to="/" className="flex items-center justify-center gap-x-2 px-4">
          <img src={analyticsIcon} alt="" />
          <p>Analytics</p>
        </Link>
        <Link to="/" className="flex items-center justify-center px-4">
          <button type="button" className="btn-primary bg-accent !h-[40px] !w-[112px] text-white">
            <img src={revenueIcon} alt="" />
            <p>Revenue</p>
          </button>
        </Link>
        <Link to="/" className="flex items-center justify-center gap-x-2 px-4">
          <img src={crmIcon} alt="" />
          <p>CRM</p>
        </Link>
        <Link to="/" className="flex items-center justify-center gap-x-2 px-4">
          <img src={appsIcon} alt="" />
          <p>Apps</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <img src={notificationIcon} alt="" />
        <img src={chatIcon} alt="" />
        <button
          type="button"
          className="flex items-center rounded-[100px] gap-x-3 bg-[#EFF1F6] !h-[40px] !w-[81px] px-1 "
        >
          <div className="flex items-center justify-center h-[32px] w-[32px] bg-accent text-white rounded-full">
            OJ
          </div>
          <img src={menu} alt="h-[32px] w-[32px]" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
