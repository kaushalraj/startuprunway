import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Target, Award, Lightbulb } from "lucide-react"
import Link from "next/link"
import {
  Building2,
  TrendingUp,
  Shield,  
  MessageCircle,
  User,
  StickyNote,
  Megaphone,
  BookOpenCheck
} from "lucide-react"

export default function ServicesSection() {
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
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Our Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive startup support from ideation to scale
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
		  {/* Business Model Validation */}
		    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
			  <StickyNote className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
			  <h3 className="text-2xl font-bold mb-4 text-white">Business Model Validation</h3>
			  <p className="text-slate-300 leading-relaxed">
			  From concept to revenue, we turn your ideas into thriving businesses, handling everything from branding to launch.
			  </p>
			  <p className="text-slate-300 leading-relaxed">
			  No idea? No problem. We build businesses from scratch, guiding you from concept to a profitable launch.
			  </p>
		    </div>
		  {/* Office Setup */}
		    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
			  <Building2 className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
			  <h3 className="text-2xl font-bold mb-4 text-white">Office Setup</h3>
			  <p className="text-slate-300 leading-relaxed">
			  End-to-end office setup including interiors, equipment, branding, and workspace in your location.
			  </p>
		    </div>
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <BookOpenCheck className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Business Strategy</h3>
                <p className="text-slate-300 leading-relaxed">
                  Strategic planning, market analysis, and business model development to set your startup on the path to
                  success.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <Users className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Team Building</h3>
                <p className="text-slate-300 leading-relaxed">
                  Talent acquisition, team structure optimization, and culture development to build high-performing
                  teams.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <TrendingUp className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Growth Marketing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Data-driven marketing strategies, customer acquisition, and brand development to accelerate growth.
	          From social media to local events, offline marketing, we make your business visible everywhere.
                </p>
              </div>

		  {/* Franchise Model Building */}
		    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
			  <Megaphone className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
			  <h3 className="text-2xl font-bold mb-4 text-white">Franchise Model Designing</h3>
			  <p className="text-slate-300 leading-relaxed">
                           We design franchise models that make your services replicable, profitable, and future-ready.
		           From operations manuals to branding, technology systems, and franchise support, 
			   we help you create a complete ecosystem for growth.	
			  </p>
		    </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <Shield className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Legal & Compliance</h3>
                <p className="text-slate-300 leading-relaxed">
                  Legal structure setup, intellectual property protection, and regulatory compliance guidance.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <Lightbulb className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Product Development</h3>
                <p className="text-slate-300 leading-relaxed">
                  MVP development, product strategy, and technical architecture to bring your vision to life.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group">
                <Target className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">Funding Support</h3>
                <p className="text-slate-300 leading-relaxed">
                  Investor relations, pitch deck development, and funding strategy to secure the capital you need.
                </p>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}
