import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar } from 'react-bootstrap';

export default function NavbarElem() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="assets/Logo.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    <h1>Ubicom Proyect</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}