import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

const Main = ({ match }) => {
  return (
    <div className='main-container'>
      <img src={logo} alt='TinderClone' />
      <ul>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
        <li>
          <img
            src='https://avatars2.githubusercontent.com/u/41195386?v=4'
            alt=''
          />
          <footer>
            <strong>Eduardo Ribeiro</strong>
            <p>
              Desenvolvedor Frontend, atualmente estudando a Stack
              ReactJS/NodeJS/ReactNative.
            </p>
          </footer>

          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='' />
            </button>
            <button type='button'>
              <img src={like} alt='' />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Main;
