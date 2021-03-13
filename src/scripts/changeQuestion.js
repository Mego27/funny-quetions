import getQuestion from './getQuestion.js';

export default function changeQuestion() {
  const question = document.getElementsByClassName('question')[0];
  let questionText;

  do {
    questionText = getQuestion();
  } while (questionText === question.textContent);

  question.textContent = questionText;
}
