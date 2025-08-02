import Avatar from "./avatar";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import { PiShareFatFill } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function Post({ feeds }) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(1);
  const [commentInputs, setCommentInputs] = useState({});

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setCount(count - 1);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  };

  // Handle comment input
  const handleCommentChange = (index, value) => {
    setCommentInputs(({ ...commentInputs, [index]: value }));
  };

  const handleCommentKey = (index, e) => {
    if (e.key === "Enter") {
      const commentText = commentInputs[index]?.trim();
      if (!commentText) return;

      // Add the comment to the post
      feeds[index].comments.push({
        user: "Travel with Jamshaid",
        text: commentText,
      });

      setCommentInputs(({ ...commentInputs, [index]: "" }));
    }
  };

  return (
    <>
      {feeds
        .map((feed, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-5 my-5">
            <div className="flex items-center gap-2">
              <Avatar />
              <div>
                <div className="flex gap-1 items-center justify-center">
                  <div>Travel With Jamshaid</div>
                  <LuDot />
                  <div className="text-blue-600">Follow</div>
                </div>
                <div className="flex gap-2 items-center text-[14px]">
                  <div>16 hours ago</div>
                  <FaGlobeAmericas className="text-gray-600" />
                </div>
              </div>
            </div>

            <div className="pt-2">{feed.text}</div>
            {feed.media && (
              <div className="mx-[-20px] py-2">
                <img src={feed.media} alt="" />
              </div>
            )}

            <div className="flex justify-between mt-1">
              <div className="flex gap-2 items-center">
                <div className="bg-blue-500 w-[25px] h-[25px] flex items-center justify-center rounded-full text-white">
                  <BiSolidLike />
                </div>
                <div>{count}</div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>{feed.comments?.length || 0}</div>
                  <FaComment className="text-gray-600" />
                </div>
                <div className="flex gap-1 items-center">
                  <div>10</div>
                  <PiShareFatFill className="text-gray-600" />
                </div>
              </div>
            </div>

            <hr className="mt-3 text-gray-300" />
            <div className="flex justify-between mt-2 px-5">
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={handleToggleLike}
              >
                <AiOutlineLike
                  className={`text-2xl ${
                    isLiked ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <div>Like</div>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegComment className="text-2xl text-gray-600" />
                <div>Comment</div>
              </div>
              <div className="flex gap-1 items-center">
                <FaWhatsapp className="text-2xl text-gray-600" />
                <div>Send</div>
              </div>
              <div className="flex gap-1 items-center">
                <PiShareFatFill className="text-2xl text-gray-600" />
                <div>Share</div>
              </div>
            </div>

            <hr className="text-gray-300 my-2" />

            {/* Comment input */}
            <input
              className="w-full bg-gray-200 p-2 rounded-full my-2"
              type="text"
              placeholder="Comment as Travel with Jamshaid"
              value={commentInputs[index] || ""}
              onChange={(e) => handleCommentChange(index, e.target.value)}
              onKeyDown={(e) => handleCommentKey(index, e)}
            />

            {/* Comment list */}
            {feed.comments?.map((comment, idx) => (
              <div key={idx} className="flex items-start gap-2 mt-2">
                <Avatar />
                <div className="bg-gray-200 p-2 rounded-xl">
                  <div className="font-semibold">{comment.user}</div>
                  <div>{comment.text}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
}

export default Post;
