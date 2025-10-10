"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Lightbulb, Target, TrendingUp } from "lucide-react"
import Link from "next/link"


export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function CompanyNameStrategiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/images/startuprunway-logo.png" alt="StartupRunway" className="h-10 w-10 mr-3" />
              <span className="text-white font-bold text-xl">StartupRunway</span>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                size="sm"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-4">
              <Calendar className="h-4 w-4" />
              <span>January 9, 2025</span>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>StartupRunway Team</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The Ultimate Guide to Choosing the Perfect Company Name: Strategies That Drive Success
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Your company name is more than just a label—it's your first impression, brand foundation, and marketing
              asset rolled into one.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-2">Key Takeaway</h3>
                    <p className="text-slate-300">
                      A great company name should be memorable, meaningful, and marketable. It should reflect your brand
                      values while being easy to pronounce, spell, and remember.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                When Steve Jobs and Steve Wozniak were brainstorming names for their computer company, they considered
                everything from "Executek" to "Matrix Electronics." But it was the simple, approachable name "Apple"
                that stuck—a name that would become one of the most valuable brands in the world.
              </p>

              <p>
                Your company name is often the first interaction potential customers have with your brand. It appears on
                business cards, websites, marketing materials, and in conversations. Getting it right can accelerate
                your success, while getting it wrong can create unnecessary obstacles.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Why Your Company Name Matters More Than You Think
              </h2>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="bg-slate-800/60 border-slate-600">
                  <CardContent className="pt-6 text-center">
                    <Target className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">First Impressions</h4>
                    <p className="text-sm text-slate-400">
                      Your name creates immediate associations and expectations about your business
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/60 border-slate-600">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Marketing Asset</h4>
                    <p className="text-sm text-slate-400">
                      A memorable name reduces marketing costs and increases word-of-mouth referrals
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/60 border-slate-600">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Legal Protection</h4>
                    <p className="text-sm text-slate-400">
                      The right name can be trademarked and protected as intellectual property
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The 7 Essential Strategies for Naming Success</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">1. The Descriptive Approach</h3>
                  <p>
                    Names that clearly describe what your business does. Examples: General Motors, American Airlines,
                    The Home Depot.
                    <strong className="text-white"> Best for:</strong> Traditional industries where clarity trumps
                    creativity.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">2. The Invented Word Strategy</h3>
                  <p>
                    Create entirely new words that become synonymous with your brand. Examples: Google, Kodak, Xerox.
                    <strong className="text-white"> Best for:</strong> Tech companies and innovative products that want
                    to own their category.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">3. The Metaphorical Method</h3>
                  <p>
                    Use names that suggest qualities or benefits through metaphor. Examples: Amazon (vast selection),
                    Nike (victory), Apple (simplicity).
                    <strong className="text-white"> Best for:</strong> Brands wanting to convey specific emotions or
                    attributes.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">4. The Founder's Name Approach</h3>
                  <p>
                    Using the founder's name builds personal connection and trust. Examples: Ford, Disney, McDonald's.
                    <strong className="text-white"> Best for:</strong> Service businesses and companies where personal
                    reputation matters.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">5. The Acronym Strategy</h3>
                  <p>
                    Abbreviations that become brands in their own right. Examples: IBM, BMW, KFC.
                    <strong className="text-white"> Best for:</strong> B2B companies and established businesses with
                    long descriptive names.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">6. The Geographic Connection</h3>
                  <p>
                    Names that reference location or origin. Examples: Southwest Airlines, Bank of America, Patagonia.
                    <strong className="text-white"> Best for:</strong> Regional businesses or companies wanting to
                    emphasize heritage.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-teal-400 mb-2">7. The Combination Technique</h3>
                  <p>
                    Blend words or concepts to create something new. Examples: Microsoft (microcomputer + software),
                    Facebook (face + book).
                    <strong className="text-white"> Best for:</strong> Tech startups and companies combining different
                    concepts.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Ultimate Company Name Checklist</h2>

              <Card className="bg-slate-800/60 border-slate-600">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Easy to pronounce and spell",
                      "Memorable and distinctive",
                      "Available domain name",
                      "Trademark availability",
                      "Works in your target markets",
                      "Scalable as you grow",
                      "Positive associations",
                      "Not easily confused with competitors",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Naming Mistakes to Avoid</h2>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <ul className="space-y-3 text-slate-300">
                  <li>
                    • <strong className="text-red-400">Being too literal:</strong> "Bob's Plumbing Services" tells you
                    what they do but isn't memorable
                  </li>
                  <li>
                    • <strong className="text-red-400">Following trends blindly:</strong> Adding "ly" or "ify" to
                    everything gets old quickly
                  </li>
                  <li>
                    • <strong className="text-red-400">Ignoring international implications:</strong> Names that work in
                    English might have negative meanings elsewhere
                  </li>
                  <li>
                    • <strong className="text-red-400">Making it too complex:</strong> If people can't spell it, they
                    can't search for it
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ready to Name Your Company?</h2>

              <p>
                Choosing the perfect company name is both an art and a science. It requires creativity, strategic
                thinking, and careful research. At StartupRunway, we've helped hundreds of entrepreneurs navigate this
                crucial decision, combining market research with creative brainstorming to find names that truly work.
              </p>

              <Card className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-500/30 mt-8">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Need Help Naming Your Company?</h3>
                  <p className="text-slate-300 mb-4">
                    Our branding experts can guide you through the entire naming process, from brainstorming to
                    trademark research.
                  </p>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Get Professional Naming Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
