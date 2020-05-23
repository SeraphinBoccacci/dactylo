import styled from "styled-components";
import { colors } from "../../constants/style";
import { Input } from "antd";

export const DactyloContainer = styled.div`
  position: fixed;
  background: ${colors.white};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const DactyloTitle = styled.h1`
  position: relative;
  width: 400px;
  height: 40px;
  line-height: 40px;
  left: calc(50% - 200px);

  margin-top: 5rem;
  text-align: center;

  font-family: "Varela Round", sans-serif;
  font-size: 2.5rem;
  color: ${colors.primary};
`;

export const DactyloTextContainer = styled.div`
  position: relative;

  width: 1000px;

  margin-top: 5rem;
  left: calc(50% - 500px);
`;

export const DactyloLine = styled.p`
  width: 1000px;
  text-align: center;
`;

export const DactyloInput = styled(Input)`
  position: relative;
  width: 180px;
  height: 40px;
  left: calc(50% - 100px);

  margin-top: 200px;
  border: 1px #334455 solid;
  border-radius: 4px;

  font-family: "Abel";
  text-align: center;
`;

export const DactyloWord = styled.span`
  font-family: "Abel";
  display: inline-block;
  margin: 0 3px;
`;

export const DactyloLetter = styled.span<{ status: string }>`
  background: ${(props) =>
    props.status === "OK"
      ? colors.safe
      : props.status === "WRONG"
      ? colors.danger
      : "none"};
`;

export const DactyloHint = styled.h3`
  margin-top: 6rem;
  font-size: 1.5rem;
  font-family: "Abel";

  width: 400px;
  margin-left: calc(50% - 200px);
  text-align: center;
  color: ${colors.primary};
`;
