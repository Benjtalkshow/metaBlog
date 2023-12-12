import { useSelector } from "react-redux";
import { selectIsAdmin, selectIsLoggedIn } from "../../redux/slice/authSlice";


const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectIsAdmin);
  if (isLoggedIn && isAdmin) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
      return children;
    }
    return null;
  };

export default ShowOnLogin;
