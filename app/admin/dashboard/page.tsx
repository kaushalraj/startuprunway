"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Users, Building2, MessageSquare, ClipboardList, Shield, LogOut, Eye, Edit } from "lucide-react"

interface Customer {
  id: string
  user_id: string
  business_stage: string
  industry: string
  funding_requirements: string
  business_description: string
  growth_plan_package: string
  status: string
  created_at: string
  profiles: {
    full_name: string
    email: string
    phone: string
    company_name: string
  }
}

interface Partner {
  id: string
  user_id: string
  partner_type: string
  company_name: string
  expertise_areas: string[]
  availability_status: string
  rating: number
  total_projects: number
  created_at: string
  profiles: {
    full_name: string
    email: string
    phone: string
  }
}

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  submission_type: string
  status: string
  created_at: string
}

interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  due_date: string
  created_at: string
  customers: {
    profiles: {
      full_name: string
      company_name: string
    }
  }
  partners: {
    profiles: {
      full_name: string
      company_name: string
    }
  } | null
}

export default function AdminDashboard() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalPartners: 0,
    pendingTasks: 0,
    newContacts: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchData()
  }, [])

  const checkAuth = async () => {
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.push("/admin/login")
      return
    }

    const { data: profile } = await supabase.from("profiles").select("user_type").eq("id", user.id).single()

    if (profile?.user_type !== "admin") {
      router.push("/admin/login")
    }
  }

  const fetchData = async () => {
    const supabase = createClient()
    setIsLoading(true)

    try {
      // Fetch customers
      const { data: customersData } = await supabase
        .from("customers")
        .select(`
          *,
          profiles:user_id (full_name, email, phone, company_name)
        `)
        .order("created_at", { ascending: false })

      // Fetch partners
      const { data: partnersData } = await supabase
        .from("partners")
        .select(`
          *,
          profiles:user_id (full_name, email, phone)
        `)
        .order("created_at", { ascending: false })

      // Fetch contact submissions
      const { data: contactsData } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })

      // Fetch tasks
      const { data: tasksData } = await supabase
        .from("tasks")
        .select(`
          *,
          customers:customer_id (
            profiles:user_id (full_name, company_name)
          ),
          partners:partner_id (
            profiles:user_id (full_name, company_name)
          )
        `)
        .order("created_at", { ascending: false })

      setCustomers(customersData || [])
      setPartners(partnersData || [])
      setContacts(contactsData || [])
      setTasks(tasksData || [])

      // Calculate stats
      setStats({
        totalCustomers: customersData?.length || 0,
        totalPartners: partnersData?.length || 0,
        pendingTasks: tasksData?.filter((task) => task.status === "pending").length || 0,
        newContacts: contactsData?.filter((contact) => contact.status === "new").length || 0,
      })
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const updateContactStatus = async (id: string, status: string) => {
    const supabase = createClient()
    await supabase.from("contact_submissions").update({ status }).eq("id", id)
    fetchData()
  }

  const updateTaskStatus = async (id: string, status: string) => {
    const supabase = createClient()
    await supabase.from("tasks").update({ status }).eq("id", id)
    fetchData()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading admin dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-red-400 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-slate-400">StartupRunway Management</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Customers</p>
                  <p className="text-2xl font-bold text-amber-400">{stats.totalCustomers}</p>
                </div>
                <Users className="w-8 h-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Partners</p>
                  <p className="text-2xl font-bold text-blue-400">{stats.totalPartners}</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Pending Tasks</p>
                  <p className="text-2xl font-bold text-yellow-400">{stats.pendingTasks}</p>
                </div>
                <ClipboardList className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">New Contacts</p>
                  <p className="text-2xl font-bold text-green-400">{stats.newContacts}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="customers" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="customers" className="data-[state=active]:bg-slate-700">
              Customers
            </TabsTrigger>
            <TabsTrigger value="partners" className="data-[state=active]:bg-slate-700">
              Partners
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-slate-700">
              Contact Submissions
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-slate-700">
              Tasks
            </TabsTrigger>
          </TabsList>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Customer Management</CardTitle>
                <CardDescription className="text-slate-400">View and manage all registered customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div key={customer.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">{customer.profiles?.full_name}</h3>
                            <Badge variant="outline" className="text-amber-400 border-amber-400">
                              {customer.growth_plan_package}
                            </Badge>
                            <Badge
                              variant={customer.status === "active" ? "default" : "secondary"}
                              className={customer.status === "active" ? "bg-green-600" : ""}
                            >
                              {customer.status}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div>
                              <p>
                                <strong>Company:</strong> {customer.profiles?.company_name}
                              </p>
                              <p>
                                <strong>Email:</strong> {customer.profiles?.email}
                              </p>
                              <p>
                                <strong>Phone:</strong> {customer.profiles?.phone}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Industry:</strong> {customer.industry}
                              </p>
                              <p>
                                <strong>Stage:</strong> {customer.business_stage}
                              </p>
                              <p>
                                <strong>Funding:</strong> {customer.funding_requirements}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm mt-2">{customer.business_description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-slate-600 bg-transparent">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600 bg-transparent">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Partner Management</CardTitle>
                <CardDescription className="text-slate-400">View and manage all registered partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partners.map((partner) => (
                    <div key={partner.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">{partner.profiles?.full_name}</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">
                              {partner.partner_type}
                            </Badge>
                            <Badge
                              variant={partner.availability_status === "available" ? "default" : "secondary"}
                              className={partner.availability_status === "available" ? "bg-green-600" : ""}
                            >
                              {partner.availability_status}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div>
                              <p>
                                <strong>Company:</strong> {partner.company_name}
                              </p>
                              <p>
                                <strong>Email:</strong> {partner.profiles?.email}
                              </p>
                              <p>
                                <strong>Phone:</strong> {partner.profiles?.phone}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Rating:</strong> {partner.rating}/5.0
                              </p>
                              <p>
                                <strong>Projects:</strong> {partner.total_projects}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-slate-400 text-sm">
                              <strong>Expertise:</strong> {partner.expertise_areas?.join(", ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-slate-600 bg-transparent">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600 bg-transparent">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Submissions Tab */}
          <TabsContent value="contacts">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Submissions</CardTitle>
                <CardDescription className="text-slate-400">Manage incoming contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">{contact.name}</h3>
                            <Badge
                              variant={contact.status === "new" ? "default" : "secondary"}
                              className={contact.status === "new" ? "bg-green-600" : ""}
                            >
                              {contact.status}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div>
                              <p>
                                <strong>Email:</strong> {contact.email}
                              </p>
                              <p>
                                <strong>Phone:</strong> {contact.phone}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Company:</strong> {contact.company}
                              </p>
                              <p>
                                <strong>Type:</strong> {contact.submission_type}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm mt-2">{contact.message}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-600 text-green-400 bg-transparent"
                            onClick={() => updateContactStatus(contact.id, "contacted")}
                          >
                            Mark Contacted
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 bg-transparent"
                            onClick={() => updateContactStatus(contact.id, "resolved")}
                          >
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Task Management</CardTitle>
                <CardDescription className="text-slate-400">View and manage all project tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">{task.title}</h3>
                            <Badge
                              variant={task.status === "pending" ? "default" : "secondary"}
                              className={
                                task.status === "pending"
                                  ? "bg-yellow-600"
                                  : task.status === "completed"
                                    ? "bg-green-600"
                                    : ""
                              }
                            >
                              {task.status}
                            </Badge>
                            <Badge variant="outline" className="text-slate-300">
                              {task.priority}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div>
                              <p>
                                <strong>Customer:</strong> {task.customers?.profiles?.full_name} (
                                {task.customers?.profiles?.company_name})
                              </p>
                              <p>
                                <strong>Partner:</strong> {task.partners?.profiles?.full_name || "Not assigned"}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Due Date:</strong> {task.due_date || "Not set"}
                              </p>
                              <p>
                                <strong>Created:</strong> {new Date(task.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm mt-2">{task.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-600 text-blue-400 bg-transparent"
                            onClick={() => updateTaskStatus(task.id, "in_progress")}
                          >
                            Start
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-600 text-green-400 bg-transparent"
                            onClick={() => updateTaskStatus(task.id, "completed")}
                          >
                            Complete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
