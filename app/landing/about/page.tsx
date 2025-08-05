"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Former freelancer who built ProposalPro after struggling with proposal management for 5 years.",
      avatar: "AJ",
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "AI expert with 10+ years experience building intelligent business automation tools.",
      avatar: "SK",
    },
    {
      name: "Mike Chen",
      role: "Head of Product",
      bio: "UX designer turned product manager, passionate about creating tools that freelancers love.",
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "Head of Customer Success",
      bio: "Dedicated to helping freelancers succeed and grow their businesses with ProposalPro.",
      avatar: "ED",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Freelancer-First",
      description: "Everything we build is designed with freelancers in mind, because we are freelancers too.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by your success. Every feature is built to help you win more clients.",
    },
    {
      icon: Heart,
      title: "Community-Focused",
      description: "We believe in building a supportive community where freelancers can learn and grow together.",
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
            Our Story
          </Badge>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built by Freelancers,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              For Freelancers
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ProposalPro was born from the frustration of spending countless hours on proposals instead of doing the work
            we love. We're on a mission to give freelancers their time back and help them build thriving businesses.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                To empower every freelancer with the tools they need to create professional proposals, win more clients,
                and build sustainable businesses. We believe that great work should speak for itself, not get lost in
                administrative overhead.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">15,000+ Freelancers Served</h3>
                    <p className="text-gray-300">From solo consultants to growing agencies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">$2.5B+ Revenue Generated</h3>
                    <p className="text-gray-300">Through proposals created on our platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">50K+ Hours Saved</h3>
                    <p className="text-gray-300">Every month through automation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">65%</div>
                  <div className="text-blue-200">Higher Win Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">15hrs</div>
                  <div className="text-emerald-200">Saved Weekly</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                  <div className="text-purple-200">Faster Payments</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">10x</div>
                  <div className="text-pink-200">Business Scale</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of builders, designers, and freelancers working to make your business better.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm text-center"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your freelance business? Join thousands of freelancers who trust ProposalPro.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-12 py-6 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
