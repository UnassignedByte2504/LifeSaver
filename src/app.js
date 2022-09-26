/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#chosenone").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = ExcuseGen();
  });
  console.log("This is a test message! ");
};

let ExcuseGen = () => {
  let pronoun = [
    "An extraordinary",
    "Some random",
    "A wild",
    "An astonishing",
    "An evil",
    "Some huge"
  ];
  let subject = ["alien", "elephant", "pterodactyl", "crow", "baby", "ant"];
  let action = [
    "ate my",
    "robbed my",
    "vomited my",
    "kidnapped my",
    "destroyed my",
    "abducted my"
  ];
  let what = ["soul", "pure heart", " wallet", "homework", "phone", "dog"];
  let where = [
    "on the way.",
    "in my house.",
    "while I was sleeping.",
    "when I was a kid.",
    "at the park.",
    "while i was saving mammoths from extinction."
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
