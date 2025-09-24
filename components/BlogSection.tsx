"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900">
      {/* Header */}
      {/*
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/images/startuprunway-logo.png" alt="StartupRunway" className="h-10 w-10 mr-3" />
              <span className="text-white font-bold text-xl">StartupRunway</span>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
      */}
      {/* Blog Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
            StartupRunway Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expert insights, practical guides, and success stories to help you build and scale your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured Article */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500/50 bg-slate-800/80 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                <Calendar className="h-4 w-4" />
                <span>January 9, 2025</span>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
                <span>•</span>
                <User className="h-4 w-4" />
                <span>StartupRunway Team</span>
              </div>
              <CardTitle className="text-2xl text-amber-400 group-hover:text-amber-300 transition-colors">
                The Ultimate Guide to Choosing the Perfect Company Name: Strategies That Drive Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-slate-300 leading-relaxed text-base">
                Your company name is more than just a label—it's your first impression, brand foundation, and marketing
                asset rolled into one. In this comprehensive guide, we'll explore proven strategies used by successful
                startups to create memorable, marketable names that resonate with customers and stand the test of time.
              </CardDescription>
              <Link href="/blog/company-name-selection-strategies">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Other Articles */}
          {[
            {
              title: "5 Essential Steps to Register Your Startup in India",
              description:
                "Navigate the legal requirements and documentation needed to officially register your startup business in India.",
              date: "January 5, 2025",
              readTime: "4 min read",
              color: "blue",
            },
            {
              title: "Building Your MVP: From Idea to Market",
              description:
                "Learn how to develop a Minimum Viable Product that validates your business idea and attracts early customers.",
              date: "January 2, 2025",
              readTime: "6 min read",
              color: "emerald",
            },
            {
              title: "Funding Your Startup: A Complete Guide",
              description:
                "Explore different funding options from bootstrapping to venture capital and choose the right path for your startup.",
              date: "December 28, 2024",
              readTime: "8 min read",
              color: "purple",
            },
            {
              title: "Digital Marketing Strategies for Startups",
              description:
                "Cost-effective marketing tactics to build brand awareness and acquire customers on a limited budget.",
              date: "December 25, 2024",
              readTime: "5 min read",
              color: "pink",
            },
            {
              title: "Building a Strong Company Culture from Day One",
              description:
                "Establish values, practices, and culture that will scale with your growing team and business.",
              date: "December 22, 2024",
              readTime: "7 min read",
              color: "indigo",
            },
          ].map((article, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-${article.color}-500/50 bg-slate-800/80 backdrop-blur-sm`}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <CardTitle
                  className={`text-${article.color}-400 text-lg group-hover:text-${article.color}-300 transition-colors`}
                >
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-slate-300">{article.description}</CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className={`group-hover:bg-${article.color}-500 group-hover:text-white bg-transparent border-${article.color}-500/50 text-${article.color}-400`}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
