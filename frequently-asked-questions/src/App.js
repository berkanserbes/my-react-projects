import React from "react";
import Question from "./components/Question.js";

function App() {
  return (
    <>
      <h1>React Interview Questions</h1>
      <div className="container">
        <h2>Frequently Asked React Questions</h2>
        <div className="questions">
          {questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;

const questions = [
  {
    id: 1,
    title: "What is React",
    info: `React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which
    helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.`,
  },
  {
    id: 2,
    title: "Why can't browsers read JSX?",
    info: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. 
    Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers
    like Babel and then pass it to the browser.`,
  },
  {
    id: 3,
    title: "What is a state in React?",
    info: `States are the heart of React components. States are the source of data and must be kept as simple as possible. 
    Basically, states are the objects which determine components rendering and behavior.`,
  },
  {
    id: 4,
    title: "What is the significance of keys in React?",
    info: `Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. 
    They help React to optimize the rendering by recycling all the existing elements in the DOM. 
    These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. 
    This leads to increase in application’s performance.`,
  },
  {
    id: 5,
    title: "What is React Router?",
    info: `React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application.
    This keeps the URL in sync with data that is being displayed on the web page. 
    It maintains a standardized structure and behavior and is used for developing single page web applications. 
    React Router has a simple API.`,
  },
];
