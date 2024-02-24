import React from "react";
// this button component provides a button to refresh the quote
const Button = ({ fetchQuotes }: { fetchQuotes: () => void }) => {
  const handleRefreshQuote = () => {
    fetchQuotes();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleRefreshQuote}
    >
      Refresh Quote
    </button>
  );
};

export default Button;
