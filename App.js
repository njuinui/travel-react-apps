import React from "react";
import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Navbar";
import Destination from "./components/destination/Destination";
import Search from "./components/search/Search";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <Hero/>
      <Destination/>
      <Search />
    </div>
  );
}

export default App;
