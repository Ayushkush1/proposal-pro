"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Book,
  Video,
  ArrowRight,
  HelpCircle,
  Zap,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I create my first proposal?",
      answer:
        "Navigate to the Proposals tab, click 'New Proposal', fill in your client and project details, add your services, and click 'Create Proposal'. You can then preview and download as PDF.",
    },
    {
      question: "Can I customize the proposal templates?",
      answer:
        "Yes! You can customize colors, fonts, add your logo, and modify the layout in the Company Settings section. Pro users get access to advanced customization options.",
    },
    {
      question: "How does the AI suggestion feature work?",
      answer:
        "Our AI analyzes your project description and suggests optimal pricing, timeline estimates, and proposal content based on industry standards and successful proposals in our database.",
    },
    {
      question: "Can I track when clients view my proposals?",
      answer:
        "Yes, Pro users get detailed analytics including when proposals are opened, how long they're viewed, and which sections get the most attention.",
    },
    {
      question: "How do I set up payment integration?",
      answer:
        "Go to Settings > Payments and connect your Stripe or PayPal account. You can then add payment links directly to your invoices for faster payments.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption, are SOC 2 compliant, and never share your data with third parties. Your proposals and client information are completely secure.",
    },
  ]

  const resources = [
    {
      icon: Book,
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      link: "/landing/docs",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/landing/tutorials",
    },
    {
      icon: FileText,
      title: "Template Library",
      description: "Pre-built proposal templates",
      link: "/landing/templates",
    },
    {
      icon: Zap,
      title: "Best Practices",
      description: "Tips from successful freelancers",
      link: "/landing/best-practices",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/landing" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ProposalPro</span>
            </Link>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help Center
          </Badge>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How Can We</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use ProposalPro effectively, and get the support you need.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, tutorials, or FAQs..."
              className="pl-12 py-4 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-blue-200 mb-4">Get instant help from our support team</p>
                <Button className="bg-blue-500 hover:bg-blue-600 border-0">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-emerald-200 mb-4">Send us a detailed message</p>
                <Link href="/landing/contact">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 border-0">Send Email</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-purple-200 mb-4">Call us for urgent issues</p>
                <Button className="bg-purple-500 hover:bg-purple-600 border-0">Call Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Helpful Resources</h2>
            <p className="text-xl text-gray-300">Everything you need to master ProposalPro</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Link href={resource.link}>
                    <Button
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/landing/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-12 py-6 text-lg"
              >
                Contact Support
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-6 text-lg border-2 border-gray-600 bg-transparent text-white hover:bg-gray-800"
            >
              <Clock className="mr-3 h-5 w-5" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
