import React from "react";
import Navigation from "src/components/molecules/Navigation/BottomNav";
import Navbar from "src/components/molecules/Navbar/MainNavbar";

interface Props {}

function HomePage(props: Props) {
  return (
    <>
      <Navbar />
      <p>Content not found 2</p>
      <Navigation />
    </>
  );
}

export default HomePage;
