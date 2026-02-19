
interface RboAsciiLogoProps {
  literals: string[]
}

export const RboAsciiLogo = ({ literals }: RboAsciiLogoProps) => {
const randomLiteral = literals[Math.floor(Math.random() * literals.length)];
return (
  <pre className='mx-8' aria-label="RBO logo">
    {randomLiteral}
  </pre>
)}