import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const tabs = [
  {
    key: "home",
    content: "This is the home page.",
  },
  {
    key: "about",
    content: "This is the about page.",
  },
  {
    key: "contact",
    content: "This is the contact page.",
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const selectedContent = tabs.find((tab) => tab.key === selectedTab).content;

  function handleClick(tab) {
    setSelectedTab(tab);
  }

  return (
    <div className="App">
      <Header />
      <section className="container">
        <Navigation handleClick={handleClick} />
        <Main content={selectedContent} />
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to my React App!</h1>
    </header>
  );
}

function Navigation(props) {
  return (
    <ul className="navigation">
      <li className="list-item">
        <button onClick={() => props.handleClick("home")}>Home</button>
      </li>
      <li className="list-item">
        <button onClick={() => props.handleClick("about")}>About</button>
      </li>
      <li className="list-item">
        <button onClick={() => props.handleClick("contact")}>Contact</button>
      </li>
    </ul>
  );
}

function Main(props) {
  return (
    <div className="main">
      <p>{props.content}</p>
    </div>
  );
}

export default App;
