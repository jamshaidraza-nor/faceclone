import image from "../assets/profile.jpg";
import { GiProgression } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { SiCoinmarketcap } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";

function Rightside() {
  const profileMenu = [
    {
      text: "Jamshaid Raza Vlog",
      profile: image,
    },
    {
      text: "Ads Manager",
      icon: <GiProgression />,
    },
    {
      text: "Ad Centre",
      icon: <GrAnnounce />,
    },
    {
      text: "Meta Business Suite",
      icon: <SiCoinmarketcap />,
    },
    {
      text: "Professional dashboard",
      icon: <RxDashboard />,
    },
    
  ];
  return (
    <div className="overflow-y-scroll h-screen hide-scrollbar">
      {profileMenu.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-3 font-bold py-3 hover:bg-gray-200 cursor-pointer "
        >
          {item.profile && (
            <img className="w-10 h-10 rounded-full" src={item.profile} alt="" />
          )}
          {item.icon && (
            <div className="text-3xl text-blue-600 rounded-full">
              {item.icon}
            </div>
          )}
          <div>{item.text}</div>
        </div>
      ))}
      <hr className="mx-5 my-5 text-gray-300" />
      <div>
        <div className="text-gray-400 text-xl pl-5">Suggested</div>
      </div>
    </div>
  );
}

export default Rightside;
