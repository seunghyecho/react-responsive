import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <div>{isMobile && children}</div>;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  return <div>{isTablet && children}</div>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px) ",
  });
  return <div>{isPc && children}</div>;
};
