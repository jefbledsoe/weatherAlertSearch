import React from "react";

function OptionList(props) { 
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
}
export default OptionList; 