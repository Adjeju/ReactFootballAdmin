import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { logoutAdmin } from "../../slices/authSlice";
import { navLinks } from "../../utils/navLinks";

const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthed } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSignOutClick = () => {
    localStorage.removeItem("accessToken");
    dispatch(logoutAdmin());
    navigate("/admin");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src="https://dev1-web.twelve.football/images/menu-logo.png"
            style={{ height: "25px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(({ label, to }) => (
              <Link className="nav-link" to={to} key={to}>
                {label}
              </Link>
            ))}
          </Nav>
          {isAuthed && (
            <Nav onClick={onSignOutClick}>
              <Nav.Link className="d-flex align-items-center">
                <LogoutIcon width={25} />
                Sign out
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
