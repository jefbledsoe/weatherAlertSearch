import React from "react";
import { useState, useEffect } from "react";
import USState from "../components/USState.js";
import getStateAlerts from "../components/getStateAlerts.js";
import Bootstrap from "react-bootstrap";
import Formik from "formik";
import OptionList from "../components/OptionList.js";


///////////////////Component starts here//////////////////
function WeatherAlerts() {
  //declarations-----------------------------------------
  const stateStarterObject = {
    stateName: "--",
    alerts: [],
  };
  const [states, setStates] = useState([
    "AL",
    "AK",
    "AZ",
    "AR",
    "WI",
    "WY",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
  ]);
  const [topLevelStateList, settopLevelStateList] =
    useState(stateStarterObject);
  const [isLoading, setIsLoading] = useState(true);
  const [selection, setSelection] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  //functional code---------------------------------------

  useEffect(() => {
    //force a re-render after the first render and after isLoading changes
    console.log(
      `useEffect / selection is: ${selection} , and  topLevelStateList.stateName is : ${topLevelStateList.stateName} `
    );
  }, [selection, topLevelStateList]);

  function handle(e) {
    // check if the selection is valid
    if (selection === "--") {
      alert(
        `selection is invalid, selection is: ${selection} , and  topLevelStateList.stateName is : ${topLevelStateList.stateName} `
      ); //need to add a screen alert

      e.preventDefault();
      return;
    } else {
      topLevelStateList.stateName = selection;
      topLevelStateList.alerts = [];
      settopLevelStateList(topLevelStateList);
      console.log("handle / set - topLevelStateList", topLevelStateList);
      setIsLoading(true);
      getStateAlerts(
        topLevelStateList,
        settopLevelStateList,
        isLoading,
        setIsLoading
      );
      
      setIsSelected(true);
      e.preventDefault();
    }
  }

  function updateSelection(e) {
    //update the state selection from the dropdown, no returns only sets state
    setSelection(e.target.value);
    e.preventDefault();
  }

  //Components Return----------------------------------------
  return (
    <div className="container text-center" key="page-container-weatherAlerts">
      <h1>Weather Alerts</h1>
      <form className="container text-start">
        <label>Select a state :</label>
        <select onChange={(e) => updateSelection(e)}>
          <OptionList stateList={states} />
        </select>
        <button type="submit" value={selection} onClick={handle}>
          Submit
        </button>
      </form>
      {isSelected && (
        <div id="stateCard">     
          <USState
            key={selection}
            isSelected={isSelected}
            state={topLevelStateList}
            isLoading={isLoading}
          ></USState>
        </div>
      )}
    </div>
  );
}
export default WeatherAlerts;
