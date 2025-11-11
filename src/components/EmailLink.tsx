import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type EmailLinkProps = {
  email: string;
  className?: string;
};

const EmailLink: React.FC<EmailLinkProps> = ({ email, className = '' }) => {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors ${className}`}
    >
      <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" aria-hidden="true" />
      <span className="underline">{email}</span>
    </a>
  );
};

export default EmailLink;
