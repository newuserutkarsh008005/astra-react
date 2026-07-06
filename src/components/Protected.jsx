import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    toast.error("Please login to continue", {
      id: "auth-required",
    });

    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;