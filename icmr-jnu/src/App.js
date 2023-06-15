import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer/Footer.js';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

import Navbar from './Components/Navbar/NavScroll';
import TextForm from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import NavBarSym from './Components/Navbar/NavBarSym';

import Contact from './Components/Contact';
import CancerCovid from './Components/CancerCovid';
import StatesInfo from './Components/statePage/StatesInfo';


// #113f67 - Drk blue colour
// #132743 - 2 Drak blue

function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  // const[backColor, setbackColor] = useState("#e3dceb");

  // const backColorMode = () => {
  //   if (backColor === "#e3dceb"){
  //     setbackColor("red");
  //     document.body.style.backgroundColor = '#e3dceb';
  //     showAlert("red Mode Enabled", "danger" ); 
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = '#e3dceb';
  //     showAlert("Light Mode Enabled", "success" );
  //   }

  // }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#132743';
      // showAlert("Dark Mode Enabled", "danger" ); 
      document.title = "ICMR-JNU Analytics Centre - Dark"
      // setInterval(() => {
      //   document.title = "TextUtils - installation"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - installed"
      // }, 2500);
    }
    else {
      setMode('light');
      // document.body.style.backgroundColor = '#e7eaf6';
      // document.body.style.backgroundColor = '#F8F8FF';
      document.body.style.backgroundColor = '#F8F8FF';
      // showAlert("Light Mode Enabled", "success" );
      document.title = "ICMR-JNU Analytics Centre - Light"
    }
  }




  return (
    <>
      <div>
        <Router>
          <NavBarSym title="" abouttext="About" Mode={Mode} toggleMode={toggleMode} />
          <Navbar abouttext="About" Mode={Mode} toggleMode={toggleMode} />
          {/* <Header title = "Text Utils" abouttext = "About" Mode ={Mode} toggleMode = {toggleMode} /> */}

          {/* <Alert alert ={alert} /> */}
          {/* <div className = "my-3 " > */}


          <Routes>

            <Route exact path="/About" element={<About Mode={Mode} />} />
            <Route exact path="/ContactUs" element={< Contact Mode={Mode} toggleMode={toggleMode} />} />
            <Route exact path="/CancerCovid" element={< CancerCovid Mode={Mode} toggleMode={toggleMode} />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/" element={<TextForm Mode={Mode} showAlert={showAlert} />} />


            <Route exact path="/Delhi" element={<StatesInfo stateResidence="Delhi" Mode={Mode} />} />
            <Route exact path="/TELANGANA" element={<StatesInfo stateResidence="TELANGANA" Mode={Mode} />} />
            <Route exact path="/HARYANA" element={<StatesInfo stateResidence="HARYANA" Mode={Mode} />} />
            <Route exact path="/PUNJAB" element={<StatesInfo stateResidence="PUNJAB" Mode={Mode} />} />
            <Route exact path="/KARNATAKA" element={<StatesInfo stateResidence="KARNATAKA" Mode={Mode} />} />
            <Route exact path="/UTTAR_PRADESH" element={<StatesInfo stateResidence="UTTAR PRADESH" Mode={Mode} />} />
            <Route exact path="/KERALA" element={<StatesInfo stateResidence="KERALA" Mode={Mode} />} />
            <Route exact path="/MAHARASHTRA" element={<StatesInfo stateResidence="MAHARASHTRA" Mode={Mode} />} />
            <Route exact path="/GUJARAT" element={<StatesInfo stateResidence="GUJARAT" Mode={Mode} />} />
            <Route exact path="/DAMAN_AND_DIU" element={<StatesInfo stateResidence="DAMAN AND DIU" Mode={Mode} />} />
            <Route exact path="/TAMIL_NADU" element={<StatesInfo stateResidence="TAMIL NADU" Mode={Mode} />} />
            <Route exact path="/JHARKHAND" element={<StatesInfo stateResidence="JHARKHAND" Mode={Mode} />} />
            <Route exact path="/WEST_BENGAL" element={<StatesInfo stateResidence="WEST BENGAL" Mode={Mode} />} />
            <Route exact path="/ASSAM" element={<StatesInfo stateResidence="ASSAM" Mode={Mode} />} />
            <Route exact path="/ANDAMAN_AND_NICOBAR_ISLANDS" element={<StatesInfo stateResidence="ANDAMAN AND NICOBAR ISLANDS" Mode={Mode} />} />
            <Route exact path="/ANDHRA_PRADESH" element={<StatesInfo stateResidence="ANDHRA PRADESH" Mode={Mode} />} />
            <Route exact path="/LAKSHADWEEP" element={<StatesInfo stateResidence="LAKSHADWEEP" Mode={Mode} />} />
            <Route exact path="/PUDUCHERRY" element={<StatesInfo stateResidence="PUDUCHERRY" Mode={Mode} />} />
            <Route exact path="/CHHATTISGARH" element={<StatesInfo stateResidence="CHHATTISGARH" Mode={Mode} />} />
            <Route exact path="/UTTARAKHAND" element={<StatesInfo stateResidence="UTTARAKHAND" Mode={Mode} />} />
            <Route exact path="/GOA" element={<StatesInfo stateResidence="GOA" Mode={Mode} />} />
            <Route exact path="/MADHYA_PRADESH" element={<StatesInfo stateResidence="MADHYA PRADESH" Mode={Mode} />} />
            <Route exact path="/CHANDIGARH" element={<StatesInfo stateResidence="CHANDIGARH" Mode={Mode} />} />
            <Route exact path="/HIMACHAL_PRADESH" element={<StatesInfo stateResidence="HIMACHAL PRADESH" Mode={Mode} />} />
            <Route exact path="/JAMMU_AND_KASHMIR" element={<StatesInfo stateResidence="JAMMU AND KASHMIR" Mode={Mode} />} />
            <Route exact path="/LADAKH" element={<StatesInfo stateResidence="LADAKH" Mode={Mode} />} />
            <Route exact path="/RAJASTHAN" element={<StatesInfo stateResidence="RAJASTHAN" Mode={Mode} />} />
            <Route exact path="/BIHAR" element={<StatesInfo stateResidence="BIHAR" Mode={Mode} />} />
            <Route exact path="/MANIPUR" element={<StatesInfo stateResidence="MANIPUR" Mode={Mode} />} />
            <Route exact path="/ODISHA" element={<StatesInfo stateResidence="ODISHA" Mode={Mode} />} />
            <Route exact path="/SIKKIM" element={<StatesInfo stateResidence="SIKKIM" Mode={Mode} />} />
            <Route exact path="/TRIPURA" element={<StatesInfo stateResidence="TRIPURA" Mode={Mode} />} />
            <Route exact path="/ARUNACHAL_PRADESH" element={<StatesInfo stateResidence="ARUNACHAL PRADESH" Mode={Mode} />} />
            <Route exact path="/MEGHALAYA" element={<StatesInfo stateResidence="MEGHALAYA" Mode={Mode} />} />
            <Route exact path="/MIZORAM" element={<StatesInfo stateResidence="MIZORAM" Mode={Mode} />} />
            <Route exact path="/NAGALAND" element={<StatesInfo stateResidence="NAGALAND" Mode={Mode} />} />
            <Route exact path="/DADRA_AND_NAGAR_HAVELI" element={<StatesInfo stateResidence="DADRA AND NAGAR HAVELI" Mode={Mode} />} />
            

            {/* <Route exact path="/patientdata/Delhi" element={<patientData stateResidence="Delhi" Mode={Mode} />} /> */}






          </Routes>

          {/* </div>  */}


          <Footer Mode={Mode} toggleMode={toggleMode} />
        </Router>
      </div>
    </>
  );
}

export default App;
