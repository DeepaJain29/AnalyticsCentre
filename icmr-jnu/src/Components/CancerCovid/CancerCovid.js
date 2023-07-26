import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Covid19 from "../map/Covid19";
import BarChart from './CovidMalignancy/chart';
import CovLineChart from './Covid/covid_pos/CovlineChart';
import CovPieChart from './Covid/covid_pos/CovAgePie';
import MalPieChart from './Malignancy/MalAgePie';
import MalLineChart from './Malignancy/MalLineChart';

export default function CancerCovid(props) {

    // to fetch the data of total malignant count
    const totalCount = "http://localhost:4200/get/MedicalCondition/All/Malignancy/Count";
    const totalCountCovPos = "http://localhost:4200/get/Count/Cov/Pos";

    const [conditionCount, setConditionCount] = useState(null);
    const [countCovPos, setCountCovPos] = useState(null)

    useEffect(() => {
        const fetchData = async (url, setter) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setter(data[0].count);
                    console.log('Data fetched successfully:', url);
                    console.log("chart data is here", data);
                } else {
                    console.log('Failed to fetch data:', response.error);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(totalCount, setConditionCount);
        fetchData(totalCountCovPos, setCountCovPos);
    }, [totalCount, totalCountCovPos]);


    // Use this on footer and header = #fb7777
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let mystyle = {
        color: props.Mode === 'dark' ? "#F8F8FF" : "white",
        backgroundColor: props.Mode === 'dark' ? '#132743' : '#5b98e3',
        borderColor: props.Mode === 'dark' ? '#F8F8FF' : 'white',
        fontFamily: "Calibri",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        textAlign: "center"
        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }

    return (
        <>
            <div className="container-fluid px-4" style={{
                backgroundColor: props.Mode === 'dark' ? '#132743' : 'white', paddingTop: "2%",
                paddingBottom: "2%",
            }}>
                <div style={{
                    backgroundColor: "#EDF2F8", boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.1) inset",
                    borderRadius: "10px"
                }}>

                    {/* Middle bar */}
                    <div className='container py-3 square border-2'
                    // style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}
                    >
                        <Card className=" mx-2 border-2 "
                            style={{
                                backgroundColor: props.Mode === 'dark' ? '#24527a' : '#5b98e3',
                                color: props.Mode === 'dark' ? 'white' : '#F9F0F2',
                                fontFamily: "Calibri",
                                borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF',
                                textAlign: "center",
                            }}>
                            <h4>Cancer Covid Project</h4>
                        </Card>
                    </div>


                    <div class="row">
                        <div class="col-12 col-md-5"><Carousel activeIndex={index} onSelect={handleSelect} style={{ minWidth: "100%" }}>
                            <Carousel.Item >
                                <Covid19 />
                            </Carousel.Item>
                        </Carousel></div>

                        <div class="col-12 col-md-7" >
                            {/* <div className="row">
                            <div className="col-md py-1" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Card style={mystyle} className='rounded mx-2 border-2'>

                                    <Card.Title className="text-center" >COVID Cases with Malignancy: {conditionCount}</Card.Title>

                                </Card>
                            </div>
                        </div> */}

                            <div className="container my-1">
                                <div className='container py-2 square rounded-9 border-2'
                                // style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}
                                >
                                    <Card style={mystyle}
                                        className='rounded mx-2 border-2'>
                                        <Card.Title className="text-center">COVID Cases with Malignancy: {conditionCount}</Card.Title>
                                    </Card>
                                </div>
                            </div>

                            <div className='row' >

                                <div className="col-md">
                                    <div className='px-3'>
                                        <BarChart />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="container-fluid py-2" >
                        {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                        <div class="row"
                        // style= {{backgroundColor:"white"}}
                        >


                            <div className='col-6'>

                                <div className="container my-2">

                                    <div className='container py-2 square rounded-9 border-2'
                                    >
                                        <Card style={mystyle}
                                            className='rounded mx-2 border-2'>
                                            <Card.Title className="text-center" >COVID Positive Cases: {countCovPos}</Card.Title>
                                        </Card>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div class="col pb-2"><CovLineChart /></div>
                                    <div class="col pb-2"><CovPieChart /></div>
                                </div>
                            </div>

                            <div className='col-6'>

                                <div className="container my-2">

                                    <div className='container py-2 square rounded-9 border-2'
                                    >
                                        <Card style={mystyle}
                                            className='rounded mx-2 border-2'>

                                            <Card.Title className="text-center" >Malignant Cases: {conditionCount}</Card.Title>

                                        </Card>
                                    </div>

                                </div>


                                <div className='row'>
                                    <div class="col-md pb-2"><MalLineChart /></div>
                                    <div class="col-md pb-2"><MalPieChart /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

