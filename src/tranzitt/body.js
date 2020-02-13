import React from "react";
import {
  Container,  CardBody,Label, Col,Row,UncontrolledCarousel,Input
 } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Tranzitt.css";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Pic1 from "../image/HPMAW1.jpg";
import Pic2 from '../image/AKF9NJ.jpg';
import Pic3 from "../image/TAXI.jpg";
import Dicon from "../image/calendar.svg";
import Picon from "../image/pin.svg";
import DRicon from "../image/flags.svg";
import Ticon from "../image/clock.svg";
import UDicon from "../image/up-and-down-arrows.svg"

//import Media from 'react-media';


    const items = [
      {
        src:Pic3,
        header: 'Flight delays? no worries', 
        caption:'We got you coverd'
      },
      {
        src: Pic1 ,
        header: 'Flight delays? no worries',
        caption:'We got you coverd'
      },
      {
        src: Pic2,
        header: 'Flight delays? no worries',
        caption:'We got you coverd'
      }
    ];
    
class body extends React.Component{
    render(){
           return(
            <div className="body-container mt-0"> 
            
            <Container> 
              <Row>  
              
            <Col md={6}>
            <div className="">
            <CardBody >   
            <h2><b>Welcome to Tranzitt</b></h2> 
            <h5>Be happy,Ride happy, Pay happy</h5>
            <br/><br/>   
           <Col md={12}>  
                       <Label>Pickup</Label>
                       <div className="input-fields">
                      <img src={Picon}/>   
                         <input 
                           type="text"
                            className="form-control input-fields"
                           />   
                            </div>                 
                          <input type="image" className="location-change" src={UDicon}></input>        
                     <Label>Drop</Label> 
                      <div className="input-fields">
                        <img src={DRicon}/>
                       <input 
                         type="text"
                         className="form-control input-fields"/> 
                         </div>                                 
                     <br/>
              <div className="row">
                <Col md={5}>               
                    <Label>Date</Label>
                    <div className="input-fields">
                       <img src={Dicon}/>  
                       <input 
                         type="text"
                         className="form-control input-fields "/>
                         </div>            
                </Col>
                <Col md={3}>             
                    <Label>Time</Label>
                <div className="input-fields">
                  <img src={Ticon}/>
                      <input 
                        type="text"
                        className="form-control input-fields"
                        /> 
                  </div>         
                </Col>
                <Col md={2}>     
                    <Label>Passenger</Label>
                    <Input type="select"  className="form-control input-fields">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </Input>    
                </Col>
                <Col md={2}>
                    <Label>Luggage</Label>
                    <Input
                    type="select" className="form-control input-fields" >
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
                <Col md={5}>
                <Label></Label>  
                <div className="input-fields">
                       <img src={Dicon}/>
                <input 
                type="text" className="form-control input-fields" /> 
                </div> 
                </Col>
                <Col md={3}>
                
                    <Label></Label>
                    <div className="input-fields">
                  <img src={Ticon}/>
                        <input
                        type="text" className="form-control input-fields"/>
                        </div>     
                </Col>
                <Col md={2}>       
                    <Label></Label>                    
                </Col>
                <Col md={2}>             
                       <Label>Return?</Label> 
                    <BootstrapSwitchButton onlabel="Yes" offlabel="No" size="xs" checked={false}/>                   
                </Col>
                </div><br/>
                <Col  md={{ size:6, offset: 7}}>              
                <button type="button" className="search-button">SEARCH</button>
                </Col>
                </Col>   
              </CardBody>
              </div>
              </Col>
              <Col md={6}>
              <UncontrolledCarousel className="image-container" items={items} />
              </Col>            
              </Row>
              </Container>
            </div>
        )
    }
}
export default body;