"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, User, ArrowRight, TrendingUp, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Proven Strategies to Win More Freelance Proposals",
      excerpt: "Learn the insider secrets that top freelancers use to increase their proposal acceptance rate by 65%.",
      author: "Sarah Kim",
      date: "Dec 15, 2024",
      category: "Proposals",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "The Psychology of Pricing: How to Price Your Services Confidently",
      excerpt:
        "Discover the psychological principles behind effective pricing strategies that help you charge what you're worth.",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Pricing",
      readTime: "12 min read",
      featured: false,
    },
    {
      title: "Automating Your Freelance Workflow: A Complete Guide",
      excerpt: "Step-by-step guide to automating 80% of your administrative tasks and focusing on what you do best.",
      author: "Alex Johnson",
      date: "Dec 10, 2024",
      category: "Productivity",
      readTime: "15 min read",
      featured: false,
    },
    {
      title: "Building Long-term Client Relationships That Pay",
      excerpt: "Transform one-time projects into ongoing partnerships that provide steady income and referrals.",
      author: "Emma Davis",
      date: "Dec 8, 2024",
      category: "Client Relations",
      readTime: "10 min read",
      featured: false,
    },
    {
      title: "The Future of Freelancing: AI Tools Every Freelancer Needs",
      excerpt:
        "Explore the AI tools that are revolutionizing freelance work and how to integrate them into your workflow.",
      author: "Sarah Kim",
      date: "Dec 5, 2024",
      category: "Technology",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "From Freelancer to Agency: Scaling Your Business",
      excerpt:
        "A roadmap for growing from a solo freelancer to running a successful agency with multiple team members.",
      author: "Alex Johnson",
      date: "Dec 3, 2024",
      category: "Business Growth",
      readTime: "14 min read",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Proposals",
    "Pricing",
    "Productivity",
    "Client Relations",
    "Technology",
    "Business Growth",
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
            <TrendingUp className="h-4 w-4 mr-2" />
            Freelance Insights
          </Badge>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The ProposalPro
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert insights, practical tips, and proven strategies to help you build a thriving freelance business.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0"
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 mb-4">
                    <Zap className="h-4 w-4 mr-1" />
                    Featured Post
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-4">{posts[0].title}</h2>
                  <p className="text-blue-100 mb-6 text-lg">{posts[0].excerpt}</p>
                  <div className="flex items-center space-x-6 text-blue-200 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{posts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{posts[0].date}</span>
                    </div>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl aspect-video flex items-center justify-center">
                  <Target className="h-16 w-16 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-video flex items-center justify-center mb-4">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <Badge className="w-fit bg-gray-700 text-gray-300 border-gray-600">{post.category}</Badge>
                  <CardTitle className="text-xl font-bold text-white mt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest freelance tips, strategies, and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
