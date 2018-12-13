import React from 'react';


//You have this component ApprovalCard, which you output to the screen from index.js.To do so, you receive props.children and ui buttons from ui-semantic

const ApprovalCard = (props) => {
  console.log(props.children);
  return (
    <div className = 'ui card'>
      <div className = 'content'>{props.children}</div>
      {/* only does one though ^ */}
      <div className = 'extra content'>
        <div className = 'ui two buttons'>
          <div className = 'ui green button'>Approve</div>
          <div className = 'ui red button'>Reject</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard;
