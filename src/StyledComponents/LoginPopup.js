import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: fixed;
  top: 20;
  left: 390px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: white;
  z-index: 1;
  padding: 50px;
  @media only screen and (max-width: 1280px) {
     & {
        left: 100px;
    }
  }
  @media only screen and (max-width: 780px) {
     & {
        left: 40px;
        padding: 10px;
    }
    @media only screen and (max-width: 580px) {
     & {
        left: 20px;
        padding: 5px;
     }
    }
  }
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 650px;
  background-color: #ffff;
`;

export const ClosedPopup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 20;
  cursor: pointer;
  border: 1px solid black;
  background-color: red;
`;
