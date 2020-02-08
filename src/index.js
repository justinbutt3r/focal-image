import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './styles.scss';

const Image = styled.div`
  background: transparent no-repeat;
  background-size: cover;
  background-position: ${props => props.x}% ${props => props.y}%;
  background-image: url('${props => props.src.mobile}');
  
  @media (min-width: 768px) {
    background-image: url('${props =>
      props.useSmall ? props.src.mobile : props.src.tablet}');
  }  
  @media (min-width: 1280px) {
    background-image: url('${props =>
      props.useLarge
        ? props.src.desktop
        : props.useSmall
        ? props.src.mobile
        : props.src.tablet}');
  }
`;

const FocalImage = ({ className, src, x, y, alt, useLarge, useSmall }) => {
  // if (!src) {
  //   return null;
  // }

  return (
    <Image
      className={`focal-image ${className || ''}`}
      src={src}
      x={x}
      y={y}
      useLarge={useLarge}
      useSmall={useSmall}
    >
      <img src={src.mobile} alt={alt} />
    </Image>
  );
};

FocalImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string,
    tablet: PropTypes.string,
  }),
  x: PropTypes.number,
  y: PropTypes.number,
  alt: PropTypes.string,
  useLarge: PropTypes.bool,
  useSmall: PropTypes.bool,
};

FocalImage.defaultProps = {
  src: {},
};
export default FocalImage;
