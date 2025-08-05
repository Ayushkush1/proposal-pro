"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Receipt, BarChart3, Users, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered Proposals",
      description:
        "Create professional proposals that win 65% more deals with AI suggestions, proven templates, and smart pricing recommendations.",
      benefits: [
        "65% higher win rate",
        "Save 5+ hours per proposal",
        "Industry-specific templates",
        "Smart pricing AI",
      ],
    },
    {
      icon: Receipt,
      title: "Professional Invoicing",
      description: "Get paid 50% faster with automated invoicing, payment tracking, and integrated payment processing.",
      benefits: ["50% faster payments", "Automated reminders", "Multiple payment methods", "Tax calculations"],
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track your performance with detailed analytics, revenue forecasting, and client behavior insights.",
      benefits: ["Revenue forecasting", "Client insights", "Performance tracking", "Growth recommendations"],
    },
    {
      icon: Users,
      title: "Client Management",
      description:
        "Manage all your clients in one place with contact management, project tracking, and communication history.",
      benefits: ["Centralized contacts", "Project tracking", "Communication logs", "Client portal access"],
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track time spent on projects and automatically include it in your invoices for accurate billing.",
      benefits: ["Automatic time tracking", "Project timers", "Billable hours", "Time reports"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with bank-level security, SOC 2 compliance, and end-to-end encryption.",
      benefits: ["SOC 2 compliant", "End-to-end encryption", "GDPR ready", "99.9% uptime"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/landing" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">ProposalPro</span>
            </Link>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">Powerful Features</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <br />
            <span className="text-blue-600">Scale Your Business</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive tools designed to streamline your freelance workflow and accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and see how ProposalPro can transform your freelance business.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
