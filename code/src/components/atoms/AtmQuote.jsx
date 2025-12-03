import React from 'react';
import styled from 'styled-components';


const Quote = styled.blockquote`
  font-style: italic;
  text-align: center;
  margin: auto;
  padding: ${props => props.theme.spacing.large};
  border-left: 4px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.normal};
  
  p {
  margin-bottom: ${props => props.theme.spacing.small};
    font-size: ${props => props.theme.fontSize.medium};
  }
  
  cite {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.secondary};
  }
`;


import { useEffect, useState } from 'react';

const AtmQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const localQuotes = [
    { en: 'All too many of our software systems are, architecturally, little more than shantytowns.', author: 'Joseph Yoder' },
    { en: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { en: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  ];

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://random-quotes-freeapi.vercel.app/api/random');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setQuote({ en: data.quote, author: data.author });
    } catch (err) {
      console.warn('[AtmQuote] fetch failed, using local fallback:', err);
      const fallback = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchQuote(); }, []);

  if (loading) return <Quote><p>Chargement…</p></Quote>;

  return (
    <Quote>
      <p>"{quote.en}"</p>
      <cite>{quote.author}</cite>
    </Quote>
  );
};

export default AtmQuote;