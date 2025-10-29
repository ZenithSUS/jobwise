export interface Job {
  id: string; // uuid (PK)
  client_id: string; // FK → users.id
  title: string; // Job title
  description: string; // Full job description
  category: string; // e.g. "Web Development", "AI Automation"
  budget_min: number; // Minimum budget
  budget_max: number; // Maximum budget
  experience_level: 'beginner' | 'intermediate' | 'expert'; // Required experience
  status: 'open' | 'closed' | 'in_progress'; // Job posting status
  created_at: string; // Timestamp (ISO date)
}
