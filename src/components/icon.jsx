import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi'; // Import an external link icon

const ExternalLinkWithIcon = ({ url, label }) => {
  return (
    <a
      href={url}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security best practice to prevent potential exploits
      aria-label={`Visit ${label} (opens in new tab)`} // Accessibility label
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', textDecoration: 'none' }}
    >
      {/* You can place the icon before or after the text */}
      <HiOutlineExternalLink style={{ verticalAlign: 'middle' }} />
      {label}
    </a>
  );
};

export default ExternalLinkWithIcon;
