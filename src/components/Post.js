import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <>
      <div class="container">
        <h4>{props.name}</h4>
          <div class="inner-container">
            <p>{props.content}</p>
            <p>{props.date}</p>
          </div>
          <hr/>
      </div>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.object
}

export default Post;