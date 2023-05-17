import { Navigate, Outlet } from "react-router";

export default function ProtectedArea({ children }) {
  const registered = localStorage.getItem("My Token");

  if (!registered || registered === 'User not found' || registered ===' Bad input' || registered === 'Invalid password') {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}
