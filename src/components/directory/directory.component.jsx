import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import chicken_curry from '../images/chicken_curry.png';
import chicken_katsu_don from '../images/chicken_katsu_don.png';
import chicken_katsu from '../images/chicken_katsu.png';
import extra_rice from '../images/extra_rice.png';
import gyu_don from '../images/gyu_don.png';
import karrage_chicken from '../images/karrage_chicken.png';
import miso_soup from '../images/miso_soup.png';
import udon from '../images/udon.png';
import yakisoba from '../images/yakisoba.png'
import drinks from '../images/drinks.png';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Rice',
          imageUrl: gyu_don,
          id: 1
        },
        {
          title: 'Noodle',
          imageUrl: udon,
          id: 2
        },
        {
          title: 'Curry',
          imageUrl: chicken_curry,
          id: 3
        },
        {
          title: 'Extra',
          imageUrl: miso_soup,
          size: 'large',
          id: 4
        },
        {
          title: 'Drinks',
          imageUrl: drinks,
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={ id } title={ title } imageUrl={ imageUrl } size={ size } />
        )) }
      </div>
    );
  }
}

export default Directory;