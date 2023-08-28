import { useContext, useState } from "react";
import { formatDistance, subDays } from "date-fns";
import { PostContext } from "../../context/post.context";
import Layout from "../../layout";
import avatar from "../../assets/image-avatar.png";
import LoveIcon from "../../components/icons/love-icon";
import Textarea from "../../components/textarea";

const Feed = () => {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(PostContext);
  const { Posts } = state;

  const handlePost = (e: string) => {
    setValue(e);
  };

  const toggleLike = (id: string) => {
    dispatch({
      type: "togglelike",
      postId: id,
    });
  };

  const addComments = () => {
    const time = formatDistance(subDays(new Date(), 0), new Date(), {
      addSuffix: true,
    });
    const payload = {
      id: value,
      image: avatar,
      author: "Michelin",
      time: time,
      likes: false,
      message: value,
      comments: [],
    };

    dispatch({
      type: "addPost",
      payload: payload,
    });
  };

  return (
    <Layout>
      <h1 className="font-bold text-2xl my-6">TimeLine Feed</h1>
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-lg  p-8">
            <div className="flex gap-4">
              <img src={avatar} alt="avatar" className="w-12 h-12" />
              <Textarea
                value={value}
                onChange={(e) => handlePost(e.target.value)}
              />
            </div>
            <div className="my-6 flex justify-end">
              <button
                onClick={addComments}
                className="bg-slate-700 py-2 px-6 text-white rounded-lg "
              >
                Post
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {Posts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg  p-8">
                <div className="flex gap-4">
                  <img src={item.image} alt="avatar" className="w-12 h-12" />
                  <div className="">
                    <p className="font-semibold">{item.author} </p>
                    <p className="text-xs">{item.time} </p>
                  </div>
                </div>
                <div className="text-sm py-3">{item.message} </div>
                <div className="flex gap-4">
                  <button onClick={() => toggleLike(item.id)}>
                    <LoveIcon fill={item.likes ? "black" : "none"} />
                  </button>
                  {item.likes ? "1 like" : ""}
                </div>
                <div className="my-5">
                  {item.comments?.map((item) => (
                    <div key={item.id} className=" bg-gray-100 p-6 rounded-lg ">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt="avatar"
                          className="w-12 h-12"
                        />
                        <div className="flex items-center justify-between w-full">
                          <p className="font-semibold">{item.author} </p>
                          <p className="text-xs">{item.time} </p>
                        </div>
                      </div>
                      <div className="text-sm py-3">{item.message} </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
