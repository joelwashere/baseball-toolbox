import { FC } from "react";
import { LoginForm } from "../../components/login-form";

export const LoginView: FC = ({ }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
