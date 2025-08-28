export function countInfoPosition(target: HTMLElement | null) {
  type Position = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };

  const infoPosition: Position = {};

  if (!target) {
    return infoPosition;
  }

  const targetPosition = target.getBoundingClientRect();

  const clientWidth = document.documentElement.clientWidth;
  // const clientHeight = document.documentElement.clientHeight;

  const xCenter = clientWidth / 2;
  // const yCenter = clientHeight / 2;

  if (targetPosition.x > xCenter) {
    infoPosition.right = clientWidth - targetPosition.left + 30;
  } else {
    infoPosition.left = targetPosition.right + 30;
  }

  // if (targetPosition.y > yCenter) {
  //   infoPosition.top = 50;
  // } else {
  //   infoPosition.bottom = 50;
  // }

  return infoPosition;
}
