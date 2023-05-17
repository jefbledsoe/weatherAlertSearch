import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";
import axios, { all } from "axios";
import { useState, useEffect } from "react";
//import Showalerts from "...src/components/stateCard";

function App() {
  const [alerts, setAlerts] = useState({});
  const [states, setStates] = useState([
    "AL",
    "AK",
    "AZ",
    "AR",
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
    "WI",
    "WY",
  ]);
  const [stateAlerts, setStateAlerts] = useState([]);

  // TODO: add a const called formik assigned to useFormik()
  const getAlerts = async () => {
    var allStateAlerts = [];

    for (let i = 0; i < states.length; i++) {
      const url = `https://api.weather.gov/alerts/active/area/${states[i]}`;
      const result = await axios.get(url);
      // console.log(result.data);
      //console.log("before push");
      allStateAlerts.push({
        StateName: states[i],
        features: result.data.features,
      });
    }
    //console.log("after for loop and before setallstatealerts");
    setAlerts(allStateAlerts);
    //console.log("allStateAlerts : ", allStateAlerts);
  };
  useEffect(() => {
    getAlerts();
  }, []);

  function Showalerts(props) {
    console.log("in showalerts");
    console.log("props is :", props);
    //cant get props.map to work.....
    // return (
    //   <div>
    //     {props.map((usState) => {
    //       return(
    //       <div>{usState}</div>
    //       )
    //     })}
    //   </div>
    // );
  }

  // if features array len is 0, then no alerts
  // features[array index].properties.areaDesc gives the area details within the state
  // features[array index].properties.event gives the weather event type
  // features[array index].properties.instructions gives adivsory instructions

  return (
    <div>
      <form>
        <button type="text" name="emailField" placeholder="Email">
          Hello
        </button>
      </form>
      <Showalerts AlertsObjArray={alerts} />
    </div>
  );
}

export default App;
