import { getTooltipPosition } from './get-tooltip-position';

describe('getTooltipPosition', () => {
  const mockAnchors = {
    childrenLeftPosition: 600,
    childrenTopPosition: 240,
    childrenWidth: 50,
    childrenHeight: 50,
    offset: 12,
    messageHeight: 34,
    messageWidth: 512,
  };

  const mockNaNAnchors = {
    childrenLeftPosition: NaN,
    childrenTopPosition: NaN,
    childrenWidth: NaN,
    childrenHeight: NaN,
    offset: NaN,
    messageHeight: NaN,
    messageWidth: NaN,
  };

  const mockInfinityAnchors = {
    childrenLeftPosition: Infinity,
    childrenTopPosition: Infinity,
    childrenWidth: Infinity,
    childrenHeight: Infinity,
    offset: Infinity,
    messageHeight: Infinity,
    messageWidth: Infinity,
  };

  it('should return the coords for center tooltip position', () => {
    const centerPositionCoords = {
      left: '369px',
      top: '194px',
    };
    expect(getTooltipPosition('top-center', mockAnchors)).toEqual(centerPositionCoords);
  });

  it('should return the coords for default tooltip position', () => {
    expect(getTooltipPosition('top-center', mockNaNAnchors)).toEqual({
      left: '0px',
      top: '0px',
    });
  });

  it('should return the coords for default tooltip position', () => {
    expect(getTooltipPosition('top-center', mockInfinityAnchors)).toEqual({
      left: '0px',
      top: '0px',
    });
  });

  it('should return the coords for right tooltip position', () => {
    const leftPositionCoords = {
      left: '625px',
      top: '194px',
    };
    expect(getTooltipPosition('top-right', mockAnchors)).toEqual(leftPositionCoords);
  });

  it('should return the coords for left tooltip position', () => {
    const rightPositionCoords = {
      left: '113px',
      top: '194px',
    };
    expect(getTooltipPosition('top-left', mockAnchors)).toEqual(rightPositionCoords);
  });
});
