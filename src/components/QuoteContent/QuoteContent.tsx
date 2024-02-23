"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Create the interface for the quote type
interface Quote {
  id: string;
  value: string;
}

// Define the getQuotes function
const getQuotes = async (): Promise<Quote> => {
  const res = await fetch(
    "https://api.chucknorris.io/jokes/random?category=dev"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const QuoteContent = () => {
  // Use state to store the fetched quotes
  const [quote, setQuote] = useState<Quote | null>(null);

  // Use effect to fetch quotes when the component mounts

  const fetchQuotes = async () => {
    try {
      const fetchedQuote = await getQuotes();
      setQuote(fetchedQuote);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleRefreshQuote = () => {
    fetchQuotes();
  };

  // Check if quote is not null before trying to access its properties
  return (
    <div>
      QuoteContent
      {quote && (
        <div>
          <Image
            src="/chuck-norris.png" // Use the icon_url from the fetched quote
            alt="Chuck Norris"
            width={250}
            height={250}
          />
          <div key={quote.id}>{quote.value}</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRefreshQuote}
          >
            Refresh Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteContent;
