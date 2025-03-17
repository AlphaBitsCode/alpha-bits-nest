
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';

// Define form schema with Zod
const preorderFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  quantity: z.coerce.number().min(1, { message: 'Quantity must be at least 1' }),
  address: z.string().min(5, { message: 'Please enter a valid address' }),
  country: z.string().min(2, { message: 'Please select a country' }),
  product: z.string().min(1, { message: 'Please select a product' }),
  message: z.string().optional(),
});

type PreorderFormValues = z.infer<typeof preorderFormSchema>;

type Product = {
  id: string;
  name: string;
  available: boolean;
};

interface PreorderFormProps {
  defaultProduct?: string;
  buttonText?: string;
  className?: string;
  showSuccessMessage?: boolean;
}

export function PreorderForm({
  defaultProduct = "Mushroom-in-a-Box",
  buttonText = "Pre-order Now",
  className = "",
  showSuccessMessage = true,
}: PreorderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // List of products
  const products: Product[] = [
    { id: "Mushroom-in-a-Box", name: "Mushroom in a Box", available: true },
    { id: "Farm-In-Box", name: "Farm In Box", available: true },
    { id: "Alpha-Cube", name: "Alpha Cube", available: true },
  ];

  // Initialize form
  const form = useForm<PreorderFormValues>({
    resolver: zodResolver(preorderFormSchema),
    defaultValues: {
      name: "",
      email: "",
      quantity: 1,
      address: "",
      country: "Vietnam",
      product: defaultProduct,
      message: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: PreorderFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Make sure all required fields are present
      const preorderData = {
        name: data.name,
        email: data.email,
        quantity: data.quantity,
        address: data.address,
        country: data.country,
        product: data.product,
        message: data.message || ""
      };
      
      // Insert data into Supabase
      const { error } = await supabase
        .from('preorders')
        .insert(preorderData);

      if (error) {
        throw error;
      }

      // Show success message
      if (showSuccessMessage) {
        toast.success("Pre-order submitted successfully!", {
          description: "We'll contact you soon with more information.",
        });
      }
      
      // Reset form
      form.reset({
        name: "",
        email: "",
        quantity: 1,
        address: "",
        country: "Vietnam",
        product: defaultProduct,
        message: "",
      });
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting preorder:", error);
      toast.error("Failed to submit pre-order", {
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Vietnam">Vietnam</SelectItem>
                    <SelectItem value="Singapore">Singapore</SelectItem>
                    <SelectItem value="Thailand">Thailand</SelectItem>
                    <SelectItem value="Malaysia">Malaysia</SelectItem>
                    <SelectItem value="Philippines">Philippines</SelectItem>
                    <SelectItem value="Indonesia">Indonesia</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem 
                      key={product.id} 
                      value={product.id}
                      disabled={!product.available}
                    >
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any special requirements or questions?" 
                  rows={3} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Processing...
            </>
          ) : isSuccess ? (
            <>
              <Check className="mr-2 h-4 w-4" /> 
              Submitted!
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </Form>
  );
}
