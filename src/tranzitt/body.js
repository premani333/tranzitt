import React from "react";
import "./Tranzitt.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,Card,  CardBody,Label,Input,FormGroup, Col,Row ,Img
     } from 'reactstrap';
     import BootstrapSwitchButton from 'bootstrap-switch-button-react';
   import Pic from "../image/HPMAW1.jpg";


class body extends React.Component{
    render(){
           return(
            <div className="body-container">       
            <Card > 
            <Container> 
              <Row>  
                <Col md={5}>            
            <CardBody style={{ width: '46rem' }}> 
            
            <h2><b>Welcome to Tranzitt</b></h2> 
            <h5>Be happy,Ride happy, Pay happy</h5>
            <br/><br/>
            <Col md={9}>
              <Row form >
                 <Col  md={10}>
                    <FormGroup row>                  
                       <Label>Pickup</Label>
                         <Input 
                           type="text"/>              
                    </FormGroup>
                  </Col>
              </Row>
              <Row form>
                 <Col md={10}>
                  <FormGroup row>
                     <Label>Drop</Label>    
                       <Input 
                         type="text"/>              
                  </FormGroup>
                 </Col>
              </Row>
              <br/><br/>
              <div className="row">
                <Col md={4}>
                  <div className="formgroup">
                    <Label>Date</Label>
                       <Input 
                         type="date"/>
                  </div>
                </Col>
                <Col md={2}> 
                  <FormGroup row>
                    <Label>Time</Label>
                      <Input 
                        type="time"/>
                  </FormGroup>
                </Col>
                <Col md={2}>
                    <Label>Passenger</Label>
                    <Input type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </Input>
                </Col>
                <Col md={2}>
                    <Label>Luggagee</Label>
                    <Input
                    type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </Input>
                </Col>
                </div><br/>
                <div className="row">
                <Col md={4}>
                    <Label></Label>
                    <div className="formgroup">
                <Input 
                type="date"/>
                </div>
                </Col>
                <Col md={2}>
                    <Label></Label>
                    <FormGroup row>
                        <Input
                        type="time"/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <Label></Label>
                    <FormGroup row>
                    
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup row>
                        <Label>Return?</Label>
                    <BootstrapSwitchButton onlabel="Yes" offlabel="No" size="xs" checked={false}/>
                    </FormGroup>
                </Col>
                </div><br/>
                <Col sm="12" md={{ size: 3, offset: 5 }}>
                 
                <button type="button"className="search-button">Search</button>
                
                </Col>
               </Col> 
              </CardBody>
              </Col>
              <Col md={7}>
              <img  className="image-container" src={Pic} />
              </Col>
             
              </Row>

              </Container>
            </Card>
            </div>
        )
    }
}
export default body;