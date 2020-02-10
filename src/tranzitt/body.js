import React from "react";
import "./Tranzitt.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,  CardBody,Label,Input,FormGroup, Col,Row,UncontrolledCarousel
   } from 'reactstrap';
     import BootstrapSwitchButton from 'bootstrap-switch-button-react';
    import Pic1 from "../image/HPMAW1.jpg";
    import Pic2 from '../image/AKF9NJ.jpg';
    import Pic3 from "../image/TAXI.jpg";

    const items = [
      {
        src:Pic1
      },
      {
        src: Pic2 
      },
      {
        src: Pic3
      }
    ];
    
class body extends React.Component{
    render(){
           return(
            <div className="body-container mt-1"> 
            <Container> 
              <Row>  
            <Col md={5}>
            <CardBody >   
            <h2><b>Welcome to Tranzitt</b></h2> 
            <h5>Be happy,Ride happy, Pay happy</h5>
            <br/><br/>
             <Col md={12}> 
                    <FormGroup row>                  
                       <Label>Pickup</Label>
                         <Input 
                           type="text"
                           className="input"
                           />              
                    </FormGroup>
                  <FormGroup row>
                     <Label>Drop</Label>    
                       <Input 
                         type="text"/>              
                  </FormGroup>
              <br/><br/>
              <div className="row">
                <Col md={5}>
                  <div className="formgroup">
                    <Label>Date</Label>
                       <Input 
                         type="date"/>
                  </div>
                </Col>
                <Col md={3}> 
                <div className="formgroup">
                    <Label>Time</Label>
                      <Input 
                        type="time"/>
                 </div>
                </Col>
                <Col md={2}>
                <div className="formgroup">
                    <Label>Passenger</Label>
                    <Input type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </Input>
                    </div>
                </Col>
                <Col md={2}>
                <div className="formgroup">
                    <Label>Luggage</Label>
                    <Input
                    type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </Input>
                    </div>
                </Col>
                </div><br/>
                <div className="row">
                <Col md={5}>
                <div className="formgroup">
                    <Label></Label>  
                <Input 
                type="date"/>
                </div>
                </Col>
                <Col md={3}>
                <div className="formgroup">
                    <Label></Label>
                        <Input
                        type="time"/>
                    </div>
                </Col>
                <Col md={2}>
                <div className="formgroup">
                    <Label></Label> 
                    </div>
                </Col>
                <Col md={2}>
                <div className="formgroup">
                       <Label>Return?</Label> 
                    <BootstrapSwitchButton onlabel="Yes" offlabel="No" size="xs" checked={false}/>
                    </div> 
                </Col>
                </div><br/>
                <Col  md={{ size:5, offset: 5}}>
                 
                <button type="button"className="search-button">Search</button>
                </Col>
               </Col>  
              </CardBody>
              </Col>
              <Col md={5}>
              <UncontrolledCarousel className="image-container" items={items} />
              </Col>            
              </Row>
              </Container>
            </div>
        )
    }
}
export default body;