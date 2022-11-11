import Link from 'next/link';
import { FC } from 'react';

export const NavBar: FC = () => {
  return (
    <nav className="h-14 w-full bg-white py-0 px-4 border-b-4">
      <Link href={"/"}>
        <div className="h-full w-fit my-auto mx-4 text-5xl font-bold text-black hover:cursor-pointer">
          Baseball Toolbox
        </div>
      </Link>
      <div className="">
      </div>
    </nav>
  );
};

export const NavItem: FC = () => {
  return (
    <li>
      <Link href={""}>
      </Link>
    </li>
  );
}
