import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="absolute bottom-0 mx-auto p-2 w-full bg-black">
      <div className="grid-flow-col gap-4 text-right pr-2">
        <div>
          <p className="text-white text-base font-light cursor-default ">
            Powered by Rebound Studios
          </p>
        </div>
      </div>
    </footer>
  );
};
