import React from 'react';

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}: {exercises} exercises
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p>
      <strong>Total exercises: {totalExercises}</strong>
    </p>
  );
};

const App = () => {
  // Define your course and parts data
  const course = 'Your Course';
  const parts = [
    { name: 'Part 1', exercises: 10 },
    { name: 'Part 2', exercises: 7 },
    { name: 'Part 3', exercises: 5 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
