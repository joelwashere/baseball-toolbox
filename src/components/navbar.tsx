import Link from 'next/link';
import { FC } from 'react';

export const NavBar: FC = () => {
  return (
    <nav className="flex h-14 w-full bg-white py-0 px-4 border-b-4 justify-between">
      <Link href={"/"}>
        <div className="h-full w-fit my-auto mx-4 text-5xl font-bold text-black hover:cursor-pointer">
          Baseball Toolbox
        </div>
      </Link>
      <div className="my-auto">
        <ul className="max-w-full flex">
          <NavItem href="/graph" text="Visualizer" />
          <NavItem href="/" text="Articles" />
          <NavItem href="/" text="Profile" />
        </ul>
      </div>
    </nav>
  );
};

export const NavItem = (props: any) => {
  return (
    <Link href={props.href}>
      <li className="navbar-item">
        {props.text}
      </li>
    </Link>
  );
}
