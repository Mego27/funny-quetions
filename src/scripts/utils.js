function getCoordinates(element) {
  const box = element.getBoundingClientRect();

  return {
    top: Math.round(box.top + pageYOffset),
    left: Math.round(box.left + pageXOffset),
  };
}

function getCoordinatesWithTransform(element) {
  const matrixUnprepared = window.getComputedStyle(element).transform;
  const matrix = matrixUnprepared.split(/\(|,\s|\)/).slice(1, 7);

  const { left, top } = getCoordinates(element);

  return {
    top: +matrix[5] + top,
    left: +matrix[4] + left,
  };
}

function getSizes(element) {
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  return {
    width,
    height,
  };
}

function getRandomInt(max) {
  if (Math.random() > 0.5) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  return -Math.floor(Math.random() * Math.floor(max));
}

export {
  getCoordinates,
  getCoordinatesWithTransform,
  getSizes,
  getRandomInt,
};
