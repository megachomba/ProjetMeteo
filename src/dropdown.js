import React from 'react';
import { useState } from 'react';
import "./dropdown.css"
import useVisible from "./useVisible"
function DropDown(props) {
  //const [isVisible, setIsVisible] = useState(false);
  const { ref, isVisible, setIsVisible } = useVisible(false);
    const items=[
      {
        label: "PARIS",
        value: "PARIS"
      },
      { label: "LONDON", value: "LONDON" },
      { label: "BANGKOK", value: "BANGKOK" }
    ];
    /*
    return (
      <div className= "dropdown">
        <select 
        className="dropdownselect"
        onChange={props.onChange}>
          {items.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>*/
  
    const elementHandler = (event) => {
      console.log("my event element", event)
      event.stopPropagation();
      props.onChange(event);
      setIsVisible(false);
    }
    return(
      <div
      ref={ref}
      className= "dropdown"
      style= {isVisible ? {backgroundColor : "white", color: "#5074ae"} : {} }
      onClick={e=> isVisible ? setIsVisible(false) : setIsVisible(true) }>
        <div className={"selectedItem"}>
            {props.value}
            <div className="dropdownarrow">
              {">"}
            </div>
          </div>
        {
         !isVisible ? 
          ""
          :
          <div className="dropdowncontent">
            <div className="hrdiv">
              <hr/>
            </div>
            {items.map(item => (
              <div 
                className="dropdownItem"
                key={item.value}
                value={item.value}
                style= {isVisible ? { color: "#e0e0e0"} : {} }
                //onClick={props.OnChange}
                onClick={e => elementHandler(e)}
              >
                {item.label}
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
  export default DropDown;