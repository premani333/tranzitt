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
               <div className="headercontainer"> 
               <Container>    
               <Row>
                   <Col xs="3" md="4">  
                   <div className="logo" >
                  <Link to="/">Tranzitt</Link></div>
                  </Col>
                   <div className="header-content">
                  <Link to="/popular-transfers">Popular transfers</Link></div>  
                  <div className="header-content">
                  <Link to="/drive-with-tranzitt">Drive with tranzitt</Link>
                  </div>
                  <div className="header-content">
                     
                  <Link to="/login-or-signup">Login/Signup</Link>
                  </div>
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