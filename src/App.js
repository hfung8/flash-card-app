import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcardlist from './Flashcardlist.js';
import './App.css';

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  
  useEffect(()=> {
    axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(res => {
      setFlashCards(res.data.results.map((questionItem, index) => { 
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
           answer];
        return {
          id: `($index)-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() * .5),
        }
      })
    )})
  }, []);

  function decodeString(str){
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="container">
    <Flashcardlist flashcards={flashcards} />
    </div>
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
