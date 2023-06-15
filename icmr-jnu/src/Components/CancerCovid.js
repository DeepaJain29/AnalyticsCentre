import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import Covid19 from "./map/Covid19";
import BarChart from './charts/chart';



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
                    {/* <Carousel activeIndex={index} onSelect={handleSelect} style={{minWidth:"100%"}}>
        <Carousel.Item >
            <img
            className="d-block w-100"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1_rss.png"
            alt="ICMR Img" width="100%" height="800"
            style={{position: 'relative'}}
            />
            <div className='tableauPlaceholder' id='viz1683488374872' style='position: relative'><noscript><a href='#'><img alt='Sheet 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1_rss.png' style='border: none' /></a></noscript><object className='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;Book1IndiaMap&#47;Sheet1?:language=en-US&amp;:embed=true&amp;publish=yes' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1683488374872');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
            <div className="carousel-item active">
            <div className='tableauPlaceholder' id='viz1683489731304' style={{position: 'relative'}}><noscript><a href='/'><img alt='Sheet 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRSPS2Y4B&#47;1_rss.png' style={{border: 'none'}} /></a></noscript><object className='tableauViz'  style={{display:'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;CRSPS2Y4B' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRSPS2Y4B&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1683489731304');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
                <div className='tableauPlaceholder' id='viz1683488374872' style={{position: 'relative'}}><noscript><a href='/'><img alt='Sheet 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1_rss.png' style={{border: 'none'}} /></a></noscript><object className='tableauViz'  style={{display:'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;Book1IndiaMap&#47;Sheet1?:language=en-US&amp;:embed=true&amp;publish=yes' /><param name='toolbar' value='indiamap_16760301278320&#47;Sheet2' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;in&#47;indiamap_16760301278320&#47;Sheet2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1676048486539');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.25)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
        </Carousel.Item>
        </Carousel> */}



                    <Carousel activeIndex={index} onSelect={handleSelect} style={{ minWidth: "100%" }}>
                        <Carousel.Item >
                            {/* <img
            className="d-block w-100"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1_rss.png"
            alt="ICMR Img" width="100%" height="800"
            style={{position: 'relative'}}
            /> */}
                            {/* <div className='tableauPlaceholder' id='viz1683488374872' style='position: relative'><noscript><a href='#'><img alt='Sheet 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1_rss.png' style='border: none' /></a></noscript><object className='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;Book1IndiaMap&#47;Sheet1?:language=en-US&amp;:embed=true&amp;publish=yes' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1IndiaMap&#47;Sheet1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1683488374872');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> */}
                            {/* <div className="carousel-item active">
            <div className='tableauPlaceholder' id='viz1683489731304' style={{position: 'relative'}}><noscript><a href='/'><img alt='Sheet 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRSPS2Y4B&#47;1_rss.png' style={{border: 'none'}} /></a></noscript><object className='tableauViz'  style={{display:'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;CRSPS2Y4B' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRSPS2Y4B&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1683489731304');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> 
             <div className="carousel-caption d-none d-md-block">
                </div>
            </div> */}




                            <Covid19 />
                        </Carousel.Item>
                    </Carousel>







                    {/* Middle bar */}
                    <div className='container py-3 square rounded-9 border-2' 
                    style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}>
                        <Card className=" mx-2 border-2 " 
                        style={{ borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF', 
                        textAlign: "center", }}>
                            <Card.Body 
                            style={{ 
                                backgroundColor: props.Mode === 'dark' ? '#24527a' : '#c86b85', 
                                color: props.Mode === 'dark' ? '#F8F8FF' : '#F9F0F2' , 
                                fontFamily:"URW Chancery L, cursive"
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
                                <div className="col-md-3 px-3 my-3" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>;
                                    

                                        <Card style={{ width: '18rem', borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743' , fontFamily:"URW Chancery L, cursive", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='rounded border-3'>
                                            <Card.Body style={mystyle }>
                                                <Card.Title className="text-center" >COVID Cases with Malignancy</Card.Title>
                                                <Card.Subtitle className="mb-2 text-body-secondary text-center danger text-danger">{conditionCount}</Card.Subtitle>

                                            </Card.Body>
                                        </Card>
                                    
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
