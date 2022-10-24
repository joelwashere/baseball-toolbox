import { useState, FC, ChangeEvent } from "react";

export const LoginView: FC = ({ }) => {
  var classNames = require('classnames');

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
    <main className="center">
      <form>
        <div className={"field"}>
          <input className={"input"} type={"email"} name={"email"} placeholder={""} />
          <label className={"label"} htmlFor={"email"}>Email</label>
        </div>
        <div className={"field"}>
          <input className={"input"} type={showPassword ? "text" : "password"} name={"password"} placeholder={""} onInput={validatePassword} />
          <label className={"label"} htmlFor={"password"}>Password</label>
          <span
            className={"toggle-password"}
            onMouseEnter={() => (setShowPassword(true))}
            onMouseLeave={() => (setShowPassword(false))}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className={"strength"}>
          <span className={"bar bar-1 " + classNames({"bar-show":(strength > 0)})} />
          <span className={"bar bar-2 " + classNames({"bar-show":(strength > 1)})} />
          <span className={"bar bar-3 " + classNames({"bar-show":(strength > 2)})} />
          <span className={"bar bar-4 " + classNames({"bar-show":(strength > 3)})} />
        </div>
        <ul>
          <li>{validations[0] ? "✅" : "❌"} must be at least 5 characters</li>
          <li>{validations[1] ? "✅" : "❌"} must contain a capital letter</li>
          <li>{validations[2] ? "✅" : "❌"} must contain a number</li>
          <li>{validations[3] ? "✅" : "❌"} must contain a special character</li>
        </ul>
      </form>
    </main>
  );
}