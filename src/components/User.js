import React from "react";
import PropTypes from "prop-types";

function User(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.location} - {props.birthday}</p>
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  birthday: PropTypes.object,
  about: PropTypes.string
};

export default User;