import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';




const StateCard = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.stateResidence) {
      fetchData();
    }
  }, [props.stateResidence]);

  // http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/Delhi
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:4200/get/MedicalCondition/All/Malignancy/Count/State/${props.stateResidence}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
      {/* <div style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743', borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>
      <h2>State Residence: {props.stateResidence}</h2>
      
      
      {data && (
        <div style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743' , borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>
          <h2 >Data</h2>
          <pre style = {{backgroundColor:props.Mode==='dark'?'#24527a':'#c86b85', color:props.Mode==='dark'?'#e7eaf6':'#132743' , borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div> */}
      {/* Middle bar */}
      <div className='container py-2' >
        <Card className="mx-2 border-3"
          style={{
            borderColor: props.Mode === 'dark' ? '#5b98e3' : '#5b98e3',
            textAlign: "center",
            fontFamily: "URW Chancery L, cursive"
          }}>
          <Card.Body >
            <h4>State Residence: {props.stateResidence}</h4>
            {isLoading && <p>Loading...</p>}
            {data && !isLoading && data.length > 0 ? (
                <h5>Count: {data[0].count}</h5>
            ) : (
              <p>No data available</p>
            )}
          </Card.Body>

        </Card>
      </div>



    </>

  );
};

export default StateCard;


// `SELECT COUNT(*) AS count, state_residence FROM project1.patientdata WHERE (underlying_medical_condition LIKE '%Malignancy%' OR underlying_medical_condition LIKE '%Cancer%' OR underlying_medical_condition LIKE '%chemo%') AND state_residence = ${props.state_residence};`
