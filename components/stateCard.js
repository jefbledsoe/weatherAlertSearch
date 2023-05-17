import axios from "axios";
import React, { useState,useEffect } from "react";



function Showalerts(alertsObjArray){
    console.log("in showalerts");
    console.log("alertsObjArray is :", alertsObjArray);
    alertsObjArray.map((alertObj) => {
      console.log("state name is :", alertObj.StateName);
    });
    
  }

  export default Showalerts;