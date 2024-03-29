import React from 'react';
import { Link } from 'react-router-dom';

import mcityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = props => {

  const temp = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcityLogo}) no-repeat`
      }}
    />
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {temp}
      </Link>
    );
  }
  return temp;
};
