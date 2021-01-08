import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';

export default function Shop() {
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('#next');
  const previous = document.querySelector('#previous');
  const auto = true;
  const intervalTime = 5000;
  let slideInterval;

  const nextSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    if (current) {
      // Remove Current Class
      current.classList.remove('current');

      if (current.nextElementSibling) {
        //Add Current to Next Sibling
        current.nextElementSibling.classList.add('current');
      } else {
        // Add Current to Start
        slides[0].classList.add('current');
      }

      setTimeout(() => {
        current.classList.remove('current');
      });
    }
  };

  const previousSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');

    // Remove Current Class
    current.classList.remove('current');

    if (current.previousElementSibling) {
      //Add Current to Previous Sibling
      current.previousElementSibling.classList.add('current');
    } else {
      // Add Current to Start
      slides[slides.length - 1].classList.add('current');
    }

    setTimeout(() => {
      current.classList.remove('current');
    });
  };

  // if (next) {
  //   next.addEventListener('click', (e) => {
  //     nextSlide();
  //     if (auto) {
  //       clearInterval(slideInterval);
  //       slideInterval = setInterval(nextSlide, intervalTime);
  //     }
  //   });
  // }

  // if (previous) {
  //   previous.addEventListener('click', (e) => {
  //     previousSlide();
  //     if (auto) {
  //       clearInterval(slideInterval);
  //       slideInterval = setInterval(nextSlide, intervalTime);
  //     }
  //   });
  // }

  // if (auto) {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // }
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

      <div className='categories container bg-white'>
        <div className='shop-hero flex'>
          <p className='x-large primary-text title'>Categories</p>
          <p className='lead'>
            We Offer Many More Products. For More Information, Please Call or
            Signup for Upcoming Specials.
          </p>
        </div>

        <div className='slides'>
          <div className='slide current'>
            <div className='content'>
              <h1>Slide One</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>
          <div className='slide'>
            <div className='content'>
              <h1>Slide Two</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>
          <div className='slide'>
            <div className='content'>
              <h1>Slide Three</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>
          <div className='slide'>
            <div className='content'>
              <h1>Slide Four</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>
          <div className='slide'>
            <div className='content'>
              <h1>Slide Five</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>
          <div className='slide'>
            <div className='content'>
              <h1>Slide Six</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis a consequatur tempore eaque, dignissimos assumenda.
              </p>
            </div>
          </div>

          <div className='category-buttons'>
            <button id='previous' onClick={previousSlide}>
              <i className='fas fa-arrow-left fa-2x'></i>
            </button>
            <button id='next' onClick={nextSlide}>
              <i className='fas fa-arrow-right fa-2x'></i>
            </button>
          </div>
        </div>

        <footer className='bg-light'>All Rights Reserved &copy;</footer>
      </div>
    </Fragment>
  );
}
