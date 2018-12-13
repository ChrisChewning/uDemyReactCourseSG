import React from 'react';

//semantic-ui.com/elements/loader.html

const Spinner = props => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>
        {props.message}
        {/* Instead of defaultProps you could put {props.message || 'Loading...'} */}
      </div>
    </div>
  )
}

//If we don't pass in a message in the Spinner props from index.js this will show up.
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;
