import styled from "styled-components";

export const DactyloContainer = styled.div`
  position: fixed;
  background: #eee;
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

  font-size: 2.5rem;
  color: #ababab;
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

export const DactyloInput = styled.input`
  position: relative;
  width: 180px;
  height: 40px;
  left: calc(50% - 100px);

  margin-top: 200px;
  border: 1px #334455 solid;
  border-radius: 5px;
  background: #887799;

  outline: none;

  font-size: 1.5rem;
  text-align: center;
`;

export const DactyloWord = styled.span`
  display: inline-block;
  margin: 0 3px;
`;

export const DactyloLetter = styled.span<{ status: string }>`
  background: ${(props) =>
    props.status === "OK"
      ? "green"
      : props.status === "WRONG"
      ? "red"
      : "none"};
`;

export const DactyloHint = styled.h3`
  margin-top: 6rem;
  font-size: 1.5rem;

  width: 400px;
  margin-left: calc(50% - 200px);
  text-align: center;
  color: #988776;
`;
