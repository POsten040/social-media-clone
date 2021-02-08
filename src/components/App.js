import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import FeedList from "./FeedList";
import PeopleRecommendations from "./PeopleRecommendations";
import {Jumbotron, Row, Col} from "react-bootstrap";

function App() {
  return (
    <>
      <Jumbotron>
        <Header />
      </Jumbotron>
      <Row>
        <Col>
          <Profile />
          <About />
        </Col>
        <Col>
          <FeedList />
        </Col>
        <Col>
          <PeopleRecommendations />
        </Col>
      </Row>
    </>
  );
}

export default App;
