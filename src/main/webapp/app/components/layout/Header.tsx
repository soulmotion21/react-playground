import * as React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { shallowEqual, useDispatch } from "react-redux";
import { useRootState } from "app/hooks/useRootState";
import authSlice from "app/shared/reducers/auth";
import { RootState } from "app/shared/reducers";
import * as auth from "app/shared/api/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from '@fortawesome/pro-regular-svg-icons/faSignOutAlt'
// import { faSignInAlt } from '@fortawesome/pro-regular-svg-icons/faSignInAlt'

import ThemeToggler from "app/shared/component/ThemeToggler";

function Header(props): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLogin } = useRootState((state: RootState) => {
    return {
      isLogin: state.auth.isLogin,
    };
  }, shallowEqual);

  const onClickLogout = React.useCallback((event) => {
    event.preventDefault();
    auth.logout().then((d) => dispatch(authSlice.actions.setLogin(false)));
  }, []);

  const onClickLogin = React.useCallback((event) => {
    event.preventDefault();
    history.push({
      pathname: "/login",
      state: { from: props.location },
    });
  }, []);

  return (
    <header>
      <div className="section-header">
        <h1>
          <NavLink to="/">
            <span className="logo">Planit healthcare</span>
          </NavLink>
        </h1>
        <div className="area-btn">
          <ThemeToggler />
          {isLogin ? (
            <a href="#" onClick={onClickLogout}>
              {/*<FontAwesomeIcon icon={faSignOutAlt} />*/}
            </a>
          ) : (
            <a href="#" onClick={onClickLogin}>
              {/*<FontAwesomeIcon icon={faSignInAlt} />*/}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
