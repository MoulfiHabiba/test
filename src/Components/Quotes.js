import React, { useState } from "react";
import twitterimg from "./Assests/twitter.svg";
import saveimg from "./Assests/save.svg";
import { Link } from "react-router-dom";
const Quotes = ({ saveQuoteHandler }) => {
  const [quote, setQuote] = useState({
    _id: "WndePPLcTJ",
    content:
      "The virtue of justice consists in moderation, as regulated by wisdom.",
    author: "Aristotle",
  });

  const getQuote = async () => {
    const response = await fetch("http://api.quotable.io/random");
    const quote = await response.json();
    setQuote(quote);
  };
  const save = () => {
    saveQuoteHandler(quote);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`
    );
  };
  return (
    <div className="container">
      <div className="quote">{quote.content}</div>
      <div>
        <div className="line"></div>
        <div className="author">- {quote.author}</div>
        <div className="bottom">
          <div className="icons">
            <img  className='image'src={twitterimg} onClick={twitter} alt="twitter" />
            <img id="saved" src={saveimg} onClick={save} alt="save" />
             
            <button className="pre" onClick={getQuote}>Get Quote</button>
            <Link to="/trash">
              <button className="sec btn">Go To Trash</button>
            </Link>
            <Link to="/saved-quotes">
              <button className="sec btn">Go To Saved</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
