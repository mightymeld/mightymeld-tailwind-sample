import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import Layout from "../../layout";
import avatar from "../../assets/image-avatar.png";
import LoveIcon from "../../components/icons/love-icon";
import Textarea from "../../components/textarea";
import ProfileCard from "../../components/profile-card";
import { post } from "../../assets/data";

const Feed = () => {
  const { state } = useContext(UserContext);
  const { Users } = state;

  return (
    <Layout>
      <h1 className="font-bold text-2xl my-6">TimeLine Feed</h1>
      <div className="flex gap-4 items-start">
        <ProfileCard User={Users} />
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-8">
            <div className="flex gap-4">
              <img src={avatar} alt="avatar" className="w-12 h-12" />
              <Textarea />
            </div>
            <div className="my-6 flex justify-end">
              <button className="bg-slate-700 py-2 px-6 text-white rounded-xl">
                Post
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {post.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-8">
                <div className="flex gap-4">
                  <img src={item.image} alt="avatar" className="w-12 h-12" />
                  <div className="">
                    <p className="font-semibold">{item.author} </p>
                    <p className="text-xs">{item.time} </p>
                  </div>
                </div>
                <div className="text-sm py-3">{item.message} </div>
                <div className="flex gap-4">
                  <button className="">
                    <LoveIcon />
                  </button>
                </div>
                <div className="my-5">
                  {item.comments?.map((item) => (
                    <div key={item.id} className=" bg-gray-100 p-6 rounded-xl">
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
