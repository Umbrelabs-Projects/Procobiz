"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Star,
  Users,
  Workflow,
  ShoppingCart,
  Server,
  FileSignature,
  Shield,
  BarChart3,
  ClipboardCheck,
  Briefcase,
  Globe,
  TrendingUp,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { submitContactForm } from "./actions";
import { useActionState } from "react";

export default function ProcobizWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Procurement Services",
      description:
        "End-to-end procurement of goods, works, consulting and non-consulting services with expertise and efficiency.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Analysis and Consultancy",
      description:
        "Expert business analysis and strategic consultancy services to help your organization identify opportunities and optimize performance.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics and Prediction",
      description:
        "Harness the power of data with advanced analytics and predictive modeling to make informed business decisions.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Business and Marketing Plans",
      description:
        "Comprehensive business and marketing plan development to guide your organization towards sustainable growth and success.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Corporate Governance",
      description:
        "Establish strong governance frameworks and best practices to ensure transparency, accountability, and effective leadership.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate business risks through comprehensive risk management strategies and frameworks.",
    },
    {
      icon: <FileSignature className="h-8 w-8" />,
      title: "Contract Administration and Management",
      description:
        "Professional contract administration and management services to ensure compliance and optimal outcomes.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Research (Business and Academics)",
      description:
        "Conduct thorough business and academic research to provide evidence-based insights and recommendations.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Electronic Procurement Administration",
      description:
        "Modern electronic procurement solutions and traditional manual procurement administration services.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Logistics and Transport",
      description:
        "Comprehensive logistics and transportation solutions to streamline your supply chain and operations.",
    },
  ];

  const coreValues = [
    {
      letter: "G",
      title: "Gratitude",
      description: "Being happy with what we have",
    },
    {
      letter: "R",
      title: "Relevance",
      description: "Adaptable to change (i.e. Learn, unlearn and relearn)",
    },
    {
      letter: "A",
      title: "Accountability",
      description: "Take ownership of our work",
    },
    {
      letter: "P",
      title: "Professionalism",
      description: "Our Hall mark",
    },
    {
      letter: "L",
      title: "Learn",
      description: "Continuous Learning",
    },
    {
      letter: "E",
      title: "Empathy",
      description: "Utmost concern and respect for others",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp Solutions",
      content:
        "Procobiz transformed our business operations completely. Their strategic consulting helped us increase revenue by 150% in just 18 months.",
      rating: 5,
      image: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Chen",
      position: "Director, Global Industries",
      content:
        "The team at Procobiz delivered exceptional results. Their digital transformation strategy revolutionized how we operate.",
      rating: 5,
      image: "/professional-man-director.png",
    },
    {
      name: "Emily Rodriguez",
      position: "VP Operations, InnovateCorp",
      content:
        "Outstanding service and expertise. Procobiz helped us streamline our processes and achieve remarkable growth.",
      rating: 5,
      image: "/professional-woman-vp.png",
    },
    {
      name: "David Thompson",
      position: "Founder, StartupVentures",
      content:
        "Working with Procobiz was a game-changer for our startup. Their guidance was invaluable in scaling our business.",
      rating: 5,
      image: "/professional-man-founder.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/corporate-logo-p.png"
                alt="Procobiz Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-2xl font-bold text-gray-900">Procobiz</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact Us
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                Contact Us
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Trusted Business Solutions Provider
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Empowering Businesses with
                <span className="text-blue-600"> Home-made Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Helping businesses innovate and operate with adaptable unique
                ideas to become more profitable through research, collaboration,
                training, monitoring and evaluation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-business-team-meeting.png"
                alt="Business Team"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Procobiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are PGCL; Procobiz Global Consult Limited. A global Procurement
              and Business Consult established to empower Businesses Procurement
              Functions and Individuals to apply customized or tailor-made
              solutions to their organizations for continuous growth and success
              across the world of work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Vision & Mission
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Vision Statement
                  </h4>
                  <p className="text-gray-600">
                    To become trusted top-notch Business Analysts and
                    Consultants in Ghana and world-wide to offer innovative,
                    customized and workable solutions through research,
                    collaboration, training, monitoring and evaluation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Mission Statement
                  </h4>
                  <p className="text-gray-600">
                    Empowering Businesses and Individuals to apply home-made
                    business solutions to problems and self-regulate for
                    continuous successes.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Broad Objective
                  </h4>
                  <p className="text-gray-600">
                    To help businesses innovate, and operate with adaptable
                    unique ideas to become more profitable. Our team of
                    experienced network of Professional Partners are dedicated
                    to supporting the growth of businesses and their procurement
                    functions to thrive to serve our societies well.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/business-consulting-team.png"
                alt="Our Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Core Values Section */}
          <div id="values" className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values - GRAPLE
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do and define who we are as an
              organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {value.letter}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Are you curious about how we can assist in elevating your BUSINESS
              to success and/or improve your procurement activities to ensure
              value addition? We offer an initial consultation where we will
              discuss your perculiar needs and potential strategies. This
              no-obligation session lets you explore our offerings before making
              any commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with Procobiz.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to strategise for home-made solutions to grow your
              company and or improve your procurment fuctional skills/activities
              to world class level. Ready to transform your business? Contact us
              today to discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                  {formState?.success && (
                    <p className="text-green-600 text-center">
                      {formState.message}
                    </p>
                  )}
                  {formState?.error && (
                    <p className="text-red-600 text-center">
                      {formState.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <span className="text-gray-600 block">
                        +233 200 657 112
                      </span>
                      <span className="text-gray-600 block">
                        +233 244 739 324
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600">info@procobiz.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600">Ghana</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Sunday: 24/7</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/franklin.oppongamankwah/"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {" "}
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
                    </svg>{" "}
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/franklin-oppong-amankwah-mcips-mgips-cmilt-mba-0200657112/"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/franklinoppongamankwah/"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.788 1.161 4.92 4.92 0 0 1 1.161 1.788c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.161 1.788 4.92 4.92 0 0 1-1.788 1.161c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.788-1.161 4.92 4.92 0 0 1-1.161-1.788c-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.161-1.788A4.92 4.92 0 0 1 5.585 1.76c.457-.163 1.257-.349 2.427-.403C9.278 1.3 9.658 1.288 12 1.288m0-1.288C8.741 0 8.332.012 7.052.07 5.78.128 4.913.308 4.267.533a6.92 6.92 0 0 0-2.482 1.623A6.92 6.92 0 0 0 .162 4.638c-.225.646-.405 1.513-.463 2.785C-.012 8.703 0 9.112 0 12s.012 3.297.07 4.577c.058 1.272.238 2.139.463 2.785a6.92 6.92 0 0 0 1.623 2.482 6.92 6.92 0 0 0 2.482 1.623c.646.225 1.513.405 2.785.463C8.703 23.988 9.112 24 12 24s3.297-.012 4.577-.07c1.272-.058 2.139-.238 2.785-.463a6.92 6.92 0 0 0 2.482-1.623 6.92 6.92 0 0 0 1.623-2.482c.225-.646.405-1.513.463-2.785.058-1.28.07-1.689.07-4.577s-.012-3.297-.07-4.577c-.058-1.272-.238-2.139-.463-2.785a6.92 6.92 0 0 0-1.623-2.482A6.92 6.92 0 0 0 19.362.533c-.646-.225-1.513-.405-2.785-.463C15.297.012 14.888 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/corporate-logo-p.png"
                  alt="Procobiz Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-2xl font-bold">Procobiz</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your business success, our concern.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Procurement Services</li>
                <li>Business Analysis & Consultancy</li>
                <li>Data Analytics & Prediction</li>
                <li>Business & Marketing Plans</li>
                <li>Corporate Governance</li>
                <li>Risk Management</li>
                <li>Research Services</li>
                <li>Contract Management</li>
                <li>Logistics & Transport</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Procobiz. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
