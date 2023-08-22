import avatar from "../../assets/image-avatar.png";

const ProfileCard = () => {
    return (
        <div className="bg-white rounded-xl flex flex-col items-center justify-center p-4 w-80 sticky top-20">
            <div className="rounded-full w-16 h-16 flex items-center justify-center">
                <img src={avatar} alt="" />
            </div>
            <p className="font-semibold text-2xl">Anika Howard</p>
            <div className="font-light">Los Angeles</div>
            <div className="bg-green-100 text-xs py-1 px-3 rounded-full my-2">Free</div>
        </div>
    );
};

export default ProfileCard;