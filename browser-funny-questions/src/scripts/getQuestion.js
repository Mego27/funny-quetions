import { getRandomInt } from './utils.js';

const QUESTIONS = [
  'Вас устраивает ваша зарплата?',
  'Вы не любите своих родителей?',
  'Вы относитесь к ЛГБТ+ сообществу?',
  'JavaScript - лучший язык программирования?',
];

export default function getQuestion() {
  return QUESTIONS[Math.abs(getRandomInt(QUESTIONS.length))];
}
