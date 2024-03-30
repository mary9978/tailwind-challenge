import { MdSearch, MdNotifications } from "react-icons/md";
import { BsSearch, BsFilter } from "react-icons/bs";
import {ShoppingBagIcon,HeartIcon,BellIcon} from '@heroicons/react/24/outline';
import { BiCoinStack,BiSolidCategory } from "react-icons/bi";
import userAvatar from '../../public/avatar2.jpg'
function Header() {
  return (
    <div className="container-fluid">
      <nav className="nav__style border-b border-2 border-[#35363A]">
        <div className="flex items-center gap-x-2">
          <div className="logo">
            <h1 className="text-white text-xl text-Nunito font-bold">
              Blon
              <span className="text-[#1D69F2]">doje</span>
            </h1>
          </div>

          <div className="search flex justify-between px-4 items-center rounded-full bg-[#35363A]">
            <div className="flex items-center">
              <BsSearch className="text-white w-4 h-4 hover:cursor-pointer" />
              <input
                className="bg-transparent border-none  focus:outline-none focus:border-none focus:ring-offset-transparent"
                type="text"
                placeholder="Search"
                onChange={() => {}}
              />
            </div>

            <BsFilter className="w-4 h-4 text-[#555557] hover:cursor-pointer" />
          </div>
          <div className="total-balance bg-[#2A2E38] rounded-full flex items-center gap-x-2 p-2">
          <BiCoinStack className="text-[#667FB0] w-4 h-4" />
          <span className="font-Nunito text-[#667FB0] text-base">Coin: 2,500,7832.00</span>
          </div>
        </div>
       <div className="info-div flex items-center gap-2">
       <div className="rounded-full bg-[#35363A] flex items-center p-2">
            <ShoppingBagIcon className="text-white w-4 h-4 hover:cursor-pointer" />
       </div>
       <div className="rounded-full bg-[#35363A] flex items-center p-2">
            <HeartIcon className="text-white w-4 h-4 hover:cursor-pointer" />
       </div>
       <div className="rounded-full bg-[#35363A] flex items-center p-2">
            <BellIcon className="text-white w-4 h-4 hover:cursor-pointer" />
       </div>
       <hr/>
       <BiSolidCategory className="text-[#35363A]  w-6 h-6 hover:cursor-pointer"/>
       <img className="w-8 h-8 rounded-full" src={userAvatar} alt="user avatar" />
       </div>
      </nav>
    </div>
  );
}

export default Header;
