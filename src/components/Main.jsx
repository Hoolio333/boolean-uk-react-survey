import { useState } from "react";
import AnswersList from './AnswersList'
import SurveyForm from "./SurveyForm";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  const newAnswer = (answer) => {
    setAnswers(oldAnswers => {
      return [...oldAnswers, answer]
    })
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form"><SurveyForm newAnswer={newAnswer}/></section>
    </main>
  );
}

export default Main;
