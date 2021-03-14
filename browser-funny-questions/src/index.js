// import './styles/style.css';
import removeButton from './scripts/removeButton.js';
import getQuestion from './scripts/getQuestion.js';
import changeQuestion from './scripts/changeQuestion.js';

const question = document.getElementsByClassName('question')[0];
const disagreeButton = document.getElementById('btn-disagree');
const agreeButton = document.getElementById('btn-agree');

question.textContent = getQuestion();
disagreeButton.addEventListener('mouseover', removeButton.bind(disagreeButton));
agreeButton.addEventListener('click', changeQuestion);
