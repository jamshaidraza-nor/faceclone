import Avatar from "./avatar";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import postImage from "../assets/post.jpg";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import { PiShareFatFill } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function Post({ feeds }) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(10);
  const comments = [
    { user: "Travel With Jamshaid", text: "simple" },
  ];

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setCount(count - 1);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  };

  const handleComment = () => {};

  return (
    <>
      {feeds
        .slice()
        .reverse()
        .map((feed, index) => (
          <div key={index}>
            <div className="bg-white shadow rounded-xl p-5 my-5">
              <div className="flex items-center gap-2">
                <div>
                  <Avatar />
                </div>
                <div>
                  <div className="flex gap-1 items-center justify-center">
                    <div>Travel With Jamshaid</div>
                    <div>
                      <LuDot />
                    </div>
                    <div className="text-blue-600">Follow</div>
                  </div>
                  <div className="flex gap-2 items-center text-[14px]">
                    <div>16 hours ago </div>
                    <div className="text-gray-600">
                      <FaGlobeAmericas />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-1">{feed.text}</div>
              <div className="mx-[-20px] py-2">
                <img src={feed.image} alt="" />
              </div>
              <div className="flex justify-between mt-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-blue-500 w-[25px] h-[25px] flex items-center justify-center rounded-full text-white">
                    <BiSolidLike />
                  </div>
                  <div>{count}</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <div>22</div>
                    <div className="w-[25px] h-[px] flex items-center justify-center text-gray-600">
                      <FaComment />
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div>10</div>
                    <div className="w-[25px] h-[px] flex items-center justify-center text-gray-600">
                      <PiShareFatFill />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <hr className="mt-3 text-gray-300" />
              <div className="flex justify-between mt-2 px-5">
                <div
                  className="flex gap-1 items-center cursor-pointer"
                  onClick={handleToggleLike}
                >
                  <div className="text-2xl flex items-center justify-center text-gray-600">
                    <div
                      className={isLiked ? "text-blue-600" : "text-gray-600"}
                    >
                      <AiOutlineLike />
                    </div>
                  </div>
                  <div>Like</div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="text-2xl flex items-center justify-center text-gray-600">
                    <FaRegComment />
                  </div>
                  <div onClick={handleComment}>Comment</div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="text-2xl flex items-center justify-center text-gray-600">
                    <FaWhatsapp />
                  </div>
                  <div>Send</div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="text-2xl flex items-center justify-center text-gray-600">
                    <PiShareFatFill className="text-gray text-out" />
                  </div>
                  <div>Share</div>
                </div>
              </div>
              <hr className="text-gray-300 my-2" />
              {/* comment section */}
              <input className="w-full bg-gray-200 p-2 rounded-full my-2" type="text" placeholder="comment as Travel with Jamshaid" /> 
              <div className="flex items-center">
                
                <div>
                  <Avatar />
                </div>
                <div className="bg-gray-200 mx-5 p-2 rounded-xl">
                  <div className="font-semibold">Travel with Jamshaid</div>
                  <div>this is comment text</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Post;
