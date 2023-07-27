import axios from "axios";

async function getStateAlerts(
  topLevelStateList,
  settopLevelStateList,
  isLoading,
  setIsLoading
) {
  //topLevelStateList is [{ stateName: state, theEvents: [] }, {example},{expample}]
  // actual stateNames loaded   empty array to hold sublist of alerts
  // should fetch the alerts then return a new
  // array of objects with the state name and the alerts for that state
  var { stateName, alerts } = topLevelStateList; //copy the topLevelStateList array with states as stateNames and empty altert arrays preloaded

  if (isLoading) {
    // no key needed for this api
    const url = `https://api.weather.gov/alerts/active/area/${stateName}`;

    const result = await axios.get(url).then((response) => {
      for (let i = 0; i < response.data.features.length; i++) {
        let weatherEvent = response.data.features[i];
        alerts.push({
          id: `${stateName}-alertNumber-${i}`,
          area: weatherEvent.properties.areaDesc,
          weatherEvent: weatherEvent.properties.event,
          advisoryInstructions: weatherEvent.properties.instructions,
        }); 
      } 
      let tempStateObject = { stateName, alerts };
      settopLevelStateList(tempStateObject);
      setIsLoading(false);
      
    }); 
  }
}

export default getStateAlerts;
