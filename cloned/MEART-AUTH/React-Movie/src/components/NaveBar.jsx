import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.ibb.co/wdsJF41/32770.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Movies App SEI-13
      </Navbar.Brand>
      <Link to="/">Home</Link> ---
      <Link to="/Movies">Movies</Link> ---
      <Link to="/About">About</Link> ---
      <Link to="/login">Login</Link> ---
      <Link to="/signup">Signup</Link>
    </Navbar>
  );
}
