import avatar from "../../assets/image-avatar.png";
import { UserType } from "../../context/user.context";

interface ProfileCardProps {
  User: UserType;
}

const ProfileCard = ({ User }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-center p-4 w-80 mx-auto sticky top-20">
      <div className="rounded-full w-16 h-16 flex items-center justify-center">
        <img src={avatar} alt="" />
      </div>
      <p className="font-semibold text-2xl">
        {" "}
        {User.firstname} {User.lastname}
      </p>
      <div className="font-light">{User.country} </div>
      <div className="bg-green-100 text-xs py-1 px-3 rounded-full my-2">
        {User.plan}{" "}
      </div>
    </div>
  );
};

export default ProfileCard;
