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
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Ubicom Proyect
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}