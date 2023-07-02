import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import Covid19 from "../map/Covid19";
import BarChart from './CovidMalignancy/chart';
import LineChart from './Covid/covid_pos/lineChart';
import PieChart from './Covid/covid_pos/AgePie';



export default function CancerCovid(props) {

    // to fetch the data of total malignant count
    const totalCount = "http://localhost:4200/get/MedicalCondition/All/Malignancy/Count";

    const [conditionCount, setConditionCount] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setConditionCount(data[0].condition_count);
                    console.log('Data fetched successfully:', url);
                    console.log(data);
                } else {
                    console.log('Failed to fetch data:', response.error);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(totalCount);
    }, [totalCount]);


    // Use this on footer and header = #fb7777
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let mystyle = {
        color: props.Mode === 'dark' ? "#F8F8FF" : "#132743",
        backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF',




        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }

    return (
        <>
            <div className="container-fluid px-4 margin-top: 2px">
                <div style={mystyle} onSelect={handleSelect}>
                    <Carousel activeIndex={index} onSelect={handleSelect} style={{ minWidth: "100%" }}>
                        <Carousel.Item >
                            <Covid19 />
                        </Carousel.Item>
                    </Carousel>
                    {/* Middle bar */}
                    <div className='container py-3 square rounded-9 border-2'
                        style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}>
                        <Card className=" mx-2 border-2 "
                            style={{
                                borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF',
                                textAlign: "center",
                            }}>
                            <Card.Body
                                style={{
                                    backgroundColor: props.Mode === 'dark' ? '#24527a' : '#c86b85',
                                    color: props.Mode === 'dark' ? '#F8F8FF' : '#F9F0F2',
                                    fontFamily: "URW Chancery L, cursive"
                                }}>
                                <h2>Cancer Covid Project</h2></Card.Body>
                        </Card>
                    </div>




                    {/* small cards */}
                    <div className=" container my-2 h-100" >
                        <div className="container my-3">

                            <div className="row">
                                <div className="col-md-9" >
                                    <BarChart />

                                </div>
                                <div className="col-md-3 px-3 my-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>;


                                    <Card style={{ width: '18rem', borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743', fontFamily: "URW Chancery L, cursive", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} className='rounded border-3'>
                                        <Card.Body style={mystyle}>
                                            <Card.Title className="text-center" >COVID Cases with Malignancy</Card.Title>
                                            <Card.Subtitle className="mb-2 text-body-secondary text-center danger text-danger">{conditionCount}</Card.Subtitle>

                                        </Card.Body>
                                    </Card>

                                </div>
                            </div>
                        </div>

                        <div className="container my-3">
                            <div className="col-md-3 px-3 my-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>;




                                <div className='container py-3 square rounded-9 border-2'
                                    style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}>
                                    <Card style={{
                                        borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743',
                                        fontFamily: "URW Chancery L, cursive",
                                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                        textAlign: "center"
                                    }}
                                        className='rounded mx-2 border-3'>
                                        <Card.Body style={mystyle}>
                                            <Card.Title className="text-center" >Positive COVID Cases</Card.Title>
                                            <Card.Subtitle className="mb-2 text-body-secondary text-center danger text-danger">{conditionCount}</Card.Subtitle>

                                        </Card.Body>
                                    </Card>
                                </div>

                            </div>


                        </div>



                        <div className="container-fluid pb-4">
                            <div className="row justify-content-around mx-1"
                                style={{
                                    color: props.Mode === 'dark' ? '#e7eaf6' : '#132743',
                                    fontFamily: "URW Chancery L, cursive"
                                }}>
                                <div className="col-md-4 px-2 my-4"
                                    >
                                    
                                    <LineChart />
                                </div>
                                <div className="col-md-4 px-2 my-4">
                                    
                                    <PieChart />
                                </div>

                            </div>
                        </div>

                        {/* <CardGroup>

                            <Card className=" mx-3 mb-5 square rounded border-2 " style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }}>

                                <Card.Body style={mystyle} >
                                    <Card.Title>Cancer-COVID Project</Card.Title>
                                    <Card.Text style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }}>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>

                            <Card className="mx-3 mb-5 square rounded border-2 border" style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }} >
                                <Card.Img variant="top" src="Images/COVID-19-vaccine_India-Metropolis-Healthcare.jpg" className="my-8 rounded" style={{ height: "200px" }} />
                                <Card.Body style={mystyle} >
                                    <Card.Title href="https://vaccine.icmr.org.in/">COVID Vaccine Portal</Card.Title>
                                    <Card.Text style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }}>
                                        This card has supporting text below as a natural lead-in to
                                        additional content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>

                            <Card className="mx-3 mb-5 square rounded border-2 border" style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }} >
                                <Card.Img variant="top" src="Images/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg" className="my-8 ronded-top" style={{ height: "200px" }} />
                                <Card.Body style={mystyle}>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }}>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This card has even longer content than the
                                        first to show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>

                            <Card className={`mx-3 mb-5 square rounded border-2 border border-${props.Mode === 'dark' ? "#F8F8FF" : "#132743"}`} style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' }}>
                                <Card.Img variant="top" src="Images/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg" className="my-8" style={{ height: "200px" }} />
                                <Card.Body style={mystyle}>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text >
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This card has even longer content than the
                                        first to show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                
                
                            </Card>

                        </CardGroup> */}
                    </div>
                </div>
            </div>
        </>
    )
}
