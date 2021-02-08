import React from "react";
import Home from "./Home";
import Notification from "./Notification";
import Message from "./Message";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";
import {Row, Col} from "react-bootstrap";

function Header(){
  return (
    <>
      <h1>Friendster</h1>
      <Row>
        <Col>
          <Home />
          <br/>
          <Notification />
          <br />
          <Message />
        </Col>
        <Col>
        </Col>
        <Col>
          <SearchBar />
        </Col>
        <Col>
          <Tweet />
        </Col>
      </Row>
      <br/>
    </>
  );
}

export default Header;