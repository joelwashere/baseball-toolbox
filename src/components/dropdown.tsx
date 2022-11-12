import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { TbChevronDown } from "react-icons/tb"

interface DropdownProps {
  title: string;
}

export const Dropdown = (props: any) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState();

  let menuRef = useRef<HTMLDivElement | null>(null);

  //TODO : Get data required for list items here
  useEffect(() => {
    //
  }, []);

  useEffect(() => {
    let handler = (e: any) => {
      if(!menuRef.current?.contains(e.target))
        setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div ref={menuRef}>
      <div className="flex flex-col bg-zinc-400 my-0.5 mx-2 p-2">
        <a href="#" className="" onClick={() => setOpen(!open)}>
          <h2 className="font-bold mb-1 text-white">{props.title}</h2>
          <div className="w-full bg-white px-0.5 flex items-center justify-between rounded-sm">
            <span className="text-sm mr-2 text-black">Select Dataset</span>
            <TbChevronDown color="black" />
          </div>
        </a>
      </div>
      <div className="mx-2 px-2">
        <ul className="overflow-y-auto max-h-60 bg-white">
          {open && props.children}
        </ul>
      </div>
    </div>
  );
}

export const DropdownItem = (props: any) => {
  return(
    <li className="px-1 bg-zinc-400 hover:cursor-pointer hover:bg-sky-300">
      {props.text}
    </li>
  );
}