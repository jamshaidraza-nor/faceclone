import { FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "./avatar";
import { GiCardExchange } from "react-icons/gi";
import { useState } from "react";

function Topbar() {
  const midMenu = [
    { icons: <RiHome5Fill /> },
    { icons: <FaBookBookmark /> },
    { icons: <IoMdAnalytics /> },
    { icons: <TfiAnnouncement /> },
    { icons: <MdOutlineOndemandVideo /> },
  ];
  const rightMenu = [
    { icons: <CgMenuGridR /> },
    { icons: <BiMessageRoundedDots />, Notification: 6 },
    { icons: <IoNotifications /> },
    { icons: <RxAvatar />, dropDown: <IoIosArrowDown /> },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenu = (index) => {
  if (index === 3) {
    setIsMenuVisible(prev => !prev);
  } else {
    setIsMenuVisible(false);
  }
};
  return (
    <div>
      <div className="flex justify-between px-5 py-1 shadow items-center relative">
        {/* this is Logo Area */}
        <div className="flex gap-2 items-center">
          <div className="text-[40px] text-blue-600">
            <FaFacebook />
          </div>
          <div className="text-2xl w-[40px] h-[40px] bg-gray-100 flex items-center rounded-full justify-center">
            <IoSearch />
          </div>
        </div>
        {/* this is center Area */}
        <div className="flex text-2xl text-gray-500 ">
          {midMenu.map((menu, index) => (
            <div className="hover:bg-gray-100 py-4 px-10 mr-1 rounded-2xl cursor-pointer">
              {menu.icons}
            </div>
          ))}
        </div>
        {/* This is right area */}
        <div>
          <div className="flex text-2xl  ">
            {rightMenu.map((menu, index) => (
              <div onClick={()=>handleMenu(index)} key={index} className="bg-gray-200 cursor-pointer hover:bg-gray-100 py-2 px-2 mr-2 rounded-full relative">
                {menu.icons}
                {menu.Notification && (
                  <div className="absolute bg-red-600 text-white rounded-full w-6 h-6 top-[-5px] right-[-5px] text-[16px] font-bold flex items-center justify-center">
                    {menu.Notification}
                  </div>
                )}
                {menu.dropDown && (
                  <div className="absolute bg-gray-300 rounded-full border-2 w-4 h-4 border-white flex items-center justify-center right-0 bottom-0">
                    {menu.dropDown}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ visibility: isMenuVisible ? 'visible' : 'hidden' }} className="w-[400px] ml-[-200px] mt-3 h-screen px-5 pt-5 absolute shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-xl z-2 bg-white ">
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 rounded-xl">
              <div className="flex items-center">
                <div className="mr-5">
                  <Avatar />
                </div>
                <div className=" text-xl">Jamshaid Raza Vlog</div>
              </div>
              <hr className="my-5 text-gray-300" />
              <div className="flex items-center my-5">
                <div className="mr-5">
                  <Avatar />
                </div>
                <div className=" text-xl">Jamshaid Raza</div>
              </div>
              <div className="flex items-center">
                <div className="mr-5">
                  <Avatar />
                </div>
                <div className=" text-xl">Travel with Jamshaid</div>
              </div>
              <hr className="my-5 text-gray-300" />
              <button className="bg-gray-200 w-full py-2 rounded-xl flex items-center justify-center">
                <GiCardExchange className="mr-2 text-xl" />
                See all profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
