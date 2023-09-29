import React from "react";
import { Link } from "react-router-dom";
function SavedQuotes({ SavedQuotesList, removeQuoteHandler }) {
  const remove = (quote) => {
    removeQuoteHandler(quote);
  };
  return (
    <div>
      <h1>Saved Quotes</h1>

      {SavedQuotesList.map((quote) => (
        <div className="card" key={quote._id}>
          <div>
            <div className="card-content"> {quote.content}</div>
            <div className="card-author">- {quote.author}</div>
          </div>
          <div>
            <button className="remove-btn" onClick={() => remove(quote)}>
              remove
            </button>
          </div>
        </div>
      ))}
      <div className="btns">
        <Link to="/trash">
          <button className="trash btn">Go To Trash</button>
        </Link>
        <Link to="/">
          <button className="saved btn">Go To Generator</button>
        </Link>
      </div>
    </div>
  );
}

export default SavedQuotes;
