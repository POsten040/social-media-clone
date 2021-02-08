import React from "react";
import User from "./User";
import Container from "react-bootstrap/Container";

export const userInfo = [
  {
    name: 'Theodore Roosevelt',
    location: 'New York',
    birthday: '10/27/1858',
    about: 'This teddy has Teeth. Roosevelt first visited the Dakota Territory in 1883 to hunt bison. Exhilarated by the cowboy life, and with the cattle business booming in the territory, Roosevelt invested $14,000 in hopes of becoming a prosperous cattle rancher. For the next several years, he shuttled between his home in New York and his ranch in Dakota.'
  }
]

function Profile(){
  return (
    <>
      <Container>
        {userInfo.map((user, index) =>
        <User name={user.name}
        location={user.location}
        birthday={user.birthday}
        key={index}/>
        )}
      </Container>
    </>
  );
}

export default Profile;