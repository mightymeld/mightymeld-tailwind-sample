import { ReactNode, useContext } from "react";
import { UserContext } from "../context/user.context";
import { Link, useLocation } from "react-router-dom";
import FeedIcon from "../assets/feed.svg";
import AccountIcon from "../assets/account.svg";
import BillingIcon from "../assets/billing.svg";
import ProfileCard from "../components/profile-card";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  {
    name: "feed",
    icon: FeedIcon,
    link: "/",
  },
  {
    name: "account",
    icon: AccountIcon,
    link: "/account",
  },
  {
    name: "Billing",
    icon: BillingIcon,
    link: "/billing",
  },
];

const Layout = ({ children }: LayoutProps) => {
  const { state } = useContext(UserContext);
  const { Users } = state;
  const { pathname } = useLocation();
  return (
    <div className=" flex flex-col lg:flex-row overflow-hidden h-screen bg-gray-100">
      <div className="lg:flex flex-col hidden justify-between lg:w-64 bg-slate-800 rounded-r-xl py-4">
        <div className=" text-white flex lg:flex-col justify-between lg:justify-start px-2">
          <h1 className="my-6 text-xl font-bold px-6">TIMELINE</h1>
          <nav className="flex lg:flex-col gap-2">
            {navLinks.map((item) => (
              <Link key={item.name} to={item.link}>
                <div
                  role="button"
                  key={item.name}
                  className={`px-6 w-full capitalize flex items-center gap-4 py-3 rounded-lg  ${
                    item.link === pathname ? "bg-slate-700" : ""
                  }`}
                >
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  <span className="hidden lg:block">{item.name} </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mx-2">
          <ProfileCard User={Users} />
        </div>
      </div>

      <div className="w-full overflow-y-auto bg-gray-100">
        <div className="py-6 px-8 relative">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
