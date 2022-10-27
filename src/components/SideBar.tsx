import { FC, ReactNode } from "react";
import { TbDeviceAnalytics, TbChartDots2, TbSoccerField } from "react-icons/tb";

export const SideBar: FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
      flex flex-col bg-gray-900 text-white shadow-lg
      hover:w-48 transition-all duration-500 ease-in-out">
      
      <SideBarIcon icon={<TbDeviceAnalytics size={32} />} />
      <SideBarIcon icon={<TbChartDots2 size={32} />} />
      <SideBarIcon icon={<TbSoccerField size={32} />}/>
    </div>
  );
};

export const SideBarIcon = ({ icon }: any) => {
  return (
    <div className="sidebar-icon">
      {icon}
    </div>
  );
};