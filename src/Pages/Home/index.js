import React from "react";
import "./home.css";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <main className="landing-page container">
      <div className="landing-page__content">
        <h1>SEASON OF LOVE, </h1>
        <p>
          Ever heard of secret santa? Well, we do the same thing but for vals...
          Ever heard of secret santa? Well, we do the same thing but for vals...
        </p>
        <SearchBar />
      </div>
    </main>
  );
};

export default Home;
