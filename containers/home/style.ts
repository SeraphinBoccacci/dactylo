import styled from "styled-components";

export const HomeContainer = styled.div`
  position: fixed;
  background: #345345;
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

  margin-top: 5rem;
  text-align: center;

  font-size: 2.5rem;
  color: #ababab;
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
  color: #acacac;
`;

export const HomeLink = styled.a`
  text-align: center;

  font-size: 1.5rem;
  color: #acacac;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: black;
  }
`;
