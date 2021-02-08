import React from "react";
import Home from "./Home";
import Notification from "./Notification";
import Message from "./Message";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

function Header(){
  return (
    <>
      <h1>Friendster</h1>
      <div class="topnav">
        <a class="active" href="Ref-to-Home">Home</a>
        <br/>
        <a href="Ref-to-Notification">Notifications</a>
        <br/>
        <a href="Ref-to-Message">Messages</a>
      </div>
      {/* <Home />
      <Notification />
      <Message /> */}
      <SearchBar />
      <Tweet />
    </>
  );
}

export default Header;