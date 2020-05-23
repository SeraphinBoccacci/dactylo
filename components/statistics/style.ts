import styled from "styled-components";
import { Descriptions } from "antd";

export const StatisticsContainer = styled(Descriptions)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: 12rem;
`;

export const StatisticsTitle = styled.h1`
  font-family: "Varela Round";
  font-size: 1.2rem;

  width: 100%;
  text-align: center;
`;

export const StatisticsItem = styled(Descriptions.Item)`
  font-family: "Abel";
  font-size: 1rem;
`;
