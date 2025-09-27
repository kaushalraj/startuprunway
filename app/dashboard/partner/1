import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, Users, Target, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { SignOutButton } from "@/components/sign-out-button"

export default async function PartnerDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    redirect("/auth/partner/login")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (!profile || profile.user_type !== "partner") {
    redirect("/auth/partner/login")
  }

  // Get partner data
  const { data: partner } = await supabase.from("partner").select("*").eq("user_id", user.id).single()

  // Get project status
  const { data: projectStatus } = await supabase
    .from("project_status")
    .select("*")
    .eq("partner_id", partner?.id)
    .order("created_at", { ascending: false })

  // Get tasks
  const { data: tasks } = await supabase
    .from("tasks")
    .select("*")
    .eq("partner_id", partner?.id)
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-amber-400 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-white">StartupRunway</h1>
              <p className="text-sm text-slate-300">Partner Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-white">{profile.full_name || profile.email}</p>
              <p className="text-xs text-slate-400">{partner?.growth_plan_package || "No package selected"}</p>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, {profile.full_name?.split(" ")[0] || "Entrepreneur"}!
          </h2>
          <p className="text-slate-300">
            Track your startup journey and stay updated on your progress with StartupRunway.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Active Projects</CardTitle>
                <Target className="w-4 h-4 text-amber-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{projectStatus?.length || 0}</div>
              <p className="text-xs text-slate-400 mt-1">Projects in progress</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Completed Tasks</CardTitle>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {tasks?.filter((task) => task.status === "completed").length || 0}
              </div>
              <p className="text-xs text-slate-400 mt-1">Tasks finished</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Pending Tasks</CardTitle>
                <Clock className="w-4 h-4 text-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {tasks?.filter((task) => task.status === "pending").length || 0}
              </div>
              <p className="text-xs text-slate-400 mt-1">Awaiting action</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-300">Growth Stage</CardTitle>
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">{customer?.business_stage || "Getting Started"}</div>
              <p className="text-xs text-slate-400 mt-1">Current phase</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Status */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Project Progress</CardTitle>
              <CardDescription className="text-slate-300">
                Track your startup milestones and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              {projectStatus && projectStatus.length > 0 ? (
                <div className="space-y-4">
                  {projectStatus.map((project) => (
                    <div key={project.id} className="border border-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{project.project_name}</h4>
                        <Badge variant="secondary" className="bg-amber-500/20 text-amber-400">
                          {project.progress_percentage}%
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress_percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-slate-300">{project.current_phase}</p>
                      {project.next_steps && <p className="text-xs text-slate-400 mt-1">Next: {project.next_steps}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">No active projects yet</p>
                  <p className="text-sm text-slate-500 mt-1">Your projects will appear here once you get started</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Tasks */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Tasks</CardTitle>
              <CardDescription className="text-slate-300">Your latest assignments and deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              {tasks && tasks.length > 0 ? (
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-3 border border-slate-700 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-white text-sm">{task.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{task.description}</p>
                        {task.due_date && (
                          <div className="flex items-center mt-2">
                            <Calendar className="w-3 h-3 text-slate-500 mr-1" />
                            <span className="text-xs text-slate-500">
                              Due: {new Date(task.due_date).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                      <Badge
                        variant={
                          task.status === "completed"
                            ? "default"
                            : task.status === "in_progress"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          task.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : task.status === "in_progress"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-500/20 text-slate-400"
                        }
                      >
                        {task.status.replace("_", " ")}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">No tasks assigned yet</p>
                  <p className="text-sm text-slate-500 mt-1">Tasks will appear here as your project progresses</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-slate-800 border-slate-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-slate-300">
              Common actions and resources for your startup journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-amber-500 text-amber-400 hover:bg-amber-500/10 h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                <Users className="w-6 h-6" />
                <span>Schedule Meeting</span>
              </div>
              <div className="border-blue-500 text-blue-400 hover:bg-blue-500/10 h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                <TrendingUp className="w-6 h-6" />
                <span>View Analytics</span>
              </div>
              <div className="border-green-500 text-green-400 hover:bg-green-500/10 h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
                <AlertCircle className="w-6 h-6" />
                <span>Get Support</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
