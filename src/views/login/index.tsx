import { useState, FC, ChangeEvent } from "react";
import { LoginForm } from "../../components/LoginForm";

export const LoginView: FC = ({ }) => {
  var classNames = require('classnames');

  

  return (
    <main className="flex place-content-center items-center h-screen w-screen">
      <LoginForm />
    </main>
  );
}