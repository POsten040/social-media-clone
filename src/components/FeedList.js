import React from "react";
import Post from "./Post";

function FeedList(){
  return (
    <React.Fragment>
      <h1>My Feed</h1>
      {postList.map((post, index) =>
      <Post name={post.name}
      content={post.content}
      date={post.date}
      key={index}/>
      )}
    </React.Fragment>
  );
}

const postList = [
  {
    name: "Spider Man",
    content: "Check out my new web!",
    date: "2/12/12"
  },
  {
    name: "Cool6969",
    content: "Spider Man smells!",
    date: "2/13/12"
  },
  {
    name: "Mod",
    content: "You're all banned!",
    date: "2/14/12"
  }
]

export default FeedList;