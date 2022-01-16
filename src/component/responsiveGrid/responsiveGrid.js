import { Grid } from "@flescompany/design-system";
import { Mobile, Tablet, PC } from "../../hooks/mediaQuery/mediaQuery";
export default function ResponsiveGrid() {
  return (
    <div>
      <Mobile>
        <Grid
          grids={[
            {
              name: "gridItem1",
              title: "gridTitle",
            },
            {
              name: "gridItem2",
              title: "gridTitle",
            },
            {
              name: "gridItem3",
              title: "gridTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
          onGrid={function noRefCheck() {}}
          width="1"
        />
      </Mobile>
      <Tablet>
        <Grid
          grids={[
            {
              name: "gridItem1",
              title: "gridTitle",
            },
            {
              name: "gridItem2",
              title: "gridTitle",
            },
            {
              name: "gridItem3",
              title: "gridTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
          onGrid={function noRefCheck() {}}
          width="2"
        />
      </Tablet>
      <PC>
        <Grid
          grids={[
            {
              name: "gridItem1",
              title: "gridTitle",
            },
            {
              name: "gridItem2",
              title: "gridTitle",
            },
            {
              name: "gridItem3",
              title: "gridTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
          onGrid={function noRefCheck() {}}
          width="3"
        />
      </PC>
    </div>
  );
}
