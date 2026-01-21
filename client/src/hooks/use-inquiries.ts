import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with schema first just to be safe (though form handles this)
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to send inquiry');
      }

      return api.inquiries.create.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
        variant: "default", // Success style handled by theme usually, or customize
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
