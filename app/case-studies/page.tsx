import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "DriftSync Solutions",
      industry: "Technology",
      description: "A SaaS startup that needed comprehensive business planning and legal setup.",
      challenge: "Complex regulatory requirements and unclear market positioning",
      solution: "Developed detailed business plan, handled all legal compliance, and created go-to-market strategy",
      results: {
	status: "startup",
	product: "Web, Mobile App & SEO development",
	sub_product: "EatsApp",
        revenue: "In Progress",
        growth: "90%",
        timeline: "18 months",
        employees: "8+",
      },
      tags: ["SaaS", "B2B", "Technology"],
    },
    {
      id: 3,
      title: "Kannaya Ayurvedic Labs",
      industry: "Healthcare",
      description: "An innovative HealthTech startup focused on developing next-generation Ayurvedic medicines by integrating traditional knowledge with modern technology.", 
      challenge: "Faced stringent regulatory requirements and the complexities of entering the competitive healthcare market.",
      solution: "Implemented a robust compliance framework, successfully navigated healthcare regulations, established strategic partnerships, and guided the team in developing a patented Ayurvedic formulation.",
      results: {
	revenue: "In Progress",
	growth: "50%",
        timeline: "12 months",
        employees: "20+",
      },
      tags: ["HealthTech", "B2B", "Innovation"],
    },
    {
      id: 4,
      title: "FinTech Revolution ( Name Confidential )",
      industry: "Financial Technology",
      description: "An investment firm specializing in Pre-IPO funding, enabling high-growth companies to secure capital ahead of public listing.",
      challenge: "Getting the Pre-IPO Company Leads",
      solution: "Provided Lead contacts, helped in marketing strategy",
      results: {
        revenue: "₹5 Cr",
        growth: "80%",
        timeline: "24 months",
        employees: "60+",
      },
      tags: ["FinTech"],
    },
    {
      id: 5,
      title: "EdTech Learning Platform (Name Confidential)",
      industry: "Education Technology",
      description: "An online learning platform focused on skill development (NTT Online Courses) for pre-school professionals and parents of early child",
      challenge: "High competition in EdTech space and difficulty in user retention",
      solution:
        "Provided strategic solution of partnering with bangalore pre-schools and NGOs",
      results: {
	revenue: "",
	growth: "0% - 20%",
        timeline: "14 months",
        employees: "20+",
      },
      tags: ["EdTech", "B2C", "Professional Development"],
    },
    {
      id: 6,
      title: "TerraLeaf Private Limited",
      industry: "Agriculture Technology",
      description: "A smart AgriTech startup offering IoT and AI/ML-powered automation solutions for vertical hydroponics, aeroponics, and greenhouse farming.", 
      challenge: "Greenhouse farming faces issues such as inconsistent plant growth, delayed disease detection, and inaccurate nutrient management, leading to reduced yields, higher operational costs, and inefficiencies in maintaining optimal growing conditions.", 
      solution: "TerraLeaf provides fully automated IoT and AI/ML-driven systems that monitor plant health, detect diseases early, optimize nutrient mixes, and control greenhouse operations through seamless robotic and sensor-based automation.",

      results: {
        revenue: "",
        timeline: "12 months",
        employees: "10+",
	status: "Intellectual Property",
      },
      tags: ["AgriTech", "IoT", "Hydroponics", "Aeroponics", "Aquaponics"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/startuprunway-logo.png" alt="StartupRunway" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">StartupRunway</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Success Stories</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Discover how we've helped entrepreneurs transform their ideas into thriving businesses. These case studies
              showcase real results from our comprehensive business solutions.
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-base">{study.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-amber-500/20 text-amber-400 border-amber-500/30 w-fit">
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Challenge
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Solution
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Results Achieved
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
		      {/*
                      <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                        <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-lg">{study.results.revenue}</div>
                        <div className="text-slate-400 text-xs">Annual Revenue</div>
                      </div>
		      */}
                      <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                        <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-lg">{study.results.growth}</div>
                        <div className="text-slate-400 text-xs">Growth Rate</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                        <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-lg">{study.results.timeline}</div>
                        <div className="text-slate-400 text-xs">Timeline</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                        <Users className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                        <div className="text-white font-bold text-lg">{study.results.employees}</div>
                        <div className="text-slate-400 text-xs">Team Size</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join these successful entrepreneurs and let us help you transform your business idea into a thriving
              company.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
