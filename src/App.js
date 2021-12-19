import React from "react";
import MainContent from "./components/MainContent";
import "./styles/index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BackgroundContent from "./components/BackgroundContent";

const App = () => {
  document.body.style.backgroundColor = "black";
  // TODO: Create a data file and move all of the text over to a list, and create a function
  // to map over the list, then pass down as props to the child components.

  return (
    <div>
      <div className="banner-body">
        <h1>
          <Banner />
        </h1>
      </div>
      <NavBar />
      <div className="">
        <BackgroundContent className="">
          <div className="">
            <MainContent
              //TODO
              //pull this data from a list and map over it, pass the prop down to the child
              //components.

              para1="Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
              facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
              referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
              electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
              Mei ex natum rebum iisque Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id."
              para2="Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
              definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
              te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
              vide phaedrum, vim vivendum maiestatis inEu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id."
              para3="Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
              ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
              Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
              wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
              mnesarchum eu per, quas minimum postulant per id."
            />
          </div>
        </BackgroundContent>
      </div>
    </div>
  );
};

export default App;
