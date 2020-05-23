import styled from "styled-components";
import { colors } from "../../constants/style";

export const HomeContainer = styled.div`
  position: fixed;
  background: ${colors.primary};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const HomeTitle = styled.h1`
  position: absolute;
  width: 400px;
  height: 40px;
  line-height: 40px;
  left: calc(50% - 200px);

  margin-top: 10rem;
  text-align: center;

  font-family: "Varela Round", sans-serif;
  font-size: 2.5rem;
  color: ${colors.accent};
`;

export const HalfCircle = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  max-height: 1000px;
  max-width: 1000px;
  border-radius: 50%;
  background: white;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(60%);
`;

export const HomeList = styled.ul`
  position: absolute;

  list-style: none;
  width: 400px;
  height: 40px;
  line-height: 40px;
  top: calc(50% - 20px);
  left: calc(50% - 200px);

  padding: 0;
`;

export const HomeListElement = styled.li`
  margin: 0;
  text-align: center;

  font-size: 1rem;
  color: ${colors.accent};
`;

export const HomeLink = styled.a`
  text-align: center;

  font-family: "Abel";
  font-size: 1.5rem;
  color: ${colors.accent};

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: black;
  }
`;
