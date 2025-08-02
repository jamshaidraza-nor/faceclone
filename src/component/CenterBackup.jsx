import Avatar from "./avatar";
import { IoMdVideocam } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import Post from "./Post";
import { useState, useRef } from "react";

function Center() {
  const [postText, setPostText] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [image, setImage] = useState(null);

  const [posts,setPosts] = useState([])
  

  const fileInputRef = useRef(null);

  const newFeed = {
    text: postText,
    image: image
  };

  // Uploading Image Here
  const uploadimg = (e,index) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      if(!image && postText ==="") return
      setFeeds([...feeds, newFeed]);
      setPostText("");
      setImage(null)
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleImageIconClick = () => {
    fileInputRef.current.click(); // ✅ Trigger hidden input click
  };

  return (
    <>
      <div className="bg-white shadow rounded-xl p-5">
        <div className="flex  ">
          <div className="mr-3">
            <Avatar />
          </div>
          <div className="flex w-full gap-2 items-center h-[40px]">
            <input
              value={postText}
              onKeyDown={handleEnter}
              onChange={(e) => setPostText(e.target.value)}
              className="border w-full p-2 rounded-full placeholder-gray-500 border-none bg-gray-100"
              placeholder="What on your minde, Jamshaid Raza Vlog?"
              type="text"
            />
            <div>
              {image && (
                <div className="my-2">
                  <img
                    src={image}
                    alt="Preview"
                    className=" w-[100px] object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="mx-1 text-gray-300 my-5" />
        <div className="flex justify-between px-10">
          <div className="flex  items-center gap-2 ">
            <div className="text-3xl text-red-500">
              <IoMdVideocam />
            </div>
            <div>live Video</div>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleImageIconClick}
          >
            <input
              ref={fileInputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={uploadimg}
            />

            <div className="text-3xl text-green-500">
              <MdPhotoLibrary />
            </div>
            <div>Photo/Video</div>
          </div>
          <div className="flex  items-center gap-2 ">
            <div className="text-3xl text-red-500">
              <FaPhotoVideo />
            </div>
            <div>Reels</div>
          </div>
        </div>
      </div>

      <div>
        <Post feeds={feeds} />
      </div>
    </>
  );
}

export default Center;
