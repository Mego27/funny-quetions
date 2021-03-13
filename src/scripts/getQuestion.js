import { getRandomInt } from './utils.js';
const QUESTIONS = [
  'Вас устраивает ваша зарплата?',
  'Вы любите своих родителей?',
  'Вы относитесь к ЛГБТ+ сообществу?',
];

export default function getQuestion() {
  return QUESTIONS[Math.abs(getRandomInt(QUESTIONS.length))];
}
