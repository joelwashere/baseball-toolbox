import Link from "next/link";
import { FC, ReactNode } from "react";
import { TbDeviceAnalytics, TbChartDots2, TbSoccerField } from "react-icons/tb";

export const SideBar: FC = () => {
  return (
    <div className="group fixed top-0 left-0 h-screen w-16 m-0
      flex flex-col bg-sky-100 text-white shadow-lg
      hover:w-48 items-start transition-all duration-500 ease-in-out">
      
      <SideBarIcon icon={<TbDeviceAnalytics size={32} />} href="/" text="Dashboard" />
      <SideBarIcon icon={<TbChartDots2 size={32} />} href="/graph" text="Graph" />
      <SideBarIcon icon={<TbSoccerField size={32} />} href="/" text="Field" />
    </div>
  );
};

export const SideBarIcon = (props: any) => {
  return (
    <Link href={props.href}>
      <div className="sidebar-icon">
        {props.icon}
        <span className="sidebar-tooltip">{props.text}</span>
      </div>
    </Link>
  );
};