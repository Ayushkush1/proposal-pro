"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Play, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const features = [
    "AI-powered proposal generation",
    "Professional templates",
    "Real-time collaboration",
    "Advanced analytics",
    "Payment integration",
    "Client portal access",
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-6 py-3">
              <Play className="h-4 w-4 mr-2" />
              Product Demo
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                See ProposalPro
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch how ProposalPro transforms your freelance workflow in just 5 minutes. See real examples of
              proposals, invoices, and client management.
            </p>
          </div>

          {/* Video Player */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 z-10"
                >
                  <Play className="h-8 w-8 mr-3" />
                  Play Demo Video
                </Button>
                <div className="absolute bottom-4 left-4 text-white/80 text-sm">5:32 minutes</div>
              </div>
            </CardContent>
          </Card>

          {/* Features Covered */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What You'll See in the Demo</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Try It Yourself?</h3>
                <p className="text-blue-200 mb-6">
                  Start your free trial and experience the power of ProposalPro firsthand.
                </p>
                <Link href="/">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
