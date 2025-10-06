import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Target, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
	    <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">About StartupRunway</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empowering entrepreneurs to transform innovative ideas into successful businesses through comprehensive
              support and strategic guidance.
              </p>
            </div>
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="mr-3 h-6 w-6 text-amber-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  To provide comprehensive business solutions that enable startups and entrepreneurs to navigate the
                  complex journey from idea to successful enterprise with confidence and clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6 text-amber-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  To be the leading catalyst for entrepreneurial success, fostering innovation and creating a thriving
                  ecosystem where every business idea has the opportunity to flourish.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Business Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">
                    Comprehensive business plan development, market analysis, and strategic roadmap creation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Legal & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">
                    Company registration, legal documentation, compliance management, and regulatory guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Growth Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">
                    Marketing strategies, funding assistance, operational optimization, and scaling solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose StartupRunway</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                    <p className="text-slate-300 text-sm">
                      Our experienced professionals bring decades of combined expertise in business development, legal
                      affairs, and strategic planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-slate-300 text-sm">
                        Successfully guided startups in launching and scaling businesses across diverse industries. From software and                        technology to healthcare, consumer services, and beyond. Our franchise model empowers brands to expand
                        rapidly while ensuring consistency, quality, and long-term profitability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-slate-300 text-sm">
                      Every business is unique. We tailor our solutions to meet your specific needs and industry
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">End-to-End Support</h3>
                    <p className="text-slate-300 text-sm">
                      From initial concept to market launch and beyond, we're with you every step of the entrepreneurial
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-300 mb-8">Let's discuss how we can help turn your business idea into reality.</p>
            <Link href="/auth/customer/register">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
