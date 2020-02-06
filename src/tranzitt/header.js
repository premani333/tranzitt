import React from "react";
import "./Tranzitt.css";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import { Container, Row, Col,Navbar,NavItem,Nav} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class homepage extends React.Component{
    render(){
        return(
          <Router>
               <div > 
               <Container>    
               <Row>
                   <Col xs="6" sm="4">  <Navbar color="black" light> 
                   <Nav navbar>
                   <div className="logo">
                  <Link to="/"><b><i>Tranzitt</i></b></Link></div>
                  </Nav>
                  </Navbar>
                  </Col>
                  <Col xs="2"><Navbar color="black" light>
                  
                  <Nav navbar>
                 
                  <Link to="/popular-transfers">Popular transfers</Link>
                  
                  </Nav>
                  </Navbar>
                  </Col>
                  <Col xs="2"><Navbar color="black" light>
                  <Nav navbar>
                  <Link to="/drive-with-tranzitt">Drive with tranzitt</Link>
                  </Nav>
                  </Navbar>  
                  </Col>  
                  <Col md={4}><Navbar color="black" light>
                  <Nav navbar>
                   <Link to="/login-or-signup">Login/Signup</Link>
                   </Nav>
                   </Navbar>  
                  </Col>
                </Row>  
                </Container> 
                <Switch>
                    <Route path="/login-or-signup">
                       < Login-or-Signup /> 
                    </Route>
                   <Route path="/drive-with-tranzitt ">
                       <Drive-with-tranzitt />
                   </Route>
                   <Route path="/popular-transfers">
                       <Popular-transfers/>
                   </Route>
                </Switch>
                
                
               </div>
         </Router>
         
        )
    }
}
export default homepage;