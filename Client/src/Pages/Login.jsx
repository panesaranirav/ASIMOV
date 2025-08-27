import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (isSignedIn) return <Navigate to="/home" />;

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/" routing="path" />
    </div>
  );
};

export default Login;
