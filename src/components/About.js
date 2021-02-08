import React from "react";
import Container from "react-bootstrap/Container";
import {userInfo} from "./Profile";

function About(){
  return (
    <React.Fragment>
      <Container>
        <h4>About</h4>
        <p>{userInfo.about}</p>
      </Container>
    </React.Fragment>
  );
}

export default About;