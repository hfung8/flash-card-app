import React, { useState } from 'react';
import Flashcardlist from './Flashcardlist.js';
import './App.css';

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  return (
    <Flashcardlist flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: 
    [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What is 2 + 2?',
    answer: 'Answer',
    options: 
    [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4'
    ]
  },
  // {
  //   id: 3,
  //   question: 'What is 2 + 2?',
  //   answer: '4',
  //   options: 
  //   [
  //     'Answer 1',
  //     'Answer 2',
  //     'Answer 3',
  //     'Answer 4'
  //   ]
  // },
  // {
  //   id: 4,
  //   question: 'What is 2 + 2?',
  //   answer: '4',
  //   options: 
  //   [
  //     'Answer 1',
  //     'Answer 2',
  //     'Answer 3',
  //     'Answer 4'
  //   ]
  // },
]

export default App;
