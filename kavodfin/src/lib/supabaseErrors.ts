interface SupabaseError {
  message: string;
  details?: string;
  hint?: string;
  code: string; // Postgres or Supabase error code
}

export function parseSupabaseError(error: SupabaseError | null): string | null {
  if (!error) return null;

  // Handle Unique constraint violations
  if (error.code === "23505") {
    const message = error.message.toLowerCase();

    if (message.includes("email")) return "Email already exists";
    if (message.includes("phone")) return "Phone number already exists";
    if (message.includes("username")) return "Username already taken";

    return "Duplicate field value — this record already exists";
  }

  // Handle Row Level Security issues
  if (error.code === "42501") {
    return "You are not allowed to perform this action";
  }

  // Missing required column
  if (error.code === "23502") {
    return "A required field is missing";
  }

  // Auth errors
  if (error.message.includes("Invalid login credentials")) {
    return "Incorrect email or password";
  }

  if (error.message.includes("User already registered")) {
    return "Email already exists";
  }

  // Default fallback
  return error.message || "Something went wrong. Please try again.";
}
