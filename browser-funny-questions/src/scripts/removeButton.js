import {
  getCoordinates,
  getCoordinatesWithTransform,
  getSizes,
  getRandomInt,
} from './utils.js';

export default function removeButton(cursor) {
  const area = document.getElementsByClassName('answers__container')[0];
  const { top: topArea, left: leftArea } = getCoordinates(area);
  const { width: widthArea, height: heightArea } = getSizes(area);
  const buttonAgree = document.getElementById('btn-agree');

  const { width: widthAgreeButton, height: heightAgreeButton } = getSizes(buttonAgree);
  const { width: widthDisagreeButton, height: heightDisagreeButton } = getSizes(this);

  const { top: topAgreeButton, left: leftAgreeButton } = getCoordinates(buttonAgree);

  while (true) {
    const translateX = getRandomInt(800);
    const translateY = getRandomInt(800);

    this.style.transform = `translate(${translateX}px, ${translateY}px)`;

    const { top: topDisagreeButton, left: leftDisagreeButton } = getCoordinatesWithTransform(this);

    const isMouseOverButtonDisagree = (cursor.pageX < leftDisagreeButton + widthDisagreeButton)
      && (cursor.pageX > leftDisagreeButton)
      && (cursor.pageY < topDisagreeButton + heightDisagreeButton)
      && (cursor.pageY > topDisagreeButton);

    const isDisagreeButtonOverAgreeButton = (leftDisagreeButton > leftAgreeButton)
      && (leftDisagreeButton < leftAgreeButton + widthAgreeButton)
      && (topDisagreeButton > topAgreeButton)
      && (topDisagreeButton < topAgreeButton + heightAgreeButton);

    const isDisagreeButtonInArea = (leftDisagreeButton > leftArea)
      && (leftDisagreeButton + widthDisagreeButton < leftArea + widthArea)
      && (topDisagreeButton > topArea)
      && (topDisagreeButton + heightDisagreeButton < topArea + heightArea);

    if (!isMouseOverButtonDisagree && !isDisagreeButtonOverAgreeButton && isDisagreeButtonInArea) {
      break;
    }
  }
}
