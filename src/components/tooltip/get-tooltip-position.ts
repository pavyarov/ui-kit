interface Anchors {
  childrenTopPosition: number;
  childrenLeftPosition: number;
  childrenWidth: number;
  childrenHeight: number;
  messageHeight: number;
  messageWidth: number;
  offset: number;
}

export const getTooltipPosition = (tooltipPositionType: string, anchors: Anchors) => {
  const isInvalidAnchors = Object.values(anchors).some(anchor => Number.isNaN(anchor) || anchor === Infinity);
  const {
    childrenTopPosition, childrenLeftPosition, childrenWidth, childrenHeight, messageHeight, messageWidth, offset,
  } = anchors;

  const topPosition = `${childrenTopPosition - messageHeight - offset}px`;
  switch (isInvalidAnchors ? 'default' : tooltipPositionType) {
    case 'top-center':
      return {
        top: topPosition,
        left: `${childrenLeftPosition - (messageWidth - childrenWidth) / 2}px`,
      };
    case 'top-right':
      return {
        top: topPosition,
        left: `${childrenLeftPosition + childrenWidth / 2}px`,
      };
    case 'top-left':
      return {
        top: topPosition,
        left: `${childrenLeftPosition - messageWidth + childrenWidth / 2}px`,
      };
    case 'right':
      return {
        top: `${childrenTopPosition + (childrenHeight - messageHeight) / 2}px`,
        left: `${childrenLeftPosition + childrenWidth + offset}px`,
      };
    case 'left':
      return {
        top: `${childrenTopPosition + (childrenHeight - messageHeight) / 2}px`,
        left: `${childrenLeftPosition - messageWidth - offset}px`,
      };
    default:
      return {
        top: `${0}px`,
        left: `${0}px`,
      };
  }
};
