import axios from "axios";
import React, { useState, useEffect } from "react";
import {card, Navbar} from "react-bootstrap";

async function getStateAlerts(topLevelStateList, settopLevelStateList, isLoading, setIsLoading) {
  //topLevelStateList is [{ stateName: state, theEvents: [] }, {example},{expample}]
  // actual stateNames loaded   empty array to hold sublist of alerts
  // should fetch the alerts then return a new
  // array of objects with the state name and the alerts for that state
  var {stateName, alerts} = topLevelStateList; //copy the topLevelStateList array with states as stateNames and empty altert arrays preloaded
  var stateAlerts = []; // empty array to hold the alerts for each state, later to be pushed into the allAlerts array


  if(isLoading) { 
  const url = `https://api.weather.gov/alerts/active/area/${stateName}`;

  const result = await axios
    .get(url)
    .then((response) => {
      for(let i = 0; i < response.data.features.length; i++) {
        let weatherEvent = response.data.features[i];
        alerts.push({
          id: `${stateName}-alertNumber-${i}`,
          area: weatherEvent.properties.areaDesc,
          weatherEvent: weatherEvent.properties.event,
          advisoryInstructions: weatherEvent.properties.instructions,
        }); // end of stateAlerts.push
      } // end of for loop
      let tempStateObject = {stateName, alerts};
      settopLevelStateList(tempStateObject);
      setIsLoading(false);
      console.log("getStateAlerts / after setindividualStateAlerts", topLevelStateList);
    }) // end of axios.get.then
  }
  
}


export default getStateAlerts;
