import logo from "../img/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="m-0 p-0">
      <Container className=" bg-secondary m-0 me-3 my-4 p-0 rounded-end-pill" fluid>
        <Link to="/" className="d-flex align-items-center nav-link pt-3 pb-4 ps-5 bg-light rounded-end-pill">
          <img src={logo} alt="compass" style={{ height: "10vh" }} />
          <span className="display-2 fst-italic ps-2 pe-5">YourWay</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light mx-auto px-1 px-sm-4 px-md-5 " />
        <Navbar.Collapse id="navbarScroll"  className="">
          <Nav
            className="mx-0 mx-lg-2 align-items-center justify-content-center flex-row gap-lg-5 text-center w-100 py-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          > 
            <NavLink
              to="/"
              className="nav-link bg-white py-0 px-1 fw-semibold col-3 col-md-2 mx-auto fw-bold"
              style={({ isActive }) => ({
                fontWeight: isActive && "bold",
                color: isActive && "#1D8FF2"
                
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/teachers"
              className="nav-link bg-white py-0 px-1 fw-semibold col-3 col-md-2 mx-auto fw-bold"
              style={({ isActive }) => ({
                fontWeight: isActive && "bold",
                color: isActive && "#1D8FF2",
              })}
            >
              Teachers
            </NavLink>
            <NavLink
              to="/courses"
              className="nav-link bg-white py-0 px-1 fw-semibold col-3 col-md-2 mx-auto fw-bold"
              style={({ isActive }) => ({
                fontWeight: isActive && "bold",
                color: isActive && "#1D8FF2",
              })}
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link bg-white py-0 px-1 fw-semibold col-3 col-md-2 mx-auto fw-bold"
              style={({ isActive }) => ({
                fontWeight: isActive && "bold",
                color: isActive && "#1D8FF2",
              })}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
