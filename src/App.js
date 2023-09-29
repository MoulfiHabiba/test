import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Quotes from "./Components/Quotes";
import Trash from "./Components/Trash";
import SavedQuotes from "./Components/SavedQuotes";

const App = () => {
  const [savedQuotes, setSavedQuotes] = useState(
    JSON.parse(localStorage.getItem("saved")) ?? []
  );
  const [removedQuotes, setRemovedQuotes] = useState(
    JSON.parse(localStorage.getItem("removed")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedQuotes));
  }, [savedQuotes]);
  useEffect(() => {
    localStorage.setItem("removed", JSON.stringify(removedQuotes));
  }, [removedQuotes]);
  useEffect(() => {
    setSavedQuotes(JSON.parse(localStorage.getItem("saved")));
  }, []);
  console.log(savedQuotes);
  const removeHandler = (quote) => {
    const newQuotes = removedQuotes.filter((q) => q._id !== quote._id);
    setRemovedQuotes(newQuotes);
  };
  const restoreHandler = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
    const newQuotes = removedQuotes.filter((q) => q._id !== quote._id);
    setRemovedQuotes(newQuotes);
  };
  const removedQuoteHandler = (quote) => {
    const newQuotes = savedQuotes.filter((q) => q._id !== quote._id);

    setSavedQuotes(newQuotes);
    setRemovedQuotes([...removedQuotes, quote]);
    console.log(removedQuotes);
  };
  const saveQuoteHandler = (quote) => {
    const quotes = savedQuotes.find((q) => q._id === quote._id);
    if (quotes) {
      console.log("error");
    } else {
      
      setSavedQuotes([...savedQuotes, quote]);
    }
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Quotes saveQuoteHandler={saveQuoteHandler} />}
          />
          <Route
            path="/saved-quotes"
            element={
              <SavedQuotes
                SavedQuotesList={savedQuotes}
                removeQuoteHandler={removedQuoteHandler}
              />
            }
          />
          <Route
            path="/trash"
            element={
              <Trash
                removedQuotes={removedQuotes}
                restoreHandler={restoreHandler}
                removeHandler={removeHandler}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
