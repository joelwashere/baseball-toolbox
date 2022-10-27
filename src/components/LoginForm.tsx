import { ChangeEvent, FC, useState } from "react";

export const LoginForm: FC = () => {
  let [strength, setStrength] = useState(0);
  let [validations, setValidity] = useState<boolean[]>([]);
  let [showPassword, setShowPassword] = useState(false);

  function validatePassword(event: ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;

    setValidity([
      password.length > 5,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[$&+,:;=?@#]/) > -1
    ]);

    setStrength(validations.reduce((acc, cur) => acc + Number(cur), 0));
    console.log(strength);

  }

  return (
    <form className="text-slate-400 max-w-xl">
      <div className="group w-full my-1 mx-auto relative border-dashed border-b-2 border-[#afafaf] mt-4 transition duration-500 after:content-[''] after:relative after:block after:h-[4px] after:w-full 
      after:bg-fuchsia-400 after:scale-x-0 after:origin-[0%] after:opacity-0 after:transition-all after:duration-500 after:ease-in-out after:top-1 focus-within:border-transparent focus-within:after:scale-x-100 focus-within:after:opacity-100">
        <input className="peer outline-none border-none truncate w-full py-1 px-0 bg-none text-white text-2xl font-bold transition duration-500 valid:text-[#99cd32] invalid:text-[#ff4500]"
          type={"email"} name={"email"} placeholder={" "} />
        <label className="[peer:not(peer-placeholder-shown)]:scale-75 [peer:not(peer-placeholder-shown)]:-translate-y-6 group-focus-within:scale-75 group-focus-within:-translate-y-6 text-xl text-[#afafaf] z-[1] absolute left-0 origin-0 transition-transform duration-300" htmlFor={"email"}>Email</label>
      </div>
      <div className="group w-full my-1 mx-auto relative border-dashed border-b-2 border-[#afafaf] mt-4 transition duration-500 after:content-[''] after:relative after:block after:h-[4px] after:w-full 
      after:bg-fuchsia-400 after:scale-x-0 after:origin-[0%] after:opacity-0 after:transition-all after:duration-500 after:ease-in-out after:top-1 focus-within:border-transparent focus-within:after:scale-x-100 focus-within:after:opacity-100">
        <input className="outline-none border-none truncate w-full py-1 px-0 bg-none text-white text-2xl font-bold transition duration-500 valid:text-[#99cd32] invalid:text-[#ff4500]"
          type={showPassword ? "text" : "password"} name={"password"} placeholder={" "} onInput={validatePassword} />
        <label className="[peer:not(peer-placeholder-shown)]:scale-75 [peer:not(peer-placeholder-shown)]:-translate-y-6 group-focus-within:scale-75 group-focus-within:-translate-y-6 text-xl text-[#afafaf] z-[1] absolute left-0 origin-0 transition-transform duration-300" htmlFor={"password"}>Password</label>
        <span
          className={"absolute cursor-help text-sm right-1 bottom-1"}
          onMouseEnter={() => (setShowPassword(true))}
          onMouseLeave={() => (setShowPassword(false))}>
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
      <div className={"flex h-[10px] w-full"}>
        <span className={"mr-[5px] h-full w-1/4 transition-shadow duration-500 last-child:mr-0 shadow-[inset_0px_20px_#1f1f1f] bg-gradient-to-r from-red-600 to-orange-600 " + (strength >= 1 ? "shadow-none" : "")} />
        <span className={"mr-[5px] h-full w-1/4 transition-shadow duration-500 last-child:mr-0 shadow-[inset_0px_20px_#1f1f1f] bg-gradient-to-r from-orange-600 to-yellow-600 " + (strength >= 2 ? "shadow-none" : "")} />
        <span className={"mr-[5px] h-full w-1/4 transition-shadow duration-500 last-child:mr-0 shadow-[inset_0px_20px_#1f1f1f] bg-gradient-to-r from-yellow-600 to-green-300 " + (strength >= 3 ? "shadow-none" : "")} />
        <span className={"mr-[5px] h-full w-1/4 transition-shadow duration-500 last-child:mr-0 shadow-[inset_0px_20px_#1f1f1f] bg-gradient-to-r from-green-300 to-green-600 " + (strength >= 4 ? "shadow-none" : "")} />
      </div>
      <ul>
        <li>{validations[0] ? "✅" : "❌"} must be at least 5 characters</li>
        <li>{validations[1] ? "✅" : "❌"} must contain a capital letter</li>
        <li>{validations[2] ? "✅" : "❌"} must contain a number</li>
        <li>{validations[3] ? "✅" : "❌"} must contain a special character</li>
      </ul>
    </form>
  );
};
