import React from 'react';
import {ReactComponent as Pluie} from './assets/Pluie.svg';
import {ReactComponent as Fleche} from './assets/Fleche.svg';

import "./meteoComp.css"

function MeteoComp(props) {
    return(
      <div className="meteoComp">
          <div className="firstLine">
            <div className="meteoCompIcon">
                {props.icon=="pluie" ? <Pluie /> : <Fleche />}
            </div>
            {props.value ? `${props.value} ${props.unit}` : `-- ${props.unit}`}
          </div>
        <div className="meteoCompText">
            {props.text}
        </div>
      </div>
    );
  }
  export default MeteoComp;