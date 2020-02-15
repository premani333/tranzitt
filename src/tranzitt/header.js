import React from "react";
import { Container } from 'reactstrap';
import {
    Navbar,
    Nav
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import "./Tranzitt.css";
//import Menu from "../image/menu.svg";

class homepage extends React.Component {
    render() {
        return (
            <Router>
                <div id="header">
                    <Navbar expand="sm">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/" className="logo" >Tranzitt</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" >
                                    <Nav.Link>
                                        <Link to="/popular-transfers" >Popular transfers</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Tranzitt-for-business"> Tranzitt for business</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/drive-with-tranzitt" >Drive with tranzitt</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/login-or-signup" className="login">Login/Signup</Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <Switch>
                            <Route path="/login-or-signup">
                                < Login-or-Signup />
                            </Route>
                            <Route path="/drive-with-tranzitt ">
                                <Drive-with-tranzitt />
                            </Route>
                            <Route path="/popular-transfers">
                                <Popular-transfers />
                            </Route>
                        </Switch>
                    </Navbar>
                </div>

            </Router>

        )
    }
}
export default homepage;