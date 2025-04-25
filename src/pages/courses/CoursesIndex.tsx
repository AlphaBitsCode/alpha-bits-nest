
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { CourseRegistrationDialog } from "@/components/ui/course-registration-dialog";
import { useState } from "react";

export default function CoursesIndex() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy mb-6 animate-fade-in">
            Node-RED & AIoT Fundamentals Course
          </h1>
          <p className="text-xl md:text-2xl text-brand-blue mb-4 animate-slide-up">
            Learn automation & build your own AI Agent – starting today!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand-teal" />
              <span>Starts May 6, 2025</span>
            </div>
            <span className="hidden md:inline">•</span>
            <span>Every Tuesday & Thursday evening via Zoom</span>
          </div>
          <Button 
            size="lg" 
            className="animate-float bg-brand-teal hover:bg-brand-teal/90 text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            👉 Register Now
          </Button>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">What you'll learn</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span>Master Node-RED and visual flow programming</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span>Connect APIs, MQTT brokers, and databases</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span>Build interactive dashboards and integrate with AI tools like Telegram & WhatsApp</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Who this course is for</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span>Software developers, engineers, automation professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span>Those with basic programming knowledge (JavaScript/Python/etc.)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 text-center">Course Schedule</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7].map((session) => (
              <div key={session} className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-3">Session {session}</h3>
                <p className="text-gray-600">
                  {session === 1 && "Install Node-RED, setup MQTT"}
                  {session === 2 && "Create Dashboards (Button, Chart, Layouts)"}
                  {session === 3 && "Build HTTP API Endpoints, handle global variables"}
                  {session === 4 && "Read sensor data (USB, MQTT, GPIO, simulated)"}
                  {session === 5 && "Data cleaning, moving average, PID filtering"}
                  {session === 6 && "Store data (SQLite/InfluxDB), connect BigQuery, send alerts via Telegram"}
                  {session === 7 && "Final Demo: Students present their mini-projects"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8 text-center">What's Included</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Slides + Sample flows and code",
              "3-month Node-RED cloud account",
              "Support via Zalo / Facebook group",
              "Pathway to advanced courses (hardware or data AI)",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brand-teal mt-1" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Limited seats available!</h2>
            <p className="text-xl text-gray-600 mb-8">Only 10 students per cohort. Secure your spot today and start building your first AI-powered IoT system!</p>
            <Button 
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      <CourseRegistrationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
