const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  const supabase = createClient();
  setIsLoading(true);
  setError(null);

  try {
    // Sign in with email & password
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (authError) throw authError;

    // Get current logged-in user
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;

    const user = userData.user;
    if (!user) throw new Error("No user logged in");

    // Fetch profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("user_type")
      .eq("id", user.id)
      .single();
    if (profileError) throw profileError;

    // Check if user is admin
    if (profile?.user_type !== "admin") {
      await supabase.auth.signOut();
      throw new Error("Access denied. Admin privileges required.");
    }

    // Redirect to admin dashboard
    router.push("/admin/dashboard");
  } catch (error: unknown) {
    setError(error instanceof Error ? error.message : "An error occurred");
  } finally {
    setIsLoading(false);
  }
};

