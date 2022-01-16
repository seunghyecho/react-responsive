import MediaQuery from "react-responsive";
export function WidthComponents() {
  return (
    <div className="WidthComponents">
      <h1>Width Components!</h1>
      <MediaQuery minWidth={1224}>
        <h2>You are a desktop or laptop</h2>
        <MediaQuery minWidth={1824}>
          <h2>You also have a huge screen</h2>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {(matches) =>
          matches ? <h2>You are retina</h2> : <h2>You are not retina</h2>
        }
      </MediaQuery>
    </div>
  );
}
