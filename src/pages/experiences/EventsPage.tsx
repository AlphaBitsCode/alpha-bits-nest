
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, AlertTriangle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  role: z.string().min(2, { message: 'Please enter your role' }),
  expectations: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const EventsPage = () => {
  useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remainingSeats, setRemainingSeats] = useState(20);

  useEffect(() => {
    document.title = "Events & Meet-ups | Alpha Bits";
    
    // In a real application, we would fetch the actual remaining seats from the database
    const fetchRemainingSeats = async () => {
      try {
        // Fetch the count of existing bookings for this event
        const { count, error } = await supabase
          .from('event_bookings')
          .select('*', { count: 'exact', head: true })
          .eq('event_id', 'ai-meetup-12-apr-2025');
        
        if (error) throw error;
        
        // Calculate remaining seats
        const bookedSeats = count || 0;
        setRemainingSeats(Math.max(0, 20 - bookedSeats));
      } catch (error) {
        console.error('Error fetching remaining seats:', error);
      }
    };
    
    fetchRemainingSeats();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
      expectations: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // First check if there are seats available
      if (remainingSeats <= 0) {
        toast.error('Sorry, this event is now full.');
        setIsSubmitting(false);
        return;
      }
      
      // Insert the booking into Supabase
      const { error } = await supabase.from('event_bookings').insert({
        event_id: 'ai-meetup-12-apr-2025', // A fixed ID for this specific event
        name: data.name,
        email: data.email,
        company: data.company || '',
        role: data.role,
        expectations: data.expectations || '',
      });
      
      if (error) throw error;
      
      // Send confirmation email via the edge function
      const eventDetails = {
        name: data.name,
        email: data.email,
        eventTitle: "Let's talk about AI",
        eventDate: "Friday, April 12, 2025",
        eventTime: "4:30 PM - 6:30 PM (GMT+7)",
        eventLocation: "Alpha Bits HQ, Ho Chi Minh City"
      };
      
      const emailResponse = await supabase.functions.invoke('send-event-confirmation', {
        body: eventDetails
      });
      
      if (emailResponse.error) {
        console.warn('Email confirmation could not be sent:', emailResponse.error);
      }
      
      toast.success('Your booking has been confirmed!', {
        description: 'We will send you an email with all the details.',
      });
      
      // Update remaining seats
      setRemainingSeats(prev => Math.max(0, prev - 1));
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Unable to complete your booking', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                EXPERIENCES
              </span>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                Events & Meet-ups
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join our community events and connect with industry experts. Learn about the latest trends in technology, AI, and sustainable solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Upcoming Event Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:shrink-0 bg-brand-teal/10 flex items-center justify-center p-8">
                    <Calendar className="h-24 w-24 text-brand-teal" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                        Upcoming Event
                      </span>
                      {remainingSeats <= 5 && (
                        <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          <AlertTriangle className="mr-1 h-3 w-3" /> Only {remainingSeats} seats left
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's talk about AI</h2>
                    <p className="text-gray-600 mb-6">
                      Join our Founder & CEO Kent Nguyen for an insightful discussion about the current state and future of AI. Learn how AI is transforming industries and how you can leverage it in your work.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Date</p>
                          <p className="text-gray-600">Friday, April 12, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Time</p>
                          <p className="text-gray-600">4:30 PM - 6:30 PM (GMT+7)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-600">Alpha Bits HQ, Ho Chi Minh City</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Target Audience</p>
                          <p className="text-gray-600">Software Developers, PMs, BAs, QC, Data Analysts</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold mb-2">About the Speaker</h3>
                      <p className="text-gray-600 mb-4">
                        Kent Nguyen is the Founder & CEO of Alpha Bits, a serial entrepreneur and technologist with expertise in AI, IoT, and sustainable tech solutions. He's the inventor of the Alternō Sand Battery and has held leadership positions at companies like Grab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Reserve Your Seat
                </h2>
                <p className="text-gray-600">
                  Limited to 20 participants. Secure your spot by filling out the form below.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
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
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company/Organization</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role *</FormLabel>
                            <FormControl>
                              <Input placeholder="Software Developer, PM, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="expectations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What do you hope to learn from this event?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your expectations or any specific questions you have" 
                              className="min-h-20"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto px-8 bg-brand-navy hover:bg-brand-navy/90"
                        disabled={isSubmitting || remainingSeats <= 0}
                      >
                        {isSubmitting ? 'Submitting...' : remainingSeats <= 0 ? 'Event Full' : 'Reserve My Seat'}
                      </Button>
                      
                      {remainingSeats <= 0 && (
                        <p className="text-sm text-red-500 mt-2">
                          This event is now full. Please check back for future events.
                        </p>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Events Section (can be expanded in the future) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Take a look at our previous events and meetups. Follow us on social media to stay updated on upcoming events.
              </p>
            </div>
            
            <div className="text-center py-8">
              <p className="text-gray-500 italic">
                Our events program is just getting started. Check back soon for updates!
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
