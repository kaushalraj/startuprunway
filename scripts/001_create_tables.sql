-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  phone TEXT,
  user_type TEXT CHECK (user_type IN ('customer', 'partner', 'admin')) DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customers table for detailed customer information
CREATE TABLE IF NOT EXISTS public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  business_stage TEXT,
  industry TEXT,
  funding_requirements TEXT,
  business_description TEXT,
  growth_plan_package TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create partners table
CREATE TABLE IF NOT EXISTS public.partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  partner_type TEXT CHECK (partner_type IN ('legal', 'financial', 'technology', 'marketing', 'hr', 'manufacturing', 'academic')),
  company_name TEXT NOT NULL,
  expertise_areas TEXT[],
  availability_status TEXT DEFAULT 'available',
  rating DECIMAL(3,2) DEFAULT 0.00,
  total_projects INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  submission_type TEXT DEFAULT 'general',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tasks table for project management
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  partner_id UUID REFERENCES public.partners(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')) DEFAULT 'pending',
  priority TEXT CHECK (priority IN ('low', 'medium', 'high', 'urgent')) DEFAULT 'medium',
  due_date DATE,
  assigned_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create project_status table for tracking customer progress
CREATE TABLE IF NOT EXISTS public.project_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  project_name TEXT NOT NULL,
  current_phase TEXT,
  progress_percentage INTEGER DEFAULT 0,
  milestones_completed INTEGER DEFAULT 0,
  total_milestones INTEGER DEFAULT 0,
  next_steps TEXT,
  last_updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.user_registrations (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    raw_user_meta_data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_registrations
DROP POLICY IF EXISTS user_registrations_select_own ON public.user_registrations;
DROP POLICY IF EXISTS user_registrations_insert_own ON public.user_registrations;
DROP POLICY IF EXISTS user_registrations_update_own ON public.user_registrations;
DROP POLICY IF EXISTS user_registrations_delete_own ON public.user_registrations;

CREATE POLICY "user_registrations_select_own" ON public.user_registrations FOR SELECT USING (auth.uid() = id);
CREATE POLICY "user_registrations_insert_own" ON public.user_registrations FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "user_registrations_update_own" ON public.user_registrations FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "user_registrations_delete_own" ON public.user_registrations FOR DELETE USING (auth.uid() = id);

-- RLS Policies for profiles
DROP POLICY IF EXISTS profiles_select_own ON public.profiles;
DROP POLICY IF EXISTS profiles_insert_own ON public.profiles;
DROP POLICY IF EXISTS profiles_update_own ON public.profiles;
DROP POLICY IF EXISTS profiles_delete_own ON public.profiles;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- RLS Policies for customers
DROP POLICY IF EXISTS customers_select_own ON public.customers;
DROP POLICY IF EXISTS customers_insert_own ON public.customers;
DROP POLICY IF EXISTS customers_update_own ON public.customers;
DROP POLICY IF EXISTS customers_delete_own ON public.customers;

CREATE POLICY "customers_select_own" ON public.customers FOR SELECT USING (auth.uid() = id);
CREATE POLICY "customers_insert_own" ON public.customers FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "customers_update_own" ON public.customers FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "customers_delete_own" ON public.customers FOR DELETE USING (auth.uid() = id);

-- RLS Policies for partners
DROP POLICY IF EXISTS partners_select_own ON public.partners;
DROP POLICY IF EXISTS partners_insert_own ON public.partners;
DROP POLICY IF EXISTS partners_update_own ON public.partners;
DROP POLICY IF EXISTS partners_delete_own ON public.partners;

CREATE POLICY "partners_select_own" ON public.partners FOR SELECT USING (auth.uid() = id);
CREATE POLICY "partners_insert_own" ON public.partners FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "partners_update_own" ON public.partners FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "partners_delete_own" ON public.partners FOR DELETE USING (auth.uid() = id);

-- RLS Policies for tasks (customers can see their tasks, partners can see assigned tasks)
CREATE POLICY "tasks_select_customer" ON public.tasks FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.customers WHERE customers.id = tasks.customer_id AND customers.user_id = auth.uid())
);
CREATE POLICY "tasks_select_partner" ON public.tasks FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.partners WHERE partners.id = tasks.partner_id AND partners.user_id = auth.uid())
);

-- RLS Policies for project_status
CREATE POLICY "project_status_select_customer" ON public.project_status FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.customers WHERE customers.id = project_status.customer_id AND customers.user_id = auth.uid())
);

-- Admin policies (users with admin user_type can see all data)
CREATE POLICY "admin_all_access_profiles" ON public.profiles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
CREATE POLICY "admin_all_access_customers" ON public.customers FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
CREATE POLICY "admin_all_access_partners" ON public.partners FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
CREATE POLICY "admin_all_access_contact" ON public.contact_submissions FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
CREATE POLICY "admin_all_access_tasks" ON public.tasks FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
CREATE POLICY "admin_all_access_project_status" ON public.project_status FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin')
);
