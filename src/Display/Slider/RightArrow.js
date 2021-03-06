/* @flow */

import React from 'react';
import { Icon } from '../../General/Icon';
import { RightArrowContainer } from '../../Style/Display/SliderStyle';

const RightArrow = (props: Props) => {
  const { index, limit, nextSlide } = props;
  let arrowColor = 'black';

  if (limit === index) arrowColor = '#c7c7c7';

  return (
    <RightArrowContainer index={index} limit={limit} onClick={nextSlide}>
      <Icon name="arrow-next" color={arrowColor} />
    </RightArrowContainer>
  );
};

type Props = {
  index: number,
  limit: number,
  nextSlide: Function,
}

export default RightArrow;
