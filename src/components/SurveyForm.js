import { useState } from "react";
import AnswersItem from "./AnswersItem";

const initialAnswers = {
  color: "",
  timeSpent: [],
  noTime: false,
  review: "",
  username: "",
  email: "",
};

function SurveyForm(props) {
  const [answers, setAnswers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { id, type, name, value } = event.target;

    if (name === "color" && type === "radio") {
      setAnswers({ ...answers, name: value });
    }
    if (name === "timeSpent" && type === "checkbox") {
      setAnswers({ ...answers, name: value });
    }
    if (name === "noTime" && type === "checkbox") {
      setAnswers({ ...answers, name: value });
    }
    if (name === "review" && type === "textarea") {
      setAnswers({ ...answers, name: value });
    }
    if (name === "username" && type === "text") {
      setAnswers({ ...answers, name: value });
    }
    if (name === "email" && type === "email") {
      setAnswers({ ...answers, name: value });
    }
  }

  return (
    <>
      <form class="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div class="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input
                id="color-one"
                type="radio"
                name="color"
                value="1"
                onChange={handleChange}
                checked={answers.colour === 1}
              />

              <label for="color-one">1</label>
            </li>
            <li>
              <input
                id="color-two"
                type="radio"
                name="color"
                value="2"
                onChange={handleChange}
                checked={answers.colour === 2}
              />

              <label for="color-two">2</label>
            </li>
            <li>
              <input
                id="color-three"
                type="radio"
                name="color"
                value="3"
                onChange={handleChange}
                checked={answers.colour === 3}
              />
              <label for="color-three">3</label>
            </li>
            <li>
              <input
                id="color-four"
                type="radio"
                name="color"
                value="4"
                onChange={handleChange}
                checked={answers.colour === 4}
              />
              <label for="color-four">4</label>
            </li>
          </ul>
        </div>
        <div class="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="swimming"
                  onChange={handleChange}
                  checked={answers.timeSpent.swimming}
                />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="bathing"
                  onChange={handleChange}
                  checked={answers.timeSpent.bathing}
                />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="chatting"
                  onChange={handleChange}
                  checked={answers.timeSpent.chatting}
                />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="noTime"
                  onChange={handleChange}
                  checked={answers.noTime}
                />
                I don't like to spend time with it
              </label>
            </li>
          </ul>
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            checked={answers.review}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value=""
            onChange={handleChange}
            checked={answers.username}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value=""
            onChange={handleChange}
            checked={answers.email}
          />
        </label>
        <input class="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </>
  );
}

export default SurveyForm;
