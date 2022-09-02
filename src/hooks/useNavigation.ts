import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return {
    handleNavigation,
  };
};
