import React from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

function ThemeHeaderSmall(props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  );
}

ThemeHeaderSmall.defaultProps = {};

ThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
};

export default ThemeHeaderSmall;
