import { FC, ReactNode, useEffect, useState } from "react";
import { TbChevronDown } from "react-icons/tb"

interface DropdownProps {
  title: string;
}

export const Dropdown = (props: any) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState();

  useEffect(() => {
    //Get data required for list items here
  }, []);

  return (
    <>
      <div className="flex flex-col bg-slate-600 my-1 mx-2 p-2">
        <a href="#" className="" onClick={ () => setOpen(!open) }>
          <h2 className="font-bold mb-1">{ props.title }</h2>
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
    </>
  );
}