import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../assets/image-avatar.png";
import FeedIcon from "../assets/feed.svg";
import AccountIcon from "../assets/account.svg";
import BillingIcon from "../assets/billing.svg";

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
  const { pathname } = useLocation();
  return (
    <div className=" flex flex-col lg:flex-row overflow-hidden h-screen bg-gray-100">
      <div className="lg:w-64 bg-slate-800 rounded-r-xl text-white flex lg:flex-col items-center justify-between lg:justify-start">
        <h1 className="my-6 text-xl font-bold px-6">TIMELINE</h1>
        <nav className="flex lg:flex-col gap-2">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <div
                role="button"
                key={item.name}
                className={`px-6 capitalize flex items-center gap-4 py-3 rounded-xl ${
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
      <div className="w-full overflow-y-auto bg-gray-100">
        <header className="flex justify-end bg-white p-6 sticky w-full top-0 right-0 z-20">
          <div className="">
            <img src={avatar} alt="user image" className="w-10 h-10" />
          </div>
        </header>
        <div className="py-6 px-8 relative">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
