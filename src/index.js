import './styles/style.css';
import removeButton from './scripts/removeButton.js';
import getQuestion from './scripts/getQuestion.js';

const question = document.getElementsByClassName('question')[0];
const disagreeButton = document.getElementById('btn-disagree');

question.textContent = getQuestion();
disagreeButton.addEventListener('mouseover', removeButton.bind(disagreeButton));
