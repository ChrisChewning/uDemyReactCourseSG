import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail.js'; //this is
import ApprovalCard from './ApprovalCard.js';


//CommentDetail is setting up your object with key value pairs. You'll export these at the bottom to CommentDetail.js.

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        {/* ^this is the 'content' and 2 buttons */}
        {/* /* ^ you are passing CommentDetail as a prop down into ApprovalCard You put props in ApprovalCard b.c of this. */ }
        <CommentDetail //props.children. The child property of App..Card object.
          author="Sam"
          timeAgo='today at 4:45PM'
          blogText='Nice Blog Post' picture={faker.image.avatar()} />
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo='today at 2:21PM'
          blogText='Thanks. I loved reading it!'
          picture={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo='today at 1:30PM'
          blogText='Could you provide a link to more readings, please?!' picture={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))
// export default App;
