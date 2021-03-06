/* @flow */

import React from 'react';
import { OmniSearchResultContainer } from '../../Style/Input/OmniSearchStyle';

const OmniSearchBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchResultContainer
      className={className}
      role="menuitem"
      aria-hidden={false}
      {...defaultProps}
    >
      {children}
    </OmniSearchResultContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default OmniSearchBody;
