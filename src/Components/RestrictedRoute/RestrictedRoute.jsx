import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import PropTypes from "prop-types";
export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
RestrictedRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.string,
};
