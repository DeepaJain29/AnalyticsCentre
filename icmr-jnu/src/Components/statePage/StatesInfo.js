import React from "react";
import StateCard from "./StateCard";
import StateChart from "./StateChart";



const StatesInfo = (props) => {

  return (
    <>
      <div className="" style={{
        backgroundColor: props.Mode === 'dark' ? '#132743' : 'white', padding: "2%",
        paddingBottom: "2%",
      }}>
        <div style={{
          backgroundColor: "#EDF2F8", boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.1) inset",
          borderRadius: "10px"
        }}>
          <StateCard stateResidence={props.stateResidence} Mode={props.Mode} />
          <div className="py-0">
            <StateChart stateResidence={props.stateResidence} Mode={props.Mode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatesInfo;


