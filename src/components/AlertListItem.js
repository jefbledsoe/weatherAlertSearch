import axios from "axios";
import React, { useState, useEffect } from "react";
import Bootstrap from "react-bootstrap"

const AlertListItem = (props) => {
  // should call getStateAlerts, then return the list so alerts
  //specific to each state can be rendered, also may need a useEffect to render the alerts and account
  // for the async delay
  
  //console.log("--------Entering AlertListItem ----------");
  console.log("USState " + props.state.stateName);
 
    useEffect(() => {
    }, [props.isLoading]);
  

  
    //console.log(" AlertListItem / props.alerts: ", props.alert);
    
    return (
      <li className="list-group-item text-start" > 
        <div><div className="card-subtitle fw-bold">{"Area(s) Affected : "}</div>{props.alert.area}</div>
        <div><div className="card-subtitle fw-bold">{"Weather Alert : "}</div>{props.alert.weatherEvent}</div>
      
      </li>
    );
  }

export default AlertListItem;


