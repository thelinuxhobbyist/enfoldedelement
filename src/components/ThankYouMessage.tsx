import { Package } from "@/types/package";

interface ThankYouMessageProps {
  package: Package;
}

export const ThankYouMessage = ({ package: pkg }: ThankYouMessageProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">
        Thank you for choosing our {pkg.name}!
      </h1>
      <p className="text-xl text-muted-foreground">
        To get started on your project, please provide a few details about your
        preferences and requirements. This helps us deliver results that perfectly
        match your vision.
      </p>
    </div>
  );
};
