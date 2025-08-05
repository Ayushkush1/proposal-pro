"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Receipt,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Quote,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: FileText,
      title: "Professional Proposals",
      description: "Create winning proposals that convert 3x better with AI-powered suggestions and proven templates.",
      stat: "65% higher win rate",
    },
    {
      icon: Receipt,
      title: "Smart Invoicing",
      description: "Get paid 50% faster with automated invoicing, payment tracking, and professional templates.",
      stat: "50% faster payments",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Track performance, identify trends, and make data-driven decisions to grow your business.",
      stat: "10x business insights",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UX Designer",
      company: "Freelance",
      content: "ProposalPro helped me win a $50K project I thought was impossible. The AI suggestions were spot-on.",
      rating: 5,
      revenue: "$50K project won",
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Consultant",
      company: "Growth Co",
      content: "I've tripled my revenue since using ProposalPro. The time savings alone are worth the investment.",
      rating: 5,
      revenue: "3x revenue increase",
    },
    {
      name: "Emma Thompson",
      role: "Web Developer",
      company: "Code Studio",
      content: "My clients love the professional proposals. I'm closing deals faster than ever before.",
      rating: 5,
      revenue: "40% more deals",
    },
  ]

  const stats = [
    { value: "15,000+", label: "Active Users" },
    { value: "$2.5B+", label: "Revenue Generated" },
    { value: "65%", label: "Higher Win Rate" },
    { value: "4.9/5", label: "User Rating" },
  ]

  const benefits = [
    "Win 65% more proposals with AI-powered suggestions",
    "Save 15+ hours per week on administrative tasks",
    "Get paid 50% faster with professional invoicing",
    "Scale to 10x more clients without hiring",
    "Professional brand consistency across all documents",
    "Real-time collaboration with clients and team",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/landing" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">ProposalPro</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/landing/features" className="text-gray-600 hover:text-gray-900 font-medium">
                Features
              </Link>
              <Link href="/landing/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </Link>
              <Link href="/landing/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/landing/help" className="text-gray-600 hover:text-gray-900 font-medium">
                Help
              </Link>
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Social Proof Badge */}
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Trusted by 15,000+ freelancers worldwide
            </Badge>

            {/* Main Headline - CRO optimized */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Win More Clients with
              <br />
              <span className="text-blue-600">Professional Proposals</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create winning proposals 10x faster, get paid 50% sooner, and scale your freelance business with
              AI-powered tools trusted by thousands of professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/landing/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                SOC 2 compliant
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your workflow with powerful tools designed to help you win more clients and get paid faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-sm font-semibold text-blue-600">{feature.stat}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Freelance Business Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of freelancers who have streamlined their workflow and increased their income with
                ProposalPro.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                  <div className="text-gray-600">Higher Win Rate</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15hrs</div>
                  <div className="text-gray-600">Saved Weekly</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-gray-600">Faster Payments</div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
                  <div className="text-gray-600">Business Scale</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Successful Freelancers</h2>
            <p className="text-xl text-gray-600">See how ProposalPro is helping freelancers grow their businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gray-300 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{testimonial.revenue}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free, scale as you grow. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">Free</div>
                <p className="text-gray-600 mt-2">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">5 proposals per month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Basic templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">PDF export</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Email support</span>
                </div>
                <Link href="/" className="block">
                  <Button className="w-full mt-6 bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-600 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2">For growing freelancers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Unlimited proposals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">AI-powered suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Client portal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Priority support</span>
                </div>
                <Link href="/" className="block">
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="border border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $99<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2">For agencies & teams</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Everything in Pro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Team collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">White-label branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">API access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Dedicated support</span>
                </div>
                <Link href="/landing/contact" className="block">
                  <Button className="w-full mt-6 bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5" />
              <span className="font-medium">30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Win More Clients and Get Paid Faster?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 15,000+ freelancers who are already growing their businesses with ProposalPro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm bg-white border-0 text-gray-900 placeholder-gray-500"
            />
            <Link href="/">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-blue-100 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Setup in 2 minutes
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/landing" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-semibold">ProposalPro</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                The professional platform for freelancers to create winning proposals, manage clients, and grow their
                business.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>SOC 2 Compliant • GDPR Ready • 99.9% Uptime</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/landing/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/landing/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/landing/templates" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/landing/integrations" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/landing/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/landing/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/landing/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/landing/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/landing/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/landing/docs" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/landing/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/landing/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 ProposalPro. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-gray-400">
              <span className="text-sm">Made for freelancers, by freelancers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
