import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

function Post(props){
  return (
    <>
      <Container>
        <h4 id="post-name">{props.name}</h4>
          <div class="inner-container">
            <p id="post-content">{props.content}</p>
            <p id="post-date">{props.date}</p>
          </div>
          <hr/>
      </Container>
    </>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.object
}

export default Post;