import React from "react";
//import heroImage from "";

const headerStyle = {
  // backgroundImage: `url(${heroImage})`,
  maxWidth: "100vw",
  height: "10vw",

  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>(React) Google Books Search</h1>
      <p>Search for and Save Books of Interest</p>
    </header>
  );
}

export default Header;
