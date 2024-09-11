import { useMediaQuery } from "react-responsive";
import MobileNavigation from "./MobileNavigation";
import PCNavigation from "./PCNavigation";

const Navigation = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return isMobile ? <MobileNavigation /> : <PCNavigation />;
};

export default Navigation;
