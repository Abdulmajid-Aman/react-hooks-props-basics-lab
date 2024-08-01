import React from "react";

function Home(props) {
  let {name, city, color} = props
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
