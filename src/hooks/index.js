import { useMediaQuery } from "react-responsive";
export default function WithHooks() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width:1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div className="WithHooks">
      <h1>Device test</h1>
      {isDesktopOrLaptop && <h2>You are a desktop or laptop</h2>}
      {isBigScreen && <h2>You are a huge screen</h2>}
      {isTabletOrMobile && <h2>You are a tablet or mobile phone</h2>}
      <h2>You are in {isPortrait ? "portrait" : "landscape"} orientation</h2>
      {isRetina && <h2>You are retina</h2>}
    </div>
  );
}
