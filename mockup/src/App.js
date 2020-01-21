import React from 'react';
import './App.css';

import './components/QuestionCard/QuestionCard';
import QuestionCard from "./components/QuestionCard/QuestionCard";

function App() {
  return (
    <QuestionCard
        question_text="hello world"
    />
  );
}

export default App;
