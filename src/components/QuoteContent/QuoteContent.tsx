"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";

// the interface for the quote type
interface Quote {
  id: string;
  value: string;
}

// getQuotes function to fetch quotes
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

  return (
    <div className="flex flex-col items-center">
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
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">
              Chuck Quotes
            </h4>
            <p key={quote.id} className="text-xl mb-4">
              {quote.value}
            </p>

            <Button fetchQuotes={fetchQuotes} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteContent;
