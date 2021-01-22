import React from "react";

type Props = { className?: string; hidden?: boolean };

const Logo = ({ className = ``, hidden = true }: Props) => (
  <svg
  className={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 600 900"
  aria-hidden={hidden ? `true` : `false`}
  focusable={hidden ? `false` : `true`}
  aria-label={hidden ? `` : `LekoArts Logo`}
  fill="currentColor"
  >
        <path d="M150 750C150 832.843 150 600 150 900C67.1573 900 0 832.843 0 750C0 667.157 67.1573 600 150 600C150 965.5 150 667.157 150 750Z" fill="#8B5CF6"/>
        <rect x="150" y="600" width="150" height="300" fill="#8B5CF6"/>
        <circle cx="150" cy="150" r="150" fill="#6066FA"/>
        <rect width="150" height="150" fill="#6066FA"/>
        <rect x="150" y="150" width="150" height="150" fill="#6066FA"/>
        <circle cx="150" cy="450" r="150" fill="#F59E0B"/>
        <rect y="450" width="150" height="150" fill="#F59E0B"/>
        <rect x="150" y="300" width="150" height="150" fill="#F59E0B"/>
        <circle cx="450" cy="750" r="150" fill="#EF4444"/>
  </svg>
);

export default Logo;
