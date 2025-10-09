interface SuccessMessageProps {
  packageName: string;
}

export const SuccessMessage = ({ packageName }: SuccessMessageProps) => {
  return (
    <div className="text-center py-16">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        We've received your project details for the {packageName}. Our team will review your
        information and get started right away. You'll hear from us within 1 business day.
      </p>
    </div>
  );
};
