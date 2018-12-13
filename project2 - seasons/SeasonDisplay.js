import React from 'react';
import './SeasonDisplay.css';

//CONFIG OBJECT
const SeasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s cold',
    iconName: 'snowflake'
  }
}


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth()); //js built in fn
  const {text, iconName} = SeasonConfig[season]; //returns {text, iconName}

  console.log(season)


//THIS GOT RECONFIGURED TO THE ABOVE CODE.
  // const text =
  // season === 'winter' ? 'Burr, it\'s cold' : 'It\'s really hot outside!'
  // const icon = season === 'winter' ? 'snowflake' : 'sun';

//semantic-ui.com/elements/icon.html#/icon  (/definition is how to use.)

  return (  //for single-line returns you don't need ().
//NOTE: template strings to get the value of whatever icon is and throw it into a string.
//Breakdown: these are all classNames. massive is from the semantic-ui docs. could've used tiny, etc.
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1 color='blue'>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
);
};

export default SeasonDisplay;
