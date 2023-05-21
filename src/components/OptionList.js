import React from "react";
import { useState, useEffect } from "react";
import USState from "../components/USState.js";
import getStateAlerts from "../components/getStateAlerts.js";
import Bootstrap from "react-bootstrap";
import Formik from "formik";

///////////////////Component starts here//////////////////
function OptionList(props) { //change ComponentName to the name of the component and rename the file to match
   //declarations-----------------------------------------


  //functional code---------------------------------------
return (
    <>
      <option value={"--"}>--</option>
      {props.stateList.map((state, index) => {
        return (
          <option value={state} key={`option-${index}`}>
            {state}
          </option>
        );
      })}
    </>
  );
//return html components

}
export default OptionList; //change ComponentName to the name of the component and rename the file to match