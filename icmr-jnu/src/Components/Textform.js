import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

import { MDBCarousel, MDBCarouselItem, } from 'mdb-react-ui-kit';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';



export default function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let mystyle = {
        color: props.Mode === 'dark' ? "#F8F8FF" : "#132743",
        backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF'



        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }

    return (
        <>
            <div className='container-fluid mx-0 my-0' style={mystyle}>
                <MDBCarousel showIndicators showControls fade onSelect={handleSelect} style={{ minWidth: "100%" }}>
                    <MDBCarouselItem

                        className="d-block w-100"
                        itemId={1}
                        src="Images/coronavirus-4817450_960_720.jpg"
                        alt="ICMR Img"
                        width="100%"
                        height="400"
                    >
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </MDBCarouselItem>
                    <MDBCarouselItem

                        className="d-block w-100"
                        itemId={2}
                        src="Images/fusion-medical-animation-EAgGqOiDDMg-unsplash.jpg"
                        alt="Second slide" width="1500" height="400"
                    >

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </MDBCarouselItem>
                    <MDBCarouselItem

                        className="d-block w-100"
                        itemId={3}
                        src="Images/corona.jpg"
                        alt="Third slide" width="1500" height="400"
                    >

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </MDBCarouselItem>
                </MDBCarousel>



                {/* Middle bar */}
                <div className='container py-3 border-2' 
                style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}>
                    <Card className=" mx-2 border-2 " 
                    style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF', 
                    textAlign: "center", }}>
                        <Card.Body 
                        style={{ 
                            backgroundColor: props.Mode === 'dark' ? '#24527a' : '#c86b85', 
                            color: props.Mode === 'dark' ? '#F8F8FF' : '#F9F0F2', 
                            fontFamily:"URW Chancery L, cursive"
                            }}>
                            <h4>JNU-ICMR Analytics Centre</h4></Card.Body>
                    </Card>
                </div>




                {/* small cards */}
                <div className="container my-2 h-25 py-2 pb-4 " >

                    <MDBRow className='row-cols-1 row-cols-md-3 g-4 mx-auto' >
                        <MDBCol>
                            <MDBCard 
                            alignment='center' 
                            className='h-100 mx-auto' 
                            style={{ 
                                borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743', 
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
                                width: "18rem"}}>
                                <MDBCardImage
                                    src="Images/corona-vaccine-testing.jpg"
                                    style={{ height: "200px" }}
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody 
                                className="rounded-bottom" 
                                style={{ 
                                    backgroundColor: props.Mode === 'dark' ? '#132743' : '#e7eaf6', 
                                    color: props.Mode === 'dark' ? "#F8F8FF" : "#132743",
                                    fontFamily:"URW Chancery L, cursive"
                                }}>
                                    <MDBCardTitle>Cancer-COVID Project</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with sup
                                    </MDBCardText>
                                    <MDBBtn href="/CancerCovid" target='_blank' className="btn btn-sm btn-primary">Go to Link</MDBBtn>
                                </MDBCardBody>
                                
                            </MDBCard>
                        </MDBCol>

                        <MDBCol>
                            <MDBCard alignment='center' 
                            className='h-100 mx-auto' 
                            style={{ 
                                borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743',
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
                                width: "18rem"
                                }}>
                                <MDBCardImage
                                    src="Images/COVID-19-vaccine_India-Metropolis-Healthcare.jpg"
                                    style={{ height: "200px" }}
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody 
                                className="rounded-bottom" 
                                style={{ 
                                    backgroundColor: props.Mode === 'dark' ? '#132743' : '#e7eaf6', 
                                    color: props.Mode === 'dark' ? "#F8F8FF" : "#132743",
                                    fontFamily:"URW Chancery L, cursive" 
                                    }}>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This card has s
                                    </MDBCardText>
                                    <MDBBtn href="/CancerCovid" target='_blank' className="btn btn-sm btn-primary">Go to Link</MDBBtn>
                                </MDBCardBody>

                            </MDBCard>
                        </MDBCol>

                        <MDBCol>
                            <MDBCard 
                            alignment='center' 
                            className='h-100 mx-auto' 
                            style={{ 
                                borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743', 
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
                                width: "18rem"
                                }}>
                                <MDBCardImage
                                    src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                    alt='...'
                                    style={{ height: "200px" }}
                                    position='top'
                                />
                                <MDBCardBody 
                                className="rounded-bottom" 
                                style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#e7eaf6', 
                                color: props.Mode === 'dark' ? "#F8F8FF" : "#132743", 
                                fontFamily:"URW Chancery L, cursive"

                                }}>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Thisnt
                                    </MDBCardText>
                                    <MDBBtn href="/CancerCovid" target='_blank' className="btn btn-sm btn-primary">Go to Link</MDBBtn>
                                </MDBCardBody>
                                
                            </MDBCard>
                        </MDBCol>


                    </MDBRow>
                    

                    
                    
                </div>




            </div>




        </>
    );
}

