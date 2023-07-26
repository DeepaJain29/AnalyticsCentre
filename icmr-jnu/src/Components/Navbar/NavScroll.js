import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';



function NavScroll(props) {
  let mystyle = {
    color : props.Mode === 'dark' ? "gray" : "black",
    backgroundColor: props.Mode === 'dark'?'black':'white',
    // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
    // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
    // border: " 1px solid " ,
    // borderRadius: " 2px solid",
  }
  const [dropdownActive, setDropdownActive] = useState(false);


  return (
    <>
      <div style={{
        disply: 'flex',
        marginTop: "0px",
        marginLeft: "px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        fontFamily: "Calibri",
          
        color: props.Mode === 'dark' ? "#F8F8FF" : "black"
      }}
        className="sticky-top" >
        {/* <nav className={`navbar navbar-expand sticky navbar-${props.Mode} bg-${props.Mode} `}>  */}
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} `}>z
          {/* <nav className={`navbar navbar-expand navbar-${props.Mode} bg-${props.Mode} `}> */}
          <div className="container-fluid">
            {/* <nav ClassName= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#defaultNavbar1" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="defaultNavbar1">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">{props.abouttext}</Link>
                </li>

                {/* Andaman and Nicobar Islands, Andhra Pradesh, Karnataka, Kerala, Lakshadweep, Puducherry, Tamil Nadu, Telangana[8 */}
                <MDBNavbarItem >
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button' >
                      South
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>
                      <MDBDropdownItem >
                        <Link className="nav-link regular" to="/ANDAMAN_AND_NICOBAR_ISLANDS">Andaman and Nicobar Islands</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular" to="/ANDHRA_PRADESH">Andhra Pradesh</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/KARNATAKA">Karnataka</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/KERALA">Kerala</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/LAKSHADWEEP">Lakshadweep</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/PUDUCHERRY">Puducherry</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/TAMIL_NADU">Tamil Nadu</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/TELANGANA">Telangana</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>


                {/* Chhattisgarh, Goa, Madhya Pradesh, Maharashtra */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button'>
                      South Central
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/CHHATTISGARH">Chhattisgarh</Link></MDBDropdownItem>

                      <MDBDropdownItem ><Link className="nav-link regular " to="/GOA">Goa</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/MADHYA_PRADESH">Madhya Pradesh</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/MAHARASHTRA">Maharashtra</Link></MDBDropdownItem>





                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                {/* Chandigarh, Haryana, Himachal Pradesh, Jammu and Kashmir, Ladakh, Punjab, Rajasthan, Uttarakhand[ */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button'>
                      North
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>

                      <MDBDropdownItem ><Link className="nav-link regular " to="/CHANDIGARH">Chandigarh</Link></MDBDropdownItem>

                      <MDBDropdownItem ><Link className="nav-link" to="/HARYANA">Haryana</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/HIMACHAL_PRADESH">Himachal Pradesh</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/JAMMU_AND_KASHMIR">Jammu And Kashmir</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/LADAKH">Ladakh</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/PUNJAB">Punjab</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/RAJASTHAN">Rajasthan</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/UTTARAKHAND">Uttarakhand</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                {/* Bihar, Delhi,Uttar Pradesh */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button'>
                      North Central
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>

                      <MDBDropdownItem ><Link className="nav-link regular " to="/BIHAR">Bihar</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/Delhi">Delhi</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/UTTAR_PRADESH">Uttar Pradesh</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                {/* Assam, Jharkhand, Manipur, Odisha, Sikkim, Tripura, West Bengal */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button'>
                      East
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>
                      <MDBDropdownItem ><Link className="nav-link" to="/ASSAM">Assam</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/JHARKHAND">Jharkhand</Link></MDBDropdownItem>

                      <MDBDropdownItem ><Link className="nav-link regular " to="/MANIPUR">Manipur</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/ODISHA">Odisha</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/SIKKIM">Sikkim</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/TRIPURA">Tripura</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/WEST_BENGAL">West Bengal</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                {/* Arunachal Pradesh, Meghalaya, Mizoram, Nagaland */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10 custom-toggle' style={{ textDecoration: 'none' }} role='button'
                    onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
                    onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}>
                      North East
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>

                      <MDBDropdownItem ><Link className="nav-link regular " to="/ARUNACHAL_PRADESH">Arunachal Pradesh</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/MEGHALAYA">Meghalaya</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/MIZORAM">Mizoram</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/NAGALAND">Nagaland</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>


                {/* Dadra and Nagar Haveli and Daman and Diu, Gujarat */}
                <MDBNavbarItem>
                  <MDBDropdown >
                    <MDBDropdownToggle tag='a' className='nav-link h-10' role='button'>
                      West
                    </MDBDropdownToggle>
                    <MDBDropdownMenu responsive="start" style={mystyle}>
                      <MDBDropdownItem ><Link className="nav-link regular " to="/DADRA_AND_NAGAR_HAVELI">Dadra and Nagar Haveli</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/GUJARAT">Gujarat</Link></MDBDropdownItem>
                      <MDBDropdownItem ><Link className="nav-link" to="/DAMAN_AND_DIU">Daman and Diu</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>









                {/* <li className="nav-item">
                <Link  className="nav-link" to="/">Services</Link >
              </li> */}
                <li className="nav-item -offset-2 -offset-3-hover -underline -underline-opacity-0 -underline-opacity-75-hover">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link >
                </li>

                {/* <li className="nav-item dropdown">
                <Link  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                colored background
                </Link >
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link  className="dropdown-item" onClick={props.handleRed} to="/">Red</Link >
                  <Link  className="dropdown-item" onClick={props.handleGreen} to="/">green</Link >
                  <Link  className="dropdown-item" onClick={props.handleYellow} to="/">yellow</Link >

                  <div className="dropdown-divider"></div>
                  <Link  className="dropdown-item" onClick={props.handleBlue} to="/">blue</Link >
                </div>
              </li>

              <div className="dropdown show">
               
                  
                <button className="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  colored background
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link  className="dropdown-item" onClick={props.handleRed} to="/">Red</Link >
                  <Link  className="dropdown-item" onClick={props.handleGreen} to="/">green</Link >
                  <Link  className="dropdown-item" onClick={props.handleYellow} to="/">yellow</Link >
                  <div className="dropdown-divider"></div>
                  <Link  className="dropdown-item" onClick={props.handleBlue} to="/">blue</Link >

                </div>
                
              </div> */}


              </ul>
            </div>
            {/* <div className={`form-check form-switch mx-1 text-${props.Mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div> */}
            <div className="d-flex">
              <FontAwesomeIcon className="my-2 mx-2" onClick={props.toggleMode} icon={faMoon} beat size="lg" style={{ color: "#c86b85", cursor: 'pointer' }} />
              {/* <div className = " rounded mx-2 my-2" onClick = {props.toggleMode} style={{height:"20px", width:"20px", backgroundColor:'#ffb5b5'}}></div> */}
            </div>
            {/* <form className="form-inline d-flex" role="search">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
      </div>
    </>
  );
}




Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'ICMR-JNU Analytics Centre',
  abouttext: 'About us'
}

export default NavScroll;
