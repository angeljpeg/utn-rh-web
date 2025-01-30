import React from "react";
import FormLogin from "../components/FormLogin";

const LoginPage: React.FC = () => {
  return (
    <div className="flex w-full h-screen bg-custom-pattern bg-cover bg-center justify-end">
      <div className="w-full flex items-center justify-center lg:w-1/2  bg-green-950/50">
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
