import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navigation } from 'src/data/navigation';
import { FooterWrapper } from './styles';

const navItems = navigation
  .filter(({ showInFooter }) => !!showInFooter)
  .map(({ title, slug }) => (
    <li key={title} className="inline-block pr-4 md:pr-5 py-4">
      <Link to={slug as string}>{title}</Link>
    </li>
  ));

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <ul className="text-center md:text-left">{navItems}</ul>
      </div>

      <a href="#">
        <button className="backTop" type="button">
          <FontAwesomeIcon icon="angle-up" size="2x" />
        </button>
      </a>
    </FooterWrapper>
  );
};

export default Footer;
