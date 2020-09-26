import React from 'react'
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Rice</h1>
          <h1 className='title'>Shop now</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>noodles</h1>
          <h1 className='title'>Shop now</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Extra</h1>
          <h1 className='title'>Shop now</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>drink</h1>
          <h1 className='title'>Shop now</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>seafood</h1>
          <h1 className='title'>Shop now</h1>
        </div>
      </div>
    </div>
  </div>
)
export default HomePage;