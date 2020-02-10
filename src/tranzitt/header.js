import React from "react";
import "./Tranzitt.css";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import { Container, Row, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class homepage extends React.Component{
    render(){
        return(
          <Router>
               <div className="header-container"> 
               <Container>    
               <Row>
                   <Col xs="3" md="4"> 
                  <Link to="/" div className="logo" >Tranzitt</Link>
                  </Col> 
                  <Link to="/popular-transfers" className="header-content">Popular transfers</Link>
                  <Link to="/Tranzitt- for- business" className="header-content"> Tranzitt for business</Link>  
                  <Link to="/drive-with-tranzitt" className="header-content">Drive with tranzitt</Link>  
                  <Link to="/login-or-signup" className="login">Login/Signup</Link>  
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