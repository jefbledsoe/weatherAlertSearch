import React, { useEffect } from "react";
import AlertListItem from "./AlertListItem";

const USState = (props) => {
  // use AlertLists to render the alerts
  // for each state and return the list of alerts for each state
  console.log("USState " + props.state.stateName);
  let isEmpty = false;
  let notEmpty = true;
  if (props.state.alerts.length === 0) {
    isEmpty = true;
    notEmpty = false;
  }
  useEffect(() => {}, [props.isLoading, props.state]);

  return (
    //needs an outter
    <div
      id="individual-state-alerts"
      key="individual-state-alerts"
      className="card"
    >{/*section for when no alerts are reported for the given state */}
      {isEmpty && (<h3 className="card-header bg-secondary">{`Active Alerts in ${props.state.stateName}`}</h3>)}
        {isEmpty && (<li className="list-group-item"> No alerts for this state</li>)}
      
        {/*section for when there are alerts for the given state*/}
      {notEmpty && (
        <h3 className="card-header bg-danger">{`Active Alerts in ${props.state.stateName}`}</h3>
      )}
      {/* Loading message*/}
      <ul className="list-group list-group-flush">
        
         {/* Loop through states to generate event list*/}
        {props.state.alerts.map((alert, index) => {
          return (
            <AlertListItem
              key={`${props.state.stateName}-${index}`}
              alert={alert}
              state={props.state}
              isLoading={props.isLoading}
            ></AlertListItem>
          );
        })}
      </ul>
    </div>
  );
};
//};

//<div className="individual-state"></div>
export default USState;

// {props.alerts.length === 0 && <div>No alerts for this state</div>}
