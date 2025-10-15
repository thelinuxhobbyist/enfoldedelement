import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { packages } from "@/data/packages";
import { Package } from "@/types/package";
import { getTemplateFields, getTemplateName, getTemplateDescription } from "@/data/onboardingTemplates";
import { ThankYouMessage } from "@/components/ThankYouMessage";
import { SuccessMessage } from "@/components/SuccessMessage";
import { OnboardingField } from "@/types/package";
import { useToast } from "@/components/ui/use-toast";

interface OnboardingFormData {
  [key: string]: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqayyzzq";

const Onboarding = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<OnboardingFormData>();

  // Get the package from the URL parameter
  const packageSlug = searchParams.get('package');
  const packageData = packages.find((pkg) => pkg.slug === packageSlug);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the package you're looking for. Please return to the packages page.
          </p>
          <Button asChild>
            <Link to="/packages">View Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  const onboardingFields = getTemplateFields(packageData.onboardingTemplate);
  
  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          packageName: packageData.name,
          packageId: packageData.id,
          submittedAt: new Date().toISOString(),
          _replyto: data.email || "", // Add this to ensure Formspree knows where to send a confirmation
          formData: data
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again or contact support if the problem persists.",
        variant: "destructive"
      });
    }
  };

  const renderField = (field: OnboardingField) => {
    switch (field.type) {
      case 'text':
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
            />
            {errors[field.id] && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
            />
            {errors[field.id] && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
        );

      case 'select':
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Select onValueChange={(value) => register(field.id).onChange({ target: { value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors[field.id] && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4">
          <SuccessMessage packageName={packageData.name} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ThankYouMessage package={packageData} />
        <Card>
          <CardHeader>
            <CardTitle>{getTemplateName(packageData.onboardingTemplate)}</CardTitle>
            <p className="text-muted-foreground mt-2">
              {getTemplateDescription(packageData.onboardingTemplate)}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {onboardingFields.map(renderField)}
              <Button type="submit" size="lg" className="w-full">
                Submit Project Details
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
