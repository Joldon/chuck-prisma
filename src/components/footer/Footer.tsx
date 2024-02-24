"use client";

import React, { useState, useEffect } from "react";

const FooterSection = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  // fetching logic for the visitor count
  const fetchVisitorCount = async () => {
    try {
      const res = await fetch("api/visitor");
      if (!res.ok) {
        throw new Error(`API responded with status code: ${res.status}`);
      }
      const text = await res.text(); // First, get the response as text
      try {
        const data = JSON.parse(text); // Then parse it as JSON
        setVisitorCount(data.count);
      } catch (err) {
        console.error("Failed to parse the response as JSON", text);
        throw err;
      }
    } catch (error) {
      console.error("Failed to fetch visitor count", error);
      setVisitorCount(null);
    }
  };
  useEffect(() => {
    fetchVisitorCount();
  }, []);

  return (
    <footer className="flex justify-between mt-8 p-4 bg-gray-700 rounded-t-lg">
      <p className="text-white-600">
        Number of visitors: {visitorCount ?? "Loading..."}
      </p>
    </footer>
  );
};

export default FooterSection;
