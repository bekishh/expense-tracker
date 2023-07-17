import React from "react";
import ChartBar from "./ChartBar";
import { styled } from "styled-components";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((d) => d.value);
  console.log(dataPointsValues);

  const totalMax = Math.max(...dataPointsValues);

  return (
    <StyledChart className="chart">
      {dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.label}
            label={point.label}
            value={point.value}
            totalMax={totalMax}
          />
        );
      })}
    </StyledChart>
  );
};

const StyledChart = styled("div")`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export default Chart;
