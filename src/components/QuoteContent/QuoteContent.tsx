"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";

// Creating the interface for the quote type
interface Quote {
  id: string;
  value: string;
}

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
  // Using state to store the fetched quotes
  const [quote, setQuote] = useState<Quote | null>(null);

  // Using effect to fetch quotes when the component mounts

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

  //   const handleRefreshQuote = () => {
  //     fetchQuotes();
  //   };

  // Checking if quote is not null before trying to access its properties
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Chuck Norris Quotes</h2>
      {quote && (
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <div className="flex-1 text-right">
            <Image
              src="/chuck-norris.png"
              alt="Chuck Norris"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 text-left">
            <p key={quote.id} className="text-xl mb-4">
              {quote.value}
            </p>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRefreshQuote}
            >
              Refresh Quote
            </button> */}
            <Button fetchQuotes={fetchQuotes} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteContent;
