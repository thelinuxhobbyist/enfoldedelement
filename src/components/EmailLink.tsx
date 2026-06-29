import { Mail } from "lucide-react";

type EmailLinkProps = {
  email: string;
  className?: string;
};

const EmailLink = ({ email, className = "" }: EmailLinkProps) => {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors ${className}`}
    >
      <Mail className="h-4 w-4" aria-hidden="true" />
      <span className="underline">{email}</span>
    </a>
  );
};

export default EmailLink;
