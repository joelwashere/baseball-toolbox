import { FC } from "react";

export const SideBar: FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
      flex flex-col bg-gray-900 text-white shadow-lg">
      
      <SideBarIcon />
      <SideBarIcon />
      <SideBarIcon />
    </div>
  );
};

export const SideBarIcon: FC = ({ icon }) => {
  return (
    <div className="sidebar-icon">
      {icon}
      A
    </div>
  );
};