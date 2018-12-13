import React from 'react';
// import faker from 'faker'; don't need to import it b.c it's being imported from props.

//this is the actual card's content. This is meant to be dynamic, hence the props.
 
const CommentDetail = (props) => {
  return(
    <div className="comment">
      <a href="/" className="avatar">
      <img alt="avatar"
      src={props.picture} />
      {/* ^ comes from faker's website. scroll down. image bullet point, then avatar. Call it as a function. */}
      </a>
      <div className="content">
      <a href="/" className="author">
      {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.timeAgo} </span>
    </div>
    <div className="text">{props.blogText}</div>
        </div>
      </div>
  )
}

export default CommentDetail;
