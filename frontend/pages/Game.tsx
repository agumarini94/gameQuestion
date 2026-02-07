import React, { useState } from 'react';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import CharacterCard from '../components/CharacterCard';

const Game = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const currentQuestions = questions.filter(q => q.level === level);
  const question = currentQuestions[index];

  const handleAnswer = (answer) => {
    if (answer === question.correct) {
      const nextIndex = index + 1;
      if (nextIndex < currentQuestions.length) {
        setIndex(nextIndex);
      } else if (level < 6) {
        setLevel(level + 1);
        setIndex(0);
      } else {
        alert("¡Llegaste al nivel máximo!");
      }
    } else {
      alert("Incorrecto, intenta de nuevo");
    }
  };

  return (
    <div>
      <CharacterCard characterName={`Nivel ${level}`} level={level}/>
      <ProgressBar level={level} maxLevel={6}/>
      <QuestionCard question={question} onAnswer={handleAnswer}/>
    </div>
  );
};

export default Game;
