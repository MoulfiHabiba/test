import React from "react";
import { Link } from "react-router-dom";
function Trash({ removedQuotes, restoreHandler, removeHandler }) {
  const restore = (quote) => {
    restoreHandler(quote);
  };
  const remove = (quote) => {
    removeHandler(quote);
  };
  return (
    <div>
      <h1>Trash</h1>

      {removedQuotes.map((quote) => (
        <div className="card" key={quote._id}>
          <div>
            <div className="card-content"> {quote.content}</div>
            <div className="card-author">- {quote.author}</div>
          </div>
          <div className="btns">
            <div>
              <button className="remove-btn" onClick={() => remove(quote)}>
                remove
              </button>
            </div>
            <div>
              <button className=" restore btn" onClick={() => restore(quote)}>
                restore
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="btns">
        <Link to="/">
          <button className="trash btn">Go To Generator</button>
        </Link>
        <Link to="/saved-quotes">
          <button className="saved btn">Go To Saved</button>
        </Link>
      </div>
    </div>
  );
}

export default Trash;
