import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';

export default function Shop() {
  const slideMenu = () => {
    const menuCheck = document.getElementById('side-menu').offsetLeft;

    if (menuCheck === -250) {
      document.getElementById('side-menu').style.left = '0px';
    } else {
      document.getElementById('side-menu').style.left = '-250px';
    }
  };
  return (
    <Fragment>
      <div className='navbar'>
        <div className='container flex'>
          <input
            id='toggler'
            type='checkbox'
            className='toggler'
            onClick={slideMenu}
          />
          <div className='hamburger'>
            <div></div>
          </div>
          <p className='large logo'>Eduardo's</p>
          <nav>
            <ul className='flex'>
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <Link to='/categories'>Shop</Link>
              </li>
              <li>
                <a href='about.html'>About</a>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div id='side-menu' className='side-menu'>
        <nav>
          <ul>
            <li>
              <Link to='/categories'>Shop</Link>
            </li>
            <li>
              <a href='specials.html'>Specials</a>
            </li>
            <li>
              <a href='contact.html'>Contact</a>
            </li>
            <li>
              <a href='about.html'>About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='shop container bg-white'>
        <div className='shop-hero flex'>
          <p className='x-large primary-text title'>Specials</p>
          <p className='lead'>
            All Specials are Offered for a Limited Time, at Family Friendly
            Discounts.
          </p>
        </div>

        <main>
          <div className='specials'></div>
        </main>
        <footer className='bg-light'>All Rights Reserved &copy;</footer>
      </div>
    </Fragment>
  );
}
