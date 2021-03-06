import './App.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function App() {
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
          <p className='large logo'>El Zarape</p>
          <nav>
            <ul className='flex'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/categories'>Shop</Link>
              </li>
              <li>
                <Link to='/shop'>About</Link>
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
              <Link to='categories'>Shop</Link>
            </li>
            <li>
              <Link to='/specials'>Specials</Link>
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

      <div className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner flex'>
            <p className='x-large'>Eduardo's Leather Specialties</p>
            <p className='lead'>
              Fine Leather Goods Made In The Heart of Mexico
            </p>
            <div className='buttons'>
              <Link to='/categories' className='btn'>
                Shop
              </Link>
              <Link to='/specials' className='btn btn-primary'>
                Specials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
