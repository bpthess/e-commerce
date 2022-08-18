import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  padding: 0 15vw;
  z-index: 3000;
  overflow: hidden;
`;

export const Container = styled.div`
  min-width: 1050px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > ul,
  > form {
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
`;

export const ItemsMenu = styled.ul`
  & li {
    display: flex;
    & a {
      font-size: 16px;
      & svg {
        margin-right: 20px;
        font-size: 20px;
        vertical-align: text-top;
        margin-top: 1px;
      }
    }
  }
`;

export const ItemsNavi = styled.ul`
  & li {
    padding: 0 30px;
  }
`;

export const ItemsSearchForm = styled.form`
  position: relative;
`;

export const FormContainer = styled.div`
  & svg {
    font-size: 20px;
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 1px;
    cursor: pointer;
  }
`;

export const Controller = styled.input`
  background-color: #eee;
  border-radius: 5px;
  padding: 10px 25px 10px 15px;
  font-size: 12px;

  ::placeholder {
    font-weight: 400;
    font-size: 12px;
    color: #999;
  }
`;

export const ItemsIcon = styled.ul`
  & li {
    margin-right: 30px;
    font-size: 24px;
    cursor: pointer;
  }
  & li:last-child {
    position: relative;
  }
`;

export const Badge = styled.span`
  height: 18px;
  line-height: 18px;
  position: absolute;
  right: -2px;
  bottom: 15px;
  font-size: 12px;
  color: #fff;
  z-index: 100;

  :before {
    content: "";
    background-color: darkcyan;
    border-radius: 100%;
    position: absolute;
    left: -6px;
    width: 18px;
    height: 18px;
    z-index: -1;
  }
`;
