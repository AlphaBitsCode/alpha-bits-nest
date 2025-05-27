
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Code, Server, Cpu } from "lucide-react";
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CoursesIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar1 />
      <div className="mt-4 flex justify-end mr-8">
        <Link to="/khoa-hoc-ai-workflow-automation">
          <Button variant="outline" className="border-brand-teal text-brand-teal" aria-label="Switch to Vietnamese">
            🇻🇳
          </Button>
        </Link>
      </div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 animate-fade-in">
              Alpha Bits AI & IoT Academy
            </h1>
            <p className="text-xl md:text-2xl text-brand-blue mb-8 animate-slide-up">
              Three foundational courses to master AI, IoT, and workflow automation
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Our Curriculum</h2>
            
            {/* Course 1 - Node-RED & AIoT */}
            <div className="mb-16 grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <motion.div 
                  className="rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/images/courses/nodered-demo.gif" alt="Node-RED Demo" className="w-full h-64 object-cover object-top" />
                </motion.div>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-teal/20 p-2 rounded-full">
                    <Code className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Course 1: Node-RED & AIoT Workflow Automation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn visual programming with Node-RED to automate workflows and build AI agents without extensive coding. Create dashboards, connect APIs, and deploy intelligent chatbots.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Visual programming with drag-and-drop interfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Connect APIs, MQTT brokers, and databases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Build interactive dashboards and AI-powered chatbots</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-brand-teal" />
                  <span>Next cohort: June 10th, 2025 - Vietnamese language</span>
                </div>
                <Link to="/khoa-hoc-ai-workflow-automation">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                    View Course Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Course 2 - Hardware IoT */}
            <div className="mb-16 grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 md:order-2">
                <motion.div 
                  className="rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/images/courses/ablock-preview.jpg" alt="Alpha Block Preview" className="w-full h-64 object-cover" />
                </motion.div>
              </div>
              <div className="md:col-span-3 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-blue/20 p-2 rounded-full">
                    <Cpu className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Course 2: Hands-on IoT Hardware (Coming Soon)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Get hands-on experience with IoT hardware including ESP32, Raspberry Pi, and our exclusive Alpha Block IoT training kit. Learn to connect physical sensors and actuators to your automation workflows.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-blue mt-1" />
                    <span>Work with ESP32, Raspberry Pi, and sensors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-blue mt-1" />
                    <span>Set up MQTT communication between devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-blue mt-1" />
                    <span>Build real-world IoT applications using Alpha Block training kit</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 text-gray-500">
                  <Calendar className="h-5 w-5" />
                  <span>Coming in Fall 2025</span>
                </div>
              </div>
            </div>

            {/* Course 3 - Advanced Dashboard & Database */}
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <motion.div 
                  className="rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/images/aiot/energytwin_ss1.jpg" alt="Advanced Dashboard" className="w-full h-64 object-cover" />
                </motion.div>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-navy/20 p-2 rounded-full">
                    <Server className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Course 3: Advanced Database & Dashboard (Coming Soon)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Take your skills to the next level with advanced database design, data visualization, and AI-powered analytics for your IoT systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-navy mt-1" />
                    <span>Design scalable database systems for IoT data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-navy mt-1" />
                    <span>Create advanced visualizations and analytics dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-navy mt-1" />
                    <span>Implement AI assistants to manage automated workflows</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 text-gray-500">
                  <Calendar className="h-5 w-5" />
                  <span>Coming in Winter 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IoT Lab Visuals */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Inside the IoT Lab</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { src: "images/office/office_2.jpg", alt: "IoT Lab 1" },
                { src: "images/office/office_7.jpg", alt: "IoT Lab 2" },
                { src: "images/office/office_6.jpg", alt: "IoT Lab 3" }
              ].map((image, index) => (
                <motion.div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Who Should Join Our Courses</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Software developers looking to expand into IoT</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>IT professionals who want to automate workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Engineers and technical managers interested in AI integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Hobbyists with basic programming knowledge</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Prerequisites:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Basic programming concepts (any language)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Understanding of APIs and web technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal mt-1" />
                    <span>Interest in automation and AI applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Start Your Learning Journey</h2>
              <p className="text-xl text-gray-600 mb-8">Join our upcoming courses and become an expert in AI and IoT automation</p>
              <Link to="/khoa-hoc-ai-workflow-automation">
                <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  Explore Available Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

