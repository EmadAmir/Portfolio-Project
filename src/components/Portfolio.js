import React from 'react';
import FavMovie from '../images/Fav Movie.PNG';
import MonsterGame from '../images/Monster Game.PNG';
import MovieData from '../images/Movies Data.PNG';
import RPS from '../images/rock_paper_scissor.PNG';
import Yoga from '../images/yoga.PNG';
// import PortfolioImage from '../images/portfolio-website.PNG';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//  REACT POPUPBOX
import 'react-popupbox/dist/react-popupbox.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

const Portfolio = () => {

  const openPopupboxYogaWebsite = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Yoga}
          alt="Yoga Website"
        />
        <h3 className="proj pt-1">Yoga Website</h3>
        <p >
          Yoga classes enrollment Website design using HTML5, SASS and Bootstrap 5. 
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://emadamir.github.io/yoga-client-website/','_blank')
          }
        >
          https://emadamir.github.io/yoga-client-website/
        </a>
        <br/>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/EmadAmir/favorite-movies')
          }
        >
          https://github.com/EmadAmir/favorite-movies
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigYogaWebsite = {
    titleBar: {
      enable: false,
      text: 'Favourite Movies.'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  //favourite movies
  const openPopupboxFavMovies = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={FavMovie}
          alt="Favourite movies"
        />
        <h3 className="proj pt-1">Favourite Movies</h3>
        <p>
          Favourite Movies web application using HTML5, CSS, Vanilla Javascript. The user can add favourite movies and provide its rating.
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/EmadAmir/favorite-movies')
          }
        >
          https://github.com/EmadAmir/favorite-movies
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFavMovies = {
    titleBar: {
      enable: false,
      text: 'Favourite Movies.'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  //Monster Game
  const openPopupboxMonsterGame = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={MonsterGame}
          alt="Monster Game"
        />
        <h3 className="proj pt-1">Monster Game</h3>
        <p>
          This web application is built on HTML5, CSS, Vanilla Javascript. The user can attact the monster and has a heal functionality.
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://github.com/EmadAmir/Sample-Monster-Game-Format'
            )
          }
        >
          https://github.com/EmadAmir/Sample-Monster-Game-Format
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMonsterGame = {
    titleBar: {
      enable: false,
      text: 'Monster Attack Game.'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  //Movie Manager
  const openPopupboxMoviesData = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={MovieData}
          alt="Movie Data Manager"
        />
        <h3 className="proj pt-1">Movies Data Manager</h3>
        <p>
          The Movies Data Manager application is built on HTML5, CSS, Vanilla Javascript which will help the user to find movies on a personal database.
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/EmadAmir/Movies-Data-Manager')
          }
        >
          https://github.com/EmadAmir/Movies-Data-Manager
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMoviesData = {
    titleBar: {
      enable: false,
      text: 'Movies Data Manager.'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  //Rock Paper Scissor Game
  const openPopupboxRockPaperScissor = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox img-responsive"
          src={RPS}
          alt="Rock Paper Scissor Game"
        />
        <h3 className="proj pt-1">Rock Paper Scissor</h3>
        <p>
          Rock Paper Scissor is built on HTML5, CSS, Vanilla Javascript.
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://github.com/EmadAmir/Game-2-Rock-Paper-Scissors'
            )
          }
        >
          https://github.com/EmadAmir/Game-2-Rock-Paper-Scissors
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRockPaperScissor = {
    // titleBar: {
    //   enable: false,
    //   text: 'Rock Paper Scissor.'
    // },
    fadeIn: true,
    fadeInSpeed: 500
  };
// Note: Image Sizes are 1080px * 600px
  return (
    <div id="demo" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center my-5">Demo Projects</h1>
        {/* //className="image-box-wrapper d-flex justify-content-center" */}
        <div className="row gy-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5  d-flex justify-content-center">
        {/* <div className="row gy-2 row-col-md-8 row-col-6 row-col-md-4  d-flex justify-content-center"> */}
        <div
            className="col portfolio-image-box"
            onClick={openPopupboxYogaWebsite}
          >
            <img
              // className="portfolio-image "
              className="portfolio-image"
              src={Yoga}
              alt="Favourite Movies"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div
            className="col portfolio-image-box"
            onClick={openPopupboxFavMovies}
          >
            <img
              // className="portfolio-image "
              className="portfolio-image"
              src={FavMovie}
              alt="Favourite Movies"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div
            className="col portfolio-image-box  "
            onClick={openPopupboxMonsterGame}
          >
            <img
              // className="portfolio-image "
              className="portfolio-image"
              src={MonsterGame}
              alt="Monster Game"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          

          <div
            className="col portfolio-image-box "
            onClick={openPopupboxMoviesData}
          >
            <img
              // className="portfolio-image"
              className="portfolio-image"
              src={MovieData}
              alt="Movie Data Manager"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="col portfolio-image-box "
            onClick={openPopupboxRockPaperScissor}
          >
            <img
              // className="portfolio-image"
              className="portfolio-image"
              src={RPS}
              alt="Rock Paper Scissor Game"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigYogaWebsite} />
      <PopupboxContainer {...popupboxConfigFavMovies} />
      <PopupboxContainer {...popupboxConfigMonsterGame} />
      <PopupboxContainer {...popupboxConfigMoviesData} />
      <PopupboxContainer {...popupboxConfigRockPaperScissor} />
    </div>
  );
};

export default Portfolio;
