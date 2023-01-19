import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginWrapper,
  PopupInner,
  ClosedPopup,
} from "../StyledComponents/LoginPopup";
import { useSelector } from "react-redux";

const LoginPopup = (props) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const handleClose = () => {
    props.setTrigger(false);
  };
  if (isAuth) {
    handleClose();
  }
  return props.trigger ? (
    <LoginWrapper>
      <PopupInner>
        <ClosedPopup onClick={handleClose}>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/development-platform/wrong-14.png"
            width="20"
          />
        </ClosedPopup>
        {props.children}
      </PopupInner>
    </LoginWrapper>
  ) : (
    ""
  );
};

export default LoginPopup;
