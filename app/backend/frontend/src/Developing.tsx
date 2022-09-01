import styled from "styled-components";

const DevelopWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Developing = () => {
  return <DevelopWrapper>개발중입니다.</DevelopWrapper>;
};

export default Developing;
