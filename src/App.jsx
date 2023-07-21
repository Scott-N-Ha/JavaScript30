import Exercises from "./components/Exercises";

import "./App.css";

function App() {

  return (
    <>
      <h1>Scott's JavaScript 30 Day Challenge</h1>
      <p>
        Hi! Thanks for stopping by. This is my repo for Wes Bos' JavaScript 30
        Challenge, where we write 30 projects in 30 days. I started this project
        series on April 1st, 2020.
        <br />
        As my projects get completed, I will add them here and you can see my
        progress as I go along.
      </p>
      <Exercises />
      <footer>
        Check me out on these other sites!&nbsp;
        <a
          href="https://github.com/scott-N-Ha/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        &nbsp;
        <a
          href="https://www.linkedin.com/in/hascottn"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        &nbsp;
        <a
          href="https://angel.co/u/scott-ha-1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-angellist"></i>
        </a>
        &nbsp;
        <a href="mailto:ha_scott@yahoo.com" target="_blank" rel="noreferrer">
          <i className="fas fa-envelope-square"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
