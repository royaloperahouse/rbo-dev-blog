'use client';

import { useState, useEffect } from 'react';
interface RboAsciiLogoProps {
  literals: string[]
}

export const RboAsciiLogo = ({ literals }: RboAsciiLogoProps) => {
  const [randomLiteral, setRandomLiteral] = useState(literals[0]);

  useEffect(() => {
    setRandomLiteral(literals[Math.floor(Math.random() * literals.length)]);
  }, [literals]);

  return (
    <pre className='mx-8 leading-none' aria-label="RBO logo">
      {randomLiteral}
    </pre>
  );
};