import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavManu.css';

const NavManu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { displayName, email } = loggedInUser;

    return (
        <>
            <Navbar className="Nav-Manu" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">
                        Street Riders
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/destination" className="nav-link">
                                Destination
                            </Link>
                            <Link to="/blog" className="nav-link">
                                Blog
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                            {email ? (
                                <NavDropdown
                                    title={displayName}
                                    id="basic-nav-dropdown"
                                >
                                    <div className="text-center px-2">
                                        <p>Email: {email}</p>
                                        <Button
                                            onClick={() => setLoggedInUser({})}
                                            className="custrom-btn"
                                        >
                                            Log Out
                                        </Button>
                                    </div>
                                </NavDropdown>
                            ) : (
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavManu;
