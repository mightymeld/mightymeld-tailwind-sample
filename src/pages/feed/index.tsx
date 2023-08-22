import Layout from "../../layout";
import avatar from "../../assets/image-avatar.png";
import LoveIcon from "../../components/icons/love-icon";
import MessageIcon from "../../components/icons/messsage-icon";
import Textarea from "../../components/textarea";
import ProfileCard from "../../components/profile-card";

const post = [
    {
        id: "1",
        image: avatar,
        author: "Michelin",
        time: "4 hours",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error."
    },
    {
        id: "2",
        image: avatar,
        author: "Tochi",
        time: "5 hours",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error.",
        comments: [
            {
                id: "021",
                image: avatar,
                author: "Michelin",
                time: "4 hours",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error."
            },
        ]
    },
    {
        id: "3",
        image: avatar,
        author: "Avery",
        time: "7 hours",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error."
    },
];

const Feed = () => {
    return (
        <Layout>
            <h1 className="font-bold text-2xl my-6">TimeLine Feed</h1>
            <div className="flex gap-4 items-start">
                <ProfileCard />
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-xl p-8">
                        <div className="flex gap-4">
                            <img src={avatar} alt="avatar" className="w-12 h-12" />
                            <Textarea />
                        </div>
                        <div className="my-6 flex justify-end">
                            <button className="bg-slate-700 py-2 px-6 text-white rounded-xl">Post</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {
                            post.map(item => (
                                <div className="bg-white rounded-xl p-8">
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
                                        <button className="">
                                            <MessageIcon />
                                        </button>
                                        <button className="">
                                            reply
                                        </button>
                                    </div>
                                    <div className="my-5">
                                        {
                                            item.comments?.map(item => (
                                                <div className=" bg-gray-100 p-6 rounded-xl">
                                                    <div className="flex gap-4">
                                                        <img src={item.image} alt="avatar" className="w-12 h-12" />
                                                        <div className="flex items-center justify-between w-full">
                                                            <p className="font-semibold">{item.author} </p>
                                                            <p className="text-xs">{item.time} </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm py-3">{item.message} </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="my-6 hidden">
                                        <Textarea />
                                        <div className="my-6 flex justify-end">
                                            <button className="bg-slate-700 py-2 px-6 text-white rounded-xl">Post</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Feed;