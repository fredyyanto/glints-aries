/* @flow */

import React from 'react';
import { DefaultBtn } from '../../Style/General/ButtonStyle';

const DefaultButton = ({ children, ...defaultProps }: Props) => (
  <DefaultBtn {...defaultProps}>
    { children }
  </DefaultBtn>
);

type Props = {
  children: React$Node,
  className: string,
}

export default DefaultButton;
