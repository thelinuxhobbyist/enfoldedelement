import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqayyzzq";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          submittedAt: new Date().toISOString(),
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at info@enfoldedmedia.com",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-700 text-xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
          className="mt-2"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="What is this about?"
          {...register("subject", { required: "Subject is required" })}
          className="mt-2"
        />
        {errors.subject && (
          <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          {...register("message", { required: "Message is required" })}
          className="mt-2"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
